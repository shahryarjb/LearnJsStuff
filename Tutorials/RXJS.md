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
// Error Rejected!
```

---
### استفاده از fromEvent برای event ها
این فانکشن یا متد از این کتابخانه می تواند موارد زیر را ساپورت کنه
1. DOM EventTarget
2. Node.js EventEmitter
3. Jquery Events

در کد های بالا اگر می خواستیم یک event رو بگیریم باید به این صورت عمل می کردیم
```ts
const triggerButton = document.querySelector('button#trigger');
const triggerClick$ = new Observable((subscriber) => {
  triggerButton?.addEventListener('click', (event) => {
    subscriber.next(event);
  });
});

triggerClick$.subscribe(
  (event) => console.log(event)
)
```
ولی fromEvent اون رو خلاصه می کنهو نیاز به کد کمتری هست که در زیر می تونید ببنیدش
```ts
const triggerButton = document.querySelector('button#trigger');
fromEvent(triggerButton!, 'click').subscribe((event) => console.log(event));
```

یک مثال خوب در این زمینه می خوام بزنم که قدرت rxjs رو در سادگی تمام در دکمه ها متوجه شوید. مثلا فرض کنید یک دکمه دارید و این دکمه رو می خواهید بعد از ۵ ثانیه دیگه روش زدن کار نکنه و اطلاعاتی نفرسته می تونید به این صورت عمل کنید

```ts
const triggerButton = document.querySelector('button#trigger');

const subscription = fromEvent(triggerButton!, 'click').subscribe((event) => console.log(event));

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
```
کد اون به همین سادگی می شود!

---
### موارد مربوط به timer و interval

```
timer(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

interval(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
```
همانطور می ببنید کاملا شبی به هم هستند و لازم به ذکر هست برای یاداوری مجدد که همه این موارد می تواند با Observable انجام شود

امکانات این دو فانکشن بیشتر از این موارد هست که به صورت مثال دو کد زیر یک کار را می کنند
```
timer(0, 1000).subscribe(n => console.log('timer', n));
interval(1000).subscribe(n => console.log('interval', n));
```

---
### استفاده از forkJoin
این تابع سازنده کمک می کند تا چندین درخواست مثل http ریکواست رو ارسال کنیم و بعد منتظر اون باشیم تا تمامشون تمام کار بشند و بعد بتونیم به همشون عضو یا ساسکراب بشیم. در کد زیر ما سه درخواست ajax می فرستیم که همزمان ارسال می شند و در تابع forkJoin منتظر می مونیم تا همشون کامپلیت بشند بعد ازشون استفاده می کنیم. 

```ts
const randomName$ = ajax<any>('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax<any>(
  'https://random-data-api.com/api/nation/random_nation'
);

const randomFood$ = ajax<any>('https://random-data-api.com/api/food/random_food');

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([nameAjax, nationAjax, foodAjax]) =>
    console.log(
      `${nameAjax.response.first_name} if from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}`
    )
);
```

حال شکل کامل ترش با مدیریت خطا به شرح زیر می باشد
```ts
forkJoin([randomName$, randomNation$, randomFood$]).subscribe({
  next: ([nameAjax, nationAjax, foodAjax]) =>
    console.log(
      `${nameAjax.response.first_name} if from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}`
    ),
  error: (err) => console.log('Error:', err),
});
```
همانطور که می بنید در اون ارور هندلینگ نیز آماده است لازم به ذکر است مهم نیست درخواست ها چقدر طول بکشند وقتی یکی از درخواست ها ارور بدهد وارد ارور هندلینگ می شود بخاطر اینکه این متد منتظر کامپلیت شدن همه موارد می ماند و بعد از اون ریسپانس بر می گردونه به قطعه کد زیر توجه کنید که مجازی سازی کردیم از یک درخواست و همینطور انتظار پاسخگوییش و در آخر در یکی از این موارد خطا قرار دادیم
```ts
const a$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next('A');
    subscriber.complete();
  }, 3000);

  return () => {
    console.log('A teardown')
  }
});

const b$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error('Failure');
  }, 5000);

  return () => {
    console.log('B teardown')
  }
});

