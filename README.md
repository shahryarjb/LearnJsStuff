# مراحل یادگیری جاوااسکریپت


---
---

### منابع بیشتر

- https://github.com/getify/You-Dont-Know-JS
- https://github.com/denysdovhan/wtfjs
- https://github.com/wesbos/JavaScript30
- https://github.com/ryanmcdermott/clean-code-javascript
- https://github.com/lydiahallie/javascript-questions
- https://github.com/metagrover/ES6-for-humans
- https://github.com/trekhleb/javascript-algorithms
- https://github.com/verekia/js-stack-from-scratch

---
---

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

### استفاده از کلاس و تغییر مدلم آبجکت به کلاس

خوب اگر بخواهیم کد های بالا را تبدیل کنیم به نوع کلاس می توانیم به این صورت انجام بدهیم

```js
class User {
    constructor(id, email) {
        this.email = email
        this.id = id
    }

    userInfo() {
        return `ID: ${this.id} - Email: ${this.email}`
    }
}

const username = new User('test@test.com', 13)
console.log(username.userInfo())
```

---

### استفاده از ساب کلس و super
وقتی می خواهیم ساب کلس بسازیم و همینطور اکستند شده باشد در تابع کانسترکتر نیاز هست از کلاس مادر با `super` بیاییم اطلاعات رو بیاریم مواردی که نیاز هست به شرح زیر عمل کنید. کد بالا + کلاس جدید
```js
class User {
    constructor(id, email) {
        this.email = email
        this.id = id
    }

    userInfo() {
        return `ID: ${this.id} - Email: ${this.email}`
    }
}

class Job extends User {
    constructor(id, email, jobTitle) {
        super(id, email)
        this.jobTitle = jobTitle
    }
}
const username = new Job('test@test.com', 13, 'Developer')
console.log(username)
```

خروجی می شود:
```js
Job { email: 13, id: 'test@test.com', jobTitle: 'Developer' }
```

---

### اضافه کردن گتر و ستر
برای اینکه بتوانیم به یک آبجکت یک گتر و ستر اضافه کنیم به صورت زیر عمل می کنیم

```js
const product = {
    title: "Book",
    price: 26,
    get productInfo() {
        return `Title: ${this.title} -- Price: ${this.price}`
    },
    set productInfo(value) {
        const seperetedValue = value.split(' ')
        this.title = seperetedValue[0]
        this.price = seperetedValue[1]
    }
}
```
همانطور که در کد بالا می بنید ما از یک فانکشن در دو حالت `set` و `get` استفاده کردیم البته با ورودی مختلف

حالا برای دوباره بایند کردند و همینطور چاپ کردن به صورت زیر عمل کنید

```js
console.log(product.productInfo)
product.productInfo = "BookSha 99"
console.log(product.productInfo)
```

---

### کال بک برای انجام توابع توالی

لازم به ذکر است کال بک همان تابع دومی هست که باید به صورت توالی انجام شود به صورت یک آرگون در فانکشن اول قرار می گیرد و نکته بسیار مهم این است که نباید پرانتز داشته باشد

به مثال زیر توجه کنید:
```js
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);    
```

---

### کنترل توالی تابع با `Promise`
این مورد هم مثل کال بک هست ولی باید از آن یک انستنت ساخت و همینطور دو آرگومان دارد که می تواند اسم هایی که شما می پسندید باشد `myResolve, myReject` 
```js
let myPromise = new Promise(function(resolve, reject) {
    if (!error) {
        resolve(); // when successful
    } else {
        reject();  // when error
    }
});

myPromise
    .then(value => { console.log(value) })
    .catch(err => { console.log(err) })
```
همانطور که در کد بالا دیدید شما می توانید در `resolve()` و همینطور `reject()` خروجی مورد نظر خودتان را قرار بدهید و بعد بیایید در زمانی که ارور ندارید `.then` و زمانی که خطا هست در `catch` استفاده کنید. لازم به ذکر هست در اکوسیستم پرامیس موارد دیگری نیز وجود دارد که در لینک زیر می تونید مطالعه کنید
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise


---

### تابع `async` برای توالی فانکشن
اگر به کد زیر توجه کنید تابعی که صدا زده می شود مدتی طول می کشد و چون برایش `await` قرار گرفته پس برنامه منتظر آن می ماند تا کامل انجام شد برود به برای انجام دیگر موارد

```js
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
}
  
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

asyncCall();
  
```

---

### ارسال درخواست به `API`

اولین متدی که می خواهیم جلو برویم که نباید روی آن فوکوس کرد `XMLHttpRequest` می باشد

