# نکات و آموزش next.js

> _قبل از شروع بر اساس تحقیقاتی که داشتم این فریم ورک هم برای کار بزرگ و هم کوچیک امکانات خوبی داره پس به تبلیغات وب سایت ها که فقط برای کار های بزرگ هست توجه نکنید. به صورت مثال می تونه یک سری لینک ها که می دونید همیشه همون شکل هست رو به صورت اچ تی ام ال کپچر کنید و داخل پروژه داشته باشید مثلا. ۱۰۰ مطلب آخر وب سایت رو و این در ساخت یک وب سایت استاتیک بسیار آپشن خوبی هست. در کل این فریم ورک از جلمله اینکه مشکل پری رندرینگ برای SEO رو حل می کنه از روی ری اکت دیگر موارد رو هم براتون راحت می کنه از جمله امکاناتی که برای روتینگ در پروژه داره یا مدیریت فایل ها و استراکچر داخلی خودش شما رو فورس می کنه تا در ساختاری تقریبا استاندارد جلو برید. بر اساس جستجو اولیه وب سایت های بزرگ ایرانی از جمله اسنپ فود کافه بازار استفاده کننده همین فریم ورک هستند با اینکه اسنپ فود نیازی به سئو نداره تا سرور ساید رندر کنه ولی امکانات این فریم ورک بسیار جذاب هست_


```js
npx create-next-app@latest
npx create-next-app@latest --typescript
```

شروع تمامی مواردی که می خواهند سرور ساید رندر شود با _ اسم فایل شروع می شود و در HTML می توان دید که تمامی موارد در یک دایو با آیدی next قرار می گیرد

```html
<div id="__next">
```

---

### مسیردهی و فرق آن با React

در ری اکت شما مجبور به نصب یک کتابخانه جدا هستند که در کد می نویسید ولی در next.js این کار بر اساس فایل مسیر دهی می شود که کارو بسیار راحتر و همینطور جلوگیری می کند از کد های بسیار زیاد البته از نظر خودم این یک ویژگی بسیار بزرگ نیست بلکه می تونه تغییرات در سختتر بکنه ولی برای این هم سولوشن هایی داره که تا حالا زیاد دلچسب نبوده برام. شما باید حتما استراکچر رو بسیار دقت کنید تا حجم تغییرات برای شما زیاد نشه. برای ساخت هر صفحه یا مسیر می توانید در فولدر pages بیایید فولدر یا فایل js بسازید و دقیقا به همان اسم روتر خواهید داشت

---
### هوک مربوط به Router

در مسیر دهی مشکلات زیادی رو nextjs حل کرده به همین منظور شما می توانید هوک مربوط به اون که می شود useRouter و همینطور برای کلاس کامپوننت ها هم  withRouter
 استفاده کنید به صورت زیر
 ```js
 import { useRouter } from 'next/router';
 
 const PortfolioProjectPgae = () => {
  const router = useRouter();

  console.log(router.pathname)
  console.log(router.query)
}
```

---
### مسیر دهی تو در تو
شما می توانید در pages بیایید یک about.js بسازید که خود مسیر سایت شما می شود مثلا `test.com/about` یا می توانید بیایید یک فولدر بسازید به نام about و داخل اون بیایید یک index.js بسازید که بازم مسیر بالا می شود یا می توانید مثلا بیایید یک فولدر بسازید به نام blog و داخلش بیایید یک فایل بسازید به نام `[id].js` اینجوری شما می توانید مسیر `test.com/blog/1` را لود کنید یا هر اسمی که به عنوان پراپرتی id اون رو در نظر می گیره حالا شما می توانید حتی بزنید `[...slug].js` اینجوری اگر طرف بیاید بزنید `test.com/blog/12/22/the-test-router` به شما تمامی موارد بعد از بلاگ را به صورت آرایه تحویل می دهد. جالب هست بدانید حتی می توانید اسم فولدر را داینامیک بسازید مثل `[id]` و داخلش چندین مورد فایل js بسازید که بازم تو در تو می شود و تمامی نیاز هارو پوشش می دهد مخصوصا برای سئو


