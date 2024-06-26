# مراحل یادگیری تایپ اسکریپت

### کی از حروف کپیتال استفاده می کنیم

در تایپ اسکریپت زمانی که می خواهیم یک کلاسی را اکسپورت کنیم از حرف کپی تال استفاده می کنیم در باقی موارد از حروف کوچک

---


### استفاده از `interface` در تایپ اسکریپت

این مورد تقریبا چیزی شبی به استراکت است ولی فقط برای مشخص کردن تایپ هر ورودی از اطلاعات به صورت مثال ما یک اطلاعاتی را از یک `API` می گیریم و می خواهیم مشخص کنیم که ورودی آبجکت از خروجی فچ کردن `API` تک تک فیلد ها چی باشد. لازم به ذکر است این مورد می تواند متغیری که نمی خواهید را اسکیپ کند

```ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```
وقتی `interface` را در بالای فایل تعریف می شود حالا می توانیم به این صورت عمل کنیم

```ts
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then((response) => {
  const todo = response.data as Todo; // we force the response data to be in interface structure
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
});
```
همانطور کی می بنید `as Todo` را استفاده کردیم.

---

### ورودی های تابع را مشخص کنید
اگر ورود هارا مشخص نکنید مثلا برای مواردی که می خواهید چاپ کنید ممکن است ارور any بگیرید که یعنی نوع ان مشخص نیست نمونه تابع با ورودی و تایپ مشخص
```ts
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    ID: ${id}
    Title: ${title}
    Finished: ${completed}
  `);
};
```

به مثال زیر توجه کنید. در این مثال ما در اینترفیس تایپ جدید را ساختیم و در ورودی تابع اون رو معرفی کردیم

```ts
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
```
در این قسمت دیگر از `as` استفاده نکردیم


---
### نحوه استفاده از اینترفیس در کلاس ها
در کد های بالا مشاهده کردیم که می توانیم اینترفیس معرفی شده را در یک کلاس یا تابع فراخوانی کنیم ولی تمامی موارد در خود آن فایل بوده در این مثال می توانیم یک فایل را ایمپورت کرده و آن را در جاهای دیگری استفاده کنیم. برای استفاده از اینترفیس حتما باید `export` شود 

```ts
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

import { Mappable } from './CustomMap';
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';
  ...
