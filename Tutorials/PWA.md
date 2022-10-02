# آموزش مربوط به Progressive Web Apps (PWA)

## فایل Manifest
در حقیقت خود وب اپی که داره درست می شه فرقی نداره در چه فناوری باشه js باشه یا فونیکس لایو ویو باشه. پس بحث کل این آموزش بر این موضوع هست که ما می خوایم به گوشی موبایل بفهمونیم که اوکی ما یک اپ داریم بحای اینکه کاربر تو مروگرش بگه اوکی بوکمارکش می کنم لگوش بیاد تو گوشی کاربر و قابل کلیک کردن باشه و همینطور احساس Native بودن رو نیز به کاربر بده. در اینجاست که Manifest فایل به کمک ما می یاد که باید برای سیستم عامل های مختلف مناسب کانفیگ بشه

## ساخت فایل manifest
شما فقط کافی هست یک فایل به نام `manifest.json` بسازید و اون رو در هر فایل html که سایت شما دارد به صورت زیر لود کنید ولی باید توجه داشته باشید اگر سایت شما مثلا ری اکت می باشد و تک صفحه ای هست نیاز نیست در همه فایل های html سایت خود این موارد را قرار بدهید چون در کل یک فایل html بیشتر ندارید این موضوع برای سایت هایی می باشد که از این فناوری های و کتاب خانه های استفاده نمی کنند 
```html
<link rel="manifest" href="/manifest.json" />
```
فایل را در مسیر مناسب درخواستی خود می سازید و بعد در تگ head می آیید و این فایل را به صورت بالا لود می کنید.

---

## معرفی تصویر و لگو pwa به مروگر و موبایل

در فایل مذکور یعنی manifest کاربر مثل مواردی که در اپلیکیشن اندروید و همینطور iOS می آید تصاویر را معرفی می کند اینجا نیز همین کار را می کند 

به عنوان مثال برای اسم پروژه از. تگ name و همینطور اسم کوتاه در اپلیکیشن short_name و همینطور برای آیکون به صورت زیر عمل می کند
```json
"icons": [
    {
      "src": "/src/images/icons/app-icon-48x48.png",
      "type": "image/png",
      "sizes": "48x48"
    },
    {
      "src": "/src/images/icons/app-icon-96x96.png",
      "type": "image/png",
      "sizes": "96x96"
    },
    {
      "src": "/src/images/icons/app-icon-144x144.png",
      "type": "image/png",
      "sizes": "144x144"
    },
    {
      "src": "/src/images/icons/app-icon-192x192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/src/images/icons/app-icon-256x256.png",
      "type": "image/png",
      "sizes": "256x256"
    },
    {
      "src": "/src/images/icons/app-icon-384x384.png",
      "type": "image/png",
      "sizes": "384x384"
    },
    {
      "src": "/src/images/icons/app-icon-512x512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
  ```


---

## دیگر پارامتر های فایل manifest

```json
{
  "name": "Instagram as Progressive Web app",
  "short_name": "PWAGram",
  "icons": [
    {
      "src": "/src/images/icons/app-icon-48x48.png",
      "type": "image/png",
      "sizes": "48x48"
    },
    {
      "src": "/src/images/icons/app-icon-96x96.png",
      "type": "image/png",
      "sizes": "96x96"
    },
    {
      "src": "/src/images/icons/app-icon-144x144.png",
      "type": "image/png",
      "sizes": "144x144"
    },
    {
      "src": "/src/images/icons/app-icon-192x192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/src/images/icons/app-icon-256x256.png",
      "type": "image/png",
      "sizes": "256x256"
    },
    {
      "src": "/src/images/icons/app-icon-384x384.png",
      "type": "image/png",
      "sizes": "384x384"
    },
    {
      "src": "/src/images/icons/app-icon-512x512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/index.html",
  "scope": ".",
  "display": "standalone",
  "orientation": "portrait-primary",
  "background_color": "#fff",
  "theme_color": "#3f51b5",
  "description": "A simple Instagram Clone, implementing a lot of PWA love.",
  "dir": "ltr",
  "lang": "en-US"
}
```

در بالا ما کل فایل را قرار دادیدم بعد از تصویر start_url بخشی هست که اپ می فهمونی که از کجا بالا بیاید و شروع کند و همینطور در scope مشخص می کنید که چه بخشی از فایل ها می تواند معرفی شود و در بخش بعدی نیز مربوط به display هست می تواند فول واید و ... نیز باشد و بخش بعدی مربوط به گردش می باشد که orientation که آیا لندایکیپ باشد یا پتریت و  ... . گزینه background_color نیز وقتی اپ در ریلود می شود و در بخش بعدی theme_color نیز مربوط به رنگ های تلبار و ... می باشد دیگر موارد نیز از اسمشون مشخص هست

---

## پشتیبانی در سافاری

