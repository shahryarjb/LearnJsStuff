# مراحل یادگیری جاوااسکریپت

### جلوگیری از ریفرش شدن صفحه وب سایت 


```js
document.querySelector('#someIDOfAForm').addEventListener('submit', function(e) {
    e.preventDefault // it prevents refresh the post
    e.target.elements.productTitle.value // productTitle is the name of a field in a form
})
```

---

### اضافه کردن و گرفتن اطلاعات از لوکال استوریج مروگر


```js
const product = {title: "Test one", price: 10203}
const productJson = JSON.stringify(product) // Convert object to Json string
localStorage.setItem('product', productJson) // Save String with a key in local storage
```

> دریافت اطلاعات از لوکال استوریج و تبدیل اون به آبجکت

```js
const productJson = localStorage.getItem('product')
const product = JSON.parse(productJson) // Convert Json to string
console.log(`Product: ${product.title} - Price: ${product.price}`)
```

---

### دریافت پارامتر و دیگر موارد از آدرس

برای دریافت اطلاعات مورد نظر از روی لینک سایت می توانیم از `Location` استفاده کنیم که این امکان را می دهد پارامتر پرت هوست و دیگر موارد را دریافت و در کدمان استفاده کنیم.[ اطلاعات بیشتر](https://developer.mozilla.org/en-US/docs/Web/API/Location#location_anatomy)


---

### استفاده از window
به صورت مثال اگر ما می خواهیم به خود مروگر دسترسی داشته باشیم و تمام تب ها اگر چیزی تغییر کرد متوجه بشویم می توانیم از window استفاده کنیم نمونه کد زیر تغییر در لوکلال استوریج را نمایش می دهد

```js
window.addEventListener('storage', function(e) {
    if (e.key == 'product') {
        product = JSON.parse(e.newValue)
        ...
    }
})
```

---

> نکته: وقتی از `this` استفاده می کنیم دیگر نمی توانیم از ارور فانکشن ها یعنی با `=>` استفاده کنیم

---
