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

نکته: وقتی از hook استفاده می کنیم می تونیم چندین استیت داشته باشیم که خوب کار رو راحت تر می کنه

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

نکته: در کلاس کامپوننت ها وقتی می خواهیم استیت جدید ست کنیم در حقیقت مرج می شه ولی در استفاده از هوک ها در فانکشن کامپوننت ها ریپلیس می شه پس ما مجبوریم در فانکشن کامپوننت ها هر سری تمامی موارد رو ارسال کنیم اگر یکی ارسال کنیم دیگر موارد ثبت نمی شند و به مشکل برمی می خوریم
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


---

### استفاده از شرط در jsx ری اکت

```js
{this.state.showProducts ? (
    <div>
      <Product 
        title={this.state.products[0].title} 
        price={this.state.products[0].price} 
      />
      <Product 
        title={this.state.products[1].title} 
        price={this.state.products[1].price}
        change={this.changeTitleHandler} 
      />
      <Product 
        title={this.state.products[2].title} 
        price={this.state.products[2].price} 
      />
    </div>
) : null }
```

همانطور که می بینید شرط ها به صورت تک خطی قرار گرفتند و در آخر : آماده و اگر نه به صورت null قرار گرفته است
          
نکته: بجای تغییر مستقیم یک state می تونیم یک کپی از اون بگیریم به صورت زیر
```js
state = {
    products: [
      {title: 'Book1', price: 100},
      {title: 'Book2', price: 200},
      {title: 'Book3', price: 300},
    ]
  }
  
const products = [...this.state.products]
```
همانطور که می بنید ... در اینجا از اطلاعات ما یک نسخه کپی گرفته است و جلوگیری می کنه از خطا های احتمالی که اگر داده ای ناشه یا ...


---


### در نظر گرفتن لایف سایکل ها و هوک ها

یکی از مثال هایی که می تواند مجاب کند بر اساس داکیومنت ری اکت جلو بروید 
```js
useEffect(() => {
    console.log('Main.js useEffect')
})
```
می باشد که هر وقت یک صفحه رندر می شود این نیز اجرا می شود که بهترین مکان برای کار با `API` می باشد


### رندر کردن بدون div
همانطور که می دونیم داخل render باید همیشه html رو بزاریم بین یک div تا ارور نده متد render ولی می تونیم چند کار دیگه رو انجام بدیم 
مثلا می تونیم بجای پرانتز همه رو ببریم تو آرایه و هر خط رو یک کاما بزاریم یا حتی می تونیم یک فایل دیگه درست کنیم مثلا به نام Container بعد اون رو ایمپورت کنیم 

خود فایل

```js
const Container = props => props.children

export default Container;
```

حالا در فایل مورد نظر می تونیم ایمپورت کنیمش و به این صورت بیاریم. لازم به ذکر است ما از آبجکت رزور children استفاده کردیم 

```js
import Container from '../../hoc/Container';

class Product extends Component {
    render() {
      return (
         <Container>
               <p onClick={this.props.click}>Product Name: {this.props.title}</p>
               <p>Product Price: {this.props.price}</p>
               <p>{this.props.children}</p>
               <input type="text" onChange={this.props.change} value={this.props.title} />
          </Container>
      )
    }
};
```

لازم به ذکر است خود ری اکت نیز برای این مورد گزینه ای خوبی را برای برنامه نویس آماده کرده است

```js
render() {
  return (
     <React.Fragment>
        <div className='product'>
           <p onClick={this.props.click}>Product Name: {this.props.title}</p>
           <p>Product Price: {this.props.price}</p>
           <p>{this.props.children}</p>
           <input type="text" onChange={this.props.change} value={this.props.title} />
        </div>
     </React.Fragment>
  )
}
```

---

### ساخت یک رپر و higher order component
فرض بکنیم می خواهیم یک کامپوننت بسازیم که یک کامپوننت دیگه رو کامل بیاره داخل خودش و همچنین props هاشو بگیره و بهش یک استایل هم بده

