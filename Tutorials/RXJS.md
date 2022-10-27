# پوشش مباحث اولیه RXJS
قبل از شروع ری اکتیو پروگرمینگ یک سری کانسپت های پایه وجود دارد که به شرح زیر می باشد و تا آخر این سری اموزش با آن ها کار داریم

1. Observables
2. Subscriptions
3. Observers
4. Creation Function
5. Popeable Operators
6. Subject

بر اساس نظر شخصی من نسبت به متد ها فانکشن هایی این کتابخانه نه فقط برای آبزرو کردن بلکه برای استریم کردن و همینطور ساختاری بهتر درست شده است که خوب دور هدف اصلی خودش می گرده.

---
### توضیحات در مورد Observables
در حقیقت این یک آبجکت ویژه با کال بک می باشد و Observers نیز یک ری اکت و فراخوان کننده برای آن می باشد حال به وسیله Subscriptions اگزکیونت می شوند و یک کال بک در داخل Observables می باشد. این کتابخانه برای موارد مربوط به مدیریت حافظه و ... نیز متد هایی دارند مثل unsubscribe() که در زمانی دیگر نیاز به دریافت اطلاعات نداریم از آن استفاده می کنیم.

1. new Observable
2. Observer: next
3. subscribe
4. unsubscribe

---
### شروع ساخت Observable
باید توجه داشت همانطور که در بالا گفته شد ما یک سری کال بک داریم و همینطور قوانین دریافت اطلاعات رو مشخص می کنیم و بعد از اون کد رو فراخوانی و اجرا می کنیم

```ts
import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
});
```
به کد بالا توجه کنید. ما یک متغیر از کلاس observable داریم می سازیم یا انیستنس بعد داخلش با متد next داریم اطلاعات رو که سه اسم هستند به صورت استرینگ می یاریم یک دونه اول سریعا انجام می شه و دوتای بعدی با یک تایم اوتو اینجا اطلاعات درست شد و حالا زمان این هست که در اون اشتراک پیدا کنیم.

اشتراک پیدا کردن در اون به صورت زیر هست
```js
observable$.subscribe
```
ولی اگر توجه کنید قوانین یا نوع نمایش مشخص نشده و به صورت زیر عمل می کنیم.
```ts
const observer = {
  next: (value: string) => console.log(value),
};

const subscription = observable$.subscribe(observer);
```
متغییر observer می تونه اصلا نوشته نشه و بیاریمش در متغیر subscription قرار بدیم. به ترتیب هر داده ای اوکی بشه در کنسول به صورت ای سینک نشون می ده هر کدوم زودتر آماده بشه پس زودتر هم نمایش داده می شود

حالا فرض کنید ما می خواهیم یک تایم اوت بزاریم که بعد از چند ثانیه دیگه داده ای قبول نکنه مثلا به یک وب سروری ریکواست فرستادیم حالا بعد از ۱۰ ثانیه دیگه چیزی نگیریم اونجاست که می تونیم مثل این مورد زیر انجام بدیم
```js
setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 3000);
```
همانطور که می بنید آن ساسکرایب کردیم بعد از ۳ ثانیه!! و در کد بالا آخرین اسم بعد از ۴ ثانیه می یاد پس دو اسم نمایش داده می شود و آخری اسکیپ می شود. این برای مصرف حافظه نیز بسیار مناسب می باشد 


---
### استفاده چند باره از subscribe 
فکر کنید می خواهید به صورت مالتی تایم کد رو اجرا کنید. این کد به صورت ای سینک اجرا می شود و هر کدام زودتر نتیجه بدهد نمایش می یابد پس منتظر نمی ماند یا مثل promis نیست

به کد زیر نگاه کنید:

```ts
import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
});

console.log('Subscription 1 starts');
observable$.subscribe({
  next: (value: string) => console.log('Subscription 1', value),
});

setTimeout(() => {
  console.log('Subscription 2 starts');
  observable$.subscribe({
    next: (value: string) => console.log('Subscription 2', value),
  });
}, 1000);
```

