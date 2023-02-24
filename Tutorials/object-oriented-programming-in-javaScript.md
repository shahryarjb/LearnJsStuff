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

### توضیح در مورد Polymorphism

اگر بخواهیم تعریفی ازPolymorphism ارائه کنیم می شود many forms یا چند ریختی که یک تکنیک در آبجکت اورنت پروگرمینگ می باشد البته شکل های دیگرش در زبان های فانکشنال هست که معادلش پروتکل می باشد.

به کد زیر توجه کنید هر آبجکت یک نوع خاص متد duplicate برای خودش داره
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

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log('duplicate Square');
};

const c = new Circle();
```

یعنی از یک متد در شکل های متفاوت و مصارف متفاوت داریم یا همان چند ریختی می باشد. حال فکر کنید بخواهیم ازش استفاده کنیم
```javascript
const shapes = [new Circle(), new Square()];

for (let shape of shapes) shape.duplicate();
```
همانطور می بنید ما اومدیم و تمام duplicate هارو که هر کدوم ورودی و خروجی خودشو داره صدا زدیم با form های مختلف. این کانسپت بسیار کانسپت قوی هست برای توسعه نرم افزار.
اگر این امکان نداشتیم باید هر سری تایپ اون shape رو پیدا می کردیم و بعد در if می اومدیم صداش می کردیم و بسیار کد های زیاد و شروط متفاوتی می خواست

---

تا اینجا وراثت بسیار جذاب بود و همینطور مشکلات زیادی را برای شما حل می کرد ولی یکی از مواردی که باید در نظر داشته باشید وراثب بسیار کد های شما را پیچیده می کند. پس در استفاده اون بسیار مراقب باشید مخصوصا پروژه شما وقتی بزرگ می شود. یکی دیگیر از راه حل های خوب بجای وراثت می تواند composition باشد که در مورد آن صحبت می کنیم که در جاوااسکریپت به اون Mixins می گویند.
دلیل استفاده نکردن از وراثت می تونه پیچیدگی و همینطور قابل شکسته منطق اون باشه مثلا فکر کنید قرار هست 

شما برای ماهی و سگ بیایید وراثت قرار بدهید هر دو غذا می خورند ولی هر دو راه نمی روند اینجاست که این فانکشنالیتی با اینکه در وراثت هست ولی روی ماهی کار نمی کند و در صورت صدا زدن نیز مطمئنن نتیجه مناسب و صحیحی را بر نمی گرداند

---
### توضیح در مورد Mixins
به کد زیر توجه کنید ما بحای وراثت اومدیم هر کدام از مواردی که نیاز هست به یک آبجکتی مثل وراثت برسد را به عنوان یک متغیر و آبجکت تعریف کردیم و در آخر اون رو assign کردیم به جایی که نیاز داریم اینجوری به هر آبجکت می توانیم دیگر آبجکت هارو اضافه کنیم 
```javascript
const canEat = {
  eat: function () {
    this.hunger--;
    console.log('eating');
  },
};

const canWalk = {
  walk: function () {
    console.log('walking');
  },
};


const person = Object.assign({}, canEat, canWalk);
console.log(person);
```
حالا بیاییم مثلا به یک کانستراکتر این دو قابلیت رو تخصیص بدهیم

```javascript
function Person() {}

