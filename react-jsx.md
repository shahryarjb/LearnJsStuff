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
```
