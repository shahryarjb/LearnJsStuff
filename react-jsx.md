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

```
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