---
### در jsx از براکت استفاده نکنید بجای آن از پرانتز
در نمونه زیر ببنید
```js
<ul>
  {clients.map((item) => (
    <li key={item.id}>
      <Link href={`/clients/${item.id}`}>{item.name}</Link>
    </li>
  ))}
</ul>
```
همانطور که می بنید از ( استفاده شده است بعد از => اگر براکت بزارید چیزی در صفحه چاپ نمی شود

نکته: شما باید لیستی از آرایه را به jsx بدید پس باید از map استفاده کنید چون مواردی مثل forEach ریترن می کنند خط به خط و به همین منظور چیزی در صفحه چاپ نمی شود


---

### روش دیگر از لینک دهی و آپشن های Link در nextjs
خوب برخی مواقع ساختار یک لینک می تپاند پر از استرینگ و ... باشد و همینطور پارامتر در اون قرار بگیرید بخاطر همین nextjs اومده در دو `{{}}` موارد زیر را به صورت مثال قرار داده است که یکی مسیر و دیگری هم پارامتر های لینک می باشد

```js
<Link
  href={{
    pathname: '/clients/[id]',
    query: { id: client.id },
  }}
>
  {client.name}
</Link>
```

---
### نویگیت کردن به صورت کد
همانطور که در بالا مشاهده کردید ما هوک روتر از nextjs داریم که می تونیم به صورت زیر عمل کنیم
```js
const loadProjectHandler = () => {
    router.push('/clients/max/projecta')
}
```
نکته: push هم می توانید مثل لینک pathname و همینطور query بگیرد.
```js
const loadProjectHandler = () => {
  router.push({
    pathname: '/clients/[id]/[clientprojectid]',
    query: { id: 'sha', clientprojectid: 'projecta' },
  });
};
```

---
### ساخت صفحه ۴۰۴
برای ساخت این صفحه کافیه در pages بیایید یک 404.js بسازید و هر کدی رو توش می تونید قرار بدید نمونه:

```js
const NotFoundPage = () => {
  return (
    <div>
      <h1>Page Custom Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
```

---
### استفاده از انکر تگ در لینک کامپوننت
برخی مواقع نیاز هست a تگ برای استایل دهی استفاده بشه وقتی بین Link استفاده می شه دیگه از لینک معمولی استفاده نمی کنه و براش href نباید بزارید به صورت مثال
```js
<Link href={props.Link}>
  <a className={classes.btn}>
    {props.children}
  </a>
</Link>
```

نکته: در صورتی که توابع پر ریلود رو استفاده نکنید سورس باز مثل ری اکت می شه و داخل سورس چیزی نیست یا اولین بلاک اچ تی ام ال می یاد. در حقیقت پراپس ریلود نمی شه

---
### ساخت صفحات استاتیک در nextjs
ممکن است برخی از صفحات مشکلی نباشد که یک بار لود گردد و همیشه از فایل آماده جنریت شده استفاده شود این تاثیر بسیار زیادی در سرعت و ... می گذارد مخصوصا روی CDN ها نیز کش می شود. مثلا ۳۰ مطلب پرطرفدار شما که قرار نیست تفییر بکند nextjs برای این مورد یک تابع دارد که باید بیرون تابع خود کامپوننت لود گردد و سرور ساید می باشد. یعنی کاربر چیزی از آن نمی بیند بعد از ران شدن. جالب اینجاست که ماژول node را در خودش می آورد و بعد از انجام نیز حذف می کند


برای مثال با قطعه کد زیر ما یک فایل در روت که json می باشد را می گیریم و به پراپز می دهیم

```js
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}
```

حال در همان فایل js می توانیم به کامپوننت خود بدهیم که از موردی که استاتیک جنریت شده است استفاده کند
```js
function Home(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
```

---
### ساخت قسمت های استاتیک هر ۱۲۰ ثانیه
خوب فرض بر اینکه شما صفحات مورد نظر خود را ساختید ولی ممکن است چیز جدید به آن اضافه شود و می خواهید آن را بسازید که خوب از نظر منطقی زیاد به بخش کش کردن کمک نمی کند ولی در لود بسیار سریع خواهد بود نسبت به اینکه هر سری از دیتابیس بگیرید. به همین منظور شما باید به این صورت عمل کنید

```js
export async function getStaticProps() {
  console.log('Re Generate');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 120,
  };
}
```

همانطور که می بنید revalidate به کد قبلی اضافه شده است که عددش بر اساس ثانیه است و خودتون می تونید تغییر بر اساس نیاز خودتان بدهید

اطلاعات بیشتر: https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation

> نکته این مورد برای بخش پروداکشن می باشد چون در دولپر مود هر سری رکواست می فرستید صفحه ریجنریت می شود
> نکته: شما وقتی صفحه رو ریلود می کنید در پروداکشن مود اونجا کنسول لاگی که در کد بالا نوشتیم را در ترمینال می بنید در قسمت سایت. ولی توجه کنید اگر پشت هم ریفرش کنید نمی ببنید فقط هر وقتی که مثلا ۱۲۰ ثانیه گذشته باشد این مورد ممکنه باعث ایجاد شبهه بشه


این تابع امکانات زیادی دارد به عنوان مثال فرض کنید یک API رو چک کردیم و پستی توش نبود که ازش ریجنریت کنیم به صورت html ثابت و کاربر هم می خواد اون صفحه رو ببینه اونجاست که باید به کاربر ۴۰۴ نشون بدهیم

```js
export async function getStaticProps() {
  return {
    notFound: true,
  };
}
```


برای اینکه کامل بتونید تمام آپشن هارو ببنید به این لینک سر بزنید
https://nextjs.org/docs/api-reference/data-fetching/get-static-props

به صورت مثال موارد زیر
- revalidate
- notFound
- redirect

نکته: در لینک بالا در مورد تایپ اسکریپت نیز محتوا نوشته شده است


---
### ساخت مسیر های داینامیک برای صفحات استاتیک جنبریت شده
فرض کنید در کد های بالا ما مثلا ۳ صفحه داریم که هر صفحه بر اساس یک آیدی شناخته می شوند. در کد های بالا اگر به تنهایی انجام بشود ارور می گیرید و به صورت منطقی هم باید همینطور باشد چون شما می گید از این به بعد این فایل ها استاتیک باشد ولی کاربر دارد در url شما مثلا اسم یک فایل هست به نام `[pid].js` و در صفحه ای دیگر بر اساس لینک داره به اون navigate می شه اینجاست که باید از تابع getStaticPaths استفاده کنید تا تمام آدرس هارو از قبل بهش بدید

```js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } },
    ],
    fallback: false
  };
}
```
به این صورت شما اومدید تک تک لینک هارو که به صورت پارامز نیز می باشد را به nextjs فهموندید. برای این صفحات در پروداکشن مود یک html ساخته می شود
در fallback بعد صحبت می شود 

---
### استفاده از کال بک در getStaticPaths
فرض کنید شما یک سایت بزرگ دارید و تعداد صفحات شما خیلی زیاد هست و برخی از صفحات هم لیستشو ندارید ولی رکوردش وجود داره و بر اساس آیدی می یاد اینجاست که fallback به کار شما می یاد

```js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'p1' } },
    ],
    fallback: true
  };
}
```
به کد بالا توجه کنید ما یک دونه pid رو گذاشتیم ولی اگر کاربر در سایت بر اساس خود nextjs link کلیک کنه می تونه p2 و ... رو هم ببینه ولی یک مشکل داره اونم این هست که وقتی کاربر مستقیم url بزنه بهش می گه چنین دیتایی وجود نداره چون اول کامپوننت در اینجا لود می شه بعداطلاعاتش می یاد که در اون زمان باید در کامپوننت اصلی چیزی مثل این بزاریم

```js
const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
};
```

همانطور که می بنید یک loading آوردیم تا اجازه بده اطلاعات بیاد بعدش کامپوننت ها لود بشند اینجوری بستگی به استراتژی شما داره مثلا اگر برای سئو مهم نیست به نظرم این کار خیلی خوبه و سرعت خیلی بیشتری داره ولی اگر سئو مهم هست نه بخاطر اینکه در سورس اطلاعات نمی یاد و اونم باز راه حل داره

```js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'p1' } },
    ],
    fallback: 'blocking'
  };
}
```
در کد بالا ما گفتیم تا صفحه کامل لود نشد بلاک بشه که ممکنه یکمی در سرعت تاثیر بزاره ولی برای سئو مثلا اوکی هست یا صفحه ای که شما می خواهید اول اطلاعاتش بیاد بعد عناصر بر اساس اطلاعات لود بشند
و دیگر نیاز به کد
```js
if (!loadedProduct) {
    return <p>Loading...</p>
}
```

نیست

---
### حل مشکل فال بک در زمانی true می باشد برای صفحات ۴۰۴
فرض کنید در کد بالا فال بک روی true می باشد و شما تو لینک رو دایرکت می زنید و وجود ندارد خوب بلاکینگ نیست که به ۴۰۴ برود و یک بار لود می شود در اون جا شما اگر یک شرط لودینگ هم قرار بدهید بازم ارور می گیرید چون از لود می شود و می بیند داده ای نیست و مثلا به لوپ شما که توش داده ای نیست اشاره می کند

در اینجا شما باید باز برگردید به getStaticProps و از فلگ notFound استفاده کنید

```js
export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}
```
به کد بالا نگاه کنید در اون قسمت گفتیم اگر محصولی نیست بره به صفحه ۴۰۴ اینجوری اول لودینگ اجرا می شود و بعدش کاربر صفحه ۴۰۴ رو می بینه

---
### لود سرور ساید
وقتی کار با api دارید بر خلاف ری اکت که در useEffect قرار می گیره بعد از ران شدن کامپوننت می یاد بالا و هیچ چیزی در سورس نمی بینید nextjs براش تابع داره که به صورت سرور ساید لودش کنه

```js
function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

export async function getServerSideProps(contex) {
  const { params } = contex;
  const userId = params.uid;

  return {
    props: {
      id: 'userid-' + userId,
    },
  };
}
```
به کد بالا توجه کنید می بنید که تابع getServerSideProps به صورت داینامیک داره یک اطلاعاتی را می گیرد که uid می باشد و اونرو مثلا در سروری سرچ می کنه اطلاعات رو ارسال می کنه به کامپوننت خیلی شبی به نوع استاتیک پراپس هست که تقریبا تمامی موارد اون رو داره ولی بر خلاف نوع استاتیکش می تونید نوع ریسپانس رو بررسی کنید به صورت مثال موارد زیر داخلش هست


* `params`: If this page uses a dynamic route, params contains the route parameters. If the page name is [id].js , then params will look like { id: ... }.
* `req`: The HTTP IncomingMessage object, with an additional cookies prop, which is an object with string keys mapping to string values of cookies.
* `res`: The HTTP response object.
* `query`: An object representing the query string, including dynamic route parameters.
* `preview`: preview is true if the page is in the Preview Mode and false otherwise.
* `previewData`: The preview data set by setPreviewData.
* `resolvedUrl`: A normalized version of the request URL that strips the _next/data prefix for client transitions and includes original query values.
* `locale` contains the active locale (if enabled).
* `locales` contains all supported locales (if enabled).
* `defaultLocale` contains the configured default locale (if enabled).

اطلاعات بیشتر https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props


---
### مثال از استفاده ری اکت پیور در nextjs
خوب در این مثال می تونید ببنید که دقیقا کد ری اکت به صورت کلاینت ساید در حال لود می باشد و برای کاربر قرار گرفته است البته این کامل کلاینت ساید نیست نسبت به خود ری اکت ولی برای سئو کار زیاد تفاوتی نمی کند نمونه کد 

```js
import { useEffect, useState } from 'react';

const LastSalesPage = () => {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-redux-main-43799-default-rtdb.europe-west1.firebasedatabase.app/sales.json'
    )
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No data yet...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.voulume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;
```

---
### استفاده از پکیج swr
این پکیج نوشته شده فقط برای next که کمک کنه موارد مربوط به ری اکت هوک با این پیاده کنیم با امکانات خیلی بیشتر 

به عنوان مثال کد بالا تغییر کرد به کد زیر

```js
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSalesPage = () => {
  const [sales, setSales] = useState();
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error } = useSWR(
    'https://react-redux-main-43799-default-rtdb.europe-west1.firebasedatabase.app/sales.json',
    fetcher
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load...</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.voulume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;
```
