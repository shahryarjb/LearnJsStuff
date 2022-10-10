# پوشش API و مباحث مربوط به بات تلگرام از نوع وب اپ

- https://core.telegram.org/bots/webapps


## شروع کار با تلگرام

در شروع باید یک وب سایت مثلا با ری اکت درست شده باشد یا هر سایتی که قابلیت اجرای js را داشته باشد چون سایت باید در اندازه کوچیکی درست گردد بهترین راه همان ری اکت مخصوص همین داستان می باشد که تداخل با بخش های دیگه وب سایت نداشته باشد و کامل برای تلگرام درست شده باشد. وب سایت ریسپانسیو داشتن به نظر شخصیم کامل نمی تونه ساپورت کنه و وب اپ باید دقیقا برای موبایل درست شده باشه حتی در نسخه دسکتاپ تلگرام هم همین داستان است و اندازه بزرگتر از یک حدی نمی شود

کلیه اطلاعات مربوط به وب اپ تلگرام بات در این لینک می باشد https://core.telegram.org/bots/webapps ولی باید توجه شود این بخش فقط وب اپ را پوشش می دهد و شما برای داشتن یک بات کارامند نیازمند هستید تلفیقی با API های دیگر نیز کار بکنید

توجه داشته باشید بعد ساخت UI مورد نظر باید در سورس شما 
```html
<script src="https://telegram.org/js/telegram-web-app.js"></script>
```

اضافه شده باشد حال می توانید بعد از اینکه کامپوننت کامل لود شد صدایش بزنید مثلا در react به این صورت صدا زده شده است.

```js
import { useEffect } from 'react';
const telegramBot = (window as any).Telegram.WebApp;

const Layout = ({ children }: Children): JSX.Element => {
  useEffect(() => {
    // Start telegram WebApp bot after loading Layout
    telegramBot.ready();
  }, []);

  return <div className="container-fluid">{children}</div>;
};
```
همانطور که می بنید وقتی کامپوننت کامل لود شد برای یک بار تلگرام بات ریسپانس ready می دهد. این بخش فقط مربوط به وب اپ قسمت UI می باشد. شما در مرحله بعدی باید حتما موارد اولیه را اجرا کنید

```js
const { Telegraf } = require('telegraf');
const TOKEN = '';
const bot = new Telegraf(TOKEN);

const web_link = 'https://trmb.mishka.group/';

bot.start((ctx) =>
  ctx.reply('Welcome :)))))', {
    reply_markup: {
      inline_keyboard: [[{ text: 'web app', web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
```
همانطور در کد بالا می بنید من از بات فادر https://t.me/BotFather اومدم یک توکن گرفتم و بات جدید ساختم همونجا براش توضبحات اسم و آواتر پروفایل هم مشخص کردم که کار سختی نیست و خیلی ساده می باشد. بعدش با یگ پکیجی که می تواند دستی با json هم ارسال کنید به تلگرام فهموندم که من نیاز به یک دکمه و متن شروع دارم.


---

## انواع دکمه ها
در تصویر زیر می توانید ببنید که برای شروع چه دکمه هایی می توانیم در بات خود داشته باشیم. بجز بات منوکه می توانید به صورت کاستوم منو در خود بات فادر اضافه کنید در تنظیمات خود یک بات. بقیه موارد را می توانید با کد اضافه کنید. به صورت مثال:

```js
reply_markup: {
  inline_keyboard: [[{ text: 'web app', web_app: { url: web_link } }]],
},
```

در این تصویر هم می توانید انواع اولیه را مشاهده کنید

![08727d5d763e24d750](https://user-images.githubusercontent.com/8413604/194699911-30e83f57-339e-4026-a5e1-8f9df8f4ddfa.jpeg)

---
### دریافت اطلاعات اولیه کاربر
```js
var search = Telegram.WebApp.initData
var converted = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })
JSON.parse(converted.user).username
```