Object.assign(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);
```
همانطور می بنید به Person به راحتی اومدیم و مواردی که می خواستیم رو اضافه کردیم. این راه به شدت قابل توسعه تر می باشد فردا مثلا یک فیچر جدید می خواهیم بهش اضافه کنیم مثلا پرواز کردن به همین راحتی می تونیم دوباره یک آبجکت بسازیم و اون رو با `Object.assign(Person.prototype, canEat, canWalk);` بیاییم اضافه کنیم

برای ری فکتورشم می تونیم به صورت زیر یک تابع درست کنیم
```javascript
function mixin(target, ...sources) {
  Object.assign(target, ...sources)
}
mixin(Person.prototype, canEat, canWalk);
```

---
## توضیحات در مورد Classes
لازم به ذکر است این امکان از ES6 اضافه شده و مثل دیگر زبان ها نمی باشد بلکه یک سینتکز برای انتزاع کردن این امکان در js می باشد. توضیحات بالا باید کامل درک شود تا به این بخش برسید چون class وقتی تبدیل می شود دوباره به js پایه که مواردی بود که در بالا به اون ها اشاره شد

بیاییم یکی از مثال هایی که خیلی با آن تمرین کردیم را بازنویسی کنیم به کلاس
```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle(1);
```

اگر این کد را خروجی بگیرید متوجه می شود که draw در proto قرار گرفته است و اگر می خواهید در خود آبجکت Circle قرار بگیرد می توانید به این صورت انجام بدهید

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {};
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle(1);
```
در constructor همان روش قدیمی را اعمال کردیم. نکته جالی که باید به اون اشاره کنیم اگر شما typeof کلاس بالا رو بررسی کنی به شما function بر می گرداند. بله در حقیقت کلاس ها هم فانکشن هستند. شما می توانید کد خودتان را در https://babeljs.io/ قرار بدهید و همینطور روی ES5 بزارید و متوجه می شید بله کلاسی که درست کردید در حقیقت یک تابع می باشد.
در نوع سنتیش ما می توانستیم new را قرار ندهیم برای اینستنس درست کردن تا از window دریافت کند ولی در کلاس این مورد خطا می دهد و شما حتما باید new استفاده کنید

---
### توضیح در مورد Hoisting در کلاس ها

ما می توانیم در جاوااسکریپت از چندین روش سینتکسی تابع بسازیم که یکی از اون موارد استفاده از function سینتکس هست یا می توانیم از function expression که همان متغیر هست داخلش تابع قرار می گیرد const ولی یک فرق اساسی دارند در استفاده از function هویستینگ می شه. یعنی می ره بالاترین جای کد و قالب استفاده هست در تمام فایل. مثلا شما می توانید پایین فایل یک تابع بسازید و بالاترش اون رو صدا کنید ولی مورد دوم اینطوری نیست و شما نمی تونید مثل موردی که ذکر شد صدا بزنید

```javascript
// Function declaration
function sayHello() {}

// Function Expression
const sayGoodBye = function () {};
```
اگر توجه کرده باشید می بنید که وقتی ما از const استفاده می کنیم آخرش سیمی کالون می زارید ولی وقتی از function خالی استفاده می کنیم خیر.
خوب حالا در مورد کلاس به چه صورت می باشد. به قطعه کد زیر نگاه کنید
```javascript
// Class Declartion
class Circle {}

// Class Expression
const Square = class {};

```
بر خلاف فانکشن کلاس ها هویست نمی شوند در هر دو شکل خودشون پس باید حتما اینستنس که ازش می سازیم باید بعد از تعریف کردنش باشد و در قطعه کد بالا دومین شکل ساخت کلاس چیزی مرسوم نیست و همینطور زیاد شفاف نمی باشد. هیچ براورده ای ندارد

---
### توضیح در مورد Static Methods

در زبان های کلاسیک آبجکت اورنتد به این صورت هست که شما دو نوع متد دارید یکی از اینستنس کردن هست یکی دیگه نیز استاتیک متد ها هستند.

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instanc Method
  draw() {}

  // Static Method
  static parse(str) {

  }
}

const circle = new Circle(1)
console.log(circle)
```
اگر این کد رو چاپ بکنید متوجه این می شوید که متد parse دیگر در اینتنس متد نیست. ولی می تواند به صورت `Circle.parse()` آن را مستقیم صدا زد.

برای درک بهتر بیاییم یک قطعه کدی درست کنیم که این مورد رو در پروژه واقعی برای ما پیاده سازی کند
```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instanc Method
  draw() {}

  // Static Method
  static parse(str) {
    const radius = JSON.parse(str);
    return new Circle(radius);
  }
}

