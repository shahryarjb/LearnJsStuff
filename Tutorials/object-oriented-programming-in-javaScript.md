# برنامه نویسی شی گرا در جاوا اسکریپت

در حال دیدن دوره کوتاهی در مورد برنامه نویسی شی گرا در جاوا اسکریپت هستم که یک سری نکات سریع در آن وجود دارد و همینطور کمک کننده برای استفاده از این سبک نوشتن


در برنامه نویسی شی گرا چهار سطون وجود دارد

- Encapsulation 
- Abstraction 
- Inheritance 
- Polymorphism

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

---


### تعریف Encapsulation به زبان ساده

در این بخش از ویدیو ها سازنده می گه قبل از برنامه نویسی شی گرا ما از برنامه نویسی رویه ای یا به انگلیسی procedural programming استفاده می کردیم که باید تعداد زیادی تابع درست می کردیم و بعد از اون در هرجایی به عنوان وابستگی استفاده می کردیم و بعد از یک مدتی تعدادشون زیاد می شد و همینطور جایگاه خوبی ذخیره داده های موقتی نبود به همین منظور شی گرا اومد اون هارو گروه بندی کرد. 
در اون بخش های متعددی درست شد از جمله متغیر ها شدن پراپرتی و همینطور توابع شدن متد!! این توضیحات کوتاه یک خلاصه ای از مفهموم Encapsulation بود که بیشتر به دسته بندی و گروه بندی اشاره می کنه