نتیجه را ببنید:
```
Subscription 1 starts
Observable executed
Subscription 1 Alice
Subscription 2 starts
Observable executed
Subscription 2 Alice
Subscription 1 Ben
Subscription 2 Ben
Subscription 1 Charlie
Subscription 2 Charlie
```


---
### بخش های اصلی observer
در این بخش همانطور که در بالا دیدید ما کامل بک next برای ناتفیکیشن اطلاعات را دارا بودیم و دو مورد دیگر نیز وجود دارد از جمله complete و همینطور error که از اسم های آن نیز کاربردشان مشخص می باشد

---
### نمونه کد برای نمایش کامپلیت و داده و همینطور کلینر
```ts
const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => {
    subscriber.next('Charlie');
    subscriber.complete();
  }, 2000);

  return () => {
    console.log('Teardown');
  };
});

console.log('Before subscribe');

observable$.subscribe({
  next: (value: any) => console.log(value),
  complete: () => console.log('Completed'),
});

console.log('After subscribe');
```

به کد بالا توجه کنید نتیجه آن می شود
```
Before subscribe
Observable executed
Alice
Ben
After subscribe
Charlie
Completed
Teardown
```
همانطور که می بنید بخش 
```js
return () => {
  console.log('Teardown');
};
```
دقیقا بعد از کامپلیت اجرا شده است

---
### نمایش خطا به همراه کلینر
در بالا دیدیم که کلینر وقتی ریترن می شد دقیقا بعد از کامپلیت اجرا می شد و همین داستان برای ارور نیز کاربرد دارد به کد زیر توجه کنید

```ts
const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => {
    subscriber.next('Charlie');
  }, 2000);

  setTimeout(() => {
    subscriber.error(new Error('Failure'));
  }, 4000);

  return () => {
    console.log('Teardown');
  };
});

console.log('Before subscribe');

observable$.subscribe({
  next: (value: any) => console.log(value),
  complete: () => console.log('Completed'),
  error: (err) => console.log(err.message),
});

console.log('After subscribe');
```
نتیجه آن می شود

```
Before subscribe
Observable executed
Alice
Ben
After subscribe
Charlie
Failure
Teardown
```
---
### استفاده از setInterval و همینطور درک unsubscribe

به کد زیر توجه کنید چندین نکته بسیار مهم دارد. این کد یک اینتروال ساده می باشد که عدد قبلی را + یک می کند و در بعد از ۷ ثانیه تایم اوت نیز unsubscribe می شود یعنی دیگر هیچ چیزی چاپ نمی شود 

```ts
const interval$ = new Observable<number>((subscriber) => {
  let counter = 1;
  const intervalId = setInterval(() => {
    console.log('Emitted', counter);
    subscriber.next(counter++);
  }, 2000);

  return () => {
    clearInterval(intervalId);
  };
});

const subscription = interval$.subscribe((value) => console.log(value));

setTimeout(() => {
  console.log('Unsubcribe');
  subscription.unsubscribe();
}, 7000);
```
ولی فرض کنید شما کلینر زیر را قرار ندهید فکر می کنید چه اتفاقی می افتد؟
```js
 return () => {
  clearInterval(intervalId);
};
```
جواب این هست که درست هست یگر اطلاعاتی ارسال نمی شود چون دیگر عضو این پروسه نیستید ولی بخاطر ساید افکت باقی مانده هر ۲ ثانیه `console.log('Emitted', counter);` اجرا می شود به همین منظور ما محبوریم کل اینتروال رو قرار بدهیم در یک متغییر و بعد از کامپلیت شدن یا آن ساسکرایب آن را کلیر کنیم.

---
### ارسال دستور همزمان http request
در این قطعه کد از متد ajax خود کتابخانه rxjs استفاده کردیم
```ts
import { ajax } from 'rxjs/ajax';
const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

ajax$.subscribe((data) => console.log('Sub 1 =>', data.response.first_name));

ajax$.subscribe((data) => console.log('Sub 2 =>', data.response.first_name));

ajax$.subscribe((data) => console.log('Sub 3 =>', data.response.first_name));
```
هیچکدام منتظر قبلی نمی ماند و درخواست ارسال می شود و جواب هرکدام آمد نمایش داده می شود