خود کامپوننت به شرح زیر می باشد:
```js
import React from "react";

const Wrapper = (WrapperComponent, className) => {
   return (props) => (
    <div className={className}>
        <WrapperComponent {...props} />
    </div>
   )
}

export default Wrapper;
```
همانطور که می بنید WrapperComponent به عنوان ورودی هست که خوب کل کامپوننت رو باید توش قرار بدیم و className هم اسم کلاسی هست که می خواهیم به div اصلی یا عنصر اصلی بدهیم ولی نکته ای که اینجا بسیار کاربردی می باشد گرفتن و ارسال props هست ولی همانطور که می دانیم props ها آرایه هستند و برای ارسال تک تک مثلا name یا ... باید اون رو به صورت لیستی بنویسیم که می شود `{...props}`

حالا در فایلی که کامپوننت اصلی هست باید به این صورت انجام بدهیم

```js
import Wrapper from './hoc/Wrapper';
import Container from './hoc/Container';

class App extends React.Component {
    return (
      <Container>
        <button onClick={() => {this.setState({ showMain: false })}}>Remove Main</button>
          {this.state.showMain ?
          <Main products={this.state.products} click={this.toggleProductHandler} /> : null }
          {products}
      </Container>
    )
}

export default Wrapper(App, 'center');
```

همانطور که می بنید کل App را در موقع export بردیم تو کامپوننت Wrapper  


### استفاده از ref برای فوکوس
برای ارتباط با اجرای html و jsx می تونیم از ref استفاده کنیم به عنوان مثال اگر بخواهیم روی یکی از input ها بعد از ریفرش فوکوس بشه می تونیم از دو روش استفاده کنیم.

```js
<input 
   ref={(element) => this.inputElement = element}
   type="text" 
   onChange={this.props.change} 
   value={this.props.title} 
/>
```
در این قسمت در حقیقت ما یک inputElement ساختیم از نوع آبجکت element که ری اکت به ما می دهد و حالا چون نیاز داریم در زمانی که کامپوننت ها لود شدند فوکوس انجام بشه می تونیم در متد زیر بیاریم

```js
componentDidMount() {
  this.inputElement.focus()
}
```

روش بعدی می تونیم از کنستراکتور استفاده کنیم که ساده تر می باشد

```js
constructor(props) {
  super(props)
  this.inputRef = React.createRef()
}
```

همانطور که می بنید ما از متد createRef ری اکت یکی ساختیم و حالا می تونیم اون رو جوری که نیاز داریم تنظیم کنیم 

```js
componentDidMount() {
  this.inputRef.current.focus()
}
```

همانطور که در بالا دیدید ما گفتیم المنت current فوکوس بشه و حالا فقط می مونه که بیاییم اون رو در اچتی ام المون صدا بزنیم

```js
<input 
   ref={this.inputRef}
   type="text" 
   onChange={this.props.change} 
   value={this.props.title} 
/>


> حال اگر بخواهیم در فانکشنال کامپوننت ها فراخوانی کنیم باید اول `useRef` را به ایمپورت صدا بزنیم در این مثال می خواهیم یک دکمه بعد از لود شده کلیک شده باشد

```js
import React, { useEffect, useRef } from "react";