forkJoin([a$, b$]).subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log('Error:', err),
});
// A teardown
// Error: Failure
// B teardown
```
به خروجی بالا توجه کنید اولین پروسه کامل اجرا می شه و همینطور در ریترن کلینر هم اجرا می شه و در پروسه دوم ارور کامل بر می گرده و همینطور کلینر اون اجرا می شه حالا فرض کنید اولین پروسه با ۵ ثانیه تایم اوت بیاد و دومی با ۳ ثانیه جواب به چه صورت می شود؟
```
// Error: Failure
// A teardown
// B teardown
```


---
### استفاده از combineLatest
همانطور که از نامش مشخصه کامباین می کنه یا می چسبونه و این تابع براش مهم هست که از هر سورسی که توش هست حداقل یک بار اجرا شده باشه یا ولیویی وجود داشته باشه. با یک مثال این موضوع رو شفاف تر می کنم فکر کنید شما دوتا event دارید که با fromEvent ساخته شده است. یکی عدد دما رو می گیرید و یکی دیگر می آیید نوع دما رو می گیرید و بعد از اینکه هر دو وارد شد محاسبه می کنید. پس اگر یکی از این موارد ارسال بشه کد کامل نمی شه و باید هر دو ارسال بشند به صورت مثال 

```ts
const temperatureInput = document.getElementById('temperature-input');
const conversionDropdown = document.getElementById('conversion-dropdown');
const resultText = document.getElementById('result-text');

const temperatureInputEvent$ = fromEvent(temperatureInput!, 'input');
const conversionInputEvent$ = fromEvent(conversionDropdown!, 'input');

combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe(
  ([temperatureInputEvent, conversionInputEvent]: [temperatureInputEvent: any, conversionInputEvent: any]) => {
    const temperature = Number(temperatureInputEvent.target['value']);
    const conversion = conversionInputEvent.target['value'];

    let result: number;
    if (conversion === 'f-to-c') {
      result = ((temperature - 32) * 5) / 9;
    } else if (conversion === 'c-to-f') {
      result = (temperature * 9) / 5 + 32;
    }

    resultText!.innerText = String(result!);
  }
);
```

---
### استفاده از pipe اپوریتور و filter
اپریتور pipe در حقیقت می یاد یک نسخه دیگه از خود داده هایی Observable شده می سازد و به ما یک سری امکانات می دهد تا روی آن ها پردازش کنیم به کد زیر توجه کنید ما حدود ۵ محتوا از یک وب سایت خبری را ارسال می کنیم 
```ts
interface NewsItem {
  category: 'Business' | 'Sports';
  content: string;
}

const newsFeed$ = new Observable<NewsItem>((subscriber) => {
  setTimeout(() => {
    subscriber.next({ category: 'Business', content: 'A' });
  }, 1000);
  setTimeout(() => {
    subscriber.next({ category: 'Sports', content: 'B' });
  }, 3000);
  setTimeout(() => {
    subscriber.next({ category: 'Business', content: 'C' });
  }, 4000);
  setTimeout(() => {
    subscriber.next({ category: 'Sports', content: 'D' });
  }, 6000);
  setTimeout(() => {
    subscriber.next({ category: 'Business', content: 'E' });
  }, 7000);
});
```

حال می خواهیم فقط مطالبی در مجموعه ورزشی می باشد فیلتر شود نمایش بیابد 
```ts
const sportsNewsFeed$ = newsFeed$.pipe(
  filter(item => item.category === 'Sports')
)
```
تا اینجا ما pipe را قرار دادیم و حال می توانیم به آن عضو یا ساسکرایب شویم
```ts
sportsNewsFeed$.subscribe((item) => console.log(item));
// {category: 'Sports', content: 'B'}
// {category: 'Sports', content: 'D'}
```
---
### استفاده از pipe اپوریتور و map
اگر به مثال forkJoin توجه کنید می بنید که داخل آن مجبور هستیم خیلی از موارد را صدا بزنیم تا به داده مورد نظر خودمان برسیم و وقتی این اطلاعات شرط های بیشتری می خواهید برای هر کدام از ریکواست ها این کد ها پیچیده تر نیز می شود حالا قبل از هر تغییری می آییم از map استفاده می کنیم و کد بالا تغییر پیدا می کند به کد زیر
```ts
const randomFirstName$ = ajax<any>(
  'https://random-data-api.com/api/name/random_name'
).pipe(
  map(ajaxResponse => ajaxResponse.response.first_name)
);

