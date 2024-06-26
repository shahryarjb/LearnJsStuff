# نقشه راه جلوگیری از re-render در React

- https://www.developerway.com/posts/react-re-renders-guide
- https://beta.reactjs.org/learn/preserving-and-resetting-state
- https://www.developerway.com/posts/how-to-write-performant-react-apps-with-context
- https://github.com/welldone-software/why-did-you-render

---
در این بخش ما سعی می کنیم خلاصه از این آموزش کامل در رابطه با re-render شدن کامپوننت ها در ReactJS قرار بدیم چه چیزی باعث این پروسه می شود و همینطور چطور جلوی آن را بگیریم.
> همچنین شامل بسیاری از الگوهای مهم است که می تواند به جلوگیری از رندرهای مجدد کمک کند و چند آنتی پترن که منجر به رندرهای مجدد غیرضروری و در نتیجه عملکرد ضعیف می شود.

زمانی که می خواهیم در مورد عملکرد React صحبت کنیم، دو مرحله اصلی وجود دارد که باید به آنها اهمیت بدیم:

- `رندر اولیه` - زمانی اتفاق می افتد که یک مؤلفه برای اولین بار روی صفحه ظاهر می شود
- `دوباره رندر شدن` - هر رندر متوالی از یک مؤلفه که قبلاً روی صفحه ظاهر شده است


رندر مجدد زمانی اتفاق می‌افتد که React باید برنامه را با داده‌های جدید به‌روزرسانی کند. معمولاً این در نتیجه تعامل کاربر با برنامه یا برخی داده‌های خارجی از طریق درخواست های ناهمزمان یا برخی از مدل‌های اشتراکی ارسال می شود اتفاق می‌افتد.

> برنامه‌های غیرتعاملی که هیچ به‌روزرسانی داده ناهمزمانی ندارند، هرگز دوباره رندر نمی‌شوند و بنابراین نیازی به بهینه‌سازی عملکرد رندر مجدد ندارند.


---


### رندر ضروری و غیر ضروری چیست؟

`رندر لازم` - رندر مجدد مؤلفه ای که منبع تغییرات است یا مؤلفه ای که مستقیماً از اطلاعات جدید استفاده می کند. به عنوان مثال، اگر کاربر در یک فیلد ورودی تایپ کند، مؤلفه ای که وضعیت آن را مدیریت می کند باید با هر بار زدن کلید، خود را به روز کند، یعنی دوباره ارائه یا ظاهر شود.

`رندر مجدد غیرضروری` - رندر مجدد مولفه ای که از طریق مکانیسم های رندرهای مختلف به دلیل اشتباه یا معماری ناکارآمد برنامه از طریق برنامه دوباره انجام می شود. به عنوان مثال، اگر کاربر در یک فیلد ورودی تایپ کند و کل صفحه با هر بار زدن کلید مجدداً رندر شود، صفحه بدون اینکه به آن نیاز داشته باشیم دوباره رندر شده است.

> **رندرهای غیرضروری به خودی خود مشکلی ایجاد نمی کنند: React بسیار سریع است و معمولاً بدون اینکه کاربران متوجه چیزی شوند با آنها مقابله می کند.**
> 
با این حال، اگر رندرهای مجدد خیلی زیاد و/یا روی اجزای بسیار سنگین (مواردی که هزینه زیادی برای اعمال دوباره آن ها نیاز است) اتفاق بیفتد، این امر می‌تواند منجر به ایجاد تاخیر در تجربه کاربری شود، تأخیر قابل مشاهده در هر تعامل یا حتی عدم پاسخگویی کامل برنامه می تواند با بزرگ شدن اپ شما چندین برابر خودش را نشان بدهد.

---
### چه وقتی کامپوننت React خودش را دوباره رندر می کند؟