---
### درک بهتر آبزرور
به کد زیر توجه کنید ما بر اساس یک کلیک و ساخت یک لیسنر اومدیم یک داده ای رو ارسال کردیم و آبزرو ما یک بار در بیرون تایم اوت و یک بار در داخل تایم اوت قرار گرفته است
```ts
import { Observable } from 'rxjs';

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable((subscriber) => {
  helloButton?.addEventListener('click', (event) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe((event) => console.log('Sub 1:', event));

setTimeout(() => {
  console.log('Subscription 2 starts');
  helloClick$.subscribe((event) => console.log('Sub 2:', event));
}, 5000);
```
حال شما فرض کنید روی دکمه ای کلیک می کنید و پیش فرض ذهنی شما این هست که باید بعد از ۵ ثانیه در اولین بار sub2 هم چاپ شود ولی فقط متن Subscription 2 starts چاپ می گردد حال اگر یک بار دیگه کلیک کنید می بنید پشت هم هر سری sub1و sub2 بدون معطیلی اجرا می شود و دیگر منتظر تایم اوت نمی ماند این روال باید به عنوان نکته مهم در ذهنتون بمونه 

---
### استفاده از متد of
کتابخانه rxjs یک سری متد های بسیار خوبی دارد که کار مارا راحت تر می کند به عنوان مثال وقتی می خواهیم سه اسم و همینطور status کامپلیت را چاپ کنیم در گذشته یا مواردی که بالا ذکر شد به صورت زیر عمل می کنیم

```ts
const names$ = new Observable<string>((subscriber) => {
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.next('Charlie');
  subscriber.complete();
});

names$.subscribe({
  next: (value: any) => console.log(value),
  complete: () => console.log('It is completed'),
});
```
همانطور می بنید بیشتر برای باز شدن ذهن هست که چطور عمل می کند ولی در پروژه های بزرگ تر شما مجبور می شدید این مورد رو بیایید خودتون یک تابع بنویسید تا داینامیک تر بشه و همینطور قالب استفاده مجدد باشه

در آن زمان یک چنین چیزی درست می کردید
```ts
ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
  next: (value: any) => console.log(value),
  complete: () => console.log('It is completed'),
});

function ourOwnOf(...args: string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    for (let i = 0; i < args.length; i++) {
      subscriber.next(args[i]);
    }
    subscriber.complete();
  });
}
```
تابع ourOwnOf به ما کمک می کنه تا کد های بهتر و همینطور شفاف تری داشته باشیم و بر اساس هر تگرار مجبور نباشیم کلشو درست کنیم ولی rxjs خودش یک متد داره به نام of  که می تونید ازش استفاده کنید. فقط کافیه به این صورت عمل کنید
```ts
of('Alice', 'Ben', 'Charlie').subscribe({
  next: (value: any) => console.log(value),
  complete: () => console.log('It is completed'),
});
```
دیگر نیاز به ساخت چیز دیگه ای نیست

---
### استفاده از from
دیگر امکان این کتابخانه from می باشد این مورد برای مواردی که یک لیست هستند یا پرامیس می باشند استفاده می شود مخصوصا برای ارسال request ها بسیار خوب عمل می کنه به نظر من قیافه تو در توی پرامیس رو خلاصه سازی هم می کنه

```ts
import { from } from 'rxjs';
const somePromis = new Promise((resolve, reject) => {
  resolve('Resolved!');
});

const observableFromPromise$ = from(somePromis);

observableFromPromise$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
// Resolved!
// Completed
```
ما در بالا از کانستراکتور پرامیس برای شبی سازی استفاده کردیم و ریزالو رو برگردوندیم و شما می تونید خروجی اونرو ببنید.
نکته جالب اینجاست که اگر حالا reject رو تنظیم کنیم که برگرده دیگه کامپلیت اجرا نمی شه
```ts
const somePromis = new Promise((resolve, reject) => {
  reject('Rejected!');
});

const observableFromPromise$ = from(somePromis);

observableFromPromise$.subscribe({
  next: (value) => console.log(value),
  error: err => console.log('Error', err),
  complete: () => console.log('Completed'),
});
```
