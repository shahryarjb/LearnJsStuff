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