چهار دلیل وجود دارد که یک کامپوننت خود را مجدداً رندر می کند:
تغییر حالت، رندرهای والد (یا فرزندان)، تغییرات زمینه، و تغییر قلاب ها. همچنین یک افسانه بزرگ وجود دارد: این که رندرهای مجدد زمانی اتفاق می‌افتد که اجزای سازنده تغییر می‌کنند. به خودی خود درست نیست (توضیح زیر را ببینید).

#### دلیل دوباره رندر شدن: تغییر State

هنگامی که State یک کامپوننت تغییر می کند، خود را دوباره render می کند. معمولاً یا در یک callback یا در قلاب useEffect اتفاق می افتد.

> **تغییرات State منبع "ریشه" همه رندرها هستند.**


کد نمونه نویسنده اصلی این مقاله برای این بخش: https://codesandbox.io/s/part2-1-re-renders-because-of-state-ngh8uc?file=/src/App.tsx

<img width="1246" alt="part2-state-changes-example" src="https://user-images.githubusercontent.com/8413604/219853256-1f10b2fa-1030-4e56-b178-63ef3fcd366b.png">

ویدیو خلاصه این بخش از زبان نویسنده محتوا اصلی:

https://www.youtube.com/watch?v=ARWX1XdghLk&t=244

---

#### دلیل دوباره رندر شدن: دوباره render شدن والد

اگر والد یک کامپوننت دوباره render شود خود کامپوننت نیز دوباره رندر می گردد. یا اگر از جهت مخالف به این موضوع نگاه کنیم: وقتی یک کامپوننت دوباره رندر می‌شود، همه فرزندان خود را نیز دوباره رندر می‌کند.

> همیشه از درخت «پایین» می‌رود: رندر مجدد یک فرزند باعث رندر مجدد والدین نمی‌شود. در لینک زیر می توانید اطلاعات بیشتری را بدست بیاورید https://www.developerway.com/posts/react-elements-children-parents


کد نمونه برای این بخش از نویسنده محتوای اصلی:

https://codesandbox.io/s/part-2-2-re-renders-because-of-parent-b0xvxt?file=/src/App.tsx

<img width="1239" alt="part2-parent-example" src="https://user-images.githubusercontent.com/8413604/219853473-7a7e4f4f-0975-48bc-a8ec-fa414bd9b9d1.png">


---

#### دلیل دوباره رندر شدن: تغییر در context

هنگامی که مقدار در Context Provider تغییر می‌کند، همه مؤلفه‌هایی که از این Context استفاده می‌کنند، مجدداً رندر می‌شوند، حتی اگر به طور مستقیم از بخش تغییر یافته داده استفاده نکنند. با حفظ کردن مستقیم نمی توان از این رندرها جلوگیری کرد، اما چند راه حل وجود دارد که می تواند آن را شبیه سازی کنیم که در ادامه به آن ها اشاره می کنیم.

نمونه کد از نویسنده محتوای اصلی

https://codesandbox.io/s/part-2-3-re-render-because-of-context-i75lwh?file=/src/App.tsx

<img width="1237" alt="part2-context-example" src="https://user-images.githubusercontent.com/8413604/219853580-84803515-6a9f-49a6-bc26-40c4e7a74a87.png">

---
#### دلیل دوباره رندر شدن: اگر Hook ها تغییر کنند

هر چیزی که در داخل یک Hook اتفاق می افتد، متعلق به کامپوننت است که از آن استفاده می کند. قوانین مشابه در مورد تغییرات Context و State در اینجا اعمال می شود:

- تغییر State در داخل هوک باعث ایجاد یک رندر مجدد غیرقابل پیشگیری از مولفه "میزبان" می شود
- اگر Hook از Context استفاده کند و مقدار Context تغییر کند، یک رندر مجدد غیرقابل پیشگیری از مؤلفه «میزبان» را آغاز می‌کند.


ولی جای نگرانی نیست Hook ها را می توان ایزوله کرد. تک تک Hook ها‌ داخل محیط ایزوله هنوز متعلق به مؤلفه میزبان هستند و قوانین یکسانی برای هر یک از آنها اعمال می‌شود.