```js
const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json')
        }
        xhr.onload = () => {
            resolve(xhr.response)
        }
        xhr.onerror = (e) => {
            reject(e)
        }
        xhr.send(JSON.stringify(data))
    })
    return promise
}


sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts/1')
.then((value) => {
    console.log(value)
})
.catch((e) => {
    console.log(e)
})

sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
   userId: 1,
   id: 2,
})
.then((value) => {
    console.log(value)
})
.catch((e) => {
    console.log(e)
})
```

در قطعه کد زیر بجای استفاده از مورد بالا از `fetch` استفاده می کنیم که بسیار تمیز تر و همینطور بهینه تر می باشد 

```js
const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {}
    })
    .then(res => {
        return res.json()
    })
}


sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts/1')
.then((value) => {
    console.log(value)
})
.catch((e) => {
    console.log(e)
})

sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
    id: 1,
    userId: 1,
    title: "Post title",
    body: "Post Body"
})
.then((value) => {
    console.log(value)
})
.catch((e) => {
    console.log(e)
})
```

ولی بهترین راه برای ارسال درخواست استفاده از کتابخانه `axios` می باشد که می توانید نمونه کد زیر را مشاهده کنید
```js
axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(res => {
    console.log(res)
})

// For post

axios.post('https://jsonplaceholder.typicode.com/posts', {
    userId: 2
})
.then(res => {
    console.log(res)
})
```
به همین راحتی تمامی امکانات رو خواهید داشت و گیت هابش حتما چک بشه داخلش آپشن های زیادی هست 
https://github.com/axios/axios


---

### استفاده از `rest`
فرض بکنیم ما یک تابع داریم که ورودیش دست کاربر هست و می خواد یک بار ۵ تا عدد یک بار ۱۲ تا عدد رو بزارش توش و همه رو با هم جمع کنه اینجاست که به صورت زیر عمل می کنیم

```js
const checkOut = (...prices) => {
    let sum = 0
    prices.forEach(item => sum += item)
    return sum
}

console.log(checkOut(1, 10, 1))
```
همانطور که می بنید ما ورودی تابع را به صورت `...prices` نوشتیم که می شود ورودی ما یعنی آرایه است

به قطعه کد زیر توجه کنید
```js
const cartDetails = (userName, totalPrice, ...products) => {

}
cartDetails("testUser", 100, 'book1', 'book2', 'book3')
```
دو پارامتر اول تابع خوب به صورت تیکی وارد تابع می شند و بقیه موارد یعنی از book1 تا book3 به صورت لیست دریافت می گردد.

حالا فرض کنید ما می خواهیم یک آرایه را بگیریم و به آن آرایه جدید اضافه کنیم مثل `++` یا `|` در الیکسیر اینجا اگر `...` را استفاده کنیم به آن `spread` می گویم نه `rest` مثال را ببنید

```js
let products = ['book1', 'book2', 'book3']
products = [...products, 'book4']
```


---

### استفاده از destructing
اگر بخواهیم به صورت دیگیری به آبجکت دسترسی داشته باشیم یا حتی مورد جدیدی را هم به آن اضافه کنیم به صورت زیر انجام می دهیم
```js
const product = {
    title: 'Book',
    price: 79
}
const { title, price, exist = true} = product
```

این مورد در خود آرایه هم می توانید مورد استفاده قرار بگیرد
```js
const product = ['book', 79]
const { title, price, exist = true} = product
```

---

### اکسپورت کردن توابع برای وب پک و ...

```js
export { productTitle, productPrice, productId as default}
```
همانطور که در خطوط بالا می بنید هر کدام از از موارد مطرح شده یک متغییر یا تابع هستند که می توانیم در دیگر فایل های js بعد از کانورت استفاده کنیم ولی `productId` چون با `as default` اومده در فایل های دیگه می تونیم اسمشو سفارشی خودمون قرار بدهیم

```js
import coustomIdName, {productTitle, productPrice } from './util'
```
به این صورت در دیگر فایل ها قابل فراخوانی می باشد نیاز نیست js به آخر مسیر اضافه شود خودش آن را شناسایی می کند


---
### استفاده از DOMContentLoaded
اولین چیزی که بعد از لود صفحه باید انجام بگیرد این رویداد هست به صورت مثال:

```js
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
```

---

### استفاده از static
وقتی در یک کلاس برای یک متد از `static` استفاده می کنیم دیگر نیاز نیست در جاهایی که می خواهیم از آن استفاده کنیم حتما یک اینستنت درست کنیم

```js
class Name {
    static save() {
        console.log("Test")
    }
}

document.addEventListener("something", () => {
    Name.save()
})
```

همانطور که مشاهده می کنید دیگر نیازی به `new` کردن کلاس قبل از آن نیست

---

> نکته: در جاوااسکریپت وقتی ما توابع را به با پرانتز می آوریم در جایی که می خواهیم فراخوانی بکنیم دقیقا به `js` گفتیم آن را سریع اجرا کن ولی بدون پرانتز آوردنش یعنی یک ریفرنس به اون که هر وقت نیاز شد انجام بگیرد