const randomCapital$ = ajax<any>(
  'https://random-data-api.com/api/nation/random_nation'
).pipe(
  map(ajaxResponse => ajaxResponse.response.capital)
);

const randomDish$ = ajax<any>(
  'https://random-data-api.com/api/food/random_food'
).pipe(
  map(ajaxResponse => ajaxResponse.response.dish)
);

forkJoin([randomFirstName$, randomCapital$, randomDish$]).subscribe(
  ([firstName, capital, dish]) =>
    console.log(
      `${firstName} if from ${capital} and likes to eat ${dish}`
    )
);
```
---
### استفاده از pipe اپوریتور و tap
تا اونجا که متوجه شدم tap اوپریتور برای دیباگ بسیار خوب هست و می توان بین عملیات های مربوط به map و فیلتر قرار داد و همینطور در داخلش خودش next و ارور کامپلیت نیز دارد

```ts
of(1, 7, 3, 6, 2)
  .pipe(
    map((value) => value * 2),
    filter((value) => value > 5),
    tap({
      next: (value) => console.log('Spy:', value),
    })
  )
  .subscribe((value) => console.log('Output', value));
```

یک سری مثال می تونید در اینجا ببنید

https://www.learnrxjs.io/learn-rxjs/operators/utility/do

که در این بخش هم داره از حالت دیباگری ازش استفاده می کنه.

---
### استفاده از pipe و debounceTime
فکر کنید یک event دارید مثل event های کشیدنی
```html
 <input id="slider" class="form-control" type="range" min="0" max="100" />
```
این یک اسلایدر هست و شما می خواهید کاربر شما وقتی آن را می کشد به سمت عقب و جلو بعد از ۲ ثانیه که ولش کرد اطلاعاتش ارسال بشه و فشار کمتری به سرور و ... بیاد
```ts
const sliderInput = document.querySelector('input#slider');

fromEvent(sliderInput!, 'input').pipe(
  debounceTime(2000),
  map((event: any) => event.target['value'])
).subscribe(value => console.log(value))
```

---

### استفاده از catchError در pipe اوپرتور
فرض کنید یک کدی داریم که ۳ ثانیه طول می کشد تا لود شود و بعد از اون یک اروری می دهد چطور اون رو در pipe بگیریم در قطعه کد زیر به وسیله catchError این کارو می کنیم لازم به ذکر هست خروجی ارور باید یک فانکشن باشد. در اینجا ما یک آبزرو با of درست می کنیم که در ساسکرایب نمایش داده می شود
```ts
const failingHttpRequest$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.error(new Error('Timeout'))
  }, 3000);
})

console.log('App started')

failingHttpRequest$.pipe(
  catchError(error => of('Fallback value'))
).subscribe(
  value => console.log(value)
)
// Fallback value'
```

در مثال بالا ما اومدیم یک فال بکی رو برگشت دادیم ولی می خواهیم هیچ اروری نیاید به همین منظور می تونیم از EMPTY 

```ts
failingHttpRequest$.pipe(catchError((error) => EMPTY)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
```
استفاده کنیم ولی وقتی EMPTY اجرا می شود باید به این نکته توجه کرد که complete نیز اجرا می شود 


---

### استفاده از Flattening در pipe و concatMap
این متد اطلاعات پروسه اول آبزرور رو می گیره و بعد می تونه چیزی بهش اضافه کنه یعنی یک ابزرور دیگه و بفرسته به سمته ساسکرایب
```ts
const source$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next('A');
  }, 2000);
  setTimeout(() => {
    subscriber.next('B');
  }, 5000);
});

console.log('App has started');
source$
  .pipe(concatMap((value) => of(value, 2)))
  .subscribe((value) => console.log(value));

// after 2 sec
// A
// 2

// after 5 sec
// B
// 2
```

---
### ارور هندلینگ در concatMap
نکته بسیار مهم در این پروسه این هست که اگر ارور بدهد چه اتفاقی می افتد. اگر کدی به ساختار زیر داشته باشیم. در زمانی که url موجود نباشد ارور بگیرید catchError آن را به complete می فرستد.
```ts
fromEvent(fetchButton!, 'click')
  .pipe(
    map(() => endpointInput.value),
    concatMap((value) =>
      ajax(`https://random-data-api.com/api/${value}/random_${value}`)
    ),
    catchError(() => EMPTY)
  )
  .subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log('Error:', err),
    complete: () => console.log('Completed')
  });