```

---

### فراخوانی چند دستور و لود آن با یک کامند
```json
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```

همانطور که در بالا می بنید ما دستور ها را با `start:` شروع کردیم و بعد از آن با `npm:start:*` استارت زدیم لازم به ذکر است برای این کار با پکیج `concurrently` رو استفاده کردیم  

---

### استفاده از `public` و حذف متغیر ها در زیر کلاس

کد زیر 

```ts
class Sorted {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }
}
```
 که می تواند می شود به این صورت
 ```ts
 class Sorted {
  constructor(public collection: number[]) {}
}
```

### یک نمونه از دیستراکچرینگ

کد زیر 
```ts
const { length } = this.collection;
```
مساوی هست با 

```ts
const length = this.collection.length;
```


---

### استفاده از کلاس های abstract
در این نوع کلاس ما متد های تعریف شده نداریم بلکه بدن واسته به کلاسی هست که قرار این کلاس را اکستند کند. پس نمی توان از این کلاس اینستنسی ساخت
نمونه
```ts
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
```
همانطور که می بنید قبل از کلاس `abstract` آورده شده و متغیر و متد هایی که قرار هست در بدنه استفاده شود و هر کلاس مادر باید آن را داشته باشد نیز قبل از اسمشان `abstract` قرار گرفته است.
لازم به ذکر هست همین کار را می توان با اینترفیس نیز انجام داد که به صورت زیر می باشد:

```ts
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
```

هر کلاس یا جایی که فراخوانی بشه نیاز هست آن را لود کنیم ولی موضوع کلاس منطقی هست که از ابسترک استفاده بشه


---
### قطعه کد مربوط به خواندن فایل csv

```ts
fs.readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });
```

---


### استفاده جنریک در فانکشن ها
```ts
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);
```


---

### استفاده از جنریک با اینترفیکس 
```ts
class Car {
    print() {
      console.log('I am a car');
    }
  }
  
  class House {
    print() {
      console.log('I am a house');
    }
  }
  
  interface Printable {
    print(): void;
  }
  
  function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
      arr[i].print();
    }
  }
  
  printHousesOrCars<House>([new House(), new House()]);
  printHousesOrCars<Car>([new Car(), new Car()]);
  ```
  اگر توجه کرده باشید `arr[i].print();` نیاز به تابعی دارد که `print` داشته باشید به همین ترتیب نیاز هست جنریک اکستند شود به یک اینترفیس

---
### استفاده از Generic Constraints
خوب در زمانی که به خود کلاس می آییم جنریک تایپ اضافه می کنیم متوجه این می شویم که برخی از توابع نمی توانند مثلا آرگیومنت هایی از یک آبجکت را دسترسی پیدا کنند پس اونجاست که مبحث `Generic Constraints` مطرح می شود

```ts
export class Attributes<T> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }
}
```

منبع:
https://www.typescriptlang.org/docs/handbook/2/generics.html

---

### نحوه دلیگیت کردن یک تابع

فرض مثال از یک کلاس دیگیری در کلاس اصلی یک ایستنت ساختیم. و اگر بخواهیم فانکشن آن را صدا بزنیم به صورت مثال

```ts
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  ...
}
```

برای صدا زدن یک متد در `Eventing` باید بیاییم به این صورت عمل کنیم
```ts
const user = new User({ name: 'shahryar', age: 30 });
user.events.on(...)
```
حالا اگر بخوایم مستقیم از خود `user` آن را بخوانیم باید چطور عمل کنیم.

در خود کلاس یوزر باید از `get` استفاده کنیم.
```ts
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  // when we need to have dynamic attrs, then must have constructor
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }
}
```

حال می تونیم `user.on` آن را فراخوانی کنیم


> نکته: فرض بر اینکه ما یک متدی رو دلیگیت کردیم که اون متد داخلش `this` داره خوب اون مورد به داخل کلاس خودش جستجو می کنه و چیزی رو دریافت نمی کنه و پس بهمون ارور می ده به عنوان مثال این متد `get` رو ببنید که در خود کلاس خودش تبدیل می شه به تابع انانمس که به یک متغیر تخصیص داده شده است


```ts
export class Attributes<T> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }
```

این متد تبدیل می شه به:

```ts
export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };
```

> نکته: تا زمانی که `this` می بنید بهتره از ارو فانکشن استفاده کنید در ۱۰۰ درصد موارد تقریبا :D ولی اگر `this` ندارید که می تونید بدون ارور استفاده شود
> نکته: اگر در کلاس مذکور `this` به یک پراپرتی موجود در خودش اشاره کنه این مورد نیاز به انجامش نیست ولی بهتره انجام بشه

---

### کوتاه نویسی توابع دلیگیت شده

بجای کد زیر
```ts
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
```

می توانیم به صورت زیر بنویسیم

```ts
  on = this.events.on;

  trigger = this.events.trigger;

  get = this.attributes.get;