const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);
```

ما در حقیقت استاتیک متد درست کردیم برای ایجاد یک utility function شما در جاوااسکریپت هم خیلی از این موارد می بنید مثلا از Math وقتی استفاده می کنید پر از این استاتیک متد هاست.

---

### توضیح در مورد this در کلاس ها

به قطعه کد زیر توجه کنید
```javascript
const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();
c.draw()
```
شما می توانید با صدا زدن این قطعه کد داخل Circle و متد هاشو نوشون بدید و همینطور یک متد به عنوان draw درست کنید که در این پست کامل چندین بار این کارو کردیم.

حالا بیاییم یک ریفرنس از draw بگیریم
```javascript
const draw = c.draw;
```
توجه کنید ما اون رو صدا نمی زنیم فقط یک ریفرنس ازش می گیریم پس پرانتز هارو پاک می کنیم.
حالا اگر بیاییم `draw()` را صدا بزنیم متوجه می شیم بله ما اومدیم window رو چاپ کردیم دیگر داخل خود Circle رو اشاره نمی کند. این همان صورتی هست که قبلا گفتیم با حذف new انجام می شد. وقتی ما new رو می زاشتیم و اینتنس درست می کردیم دقیقا اون به آبجکتی که اینستنس شده اشاره می کرد و اینجا به همین صورت هست وقتی ما از خود c.draw رو اگزکیوت می کنیم دقیقا داریم به آبجکت ساخته شده c اشاره می کنیم ولی وقتی ازش ریفرنس گرفتیم این داستان متفاوت می شه و می ره به تاپ لول که همان window هست.

لازم به ذکر هست به c.draw می گویم Method call و به draw() می گویم function call 

لازم به ذکر هست وقتی از `'use strict'` استفاده می کنیم این بخش ارور می ده در مروگر. و همینطور باعث ثبات بیشتر و جلوگیری از خطا می گردد. وقتی darw() صدا زده می شود دیگر بجای window شما undefined می گیرید

خبر خوب اینکه در سینتکس کلاس این مورد به صورت دیفالت انجام می شود و شما undefiend می گیرید  

---
### توضیح در مورد پراپرتی های خصوصی با استفاده از symbol ها

خوب شما اگر بیایید کد زیر رو یک اینستنس ازش درست کنید به راحتی می تونید تمام پراپتر های داخلشو چاپ کنید یا استفاده کنید یعنی public هست
```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}
```
حالا اگر بخوایم radius رو خصوصی کنیم و عمومی نباشد باید چیکار کنی؟

یکی از راه ها به این صورت هست که تو اسمش _ قرار بدهید
```javascript
class Circle {
  constructor(radius) {
    this._radius = radius;
  }
}
```
این یک ابسترکشن نیست بیشتر یک قراری هست بین توسعه دهندگان و همینطور بازم قابل دسترسی هست. پس برا اینکه بخوایم متد و پراپرتی های private داشته باشیم می تونیم از سیمبول های ES6 استفاده کنیم

در حقیقت Symbol به ما یونیک آیدنتیفایر می ده و هر سری صداش می کنیم دقیقا همین کارو مجدد انجام می دهد

```javascript
const _radius = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }
}
const c = new Circle(1);
```

حالا وقتی می آییم c را چاپ می کنیم می بنیم دیگه اثری از `_radius` نیست و فقط Symbol چاپ می شود. این امکان جلوی دستیابی مستقیم را می گیرد پس به صورت pure چیزی نیست که خصوصی باشد

راه دستیابی به این سیملود به روش زیر هست
```javascript
const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
```

حالا اگر بخوایم برای متد این کارو کنیم یک امکان جدید در ES6 هست به نام کامپیوتد پراپرتی که به صورت زیر اعمال می کنیم

```javascript
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {
    
  }
}
```
همانطور می بنید حالا draw نیز پراویت می باشد

---

### استفاده از WeakMaps برای ساخت پراپرتی های و متد های خصوصی

در حقیقت WeakMap یک دیکشنری می باشد و می تواند شامل تمامی موارد مثل آبجکت ولیو باشد و دلیل اینکه ازش استفاده می کنیم این هست که key اون weak می باشد و هیچ رفرنسی از key اون در گاربیج کالکشن نیست

```javascript
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
}

const c = new Circle(1);
```
حالا اگر c رو چاپ کنیم نمی تونیم radius رو داخل اون ببنیم

حالا اگر بخواهیم داخل خود کلاس اون رو صدا بزنیم به این صورت می باشد 
```javascript
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    _radius.get(this);
  }
}

const c = new Circle(1);
```

حالا اگر بخواهیم متد مخفی یا خصوصی بسازیم می توانیم به این صورت عمل کنیم و همینطور اون رو صدا بزنیم
```javascript
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, function() {
      console.log('move', this)
    })
  }

  draw() {
    _move.get(this)()
  }
}