```js
cardBtn.addEventListener('click', this.showCart)
```

> نکته: برای حذف یک المنت وقتی از `removeChild` استفاده می کنیم باید به آن بگویم از کجا شروع به حذف بکنه و کجا متوقف بشه در این زمان است که می توانیم به این صورت عمل کنیم `cardContent.removeChild(removeItem.parentElement.parentElement)`


> لازم به ذکر است برای دیدن رویداد های مروگر مخصوصا ویندوز و متد هایش می توانید به صورت کامل در لینک زیر به آن دسترسی داشته باشید
https://developer.mozilla.org/en-US/docs/Web/API/Window


---

### معنی precedence چیست

فرض کنید ما یک متغیر داریم که هم نام یک تابع می باشد و از نوع var هست متغیر و همینطور متغیر بالاتر نوشته شده است. حال اگر بیاییم کنسول لاگ بزنیم و متغیر هم ارزش گذاری شده باشد قبل از تابع کنسول لاگ خود متغیر را چاپ می کند ولی اگر فقط یک var باشد و مساوی با چیزی نباشد کنسول لاگ می آید تابع را پرینت می کند

```js
var name = "shahryar"
function name() {
 console.log('Hi shahryar')
}
console.log(name)
```
در این قطعه کد باید `shahryar` چاپ شود ولی اگر `var name` باشد و مساوی با چیزی نباشد کنسول لاگ تابع را چاپ می کند

---

### چطور کلوژر بسازیم

در جاوااسکریپت وقتی خروجی یا return تابعی یک تابع دیگر باشد یعنی ما کلوژر ساختیم و وقتی آن را در یک متغیر قرار بدهیم خود متغیر می تواند به صورت تابع عمل کند

```js
function name() {
    const firstName = "shahryar"
    
    return function () {
        console.log(firstName)
     }
}

const newFn = name()
newFn()
```

---

### کاربرد `this` در یک کلاس

فرض بر این قرار بدهیم که می خواهیم با `this` یک متغیر را صدا بزنیم به صورت زیر 
```js
class SomeThing {
    constructor() {
        this.name = "shahryar"
    }

    delayMethod() {
        setTimeout(function(){
            console.log(`Title: ${this.name}`)
        }, 3000)
    }
}
```
اگر از این کلاس یک اینستنس جدید درست کنید و همینطور متد درست شده را صدا بزنیم یا کنسول لاگ کنید `this.name` مطمئنن شما خروجی آندیفاین را دریافت می کنید.
دلیل آن این هست که در تابع شما یک متد اسنکورایز صدا زده شده است و به خوبی الان در حال ارزش گزاری نیست
ولی چرا؟
چون `this` داره با آبجکت خودش اشاره می کنهو الان آبجکت اون `windows` هست ولی اگر `this` رو بالای ست تایم اون توی فانکشن دیلی متد قرار بدهید حالا به کلاس اشاره می کنه و آبجکت اون رو می یاره . چطور باید این مشکل رو حل کنیم به کد زیر توجه کنید

```js
class SomeThing {
    constructor() {
        this.name = "shahryar"
    }

    delayMethod() {
        setTimeout(function(){
            console.log(`Title: ${this.name}`)
        }.bind(this), 3000)
    }
}
```
همینطور که دیدی ما اومدیم بعد از آبجکت ست تایم اون متد `bind` رو صدا زدیم و این متد برای ما می آید مشخص می کند منظور ما کدام `this` می باشد.

---

### دریافت لیست کتابخانه هایی که به صورت گلوبال نصب شده اند

```
npm list -g --depth=0
```



### اضافه کردن یک پارامتر جدید به آبجکت

```js
const posts = res.data.slice(0, 4)
posts.map((item) => {
    return {
        ...item,
        author: 'Shahryar'
    }
})

```
همانطور که در کد بالا می بنید ما از سه نقطه استفاده کردیم که معنی آن یعنی که تمام آبجکت های قبلی را داشته باشید و این مورد را به آن ضاافه کند


---

### لگاسی کد

فرض کنید شما یک سری پروژه دارید کاربران ممکن هست از مروگر قدیمی استفاده کنند پس برای این کار می تونید از شرط استفاده کنید و فانکشن خودتون که اکسپورتش کردید استفاده کنید به صورت زیر:

```js
if (!window.Promise) {
  window.Promise = Promise;
}
```
پرامیس سمت راست تابعی هست که اکسپورت شده در صورتی که مروگر از پرامیس ساپورت نکنه این جایگزینش می شه

---
### نمونه کد جدا کردن کوکی مروگر و تبدیل به آبجکت
```js
cookies = Object.fromEntries(document.cookie.split('; ').map(c => c.split('=')));
```