const Main = (props) => {
    const btnRef = useRef(null);
    
    useEffect(() => {
        console.log('Main.js useEffect')
        btnRef.current.click()
        return () => {
            console.log('CleanUp')
        }
    }, [])
    
```
همانطور که در بالا مشاهده کردید ما در خود تابع یک متغییر از نوع `useRef(null)` ساختیم و حالا در هوک `useEffect` که بعد از اینکه کامپوننت لود شده صدا زده می شه اونجا اومدیم و گفتیم که ` btnRef.current.click()` کلیک شده باشد حالا زمان این هست که روی خود دکمه ای که می خواهیم اعمال کنیم

```js
<button ref={btnRef} style={btn} onClick={props.click}>
```


---

### استفاده از context
از اینکه تک تک کامپوننت ها بخواهند اطلاعات را به کامپوننت دیگر ارسال کنند در مرور زمان این کار بسیار سخت می شود و به همین دلیل react موردی را توسعه داده است در بستر کامپوننت ها به نام کانتکست

```js
import React from "react";

const authContext = React.createContext({
    auth: false,
    login: () => {}
})

export default authContext;
```
این یک کامپوننت کانکست می باشد که در اون اومده دوتا پارامتر تعریف کرده که یکی از نوع بولین می باشد و دومی نیز یک تابعی را اجرا می کند. که در بالا ارزش گذاری اولیه شده است به صورت دیفالت چی باشند.

برای شروع کانکست باید بدونیم ما دو مفهوم داریم:
۱. در جایی که می خواخیم کانکست را ارزش گذاری مجدد کنیم از Provider استفاده می کنیم
۲. در جایی که می خواهیم اطلاعات وارد شده در کانکست را بخوانیم از Consumer استفاده می کنیم

```js
return (
  <Container>
    <button onClick={() => {this.setState({ showMain: false })}}>Remove Main</button>
    <AuthContext.Provider value={{ auth: this.state.auth, login: this.loginHandler }}>
      {this.state.showMain ? (
        <Main 
          products={this.state.products} 
          click={this.toggleProductHandler} 
        />
      ) : null }
      {products}
    </AuthContext.Provider>
  </Container>
)
```
در مثال بالا می بنیم که یک کامپوننت درست شده است به نام `AuthContext.Provider` که داخلش یک value قرار گرفته است و داخل یک آبجکت اومده ایم اطلاعات رو ریرایت کردیم با نسخه اولیه اون و در اون یک کامپوننت Main هست حالا در کامپوننت Main می خواهیم تمام اطلاعات را بخوانیم 

```js
return(
    <div>
        <h2>Book Store</h2>
        <button ref={btnRef} style={btn} onClick={props.click}>
        Show/Hide Products
        </button>
        <AuthContext.Consumer>
            {(context) => <button onClick={context.login}>Login</button>}
        </AuthContext.Consumer>
    </div>
)
```
  

---

### استفاده از contextType

راه کوتاه تری برای Consumer وجود دارد که رزرو شده خود ری اکت می باشد به این صورت فایلی که می خواهیم اطلاعات را از آن استخراج کنیم در پایین constructor می تونیم به این صورت معرفی کنیم

```js
static contextType = AuthContext
```

بعد از اون می تونیم یک تابعی که قبلا بوده

```js
<AuthContext.Consumer>
    {(context) => context.auth ? <p>Logged in!</p> : <p>Please log in</p>}
</AuthContext.Consumer>
```

را تبدیل کنیم به 

```js
{this.context.auth ? <p>Logged in!</p> : <p>Please log in</p>}
```


### استفاده از useContext در فانکشنال کامپوننت ها

در بالا مواردی که استفاده کردیم در کلاس ها بود و وقتی بخواهیم در تابع از آن استفاده کنیم باید هوک آن را صدا بزنیم
```js
import React, { useEffect, useRef, useContext } from "react";
```
بعد می آییم آن را در یک متغییر قرار می دهیم تا داده ای رو ریترن کنه

```js
const Main = (props) => {
    const btnRef = useRef(null);
    const authContext = useContext(AuthContext)
```

همانطور که می بنید ما اومدیم AuthContext که کانتکست ما می باشد را در هوک useContext صدا زدیم بجای کد زیر

```js
<AuthContext.Consumer>
    {(context) => <button onClick={context.login}>Login</button>}
</AuthContext.Consumer>
```

می نویسیم
```js
<button onClick={authContext.login}>Login</button>
```

> توجه داشته باشید همیشه در تابع ها بجای کلاس اگر می خواهیم این موارد استفاده کنیم باید از هوک ها کمک بگیریم

---


**توجه داشته باشید وقتی از لایف سایکلی در ری اکت استفاده می کنند مثل آپدیت حتما چک کنید که بر اساس شرطی ارسال داده بکند وگرنه بخاطر ریرندر بی نهایت ریکواست ارسال می کند 

---

### استفاده از useCallback
توجه کنید وقتی شما دارید پشت هم از کامپوننت استفاده می کنید و ری کواستی رو با useEffect ارسال می کنید حتما در مروگر بیایید در تب نتورک ببنید آیا داره رگباری درخواست ارسال می شه به سرور یا نه اگر بله باید چک کنید ببنید چه چیزی داره با هر تغییری یک رندر می شه و اون رو ببرید توی useCallback.
چون ری اکت با هر تغییر ری رندر می کنه این درخواست ها نان استاپ ارسال می شند

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, []);
```

نکته: بر اساس تجربه هوک های ری اکت دسترسی بیشتری در اختیار کاربران قرار می دهند تا کلاس کامپوننت ها


---

### ریداکس پایه بدون ری اکت شامل دپریکیت کد

```js
const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === 'ADD') {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('subscribe', store.getState());
});

store.dispatch({ type: 'INC' });
store.dispatch({ type: 'ADD', value: 2 });

console.log(store.getState())
```


---
### ریداکس پیشرفته

فایل `store` 
```js
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {
  productListReducer,
  productDetailReducer,
} from './reducer/productReducer'

import { cartReducer } from './reducer/cartReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
})

const initialState = {
  cart: { cartItems: {} },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store
```

همانطور که می بینید در این فایل که مثل هلپر می ماند ما از `redux-thunk` که یک میدل ور می باشد نیز استفاده کردیم. و همینطور چندین ردیوسر و استیت داریم که می توان با `combineReducers` اون رو مدیریت کرد

دو فایل ردیوسر:
توجه کنید ردیوسر این تابع ساده می باشد که فقط مشخص می کند که چطور ریترن شود و فعالیت هایی که از سرور یا روی دیتابیس انجام می شود اون موارد در اکشن می باشد

نمونه اول:

```js
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const item = action.paylod

      const existingItem = state.cartItems.find(
        (i) => i.product === item.product
      )

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === existingItem.product ? item : i
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case 'CART_REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      }
    default:
      return state
  }
}
```
نمونه دوم:

```js
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return { loading: true, products: [] }
    case 'PRODUCT_LIST_SUCCESS':
      return { loading: false, products: action.payload }
    default:
      return state
  }
}

export const productDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case 'PRODUCT_DETAIL_REQUEST':
      return { loading: true, ...state }
    case 'PRODUCT_DETAIL_SUCCESS':
      return { loading: false, product: action.payload }
    default:
      return state
  }
}
```

حال نوبت می رسد به اکشن ها که می تونیم مثل فایل کانتکس مربوط به کواری زدن یا کاری کردن در زیر لایه app مثال بزنیم

نمونه اول:
```js
import axios from 'axios'

export const addTocart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8000/api/products/${id}`)

  dispatch({
    type: 'CART_ADD_ITEM',
    paylod: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: 'CART_REMOVE_ITEM',
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
```
نمونه دوم:
```js
import axios from 'axios'

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_LIST_REQUEST' })

    const { data } = await axios.get('http://localhost:8000/api/products')

    dispatch({
      type: 'PRODUCT_LIST_SUCCESS',
      payload: data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const productDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_DETAIL_REQUEST' })

    const { data } = await axios.get(`http://localhost:8000/api/products/${id}`)

    dispatch({
      type: 'PRODUCT_DETAIL_SUCCESS',
      payload: data,
    })
  } catch (error) {
    console.log(error)
  }
}
```

حالا می توانیم در یک فایل به کامپوننت ری اکت به این صورت انجام بدهیم

```js
import { productDetailAction } from '../action/productAction'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Product = ({ history, match }) => {

  const dispatch = useDispatch()

  const productDetail = useSelector((state) => state.productDetail)
  const { loading, product } = productDetail
  
  
  useEffect(() => {
    dispatch(productDetailAction(match.params.id))
  }, [dispatch, match])

}
```
سه خط بعد از تابع که مشخص می کند دیپچ می کنیم به ردیوسر و استور و همینطور کدوم state رو می خوایم و از استیت مذکور چه مواردی نیاز داریم و در تابع useEffect می ریم که state رو بسازیم


نکته: بعد از تمامی این مطالب بالا شما باید در فایل index.js که شروع پروژه می باشد بیایید 
```js
import { Provider } from 'react-redux'
import store from './store'

...

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
رو قرار بدهید تا پروژه state رو ران کند و اطلاعات را از ان بگیرد


---
### لاگین در nextjs
یک پکیج معروفی برای nextjs وجود دارد https://next-auth.js.org/ که حدودا ۱۲ هزار تا لایک دارد در گیت هاب و همینطور از نظر به روز رسانی بسیار فعال هست