const c = new Circle(1);
```

حالا خروجی این this اینجا چی می شود `console.log('move', this)` بله undefiend می شود چون داخل بادی کلاس همیشه strict مود می باشد

حالا برای اینکه بتوانیم this  در constructor رو به ارث ببریم باید چیکار کنیم!! یعنی جلوی re-set کردن رو بگیریم. یکی از راهای خوب در این زمینه استفاده از ارو فانکشن هاست

```javascript
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log('move', this)
    })
  }

  draw() {
    _move.get(this)()
  }
}

const c = new Circle(1);
```
حالا دیگر undefiend بر نمی گردد بلکه خود آبجکت Circle بر می گردد. با این کار می تونیم به تمام آبجکت های خصوصی و عمومی در move دسترسی پیدا کنیم.

حالا سوال ایجاد می شه چرا ما یک WeakMap برای تمام کارامون درست نمی کنیم و باید به صورت جدا برای هر کدوم بسازیم؟

یکی از دلایل می تونه شلوغ شدن باشد و سنتکس تو در تویی که قرار هست درست کنیم ولی اگر ترجیه می دید مشکلی نداره استفاده کنید ولی برای دسترسی به اون باید به صورت زیر عمل کنید


```javascript
const privateProps = new WeakMap();

...
constructor(radius) {
    privateProps.set(this, {
      radius: radius,
      move:() => {

      }
    })
  }

  privateProps.get(this).radius
  ...
```

---
### توضیح در مورد getter و setter در کلاس ها


قبلا در همین مطلب در مورد این موضوع صحبت کردیم یکی از روش های در کلاس به صورت زیر می باشد
```javascript
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  getRadius() {
    return _radius.get(this);
  }
}

const c = new Circle(1);
```

یک روش دیگر برای این کار به صورت زیر می باشد
```javascript
constructor(radius) {
    _radius.set(this, radius);

    Object.defineProperty(this, 'radius', {
      get: function() {
        
      }
    })
  }
```

خیلی کد کثیفی می باشد و همینطور ES6 برای این کار راه حل تمیز و خوانا تری رو ارائه کرده است

```javascript
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }
}

const c = new Circle(1);
```
اگر ببنید ما کلید واژه get رو پشت متد قرار دادیم و اومدیم داخل اون پرایویت پراپرتی رو فراخوانی کردیم حالا می تونیم صدا بزنیم c.radius

حالا بیاییم برای set اینکارو بکنیم
```javascript
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error('Invalid radius');
    _radius.set(this, value);
  }
}

const c = new Circle(1);
c.radius // 1
c.radius = 10
c.radius // 10
```

---
### توضیح در مورد وراثت در کلاس ها

اگر نظرتون باشه ما مجبور بودیم برای وراثت کنستراکتر رو ریست کنیم و چندین مشکل دیگه که مرحله مرحله اون هارو حل کردیم ولی در class این مشکلات نیست و خیلی سر راست می باشد 

```javascript
class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  draw() {
    console.log('draw');
  }
}

const c = new Circle();
```

حالا فرض کنیم Shape رو بخوایم یک کلار بدیم بهش باید از super استفاده کنیم که به شرح زیر می باشد
```javascript
class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle('red');
```

---

### توضیح در مورد اورراتینگ متد ها

جاوااسکریپت به صورت پیشفرض اول به متد داخل کلاس نگاه می کند بعد به وراثت و پرنتش پس به صورت زیر می تونیم اون رو اورایت کنیم
```javascript
class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  move() {
    console.log('circle move');
  }
}

const c = new Circle();
```

حالا شما یک سناریو دارید که می خواهید Shape متد move رو در move که می خواهید ری رایت کنید استفاده کنید که باید از super دوباره اینجا استفاده کنید

```javascript
class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log('circle move');
  }
}

const c = new Circle();
```

---

## توضیح در مورد Module ها
ماژول ها وقتی که کد هایمان زیاد می شود کمک فراوانی می کند اون هارو در فایل های متعدد قرار می دهد و بعد هر زمانی که نیاز بود لود می کند

- از جمله نگهداری بهتر
- قابل استفاده مجدد
- انتزاع کردن کد ها

```javascript
const _radius = new WeakMap();

class Circle extends Shape {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}