نمونه کد از نویسنده:

https://codesandbox.io/s/part-2-4-re-render-because-of-hooks-5kpdrp?file=/src/App.tsx

<img width="1239" alt="part2-hooks-example" src="https://user-images.githubusercontent.com/8413604/219853828-27d3988b-0f90-4c3f-9bf9-2a5f816237a4.png">

---

> دلیل رندر شدن مجدد: Props تغییر می‌کنند
> هنگام صحبت در مورد رندرهای مجدد کامپوننت هایی memoize نشده اند هست، فرقی نمی‌کند که کامپوننت سازنده تغییر کند یا خیر.
> برای اینکه props تغییر کند، باید توسط کامپوننت والد به روز شود. این به این معنی است که والدین باید دوباره رندر شوند، که باعث می‌شود مولفه فرزند بدون توجه به ویژگی‌های آن، رندر مجدد را انجام دهد.

نمونه کد از نویسنده اصلی محتوا:

https://codesandbox.io/s/part-2-5-re-render-props-not-relevant-2b8o0p?file=/src/App.tsx

<img width="1236" alt="part2-props-myth" src="https://user-images.githubusercontent.com/8413604/219854031-3c4cc843-0a27-4ff8-a0da-7cde35084974.png">


تا اینجا ما صحبت کردیم چه چیز هایی باعث این می شوند که re-render اتفاق بیفتد حالا بیاییم جلوی ان ها را بگیریم

---

### جلوگیری از رندرهای مجدد با ترکیب

لینک ویدیو از نویسنده محتوای اصلی در مورد این بخش
https://www.youtube.com/watch?v=7sgBhmLjVws


آنتی پترن: ایجاد کامپوننت در تابع رندر

ایجاد کامپوننت ها در داخل تابع رندر کامپوننت دیگر یک ضدالگو است که می تواند بزرگترین قاتل عملکرد باشد. در هر رندر مجدد، React این کامپوننت را دوباره نصب می‌کند (یعنی آن را از بین می‌برد و دوباره آن را از ابتدا ایجاد می‌کند)، که بسیار کندتر از یک رندر معمولی است. علاوه بر این، این منجر به اشکالاتی مانند:


1. فلش های احتمالی محتوا در حین ارائه مجدد
2. استیت در کامپوننت با هر رندر مجدد ریست می شود
3. هوک useEffect بدون وابستگی ایجاد شده در هر رندر مجدد
4. اگر یک کامپوننت متمرکز بود، تمرکز از بین خواهد رفت

نمونه کد از نویسنده اصلی محتوا:

https://codesandbox.io/s/part-3-1-creating-components-inline-t2vmkj?file=/src/App.tsx

همینطور برای دریافت اطلاعات بیشتر می توانید به لینک زیر مراجعه کنید:

https://www.developerway.com/posts/how-to-write-performant-react-code

<img width="1274" alt="part3-creating-components" src="https://user-images.githubusercontent.com/8413604/219855976-e13517ec-b840-405a-832b-de419663d33c.png">


---

### جلوگیری از رندرهای مجدد با ترکیب: انتقال استیت به پایین

ویدیو از نویسنده محتوای اصلی: https://www.youtube.com/watch?v=7sgBhmLjVws&t=106s

این پترن زمانی می‌تواند مفید باشد که یک کامپوننت بزرگ state را مدیریت کند، و این state فقط در بخش کوچکی از درخت رندر استفاده شود. یک مثال معمولی باز کردن/بستن یک گفتگو با کلیک روی یک دکمه در یک کامپوننت پیچیده است که بخش قابل توجهی از یک صفحه را render می‌کند.

در این حالت، state که یک مودال است، خود گفتگو و دکمه‌ای که به‌روزرسانی را راه‌اندازی می‌کند را کنترل می‌کند، می‌تواند در یک کامپوننت کوچک‌تر محصور شود. در نتیجه، مؤلفه بزرگ‌تر در آن تغییرات state منجر به دوباره رندر شدن نمی‌شود.

