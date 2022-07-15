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

### ساخت new آبجکت و ارث بری از آن

فرض بر مثال که شما خواستید به صورت شی گرایی کار کنید و همینطور ارث بری رو انجام بدهید در مرحله اول بدون ارث بری شما می خواهید این امکان را به یوزر بدهید از آبجکت شما یک اینستنت جدید بسازند

```js
const User = function(email, id) {
    this.email = email
    this.id = id
}
const username = new User('test@test.com', 13)
```

خروجی کد بالا می شود به شرح زیر:
```js
User {email: 'test@test.com', id: 13}
```

همانطور که می بنید خروجی بالا از یک آبجکتی که `new` هست.

حالا فرض بر اینکه ما می خواهیم یک تابع بسازیم در آبجکت به عنوان تابع کانستراکتر که باید از `prototype` استفاده کنیم

فقط کافیست کد زیر را اضافه کنیم قبل از `new` کردن آبجکت

```js
User.prototype.userInfo = function() {
    return `ID: ${this.id} - Email: ${this.email}`
}
```

حالا دوباره صدا بزنید

```js
const username = new User('test@test.com', 13)
console.log(username.userInfo())
```

حال خروجی می شود
```js
ID: 13 - Email: test@test.com
```

---
