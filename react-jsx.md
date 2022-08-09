# یادگیری ری اکت با js

### شروع یک کامپوننت ساده با تابع

اولین مرحله باید یک فایل بسازید مثلا به شرح زیر:

```js
import React from 'react';

const Product = () => {
    return <div>Product Name: Book</div>
};

export default Product;
```
در یک فایلی به نام `Product` بعد بیایید اینو ایمپورت کنید در فایل `App` یا `index‍` بعد از اون خیلی ساده می تونید به صورت زیر اون رو فراخوانی کنید

```js
import React from 'react';
import Product from './components/Product/Product';

const App = () => {
    return (
        <div>
            <h2>Ract App</h2>
            <Product />
        </div>
    )
};

export default App;
```

---


### اضافه کردن یک کامپوننت با کلاس

در کد بالا مشاهده کردید که یک کامپوننت با یک تابع اضافه شده است ولی در مثال زیر با کلاس همین کارو انجام دادیدم
```js
import React from 'react';
import Product from './components/Product/Product';

class App extends React.Component {
    render() {
      return (
        <div>
            <h2>Ract App</h2>
            <Product />
        </div>
      )
    }
}

export default App;
```

---

### تعریف `props` و `children`

هر کامپوننت می تونه یک سری ورودی بگیره و این وردی هارو با نام `props` معمولا نام گذاری می کنند ولی هر اسمی می تونه داشته باشه

خود کامپوننت رو می تونید به صورت زیر ببنید
```js
import React from 'react';

const Product = (props) => {
    return (
       <div>
          <p>Product Name: {props.title}</p>
          <p>Product Price: {props.price}</p>
       </div>
    )
};

export default Product;

```

در اینجا ما دوتا پارامتر title و همینطور price داریم حالا وقتی می خوایم یک کامپوننت رو صدا بزنید به این صورت صدا می زنیم

```js
<Product title="Book1" price="100" />
```

حالا فرض کنیم بخوایم به این صورت تودر تو صدا زده بشود
```js
<Product title="Book2" price="200">
 Discount: 20%
</Product>
```
اگر صفحه رو ریفرش کنیم می بنیم چیزی نیامده است که در این مرحله نیاز داریم از پارامتر رزرو شده ای به نام `children` استفاده کنیم و کامپوننت رو به صورت زیر تغییر بدهیم

```js
import React from 'react';

const Product = (props) => {
    return (
       <div>
          <p>Product Name: {props.title}</p>
          <p>Product Price: {props.price}</p>
          <p>{props.children}</p>
       </div>
    )
};

export default Product;
```

---

### ساخت state داخلی و تغییر اون با setState

خوب اگر بخواهیم در ری اکت یک state درست کنیم می تونیم در کلاس یا تابع اصلی یک state معرفی کنیم به این صورت
```js
class App extends React.Component {
  state = {
    products: [
      {title: 'Book1', price: 100},
      {title: 'Book2', price: 200},
      {title: 'Book3', price: 300},
    ]
  }
```
خوب در این قسمت ما state خودمون اینشلایز کردیم و بایند شده حالا فرض بر مثال یک تابعی داریم که به دکمه ای وصل هست و می خواهیم این استیت اولیه رو تغییر بده که اونجا می تونیم به صورت زیر عمل کنیم

```js
 changePriceHandler = () => {
    this.setState({
      products: [
        {title: 'Book1', price: 50},
        {title: 'Book2', price: 60},
        {title: 'Book3', price: 70},
      ]
    })
  }
```


نکته: در موارد بالا ما در کلاس بودیم و آبجکت مورد نظر ساخته شده را تغییر می دادیم ولی این مورد در تابع ها دارای مشکل هست در نسخه ۱۸ خوردی ری اکت چیزی اضافه شده به عنوان Hook که باید از اون استفاده شود

---

### استفاده از hook برای ویرایش state