```

حال بیاییم یک pipe در خود ajax درست کنیم جایی که ارور می دهد نه خود کل پروسه concatMap اگر به این صورت عمل کنیم فرض بر اینکه ارور هم بدهد یوزر می تواند دوباره اجرا کند. چون در concatMap ما به complete نمی ریم ولی در دیگر موارد ارجاع داده می شود
```ts
const endpointInput: any = document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');

fromEvent(fetchButton!, 'click')
  .pipe(
    map(() => endpointInput.value),
    concatMap((value) =>
      ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
        catchError(() => EMPTY)
      )
    )
  )
  .subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log('Error:', err),
    complete: () => console.log('Completed'),
  });
```  

>  گزینه concatMap در اجرای درخواست های همزمان پشت هم یکی یکی کار می کند و این داستان کمک می کند تا راهی امنی مخصوصا از نظر پردازش مموری داشته باشیم در حقیقت یک صف از موارد آبزروبل درست می کند. یکی یکی اجرا می کند و منتظر می ماند قبلی تمام شود تا بعدی استارت بخورد

---
### استفاده از switchMap
فرق اون با مورد قبلی در این است که اگر هر سری یوزر درخواست بدهد این مورد یک پروسه جدید درست می کند و قبلی را کنسل می کند. اگر استراتژی شما در این مورد هست می توانید از switchMap استفاده کنید. پس نسخه قبلی اگر در حال انجام باشد کنسل می شود و جدید ایجاد و ارسال می شود

---
### استفاده از mergeMap
این گزینه می تواند مشکل بزرگی در مموری شما شود چون وقتی ۱۰۰۰ عدد کانکارنت درخواست ارسال می کند همه آن ها ممکن است همزمان اجرا شوند و همینطور باید مطمئن شوید که کامپلیت شده اند


---
### ارسال ریکواست با Subject
سابجکت کمک می کنه تا ارسال چندتایی یا مالتی داشته باشیم.
```ts
const emitButton = document.querySelector('button#emit');
const inputElement: any = document.querySelector('#value-input');
const subscribeButton = document.querySelector('button#subscribe');

const value$ = new Subject<string>();

fromEvent(emitButton!, 'click')
  .pipe(map(() => inputElement.value))
  .subscribe(value$);

fromEvent(subscribeButton!, 'click').subscribe(() => {
  console.log('New Subsciption');
  value$.subscribe((value) => console.log(value));
});
```
به نمونه کد بالا توجه کنید تا زمانی که دکمه ساسکرایب زده نشود یعنی دومین fromEvent اجرا نشه اولین کلیک هم اجرا نمی شه. و حالا فرض کنید که دوباره دومین ایونت اجرا بشه اون موقع هست که دوباره ساسکرایب شده به subject و دوتا دوتا اجرا می کنه

به کد زیر توجه کنید ما می خواهیم یک فرم لاگین بسازیم وقتی لاگین شد دکمه لاگاوت بیاد وقتی لاگاوت کرد برعکس اگر از subject استفاده کنیم نمی تواند ولی اولیه را در خودش نگهدارد پس باید از BehaviorSubject اسفاده کنیم

```ts
const isLoggedIn$ = new BehaviorSubject<boolean>(false);

fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true));

fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false));

// Nvaigation bar
isLoggedIn$.subscribe(
  (isLoggedIn) => (loggedInSpan.innerText = isLoggedIn.toString())
);

// Buttons
isLoggedIn$.subscribe((isLoggedIn) => {
  logoutButton.style.display = isLoggedIn ? 'block' : 'none';
  loginButton.style.display = !isLoggedIn ? 'block' : 'none';
});

fromEvent(printStateButton, 'click')
  .pipe(withLatestFrom(isLoggedIn$))
  .subscribe(([event, isLoggedIn]) =>
    console.log('User is logged in:', isLoggedIn)
  );
```
در اینجا یکی از هلپر های خود rxjs استفاده کردیم به نام withLatestFrom که آخرین state رو بر می گرداند. به کد بالا توجه کنید ما دوبار `isLoggedIn$` رو صدا زدیم یک بار اومدیم متنی رو جازگین کردیم و یک بار دیگه اومدیم ازش استفاده کردیم به دکمه ای استایل بدیم که نشون بده یا نده
