# Learn Web Components
## ساخت checkbox سفارشی

```javascript
// TodoItem.js
const template = document.createElement('template')
template.innerHTML = `
    <style>
        label {
            color: red;
            diplay: block;
        }

        .description {
            font-size: .65rem;
            font-weight: lighter;
            color: #777;
        }
    </style>
    
    <label>
        <input type="checkbox" />
        <slot></slot>
        <span class="description">
            <slot name="description"></slot>
        </span>
    </label>
`

class TodoItem extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.append(template.content.cloneNode(true))
        this.checkbox = shadow.querySelector('input')
    }

    static get observedAttributes() {
        return ['checked']
    }

    //هنگامی که یکی از ویژگی های المنت سفارشی اضافه، حذف یا تغییر کند، فراخوانی می شود
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'checked') this.updateChecked(newValue)
    }

    updateChecked(value) {
        this.checkbox.checked = value != null && value !== 'false'
    }
}

 //به مرورگر اطلاع دهید که <todo-item> توسط کلاس جدید ما ارائه می شود
customElements.define('todo-item', TodoItem)

const item = document.querySelector('todo-item')
let checked = true
setInterval(() => {
    checked = !checked
    item.setAttribute('checked', checked)
}, 500)
```
<div dir=rtl>

---
> ا HTMLElement اینترفیسی است که نشان دهنده هر المنت HTML است. برخی المنت ها این اینترفیس را بصورت مستقیم پیاده سازی می کنند و برخی دیگر اینترفیسی را پیاده سازی می کنند که از HTMLElement ارث بری کرده اند.

— [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

---
> تگ `<template>` در HTML برای ذخیره قطعات کد HTML استفاده می شود که می توان آنها را شبیه سازی کرد و در یک سند HTML درج کرد. محتوای تگ از کاربرانی که در سمت کلاینت هستند پنهان می شود. تا زمانی که با استفاده از جاوا اسکریپت فعال نشود از دید کاربر پنهان می ماند. از جاوا اسکریپت برای دریافت محتوای `template` و اضافه کردن آن به صفحه وب استفاده می شود.

— [geeksforgeeks](https://www.geeksforgeeks.org/html-template-tag/)

---
> تگ `slot` بخشی از تکنولوژی Web Component است که یک مکان نگهدار درون یک component است که به سادگی می توانید آن را با نشانه گذاری (markup) شخصی پر کنید، که به شما امکان می دهد درختان DOM جداگانه بسازید و آنها را به نمایش بگذ ارید.

— [geeksforgeeks](https://www.geeksforgeeks.org/html-slot-tag/)

---
> ا `Shadow DOM` برای کپسوله سازی استفاده می کنند. این به یک component اجازه می‌دهد تا درخت “shadow” DOM خودش را داشته باشد، که از داکیومنت اصلی قابل دسترسی نیست، ممکن است قوانین خاص خود برای استایل دهی و... داشته باشد.

— [javascript.info](https://javascript.info/shadow-dom)

---
> ا `attributeChangedCallback`: هر بار که یکی از ویژگی های المنت سفارشی اضافه، حذف یا تغییر پیدا کند، فراخوانی می شود. در یک متد `static get observedAttributes` مشخص شده است که برای کدام ویژگی ها باید تغییر اعمال شود

— [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
</div>

```html
<!-- index.html -->
<head>
    ...
    <style>
        h3 {
            color: red;
        }
    </style>
</head>
<body>
    <h3>Other</h3>
    <todo-item checked
        >Todo 1
        <span slot="description">Small text</span>
    </todo-item>
    <todo-item>Todo 2</todo-item>
    <todo-item>Todo 3</todo-item>
</body>
```


    ![WebComponents01](https://user-images.githubusercontent.com/8413604/217352797-fb1fcfbd-24f6-44cf-920c-ad32b8e20048.png)

    

# ساخت expandable element سفارشی

```javascript
// expandableList.js
class ExpandableList extends HTMLUListElement {
    constructor() {
        super()
        this.style.position = 'relative'
        this.toggleBtn = document.createElement('button')
        this.toggleBtn.style.position = 'absolute'
        this.toggleBtn.style.border = 'none'
        this.toggleBtn.style.background = 'none'
        this.toggleBtn.style.padding = 0
        this.toggleBtn.style.top = 0
        this.toggleBtn.style.left = '5px'
        this.toggleBtn.style.cursor = 'pointer'
        this.toggleBtn.innerText = '>'
        this.toggleBtn.addEventListener('click', () => {
            this.dataset.expanded = !this.isExpanded
        })
        this.appendChild(this.toggleBtn)
    }

    get isExpanded() {
        return (
            this.dataset.expanded !== 'false' && this.dataset.expanded != null
        )
    }

    static get observedAttributes() {
        return ['data-expanded']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateStyles()
    }

    connectedCallback() {
        this.updateStyles()
    }

    updateStyles() {
        const transform = this.isExpanded ? 'rotate(90deg)' : ''
        this.toggleBtn.style.transform = transform
        ;[...this.children].forEach((child) => {
            if (child !== this.toggleBtn) {
                child.style.display = this.isExpanded ? '' : 'none'
            }
        })
    }
}

customElements.define('expandable-list', ExpandableList, { extends: 'ul' })

```
---
> ا `HTMLUListElement` ویژگی‌های خاصی را برای دستکاری المنت لیست نامرتب (`<ul>`) فراهم می‌کند (فراتر از آن‌هایی که در اینترفیس معمولی `HTMLElement` تعریف شده است)

— [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement)


```html
<!-- index.html -->
<head>
    ...
    <style>
        h3 {
            color: red;
        }
    </style>
</head>
<body>
    <h3>Other</h3>
        <ul is="expandable-list" data-expanded>
            <li>First</li>
            <li>Second</li>
            <ul is="expandable-list" data-expanded>
                <li>First</li>
                <li>Second</li>
            </ul>
        </ul>
</body>
```

![WebComponents02](https://user-images.githubusercontent.com/8413604/217352868-9f87f5d6-9527-4dce-a084-b0e456a7fef1.png)