```js
import React, { useState } from 'react';
```
 در بالای فایل useState رو قرار دادیم حال باید state رو تعریف کنیم و همینطور ارزش گذاری اولیه کنیم
 
 ```js
 const App = (props) => {
  const [productState, setProductState] = useState({
      products: [
        {title: 'Book1', price: 100},
        {title: 'Book2', price: 200},
        {title: 'Book3', price: 300},
      ],
    })
```
همانطور که می بنید ما از useState تستفاده کردیم و اون رو قرار دادیم در یک آرایه به عنوان متغییر در آوردیم اولین خانه که productState هست همان state ماست و می تونیم در جاهای مختلف اون رو نمایش بدهیم ولی دومین گزینه setProductState متدی هست که با آن ویرایش این state را انجام می دهیم به صورت زیر:

```js
  const changePriceHandler = () => {
    setProductState({
      products: [
        {title: 'Book1', price: 50},
        {title: 'Book2', price: 60},
        {title: 'Book3', price: 70},
      ]
    })
  }
```

---

### استفاده از bind
در نظر داشته باشید ما می خواهیم روی یک آیکنی کلیک کنیم بعد از کلیک بیاییم ورودی که در تابع هست رو پردازش کنیم اگر بیاییم با پرانتز قرار بدهیم خوب همون اول اجرا می شود و به مرحله کلیک کاربر نمی رسد اگر بدون پرانتز اون رو فراخوانی کنیم خوب چطور بهش ورودی بدهیم اینجاست که از متد bind استفاده می کنیم

```js
changePriceHandler = (newTitle) => {
    this.setState({
      products: [
        {title: newTitle, price: 50},
        {title: 'Book2', price: 60},
        {title: 'Book3', price: 70},
      ]
    })
  }
  
this.changePriceHandler.bind(this, 'New Title')
```
همانطور که می بنید با this به آبجمت های فانکشن دسترسی پیدا می کند

راه دیگری که می توانیم استفاده کنیم از ارو فانکشن هاست `() => this.changePriceHandler('New Title')`

```js
 <Product 
   title={this.state.products[2].title} 
   price={this.state.products[2].price} 
   click={() => this.changePriceHandler('New Title')}
 />
```

در دو گزینه بالا ما در حقیقت داریم به ریفرنس تابع اشاره می کنیم و در در راه حل دوم چون یک خط می باشد return می کند

---
          

فرض کنیم می خواهیم تیتر یکی از کامپوننت ها عوض شود. در تابع App می آییم کد متد تغییر دهنده رو می نویسیم مثلا
```js
  changeTitleHandler = (event) => {
    this.setState({
      products: [
        {title: 'Book1', price: 50},
        {title: event.target.value, price: 60},
        {title: 'Book3', price: 70},
      ]
    })
  }
```
همانطور که می بنید event رو گرفتیم که ازش value رو بگیریم حالا این event باید بر اساس یک اکشنی باشه که در تابع خود کامپوننت می نویسیم

```js
const Product = (props) => {
    return (
       <div className='product'>
          <p>Product Name: {props.title}</p>
          <p onClick={props.click}>Product Price: {props.price}</p>
          <p>{props.children}</p>
          <input type="text" onChange={props.change} />
       </div>
    )
};
```
همانطور که می بنید onChange اکشن ماست و با هر تغییر می یاید تابعی که در App نوشتیم رو اجرا می کنه 

---

### اینلاین استایل دادن در ری اکت

در تابع render می یاییم مثل این مورد معرفی می کنیم 

```js
render() {
    const btn = {
      backgroundColor: '#7b1fa2',
      color: '#ffffff',
      font: 'inherit',
      border: 'none',
      outline: 'none',
      borderRadius: '3px',
      padding: '0.6rem',
      margin: '0.6rem auto',
    }
 
 ....
 <button style={btn} onClick={this.changePriceHandler}>Change Price</button>
 ```