```

توجه داشته باشید بدون پرانتز می باشد
> نکته: در صورتی که از نسخه کوتاه شده استفاده می کنید باید توجه داشته باشید در کنستراکتر اول در ورودی آن باید از هر کدوم از کلاس هاش بیاین یک انستنت درست کنید در غیر این صورت اول به صورت مثال `on` درست می شود قبل از اینکه از کلاسش نمونه درست شود و ارور دریافت می کنید


---
### اضافه کردن جنریک تایپ تو در تو

فرض بر اینکه می خواهیم یک کلاس دیگری را به عنوان جنریک تایپ  اکستند کنیم که خودش به صورت مثال یک جنریک تایپ نیاز دارد پس برای آن ورودی دوم در نظر می گیریم  که ورودی دوم می تواند به عنوان ورودی های دیگر استفاده شود مثال
```ts
export abstract class View<T extends Model<K>, K> {
```
در اینجا K رو ورودی دوم دادیم که ازش در Model استفاده کردیم


---
### استفاده از this در ورودی یک متد زیر لایه کلاس
شما فرض کنید یک کلاس می سازید و اونجا name رو معرفی می کنید به عنوان پراپرتی حالا یک اینستس می سازید و اون مورد ساخته رو می اندازید در یک متغییر دیگه و حالا از متغییر دوم می آیید یک متدی رو صدا می زنید اونجاست که this.name کار نمی کند چون this در حال گشتن در متغیر دوم هست و چنین چیزی در آن نیست در تایپ اسکریپت می تونید ورودی اون متد را در کلاس به این صورت بدهید

```ts
describe(this: CLASSNAME) {
  console.log(`Team: ${this.name}`)
}
```

---

### دکوریتور
این مبحث فقط در کلاس ها استفاده می شود و نمونه های زیادش در انگولار بیشتر دیده می شود ولی امکانات خوبی برای مدیریت پراپرتی ها دارد. دکوریتور ها در حقیقت فانکشن هستند. و با `@` بالای متد ها و کلاس ها قرار می گیرند

```ts
class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('swish');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target:', target);
  console.log('Key:', key);
}
```

خروجی می شود:

```
Target: Boat { formattedColor: [Getter], pilot: [Function] }
Key: pilot
```

لازم به ذکر است که می توانیم `@testDecorator` رو روی هر فانکشن و پراپرتی بالا قرار بدهیم برای تست روی `pilot` دادیم 


تبدیل کد بالا به js در تصویر زیر می تونید ببنید:
![Screen Shot 2022-08-26 at 12 49 27](https://user-images.githubusercontent.com/8413604/186856959-43b4199c-ee6d-4f12-99d7-890eb25a53fb.png)



تصویر دیگر:

![Screen Shot 2022-08-26 at 12 51 20](https://user-images.githubusercontent.com/8413604/186857266-44fdf770-740d-49ab-be74-096c03126bf1.png)


همانطور می توانیم به صورت زیر استفاده کنیم

```ts
testDecorator(Boat.prototype, 'pilot')
```

---

### نمایش یک خطا با دکوریتور

به قطعه کد زیر توجه کنید به صورت مثال می خواهیم اگر تابع اروری داد با دکوریتور یک کاری باهاش بکنیم در اینجا فقط می خواهیم یک چاپ داشته باشیم

```ts
class Boat {
  ...
  @logError
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;
  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Oops, boat was sunk');
    }
  };
}

new Boat().pilot();
```
سومین ورودی می تواند در تابع دکورتور اینجا برای ما مناسب باشد و خروجی را برای ما فراهم کند


---

### دریافت ورودی در دکورتور ها

فرض کنید می خواهید اگر اروری داد متن خطا به عنوان ورودی دکورتور قرار بگیره. این کار به سادگی با قرار دادن همین تابع در یک تابع دیگیری که return شده انجام پذیر هست

```ts

  @logError('Something bad!')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
  
  function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
```
همانطور که مشاهده می کنید تغییر خاصی نسبت به کد بالا انجام نشده فقط خود تابع دکورتور رفته در زیر مجموعه تابع دیگیری که return می شود

> نکته: شما نمی توانید پراپرتی هارو چاپ کنید با دکورتور (ولیو) چون در حقیقت دارد بر اساس چیزی که به پرتوتاپ آن ها دیفاین شده است را بر می گرداند نه ولیو اون هارو

---
### استفاده از دکوریتور در ورودی های یک تابع
```ts
 @logError('Something bad!')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}
```
به مثال بالا توجه کنید یک دکورتور در بالای تابع برای خطا ها قرار گرفته است که قبلا مثال زدیم ولی قبل از ورودی تابه مثل speed اومدیم `@parameterDecorator` آوردیم که در حقیقت همون اسم تابع دکوریتور می باشد که مثال زیر یک نمونه ساده از این همین تابع هست که توافتی با دیگر موارد قبلی ندارد
```ts
function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}
```

---

### استفاده از دکوریتور ها در کلاس ها
در مثال ها بالای ما در پراپرتی ها و توابع یک کلاس اینکارو رو کردیم ولی می تونیم حتی بالای یک کلاس هم از این مورد استفاده کنیم. این ایده ای هست که شما بتونید به سادگی سناریو های خودتون رو پیاده سازی کنید

```ts
@classDecorator
class Boat {
  ...
}
```

و خود تابع دکوریتور می تونید در زیر ببنید
```ts
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
```


> فرض کنید شما یک کتابخانه ای دارید که کنترلر دارد و می خواهید بر اساس آدرس هر کنرتلر در آخر یک روتر بسازید یا مثلا بتونید متادیتایی برای کلاینت درست کنید دقیقا دکوریتور + کتابخانه `reflect-metadata` می توانید در بهترین شکل به شما کمک کند. به راحتی به پرتوتایپ خودتون می تونید داده ای رو بدید و همینطور از اون داده رو بخونید
> https://www.npmjs.com/package/reflect-metadata

در ساخت روتر خیلی کاربرد دارد
