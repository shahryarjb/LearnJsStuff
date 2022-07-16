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