کد نمونه از نویسنده اصلی این محتوا:

https://codesandbox.io/s/part-3-2-moving-state-down-vlh4gf?file=/src/App.tsx

برای اطلاعات بیشتر به دو لینک زیر مراجعه کنید:

https://www.developerway.com/posts/react-elements-children-parents
https://www.developerway.com/posts/how-to-write-performant-react-code

<img width="1279" alt="part3-moving-state-down" src="https://user-images.githubusercontent.com/8413604/219856507-bc9a348c-da85-4adf-b802-bf70d9bc3168.png">


---

### جلوگیری از رندرهای مجدد با ترکیب: child به عنوان Props

لینک ویدیو این بخش از نویسنده اصلی این محتوا:
https://www.youtube.com/watch?v=7sgBhmLjVws&t=272s


این را می توان "Wrap State around children" نیز نامید. این پترن شبیه "انتقال State به پایین" است: تغییرات State را در یک کامپوننت کوچکتر محصور می کند. تفاوت در اینجا این است که ئفشفث روی عنصری استفاده می‌شود که بخش کندی از درخت رندر را Wrap می کند بنابراین نمی‌توان آن را به این راحتی استخراج کرد. یک مثال معمولی می‌تواند تماس‌های onScroll یا onMouseMove باشد که به عنصر ریشه یک کامپوننت متصل شده‌اند.


در این شرایط، مدیریت State و اجزایی که از آن State استفاده می کنند را می توان به یک کامپوننت کوچکتر استخراج کرد و کامپوننت کند را در child به آن منتقل کرد. از دیدگاه مولفه‌های کوچک‌تر، child ها فقط پشتیبان هستند، بنابراین تحت تأثیر تغییر State قرار نخواهند گرفت و بنابراین دوباره رندر نمی‌شوند.

لینک نمونه از نویسنده اصلی این محتوا:

https://codesandbox.io/s/part-3-3-children-as-props-59icyq?file=/src/App.tsx


برای اطلاعات بیشتر:

https://www.developerway.com/posts/react-elements-children-parents

<img width="1275" alt="part3-passing-as-children" src="https://user-images.githubusercontent.com/8413604/219856787-0b7eba1f-f4eb-465d-a85b-99d62acd8f79.png">

---
### جلوگیری از رندرهای مجدد با ترکیب: کامپوننت ها به عنوان props

نویسنده اصلی برای این بخش هم ویدیویی آماده کرده است:

https://www.youtube.com/watch?v=7sgBhmLjVws&t=462s


Translation is too long to be saved
تقریباً مانند الگوی قبلی، با همان رفتار: State را در یک کامپوننت کوچکتر محصور می کند، و کامپوننت های بزرگ به عنوان props به آن منتقل می شوند. props ها تحت تاثیر تغییر state قرار نمی گیرند، بنابراین اجزای سنگین دوباره رندر نمی شوند.

زمانی می‌تواند مفید باشد که چند کامپوننت بزرگ مستقل از state باشد، اما نمی‌توان آن‌ها را در یک child به‌عنوان گروه استخراج کرد.

نمونه کد:
https://codesandbox.io/s/part-3-4-passing-components-as-props-9h3o5u?file=/src/App.tsx

لینک های بیشتر برای دریافت اطلاعات:

https://www.developerway.com/posts/react-component-as-prop-the-right-way
https://www.developerway.com/posts/react-elements-children-parents

<img width="1279" alt="part3-passing-as-props" src="https://user-images.githubusercontent.com/8413604/219856978-337e4226-4846-4622-ad26-2fdeb9449c4b.png">

---

### جلوگیری از رندر مجدد با React.memo

برای این بخش هم نویسنده اصلی محتوا یک ویدیو آماده کرده است

https://youtu.be/feEY3Qajrwg