خوب همینطور که سافاری خیلی از بخش هارو ساپورت نمی کنه ولی می شه یک سری موارد رو با اضافه کردن تگ meta به فایل html اون رو تقریبا اوکی کرد. لیست برخی از مواردی که می شود اضافه نمود 

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="apple-mobile-web-app-title" content="PWAGram" />
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-57x57.png" sizes="57x57"/>
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-60x60.png" sizes="60x60"/>
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-72x72.png" sizes="72x72"/>
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-76x76.png" sizes="76x76"/>
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-114x114.png" sizes="114x114"/>
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-120x120.png" sizes="120x120"/>
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-144x144.png" sizes="144x144"/>
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-152x152.png" sizes="152x152"/>
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-180x180.png" sizes="180x180"/>
```

---

## پشتیبانی از موارد ویندوزی 
```html
<meta name="msapplication-TileImage" content="/src/images/icons/app-icon-144x144.png">
<meta name="msapplication-TileColor" content="#fff">
<meta name="theme-color" content="#3f51b5">
```

---

## سرویس ورکر
بخش بزرگی از امکاناتی که قرار است با آن کار کنیم از سرویس ورکر ها می آید به صورت مثال شما یک js دارید که سرویس ورکر را کانفیگ می کند و سایت شما از سرور یک فچ می زند و به وسیله سرویس ورکر به مروگر شما پوش ناتفیکیشن می زند پس مروگر در حقیقت در حال هنلد ناتیفیکیشن به سیستم عامل می باشد. لاز به ذکر هست که این مورد در بکگراند کار می کنند حتی با اینکه اپلیکیشن بسته باشد

![Screen Shot 2022-10-02 at 14 29 29](https://user-images.githubusercontent.com/8413604/193450644-ae9804e4-b5b4-42ca-a0b5-5c8f9b809ce3.png)


سرویس ورکر ها باید ریجیستر شوندکه یک فایل js ساده و در فایل html لود می شند (لینک می شوند). مثل یک هوک می مونه و مروگر درخواست نصب اون رو داره. مرحله بعدی فعال سازی می باشد که می تونه بعد از اتمام نصب نباشه مستقیما می تواند بر اساس درخواست بعدا انجام شود

---
## ثبت سرویس ورکر

کافیه در فایل app.js یا فایل اکشن جاوااسکریپت که در تمام صفحه لود می شه به صورت زیر عمل کنیم
```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('serviceWorker registered!');
  });
}
```
در اولین خط چک می کنیم که آیا این مورد در این مروگر فعال و ساپورت می شه و در مرحله بعدی می یاییم ثبتش می کنیم و فایل نیز در روت پروژه قرار می گیره که کد جدا بشه و در صورت لزوم لود بشه

---

## لایف سایکل

شروع چرخه زندگی سرویس ورکر به این صورت می باشد که اول باید ریجیستر شود در یک فایل مثلا app.js
```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('serviceWorker registered!');
  });
}
```
در این بخش که ریجستر شد حال نوبت این می باشد که یک سری ایونت لیسنر ها تو فایل sw.js نوشته شود

```js
self.addEventListener('install', (event) => {
  console.log('[Service Worker] installing Service Wroker ...', event);
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating Service Wroker ...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] fetching something ...', event);
  event.respondWith(fetch(event.request));
});
```

همانطور که می بنید در این بخش ما install و activate  و fetch به ترتیب داریم.

حال نیاز به این هست که ما مروگر رو از اکشن هاش متوقف کنیم و بیاییم event مورد نظرمون برای نمایش بنر ثبت اپ اجرا کنیم. اینجاست که در فایل مثلا app.js می آییم یک گلوبال متغییر درست می کنیم مثلا به نام
```js
let deferredPrompt;
```
و حال نیاز داریم در همون فایل بیاییم یکی از event های خود مروگر برای این کارو صدا کنیم و event رو بدیم به این متغییر 
```js
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});
```
قبل از نصب اپ ما اومدیم متغییر ساختیم

حالا فرض کنید ما یک فایلی داریم که فایل js خودشم داره و قرار هست یک دکمه ای رو اجرا کنه به صورت مثال 

```js
var shareImageButton = document.querySelector('#share-image-button');
function openCreatePostModal() {
  createPostArea.style.display = 'block';
}
shareImageButton.addEventListener('click', openCreatePostModal);
```

این کد ساده فقط می آید یک display به کد ما اضافه می کند. به همین سادگی حالا می خوایم بگیم اگر این event صدا زده شد بیا کار های نصب به صورت بنر در مروگر به کاربر نشون بده پیشنهاد بدیم که اگر می خوای اضافه کن این اپ رو به هوم اسکرینت. اگر یادتون باشه یک متغیر سراسری در بالا ساختیم و حالا نوبت این هست که فانکشن openCreatePostModal را یکمی به کد هاش اضافه کنیم

```js
function openCreatePostModal() {
  createPostArea.style.display = 'block';
  if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      console.log(choiceResult.outcome);

      if (choiceResult.outcome === 'dismissed') {
        console.log('user cancelled installation');
      } else {
        console.log('user added to home screen');
      }
    });

    deferredPrompt = null;
  }
}
```
همانطور که در کد ها مشخص می باشد در این لحظه ما چک کردیم آیا متغیر deferredPrompt صدا زده شده بعد از اون یکی از توابع از deferredPrompt صدا زده می شود و در مرحله بعدی که یک پرامیس می باشد مشخص می کند کاربر چه اکشنی رو انتخاب کرده. آیا حاظر بوده که اپ نصب کنه یا اون ریجیکت کرده و در آخر هم deferredPrompt رو نال می کنیم که کار تکراری در زمان آینده ممکن باشد

لازم به ذکر است در فایل html نیز فایل های js به این صورت با اولیت لود شدند
```html
<script src="/src/js/app.js"></script>
<script src="/src/js/feed.js"></script>
```
