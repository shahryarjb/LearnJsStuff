# Advanced-js

destructuring:

با این روش به پراپرتی ها و ایتم های مختلف داخل آرایاه و آبجکت می توان دسترس داشت

در آرایه ها:

```js
const testArr = [1,2,3,4,5,6]
const first = testArr[0]
const first = testArr[1]
```
این روشی هست که معمولا دیتای یه ارایه رو می‌خونیم

نحوه destructure کردن آرایه

```js
const [first, second] = testArr
```

پروسه مثل ساختن یک متغیر معمولی هست و با قراردادن کروشه ها  در کنار const
به جاوا اسکریپت می‌فهمونیم که قراره destructure کنیم آرایه مد نظر رو