قرار دادن کامپوننت در React.memo زنجیره پایین‌دستی رندرهای مجدد را که در بالای درخت رندر فعال می‌شوند متوقف می‌کند، مگر اینکه ویژگی‌های این مؤلفه تغییر کرده باشد.

این می تواند هنگام رندر کردن یک مؤلفه بزرگ که به منبع رندرهای مجدد وابسته نیست، مفید باشد. منظور این بخش همان State می باشد

کد نمونه از سازنده این محتوا:

https://codesandbox.io/s/part-4-simple-memo-fz4xhw?file=/src/App.tsx

<img width="1276" alt="part4-memo-normal-example" src="https://user-images.githubusercontent.com/8413604/219857100-a290ba55-d868-49d9-b52d-b3db6f6b02e5.png">

---

### جلوگیری با React.memo: کامپوننت با props

برای اینکه React.memo کار کند، همه value که مقادیر اولیه نیستند باید به خاطر بسپارید

نمونه کد از سازنده محتوا اصلی:

https://codesandbox.io/s/part-4-1-memo-on-component-with-props-fq55hm?file=/src/App.tsx

<img width="1278" alt="part4-memo-with-props" src="https://user-images.githubusercontent.com/8413604/219857182-b49e1880-bddc-489f-822b-7107744ab358.png">


---

### جلوگیری با React.memo: کامپوننتی که به عنوان props یا child 

گزینه React.memo باید برای عناصر ارسال شده به عنوان child/props‌ اعمال شود. Memoizing کامپوننت والد کار نخواهد کرد: child و props کامپوننت ها objects خواهند بود، بنابراین با هر رندر مجدد تغییر خواهند کرد.
این موضوع به ریفرنس چک بودن در جاوااسکریپت مربوط می باشد

اطلاعات بیشتر:
https://www.developerway.com/posts/react-elements-children-parents

نمونه کد از نویسنده مطلب اصلی
https://codesandbox.io/s/part-4-2-memo-on-components-in-props-55tebl?file=/src/App.tsx

<img width="1283" alt="part4-memo-as-props" src="https://user-images.githubusercontent.com/8413604/219857330-8fc4239a-f9e6-48c2-bb3a-e0aa95962d78.png">

---

### بهبود عملکرد رندر مجدد با useMemo/useCallback


#### آنتی پترن: استفاده غیرضروری useMemo/useCallback  در props 

اعمال Memoizing روی props  به خودی خود مانع از render  مجدد یک کامپوننت فرزند نمی شود. اگر یکی از کامپوننت ها والد دوباره رندر شود، بدون در نظر گرفتن ویژگی‌های آن، کامپوننت فرزند را دوباره اجرا می‌کند.

کد نمونه ارائه شده از طرف نویسنده اصلی محتوا:

https://codesandbox.io/s/part-5-1-unnecessary-usememo-lmk8fq?file=/src/App.tsx

<img width="1242" alt="part5-unnecessary-usememo-on-props" src="https://user-images.githubusercontent.com/8413604/219864089-5954093a-b0e1-4c26-aa1a-e76acaf91d9f.png">



---

#### استفاده ضروری از useMemo/useCallback

اگر کامپوننت فرزند در React.memo wrapp  شده باشد، همه چیزهایی که مقادیر اولیه نیستند باید به حافظه سپرده شوند.

نمونه کد سازنده محتوا اصلی:

https://codesandbox.io/s/part-5-2-usememo-in-props-trx97x?file=/src/App.tsx

<img width="1247" alt="part5-necessary-usememo-props" src="https://user-images.githubusercontent.com/8413604/219864135-c19c2253-ce6e-4807-9d82-5d8570b06617.png">

اگر کامپونتی از مقدار غیر ابتدایی به عنوان وابستگی در هوک هایی مانند useEffect، useMemo، useCallback استفاده می کند، باید آن را به memoized کرد.


نمونه کد سازنده محتوای اصلی:

https://codesandbox.io/s/part-5-2-usememo-in-effect-88tbov