const c = new Circle(10);
console.log(_radius.get(c));
c.draw();
```
به کد بالا نگاه کنید این کد در یک فایل وجود دارد و ما باید اون رو ببریم در فایل مخصوص به خودش و در فایل هایی که می خواهیم import کنیم.

ما در ES5 هیچ موردی مثل module نداریم. این مورد در ES6 به صورت نیتیو ساپورت می شود

---

در این بخش من CommonJS رو اسکیپ کردم. چون راهی هست که معمول هست اگر نیاز دیدید حتما در اینترنت سرچ کنید

در شبه کد بالا `console.log(_radius.get(c));` یک خط داریم که اومدیم چیزی که نباید رو چاپ می کنیم و این امکان برای برنامه نویس اونجا هست خوب وقتی این ها در چند فایل قرار می گیرند دیگر در فایل اصلی قابل دسترسی نیستند چون ما در مواردی که مشخص می کنیم تا ایمپورت شوند بخش private رو دیگر اماده سازی نمی کنیم برای این کار و اون فقط در داخل فایل خودش قالب دسترسی می باشد


ما دو فایل داریم

```javascript
// circle.js
const _radius = new WeakMap();

export class Circle extends Shape {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}

// index.js
import { Circle } from './circle';
const c = new Circle(10);
c.draw();
```

اگر این کارو بدون وب پک انجام بدهیم متاسفانه یسنتکس ارور دریافت می کنیم که کاری که الان می خوایم بکنیم مشکل رو حل می کنه ولی بهتر هست در پروداکشن انجام نشود

کافی هست در فایل html که اومدید index.js رو کال کردید اون رو بگیرید

```
<script src="index.js"></script>
```
تبدیلش بکنید به 

```
<script type="module" src="index.js"></script>
```

باز هم ارور می گیریم که مجبوریم بیاییم
```
import { Circle } from './circle.js';
```
یک .js به اون اضافه کنیم. حالا دیگه مشکل حل می شه. در این بخش فقط می خواستیم مشکل حل بشود و با ماژول آشنا بشید در ادامه راه حل های بهتری ارائه می شود

---

### ابزار های ES6
این ابزار های فقط برای اپلیکیشن هایی هست که می خواهیم برای مروگر بسازیم پس اگر از node اینا استفاده می کنید که نیاز نیست نگران این مورد باشید

- transpiler (translator + compiler)

این مورد می یاد کد های جاوااسکریپت مدرن رو تبدیل می کنه به کد هایی که مروگر می تونه اون هارو به سادگی بخونه یکی از معروف ترین گزینه ها BABEL هست

- bundler

این بخش مسئولیت اینو داره تا تمام js هارو بیاد با هم کامباین کنه تبدیل کنه به یک فایل js یکی از معروف ترین ابزار ها وب پک می باشد. این ابزار امکانات خوبی می دهد علاوه بر موردی که ذکر شده است

---

### اجرای bable
ما برای اجرای این ترنسپایلر نیازمند به node هستیم ولی نیاز نیست در مورد node بدونیم فقط باید روی سیستم خودمون نصب کنیم 
پس نیاز به پکیج منیجر npm نیاز دارید. ما این بخش آموزشی رو اسکیپ می کنیم و لطفا خودتون در اینترنت در موردش بگردید

در مورد نصب این ابزار هم لطفا در سایت سازندش بخونید و تنظیمات رو قرار بدهید کافی هست در فایل پکیج json خودتون بیایید و یک اسکریپت bable رو اضافه کنید و اون می یاد فایل های js شما رو می گیره و در آخر تبدیل می کنه به یک فایل نهایی

---
### اجرا webpack
خوب این مورد رو هم لطفا از سایت سازندش بگیرید چطور نصب می شود و همینطور کانفیگ روی پروژه خودتون
می تونید این پکیج رو به صورت گلوبال نصب کنید و بعد یک سری ابزار های وب پک به شما می دهد مثلا

```
webpack-cli init
```
برای شما کانفیک اولیه رو می سازد و یک سری سوال نیز در مورد عملیاتی که می خواهید از شما می پرسد

در این تنظیمات که از شما سوال می کند اگر گزینه will you be using ES2015 رو yes بزنید براس شما به صورت دیفالت می یاد bable رو نصب می کند


---
---
> این بخش در حدی هست که نوت برداری شده است حتما آموزش سازنده mash hamedani رو ببنید ایشون بسیار فردی با سواد و همینطور معلم خوب برای آموزش می باشد

---
---
