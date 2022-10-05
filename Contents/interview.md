# آمادگی برای مصاحبه

## پوشش مباحث

### 𝗕𝗮𝘀𝗶𝗰 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀:

### 1. Data types

جاوااسکریپت یک زبان داینامیک تایپ هست و مستقیم به یک نوع از داده تخصیص داده نمی شه. و همینطور از نوع weakly typed می باشد به همین منظور ممکن است شما به اشتباه یک نوع استرینگ را با number در یک متغیر جمع کنید که خوباین خودش یک ضعف می باشد
```js
const foo = 42;
const result = foo + "1"; 
console.log(result); // 421
```
ما در جاوااسکریپت موارد زیر را دارا می باشیم برای تایپ ها 
```
Primitive values
Boolean type
Null type
Undefined type
Number type
BigInt type
String type
Symbol type
```
اخیرا Symbol اضافه شده است که امیوتبل می باشد و همینطور یونیک می باشد. لازه به ذکر است یونیک بودن آن ها ریفرنس در حافظه می باشد پس از نظر ولیو نیست به صورت مثال:
```js
const sym2 = Symbol('foo');
const sym3 = Symbol('foo');
Symbol('foo') === Symbol('foo')  // false
```
اطلاعات بیشتر:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

---

### 2. Functions

توابع یکی از بلوک های اصلی جاوااسکریپت هستند در حقیقت هر تابع شبی به یک رویه می باشد و مربوط به یک کار خاص و محاسبه آن ایجاد می گردد. هر رویه ای که دارای یک ورودی و خروجی می باشد و در جهای محدود فراخوانی می شود می تواند واجد شرایط یک تابع بودن باشد. توابع می توانند در یک متغییر قرار بگیرند و همینطور می توانند بدون نام یا ناشناس باشند. متغییر های تریف شده در داخل اسکوپ تابع نمی تواند در جاهای دیگه برنامه فراخوانی شود.
توابع می توانند به صورت تودر تو یا به صورت کلوژر نیز باشند که این یک مثال از آن است

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
const result = fnInside(5); // returns 8
const result1 = outside(3)(5); // returns 8
```

---

### 3. Scope in JavaScript

محدوده یا اسکوپ در حقیقت کانتکسی هست در مورد اگزکیوت کدام ولیو یا شرط قرار است نمایش داده شود تا به آن ها ارجاع داده شود. اگر ولیو یا شرط یا هر موردی که قرار است ارجاع داده شود در محدوده یا اسکوپ نباشد نمی توان از آن استفاده کرد. لازم به ذکر است محدوده می تواند به صورت تو در تو باشد. فرزند ها می توانند به والد دسترسی داشته باشد ولی برعکس آن خیر.
به زبان ساده شما هر قطعه کدی که می زنی مثلا یک if یا یک فانکشن در فانکشن دیگه یک محدوده یا دامنه ای درست می کنی در حقیقت داری برنامه خودتون لایه بندی می کنی در یک محدوده بیای یک متغییر مشخص کنی نیم تونی در جای دیگه ای که در اون محدوده نیست از اون استفاده کنید

جوااسکریپت چندین مدل اسکوپ داره ۱. `Global scope` و ۲. `Module scope:` و ۳. `Function scope`

علاوه بر این، متغیرهای اعلام شده با let یا const می توانند به یک محدوده اضافی تعلق داشته باشند.

- Global scope
- Module scope
- Function scope
- Block scope

---


4. Closure
### 5. Event loop

حلقه رویداد
جاوا اسکریپت دارای یک مدل زمان اجرا بر اساس یک حلقه رویداد است که وظیفه اجرای کد، جمع آوری و پردازش رویدادها و اجرای وظایف فرعی در صف را بر عهده دارد. این مدل با مدل های زبان های دیگر مانند C و Java کاملاً متفاوت است.

مفاهیم زمان اجرا

بخش های زیر یک مدل نظری را توضیح می دهند. موتورهای جاوا اسکریپت مدرن معنایی توصیف شده را پیاده سازی و به شدت بهینه می کنند.

به کد زیر توجه کنید
:

```js
function foo(b) {
  const a = 10;
  return a + b + 11;
}

function bar(x) {
  const y = 3;
  return foo(x * y);
}
const baz = bar(7); // 42
```


۱. هنگام فراخوانی ‍`bar`، اولین فریم حاوی ارجاع به آرگومان های `bar` و متغیرهای محلی ایجاد می شود

۲. وقتی `bar`  تابع `foo`  را فراخوانی می‌کند، یک فریم دوم ایجاد می‌شود و در بالای فریم اول قرار می‌گیرد که حاوی ارجاعاتی به آرگومان‌های foo و متغیرهای محلی
است

۳. وقتی foo برمی گردد، عنصر فریم بالایی از پشته بیرون می آید (فقط فریم تماس `bar` باقی می ماند)

۴. وقتی `bar` برمی گردد، پشته خالی است

---


8. Prototype and prototype chain
9. Class and inheritance
10. DOM
11. bind/call/apply
12. Promise
13. WebAPI
14. Task queue
15. Call stack
16. Async/await
17. Generators
18. Typescript

### 𝗕𝗮𝘀𝗶𝗰 𝗛𝗧𝗠𝗟 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀:
1. block element
2. import
3. etc - infinite questions

### 𝗕𝗮𝘀𝗶𝗰 𝗖𝗦𝗦 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀:
1. Class and other selectors
2. Pseudo Classes
3. Box Model
4. Pseudo Elements
5. CSS type - flex, grid, normal
6. How to centre
7. pseudo classes and elements
8. All element states - active, hover
9. Media queries
10. Pre-processors - SCSS or LESS
1. mixins
11. CSS constants
12. BEM
13. Import

### 𝗕𝗮𝘀𝗶𝗰 𝗪𝗲𝗯 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀:
1. Page rendering cycle
2. http/https/https2
3. CORS
4. Local storage/Session storage
5. Cookie
6. JWT
7. XHR
8. Micro Frontend
9. REST/GraphQL/Socket connection
10. Browser Concepts
11. Debugging Application
12. Chrome Dev Tool Features 

### 𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀:
1. OOPs concept 
2. Design Patterns
a. Singleton 
b. Provider
c. Prototype
d. Observer 
e. Module
f. HOC

3. Understanding V8 in depth 
a. JIT
b. Interpreter
c. Execution
d. Compiler
4. Currying 

### 𝗕𝗮𝘀𝗶𝗰 𝗥𝗲𝗮𝗰𝘁𝗝𝗦 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀 (bonus): - 
1. Introduction JSX
2. React Component
3. Component State and Props
4. Adding Style (CSS)
5. Functional and Class components
6. React Lifecycle Methods
7. Virtual DOM
8. React Hooks
9. Custom Hooks
10. Context API
11. Synthetic Events
12. Routing
13. Data Flow (Redux/Flux)
14. Server-Side Rendering
15. Unit Testing
16. Jest & React Testing library 
17. Mocking Data
18. Understanding Webpack (Bundler)
19. Babel, env, prettier, linter 


---


## وب‌سایت‌ها

- [ ] https://www.frontendinterviewhandbook.com/introduction/

## جاوااسکریپت

- [ ] https://ditty.ir/posts/70-javascript-interview-questions-part-1/nMQzn

## ری‌اکت

- [ ] https://github.com/sudheerj/reactjs-interview-questions

## تایپ‌اسکریپت

- [ ] https://www.interviewbit.com/typescript-interview-questions/

## کوییز لینکدین

- [ ] https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/react/reactjs-quiz.md
- [ ] https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/javascript/javascript-quiz.md