![Screen Shot 2023-02-02 at 22 42 14](https://user-images.githubusercontent.com/8413604/216427408-4ddf3b9e-45b4-4012-9d32-647ef8e06634.png)



---

### تعریف Abstraction به زبان ساده

فکر کنید یک دیویدی پلیر دارید که داخلش طراحی های زیادی استفاده شده و همینطور پیچیده و همینطور براتون مهم نیست که داخلش چی هست و برای شما اون موارد مخفی هست Abstraction همینطور می تونیم در برنامه استفاده کنیم خیلی از پراپرتی ها و متد ها برای شما مخفی هستند و موارد ضروری برای شما قابل دسترس هست

یکی از مهمترین مزایای این بخش می تونیم اشاره کنیم به ساده نگهداشتن کد. و همینطور فهمیدن بهتر
مورد بعدی هم تاثیر تغییر را کاهش می ده. مثلا فکر کنید یک تابع خصوصی رو در داخل یک کلاسی تغییر می دیم اون تغییر در بیرون کلاس احساس نمی شه و تغییری ایجاد نمی کنه

---


### تعریف Inheritance به زبان ساده

در این بخش شما می توانید کد های اضافه را محدود کنید. فرض کنید شما چند نوع فیلد دارید مثل تکست باکس سلکت باکس و همینطور چک باکس. همشون به صورت دیفالت یک سری موارد تکراری دارند مثل innerHtml و همینطور یک سری توابع مثل click() بجای اینکه همشون رو از اول تعریف کنیم برای هر کدومشون می تونیم همشون رو در یک جا تجمیع کنیم و هر فیلدی از اون وراثت بگیرد

---

### تعریف Polymorphism به زبان ساده

یک تعریف ساده از این عبارت پر تکرار در اینترنت: قسمت poly رو می تونیم به کلمه many تشبیه کنیم و همینطور ادامه بخش یعنی morphism رو هم به form یعنی در شکل های زیادی. و بیشتر مثل تکنیک می باشد که این امکان به شما می دهد تا جلوی خیلی از if و else هارو بگیرید و این امکان مثلا با تعریف یک متد در همه کلاس ها به نام مثلا render() و اون رو می تونید بر اساس تایپ آبجکت دوباره بازنویسی کنید یا استفاده کنید


تمامی توضیحات بالا خیلی خودمانی بود و برای اطلاعات کامل در اینترنت جستجو کنید در ادامه به مثال هایی در این زمینه می رسیم

---

قبل از شروع بخش های اصلی باید به این موضوع برسیم که خیلی از امکاناتی که مشاهده می کنید از اکما اسکریپت ۶ می باشد از جمله class که در حقیقت sugar syntax می باشد و در خود جاوااسکریپت وجود ندارد. یک موردی که خیلی مهم هست چون پایه جاوااسکریپت روی object می باشد درک مناسب از آن باعث بهتر فهمیدن این بخش می باشد و دیگر موارد کانسپتی که برخی مواقع درک آن هم سخت می باشد از جمله Prototypes  و همینطور Prototypical Inheritance می باشد و در آخر نیز ES6 Classes و Modules می باشد.



---

### آبجکت ها
همانطور که در بالا نیز اشاره کردیم تمام مبحث این آموزش که آبجکت اورینت پروگرمینگ می باشد بر اساس آجکت هاست پس درک عمیق و دقیق اون باعث می شود شما قادر به این کار باشد.


به همین منظور در این بخش برخی از موارد پایه و مورد نیاز را کاور خواهیم کرد از جمله 

- Creating Objects
- Factories and Constructors
- Primitives and Reference types
- Working with Properties
- Private Properties
- Getters / Setters

---

آبجکت در جاوااسکریپت کالکشنی از کلید و ارزش ها می باشد key/value
```javascript
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log('draw');
  },
};

circle.draw();
```

اگر به قطعه کد بالا نگاه کنید ما متغیر هارو به نام پراپرتی ها که در مورد یک ارزش هستند صحبت می کنیم و همینطور متد که فانکشن یا لاجیک هستند در نظر می گیریم. یک مثال ساده از تعریف یک آجکت می باشد.

---
وقتی بخواهیم یک از یک آبجکت کپی بگیریم و همینطور بیشتر از یکی یا دوتا متد داریم در اون موقع به مشکل می خوریم. فرض کنید یک آجکت ۱۰ تا متد داشت و در هرجا دوباره قرار هست تکرار بشود. برای کپی از آبجکت بهتر هست حداکثر یک متد داشته باشد ولی وقتی بالاتر از این تعداد هست می گویم آجکت دارای رفتار می باشد.
یکی از راه های حل مشکل اینکه آبجکت رو بیاریم داخل یک فانکشن به صورت زیر

```javascript
// Factory Function
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log('draw');
    },
  };
}
```

در es6 وقتی ما هم کلید radius داریم و هم در value می تونیم فقط بنویسیم radius که در تمیز نگهداشتن کد کمک کننده هست.

به تابع بالا فکتور فانکشن می گویند

می تونیم به صورت زیر اون رو بسازیم

```javascript
const circle = createCircle(1);
circle.draw();
```


یکی دیگر از راه های مربوط به ساخت یک آبجکت استفاده از Constructors فانکشن می باشد

```javascript
// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}
const another = new Circle(1);
```
همانطور که در بالا نگاه می کنید ما با حروف بزرگ اسم تابع را نوشتیم  و همینطور از this برای ایجاد یک ریفرنس استفاده کردیم و همینطور یک متد نیز با this در تابع نوشتیم. در آخر نیز می بنید با کلید new یک اینستنس از اون ساختیم
در شروع کلید new یک آبجکت خالی می سازد {} در this به گلوبال آبجکت اشاره می کند و به آن یک پراپرتی radius اضافه می کند. حالا جالب است اگر شما این this رو بیرون تابع می زاشتید به window اشاره می کرد ولی چون در داخل فانکشن هست به خود فانکشن اشاره می کند.
و همینطور اگر new رو برداریم بازم به window اشاره می کند

همانطور که در بالا می بنید ما هم با فکتوری فانکشن ایجاد کردیم و هم با کانسترکتور یا تابه سازنده. هر دوی اونها کاملا یک تابع معمولی در جاوااسکریپت هستند.

بیشتر مواقع انتخاب اون ها بستگی به برنامه نویسان دارد که از کدام زبان آمده اند مثلا از جاوا یا دیگر زبان های شی گرا باشید به صورت مثال کانسترکتر ممکن انتخاب کنند یا کنید یا اگر از بکگراند دیگر زبان ها باشید فکتوری رو ممکنه انتخاب کنید

---

نکته: در هر دو مثال بالا شما می تونید چک کنید که constructer وجود داره چه در مدل فکتوری چه در مد کانستراکتر ولی وقتی اون هارو صدا بزنید در کنسول خودتون می بنید که تفاوت دارند
---

نکته: اگر فانکشن های بالا رو صدا بزنید در کنسول می بنید که در حقیقت تمامی متد های آبجکت رو دارا هستند مثلا می تونید 
```javascript
Circle.name
Circle.lenght
```
رو روی آن ها نیز اعمال کنید. در حقیقت جاوااسکریپت با صدا زدن constructer می یاد آبجکت رو با رفرنس فانکشن می سازه
```javascript
Circle.constructor
```

مثلا شما می تونید اینجوری هم یک تابع بسازید

```
const Circle1 = new Function(
  'radius',
  `
this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
`
);

const circle = new Circle1(1);
```

حالا وقتی circle رو صدا می زنیم می بنیم که یک آبجکت ریترن کرده که دارای دو عضو می باشد

`draw: f ()`

`radius: 1`


یا مثلا می تونیم به این صورت عمل کنیم `Circle.call({}, 1)` جالب اینست که بدونیم این دقیقا همان کار `new Circle(1)` رو می کنه

اگر یادتون باشه قبلا گفتم که اگر در موقع ساخت اینستنس نیاییم `new` رو صدا بزنیم `this` از window می گیره حالا اگر بخوایم همین کارو با call انجام بدیم بجای خونه اول یعنی آبجکت خالی باید window بزاریم

---


### توضیح در مورد Value vs Reference Types

ما در جاوااسکریپت دو دسته تایپ داریم یکی value types هست و در بخش بعدی Refrence types هستند


![Screen Shot 2023-02-04 at 19 40 36](https://user-images.githubusercontent.com/8413604/216777698-2232c504-34b0-4b84-86b3-a39279a37f07.png)

فقط در بخش قبلی گفتیم که تابع همان آبحکت می باشد


در زمانی که ریفرنس تایپ می باشد در حقیقت شما دارید به ریفرنس اون در مموری اشاره می کنید ولی وقتی ویو تایپ باشند دقیقا به خود اون متغیر

```javascript
let x = { value: 10 }
let y = x;

x.value = 20
```
الان اگر x و همینطور y را صدا بزنید هر دو خروجی `{value: 20}` را برگشت می دهند.
در حقیقت x, y هر دو دارند به یک ریفرنس و آبجکت در مموری اشاره می کنند

به صورت خلاصه

```
Primitives are copied by their value
Objects are copied by their. reference
```

بیاییم یک مثال دیگه بزنیم که البته ایدتور vscode خیلی شفاف نشون می دهد که در حال اشتباه هستید

```javascript
let number = 10;
function inc(number) {
  number++;
}
inc(number);
console.log(number)
```
اگر کنسول لاگ بگیرید می بنید که بازم همون ۱۰ رو چاپ کرده بخاطر اینکه نامبر روی متغیر در حال کپی برداری هست نه ورودی فانکشن حالا بیاییم اون رو تبدیل کنیم به ریفرنس تایپ نه پرمیتیو


```javascript
let obj = { value: 10 };

function inc(obj) {
  obj.value++;
}
inc(obj);
console.log(obj);
```

حالا خروجی می شود `{ value: 11 }` شاید یکمی گیج کننده باشد ولی باید کامل درک بشود تا اشتباه در کد ایجاد نگردد مخصوصا در به روز رسانی متغیر ها و همینطور آبجکت ها

---
### اضافه کردن و حذف کردن پراپرتی ها

به علت داینامیک تایپ بودن جاوااسکریپت به راحتی می توان به آن پراپرتی اضافه کرد به صورت مثال
```javascript
circle.location = { x: 1 };
circle['location'] = { x: 1 };
```

توجه: در نامگذاری باید قوانین جاوااسکریپت رعایت شود به صورت مثال نمی توان - یا اسپیس اضافه کرد بین اسم ها.

و همینطور می تونیم به راحتی یک پراپتری رو حذف کرد

```javascript
delete circle.location;
delete circle['location'];
```

----

یک سری کد های ساده برای لوپ کردن آبجکت که می تونید به صورت زیر عمل کنید

```javascript
for (let key in circle) {
  if (typeof circle[key] !== 'function') {
    console.log(key, circle[key]);
  }
}

// or
const keys = Object.keys(circle);
console.log(keys)

if('radius' in circle) console.log('Circke has a radius.')
```

---

### توضیح در مورد Abstraction

کانسپت Abstraction می گه باید جزئیات رو مخفی کنیم تا موارد ضروری نمایش داده شود به عنوان مثال به کد زیر توجه کنید:

```javascript
function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function () {
    // ...
  };

  this.draw = function () {
    this.computeOptimumLocation();
    
    console.log('draw');
  };
}

const circle = new Circle(10);
```
متاسفانه اگر computeOptimumLocation اینجا مستقیم قالب دسترسی باشد و تغییر کند باعث اختلال کامل می شود

یکی از روش های درست کردن کلوژر ایجاد متغیر های لوکال هست که بعد از هر اجرا می میرند یا از بین می رند اینجوری دسترسی به بیرون امکان پذیر نمی باشد تغییرات در کد زیر را ببنید

```javascript
// Constructor function
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function (factor) {
    // ...
  };

  this.draw = function () {
    computeOptimumLocation(0.1);
    // defaultLocation
    // this.radius

    console.log('draw');
  };
}

const circle = new Circle(10);
circle.draw();
```
مواردی که با let درست شدن دیگه قالب دسترسی از بیرون نیستند و مثل تابع پرایوت عمل می کنند


---

### توضیحات در مورد Getter/Setter


مثال های قبلی به معنای واقعی پراویت نبودن بلکه فقط در یک متغیر لوکال قرار گرفتن

یکی از روش های به روز رسانی از بیرون یک پراپرتی که بردیمش داخل متغیر لوکال به شرح زیر هست
```javascript
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log('draw');
  };
}

const circle = new Circle(10);
circle.getDefaultLocation();
circle.draw();
```
ولی یک مشکلی هست اگر بخواهیم defaultLocation فقط قابل خوندن باشه چی؟ 

```javascript
// Constructor function
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      // You can set some validation before ...
      if (!value.x || !value.y) throw new Error('Invalid location.');

      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();
```

همانطور که می بنید ما دو اسپشیال کیبورد get, set رو در متد defineProperty آوردیم که این امکان را می دهد به ما تا بیاییم getter و setter رو فعال کنیم مثلا اگر پراپرتی خواست بیاد براش نشون بده و اگر خواست تغییرش بده که مثلا چندتا ولیدیشن براش تعریف کنیم بعد بیاییم اون رو ست کنیم

---

### بخش Inheritance
در حقیقت Inheritance یکی از کانسپت های core خود جاوااسکریپت هست که بتواند وراثبت یا استفاده کند از پراپرتی های دیگر آبجکت ها داخل جاوااسکریپت. این به شما کمک می کند یا یک کد قالب استفاده مجدد بسازید.
دو نوع Inheritance داریم که یکی classical  و دومی نیز Prototypical می باشد

---

### توضیح Prototypes and Prototypical Inheritance به زبان ساده

ما در جاوااسکریپت چیزی به عنوان کلاس نداریم بلکه فقط آبجکت داریم. پرتوتایپ به صورت ضروری والیدین دیگر آبجکت می باشد هر وقت اسم پرتوتایپ Prototye رو می شنوید به والدین فکر کنید اکثر موارد داخل جاوااسکریپت بجز موارد معدود که فکر کنم یک عدد باشد همه چیز پرتوتایپ دارند. 

برای مثال یک آبجکت خالی بسازید و باز دوباره اون رو داخل کنسول صدا بزنید با اینکه خالی می باشد می بینید که در آن `__proto__` وجود دارد. اگر این مورد باز کنید در کنسول خیلی از متد ها و پراپرتی هایی رو می بنید که می توانید در آبجکت یا با آبجکت استفاده کنید
به صورت مثال شما می بنید یک متد وجود دارد به نام toString که وقتی بعد از آبجکتتون اون رو صدا می زنید می شود 
`"[object Object]"`

مثلا در آبجکتی که در یک متغیر به نام x ساختیم ما نیومدیم متد toString رو بسازیم ولی جاوااسکریپت رو رو می سازه. و مرحله اش اینجوری هست که اول در خود متغیر می گرده اگر وجود نداشته باشه می ره داخل objectBase یا روت آبجکت ها یا اون پرنت می گرده و پیداش می کنه. به این مورد می گند prototypical in action
هر آبجکت یک پروتوتایپ دارد بجز روت آبجکت

این موارد در آرایه نیز صادق می باشد که وقتی یک آرایه درست می کنید می بنید باز حالت روت آبجکت رو می بنید که تمام متد هایی که می تونید داخل این آرایه از اون استفاده کنید به عنوان پورتوتایپ استفاده شده است

اگر بخوایم تشریح کنیم 

MyArray --> arrayBase --> objectBase
به این لول بندی می گویند Multi-level Inheritance.


به کد زیر توجه کنید:

```javascript
function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log('draw');
  };
}

const circle = new Circle(10);
```
هر سری که یک اینستنس درست می کنیم یا کنستراکتر رو صدا می زنیم دقیقا داره یک آبجکتی رو درست می کنه که همون پرتوتایپ رو داره. و جالب این هست که داخل __proto__ باز می بنید که یک __proto__ هست که به آبجکت روت بیس در آخر متصل می شه و توابع اون قالب دسترسی می یاد

circle --> circleBase --> objectBase
این های راکی یک کلاس می باشد



---

### توضیح در مورد descriptor

بیاییم کد زیر را در کنسول خود اجرا کنیم
```javascript
let person = { name: 'shahryar' };

let objectBase = Object.getPrototypeOf(person);
let descripter = Object.getOwnPropertyDescriptors(objectBase, 'toString');
console.log(descripter);
```
بعد از اجرا می توانیم ببینیم که یک سری اطلاعات به ما داده می شود از جمله مواردی مثل configurable, enumerble و دیگر موارد.

حال به این مثال توجه کنید:

```javascript
Object.defineProperty(person, 'name', {
  writable: false,
});

person.name = 'Jon'
console.log(person)
```

اگر این کد را اجرا کنید می بنید که اسم تغییری نمی کند

---
### توضیح در مورد Constructor Prototypes

تمامی توابع یا کلاس ها یک متدی دارند که به وسیله اون آبجکت ساخته می شود به وسیله خانواده (یکمی بد توضیح دادم)

```javascript
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype
```

برای مثال 
```javascript
let obj = {};
obj.__proto__
```
به وسیله کد بالا می تونید تمامی متد های آبجکت بیس رو ببنید از جمله کنستراکتر و ... باید توجه داشت که همین آبجکت بالا رو می تواند با یک اینستنس از `new Object()` نیز با کسنتراکترش ساخت.

حالا بیاییم 
```javascript
Object.prototype
```
بعد از زدن کد بالا متوجه می شوید دوباره همان آبجکت بیس ما درست می گردد. پس اگر بخواهم توضیح خودمو ویرایش کنم __proto__ چه پروتوتایپ کسنراکتر در حقیقت یکی هستند. این مورد آرایه نیز صدق می کند 

```javascript
let array = [];
array.__proto__

Array.prototype
```

---

### توضیح در مورد فرق Prototype با Instance Members

```javascript
// Constructor function
function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log('draw');
  };
}

const c1 = new Circle(1);
const c2 = new Circle(1);
```
اگر متغیر های c1, c2 رو چاپ کنید می بنید که یکی هستند ولی خوب رفرنس خودشون رو در مموری دارند و فرض کنید تعداد زیادی از این نوع ساخته می شود که باعث حروم شدن مموری می شود یکی از این موارد saving می تواند Prototypical Inheritance باشد که اول جاوااسکریپت به آن نگاه می کند و اگر چیزی رو نیافت دنبال خود آبجکت می رود.

یکی از این راه ها می تواند مورد زیر باشد که نباید استفاده شود چون منقضی گردیده 
```javascript
Circle.prototype === c1.__proto__
```
 
 ولی برای ساخت متد draw می توانیم به صورت زیر عمل کنیم
 
 ```javascript
 // Constructor function
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log('draw');
};
```
همانطور که می بنید ما متد draw رو در خود فانکشن Circle پاک کردیم و دوباره در پروتوتایپ اون ایجاد کردیم. حالا بیاییم یک بار دیگه c1 رو اجرا کنیم وقتی اجرا کردیم می بنیم بله دیگر در خود خروجی draw رو نمی بنیم ولی وقتی روی __proto__ می زنیم می بنیم که draw اومده هست این گزینه در مورد c2 نیز صادق هست. این مورد بخاطر Prototypical Inheritance می باشد.

برای اینکه گیچ کننده نباشد شما می توانید حتی `c1.draw()` را صدا بزنید و مثل قبل کار می کند.
طبق کد پایین در حقیقت ما دو نوع عضو داریم یکی اینستنس هستت و یکی دیگری پرتوتایپ

```javascript
function Circle(radius) {
  // Instance members
  this.radius = radius;
}

  // Prototype members
Circle.prototype.draw = function () {
  console.log('draw');
};
```

این امکان خوب فقط به همین بخش محدود نمی شود بلکه شما می توانید اور رایت کنید مثلا متد `toString` رو می خواهید وقتی صدا زده می شود برای Circle یک کار دیگیری انجام شود

```javascript
Circle.prototype.toString = function () {
  return 'Circle with radius ' + this.radius;
};

c1.toString();
```
پس این نکته بسیار مهم هست که همیشه جاوااسکریپت اول به پروتوتایپ نگاه می کند و بعد به سمت خود آبجکت می رود

مورد بعدی چه در پروتوتایپ چه در خود تابع یا کلاس Circle می توانید با this به draw یا مواردی که در فانکشن هست دسترسی داشته باشید هر دو حالتش امکان پذیر می باشد

برای درک بهتر
```javascript
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function() {
    this.draw();
    console.log('move')
  }
}


// Prototype members
Circle.prototype.draw = function () {
  console.log('draw');
};
```

---

### توضیح در مورد Iterating Instance و Prototype 

نکته مهمی از بخش های قبل و در ادامه باید بهش توجه بشه مهم نیست که کی بیایید مثلا draw متد رو در پرتوتایپ بسازید. چه قبل از اینستنس یا بعدش به هر صورت قالب دسترسی هست و جاوااسکریپت به این صورت رفتار می کند. بخش دیگرش به ریفرنس ها در جاوااسکریپت ربط دارد.

اگر بیاییم `Object.keys(c1)` را اجرا کنیم فقط `move` و `radius` چاپ می شود و دلیلش این هست که `draw` عضو پرتوتایپ هست نه خود `Circle` پس کلید ها فقط `Instance members` هارو بر می گردانند

ولی نکته جالب اینجاست اگر بیاییم از for استفاده کنیم draw نیز چاپ می شود به صورت مثال 

```javascript
for (let key in c1) console.log(key)
```

پس for لوپ تمام عضویت هارو بر می گرداند. 
باید توجه کنید در داکیومنت های جاوااسکریپت instance را own نامگذاری می کنند و اگر از متد `hasOwnProperty` استفاده کنید بازم draw رو نمی آورد


نکته: در بالاتر صحبت در مورد اور راتینگ متد ها صحبت کردیم ولی شما نباید در برنامه Built-in Objects هارو ویرایش کنید مثلا خود Array یا Object بخاطر اینکه ممکنه شما یک کتابخانه ای چیزی استفاده کنید که باعث تداخل بشه این دیباگ مشکل رو خیلی سخت می کند.

اگر با زبان های داینامیک خوب برخورد نکنید به راحتی دچار مشکل خواهید شد سعی کنید فقط مواردی رو ویرایش کنید که خودتان صاحبش هستید

---
### توضیح در مورد ساخت پورتوتایپ (ارث بری شده) سفارشی خودمون

فرض کنید شما یک متدی دارید که تکراری می باشد و قرار هست در جای دیگری از آن استفاده کنید البته به عنوان یک متدی که ارث بری شده است و از کلاس ها نیز استفاده نمی کنید بلکه از پرتوتایپ جلو می روید.

```javascript
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function () {
  console.log('draw');
};

const s = new Shape();
const c = new Circle(1);
```
به کد بالا نگاه کنید کلاس یا تابع Shape قرار هست در Circle به عنوان وابستگی extend شود یا بهتره بگوییم قرار هست ارث بری شود. برای مثال بهتر شما فکر کنید یک خانه دارید و در آن قرار هست یخچال داشته باشید و همینطور ماشین لباس شویی حالا چه چیزی بین آن ها مشترک می باشد؟ بله برق و همینطور آب شما اگر هر دوی آن ها را دوباره بنویسید در حقیقت اومدید کد های تکراری زدید در اینجاست که می توانید به روش بالا کار رو جلو ببرید

هر کلاسی در در js به صورت یک آبجکت هست و وقتی آن را چاپ کنی می توانید ببنید که اون به صورت پرتوتایپی اومده از موارد objectbase ارث برده حالا ما در اینجا Shape داریم که خودش از تمام خاصیت های آبجکت ارث برده است و حالا قرار هست Circle  بیاید Shape را به ارث ببرد

```javascript
Circle.prototype = Object.create(Shape.prototype);
```
حال شما متد duplicate را نیز در Circle دارید. `c.duplicate()`

---
### تنظیم مجدد constructor

اگر خط ساخت آبجکت ارث بری شده در بالا رو غیر فعال کنید می بنید که هر سری که شما از Circle یکی می سازید داخل پرتوتایپ اون هم باز اسم Circle هست و شما می تونید حتی به صورت زیر عمل کنید
```javascript
new Circle.prototype.Circle(1)
```
و به همان صورتی هست که که خود Circle رو new بزنیم. حالا اگر بیایید `Circle.prototype = Object.create(Shape.prototype);` را دوباره از کامنت در بیارید دیگر در پرتوتایپ Circle دوباره Circle را نمی بنید این سری Shape فانکشن رو return می کند بجای Circle حالا اگر بیایید `new Circle.prototype.constructor()` را صدا بزنید می بنید که `Shape{}` بر می گرداند دلیل آن این هست که ما در حقیقت با `Object.create` داریم reset می کنیم پرتوتایپ رو با مثال زیر بهتر متوجه می شوید

```javascript
// Circle.prototype.constructor = Circle
// new Circle.prototype.constructor() => new Circle()
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
```
حالا اگر به بالا نگاه کنید ما دوباره بعد از ریست شدن می آییم دوباره `Circle.prototype.constructor = Circle;` را قرار می دهیم. اینجوری دوباره به حالت نرمال بر می گردیم و همینطور duplicate را نیز دارا خواهیم بود بر اساس موردی که به ارث می بریم
پس بهترین تمرین این هست که هر سری دارید ریست می کنید پرتوتایپ رو بیایید یک بار دیگر constructor نیز ریست بکنید 

---
### توضیح در مورد صدا زدن Super Constructor

به کد زیر نگاه کنید. در حقیقت این کد کار نمی کند
```javascript
function Shape(color) {
  this.color = color;
}
function Circle(radius, color) {
  Shape(color);
  this.radius = radius;
}
const c = new Circle(1, 'red');
```
بخاطر اینکه اگر شما بیایید window.color رو صدا بزندی می بنید که red رو برگردوند در صورتی که ما نیاز داریم در Circle رنگ بگیره برای این کار ما نیاز داریم به صورت زیر انجام بدهیم

کد زیر مشکل را حل می کند
```javascript
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
```
حالا this می آید به خود Circle نگاه می کنید. در بالاتر ما توضیح دادیم وقتی ما با new یک اینستنس درست می کنیم در حقیقت داریم می گیم بیا این چیزی که ما می دیم رو قبول کن و اگر new رو برداریم می بنیم که اون داره از this اولیه یعنی window همه چیز می خونه همین مشکل هم همینجا هم هست که می تونیم با call این مشکل رو حل کنیم.

---
### توضیح در مورد وراثت تابع میانی

در این بخش بیشتر ریفکتور کد تکراری رو بیشتر می خواهیم بیان کنیم به همین ترتیب لطفا به فانکشن زیر نگاه کنید
```javascript
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
```
ر روش استفاده:
```javascript
extend(Circle, Shape);
```
با این روش دیگر کد های تکراری برای وراثت را نمی نویسیم

---

### توضیح در مورد Method Overriding

خوب این کار خیلی ساده هست بعد از اینکه پرتوتایپ کردیم متدی که می خواستیم بعد از اون می تونیم اون رو اوررایت کنیم قبلش اگر بزاریم هیچ تاثیری ندارد
```javascript
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log('duplicate circle');
};

const c = new Circle();
```

اگر به خط
```javascript
Circle.prototype.duplicate = function () {
  console.log('duplicate circle');
};
```
نگاه کنید دوباره متد را دوباره نویسی کردیم برای اون یک فانکشن به خصوص

---