<img width="1242" alt="part5-necessary-usememo-dep" src="https://user-images.githubusercontent.com/8413604/219864226-5a28268e-f446-416e-bf2a-6c1b17c401c0.png">


---

#### استفاده ازuseMemo برای محاسبات گران قیمت

یکی از موارد استفاده useMemo اجتناب از محاسبات گران قیمت در هر رندر مجدد است.

هوک useMemo هزینه خودش را دارد (کمی حافظه مصرف می کند و رندر اولیه را کمی کندتر می کند)، بنابراین نباید برای هر محاسباتی از آن استفاده کرد. در React، نصب و به‌روزرسانی کامپوننت‌ها در بیشتر موارد در حالت گران‌ترین محاسبه خواهد بود (مگر اینکه واقعاً اعداد اول را محاسبه می‌کنید، که به هر حال نباید در فرانت‌اند انجام دهید).

در نتیجه، مورد استفاده معمول برای useMemo حفظ عناصر React است. معمولاً بخش‌هایی از درخت رندر موجود یا نتایج درخت رندر تولید شده، مانند یک تابع map  که عناصر جدید را برمی‌گرداند.

هزینه عملیات جاوا اسکریپت «خالص» مانند مرتب‌سازی یا فیلتر کردن یک آرایه معمولاً در مقایسه با به‌روزرسانی‌های کامپوننت ها ناچیز است.

نمونه کد سازنده محتوای اصلی

https://codesandbox.io/s/part-5-3-usememo-for-expensive-calculations-trx97x?file=/src/App.tsx

<img width="1277" alt="part5-necessary-usememo-complex" src="https://user-images.githubusercontent.com/8413604/219864377-206b960a-c072-4a74-8bd4-20ddc7e28108.png">



---

## بهبود عملکرد رندر مجدد لیست ها

علاوه بر قوانین و پترن های رندر مجدد معمولی، اتربیوت های یک کلید می تواند بر عملکرد لیست ها در React تأثیر بگذارد.

مهم: ارائه اتربیوت های یک کلید فقط کارایی را بهبود نمی دهد. برای جلوگیری از رندر مجدد عناصر لیست، باید آنها را در React.memo رپ کنید و از بهترین شیوه های آن پیروی کنید

مقدار در کلید باید یک رشته باشد که بین رندرهای مجدد برای هر عنصر در لیست سازگار باشد. به طور معمول، شناسه آیتم یا شاخص آرایه برای آن استفاده می شود.
اگر لیست ثابت است، یعنی عناصر اضافه/حذف/درج/ مرتب نشده اند، استفاده از فهرست آرایه به عنوان کلید اشکالی ندارد.

استفاده از شاخص آرایه در لیست های پویا می تواند منجر به موارد زیر شود:

اگر موارد دارای state یا هر عنصر کنترل نشده ای باشند (مانند ورودی های فرم) اشکال دارد
اگر موارد در React.memo رپ شوند، عملکرد کاهش می یابد


اطلاعات بیشتر در لینک زیر
https://www.developerway.com/posts/react-key-attribute


نمونه کد سازنده برای لیست استاتیک
https://codesandbox.io/s/part-6-static-list-with-index-and-id-as-key-7i0ebi?file=/src/App.tsx

نمونه کد سازنده محتوای اصلی برای لیست پویا

https://codesandbox.io/s/part-6-dynamic-list-with-index-and-id-as-key-s50knr?file=/src/App.tsx

<img width="1275" alt="part6-lists-example" src="https://user-images.githubusercontent.com/8413604/219864637-5882f32f-2f1f-4e0d-86f1-0e5c3b20f10e.png">


---

### آنتی پترن: مقدار تصادفی به عنوان کلید در لیست ها
مقادیر تولید شده به طور تصادفی هرگز نباید به عنوان مقادیر در اتربیوت های کلید در لیست ها استفاده شوند. آنها منجر به نصب مجدد آیتم های React در هر رندر می شوند که منجر به موارد زیر می شود:

- عملکرد بسیار ضعیف لیست
- اگر موارد دارای state یا هر عنصر کنترل نشده ای باشند (مانند ورودی های فرم) اشکال دارد



نمونه کد سازنده محتوا:

https://codesandbox.io/s/part-6-1-random-values-in-keys-z1zhy6?file=/src/App.tsx


<img width="1239" alt="part6-lists-antipattern" src="https://user-images.githubusercontent.com/8413604/219864793-9dfac772-3844-4b75-9be0-66f511160982.png">

---

### جلوگیری از رندرهای مجدد ناشی از Context


#### جلوگیری از رندرهای متنی: به خاطر سپردن ارزش ارائه دهنده

اگر Context Provider در ریشه اصلی برنامه قرار نگرفته باشد و این احتمال وجود دارد که به دلیل تغییرات در اجداد خود بتواند خود را دوباره رندر کند، مقدار آن باید به حافظه سپرده شود.

کد نمونه از سازنده محتوای اصلی:

https://codesandbox.io/s/part-7-1-memoize-context-provider-value-qgn0me?file=/src/App.tsx

<img width="1277" alt="part7-context-provider-memo" src="https://user-images.githubusercontent.com/8413604/219864913-622b94da-9837-4c7f-8ef4-4bc1e4d37ef5.png">

---

#### جلوگیری از رندرهای Context: تقسیم داده ها و API

اگر در Context ترکیبی از داده ها و API (گیرنده و تنظیم کننده) وجود داشته باشد، می توان آنها را به ارائه دهندگان مختلف تحت یک مؤلفه تقسیم کرد. به این ترتیب، مؤلفه‌هایی که فقط از API استفاده می‌کنند، زمانی که داده‌ها تغییر می‌کنند، دوباره ارائه نمی‌شوند.

اطلاعات بیشتر:
https://www.developerway.com/posts/how-to-write-performant-react-apps-with-context


لینک از نمونه کد ارائه شده به وسیله نویسنده محتوای اصلی

https://codesandbox.io/s/part-7-2-split-context-data-and-api-r8lsws?file=/src/App.tsx

<img width="1280" alt="part7-context-split-api" src="https://user-images.githubusercontent.com/8413604/219864987-76eb4bd6-077f-4b49-b14d-8a07e5cc4fd6.png">


---

#### جلوگیری از رندرهای Context: تقسیم داده ها به قطعات

اگر Context چند تکه داده مستقل را مدیریت کند، می توان آنها را به ارائه دهندگان کوچکتر تحت همان ارائه دهنده تقسیم کرد. به این ترتیب، فقط مصرف کنندگان قطعه تغییر یافته دوباره رندر می شوند.

اطلاعات بیشتر:

https://www.developerway.com/posts/how-to-write-performant-react-apps-with-context


<img width="1277" alt="part7-context-split-data" src="https://user-images.githubusercontent.com/8413604/219865078-f6298289-9091-4fc2-bd7f-a7cb38787504.png">

---

#### جلوگیری از رندرهای مجدد Context: انتخابگرهای زمینه

هیچ راهی برای جلوگیری از رندر شدن مجدد کامپوننتی که از بخشی از مقدار Context استفاده می کند، وجود ندارد، حتی اگر قطعه داده استفاده شده تغییر نکرده باشد، حتی با استفاده از هوک useMemo.

با این حال، انتخابگرهای زمینه را می توان با استفاده از higher order component  و React.memo جعل کرد.


اطلاعات بیشتر
https://www.developerway.com/posts/higher-order-components-in-react-hooks-era


نمونه کد ارائه شده از نویسنده اصلی محتوا

https://codesandbox.io/s/part-7-4-context-selector-lc8n5g?file=/src/App.tsx

<img width="1278" alt="part7-context-selectors" src="https://user-images.githubusercontent.com/8413604/219865222-1914033d-9b1f-4e78-8558-e7e131d58637.png">



