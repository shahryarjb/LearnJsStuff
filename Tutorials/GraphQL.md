# آموزش اولیه GraphQL
در این آموزش که از یودمی تهیه شده است بسشتر صحبت روی بخش جاوااسکریپیتی GraphQL می باشد و یک سرور با node و اکپسرس برای دریافت و ارسال داده بالا می آورد و هدف نهایی نیز ReactJS می باشد. برای شروع اولیه این آموزش لطفا مطالب جاوااسکریپت و ری اکت را مطالعه کنید. باید توجه داشت اصلا صحبت در مورد بخش سرور با اکسپرس آن نیست شاید در آینده در مطلب جدید دیگری قرار بدهیم قطعه کد ها برای این کار است که فقط بتوانید بخش بکند را با کمترین دانش نسبت به بکند بیارید بالا تا بتونید در بخش کلاینت موارد درخواستی خودتون تمرین و اجرا کنید.

## REF:

- https://balsamiq.com/
- express
- express-graphql
- graphql
- lodash اختیاری می باشد
- json-server اختیاری برای ساخت ای پی آی فیک جی سان
- nodemon اختیاری می باشد و برای اینکه هر سری فایل ها تغییر کردند مجبور به بستن سرور نباشیم بیشتر حالت دولپر دارد
---

### شروع اولیه 

در شروع اولیه ما به یک بخش سرور نیاز داریم که سرور اکپسر ما رو شروع کنه و یک بخش دیگه نیاز داریم که schema ما رو معرفی کنه مثلا چه فیلد هایی داریم یا هر فیلد نوع اون چی هست همه این موارد در ریپو کتابخانه های استفاده شده مستند شده است استفاده از lodash اینجا می تونه تغییر کنه به متد های Array و نیاز نیست حتما از اون استفاده کنید

یک فایل در root پروژه بسازید به نام server.js

```js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));

app.listen(4000, () => {
  console.log('Listening ...');
});
```
کد اون بسیار ساده می باشد در شروع چند کتاخانه و یک فایل schema رو داره لود می کنه. بجز فایل schame که در ادامه می سازیمش فقط کارشون اینکه یک سرور اکسپرس برای بکند بیارند بالا و همینطور فایل معرفی graphql رو بهش بدند همین!

حالا بیایید این مسیر رو بسازید `schema/schema.js` شاید از schema سردر نیارید و تاحالا ندیده باشید یک مثال ساده می زنم وقتی با بکند کار می کنید پس ارتباط مناب و امنی رو با بانک اطلاعاتی خواهید داشت و هر بانک اطلاعاتی یک سری جداول و فیلد هایی رو دارند که در اون داده مدنظر ذخیره می شود. وقتی می خواهید جدولی داشته باشید که کاربران در اون ذخیره بشوند پس فیلد هایی از جمله id, name, age خواهید داشت پس هر کدوم از این موارد نیز یک تایپ دارند و موقع ارسال داده به اون ها نمی شود مثلا id که نوعش استرینگ هست رو اینتیجر یا عدد وارد کرد به ساخت و شکل این جداول shcema می گند و کتابخانه graphql خودش این متد هارو آماده کرده

```js
const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const users = [
  { id: '23', firstName: 'Bill', age: 20 },
  { id: '47', firstName: 'Samantha', age: 21 },
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      },
    },
  },
});

module.exports =  new GraphQLSchema({
  query: RootQuery,
});
```
بجز اطلاعات هارد کد شده بجای دیتابیس که در متغیر users قرار داده شده است ما دو متغیر اصلی و یک اینستنس داریم که بر اساس خود داکیومنت graphql درست شده است

در جدول UserType ما خود اسکیما و شکل فیلد ها و نوعشون برای کاربران مشخص می کنیم که کاملا از کدش مشخص هست در RootQuery ما می آییم تقریبا چیزی مثل ریلیشن شیپ بین جداول رو درست می کنیم که بدونیم چه اسکیما هایی داریم و در آخر نیز با اینستنس از GraphQLSchema می آییم  RootQuery رو رو بهش می دیم و اکسپورت می کنیم تا قالب استفاده باشه به عنوان اسکیما
این شد کد اولیه این بخش

---

### محیط گرافیکی
با کد های بالا ما در حقیقت در آدرس `http://localhost:4000/graphql` می آییم یک حالت گرافیکی ایجاد می کنیم که امکان ساخت کواری دستی وجود دارد و همینطور می توان خروجی اون رو به صورت آنلاین در همون بخش دید. و بخش های دیگه ای هم زیر مجموعه داکیومنت در سمت راست بالا هست. که اطلاعات خوبی را از اسکیما های مربوطه ارائه می دهد

---
### ساخت رلیشن در schema
فرض کنیم هر کاربر در یک شرکت کار می کند و ما سه کاربر داریم و دوتا اسم شرکت دوتاشون در یک شرکت و یکی هم در شرکت دیگر اینجاست که وقتی می خواهیم کاربر شماره یک را صدا بزنیم می خواهیم اطلاعات شرکت هم بیاورد

کواری که کاربر ایجاد می کند به شرح زیر می باشد:
```
{
  user(id: "40") {
    firstName,
    company {
      id,
      name
      description
    }
  }
}
```
و خورجی مورد درخواستش می شود چنین چیزی:
```js
{
  "data": {
    "user": {
      "firstName": "Alex",
      "company": {
        "id": "2",
        "name": "Google",
        "description": "search"
      }
    }
  }
}
```

خوب برای این کار باید schema که ساختیم را کمی تغیر بدهیم برای اینکار یک schema برای شرکت می سازیم به صورت زیر:
```js
const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});
```
و بعد از اون باید در اسکیما user بیاییم آن را اد کنیم تا بشود همراه اطلاعات یک کاربر اطلاعات شرکت آن را نیز آورد
```js
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`).then((res) => res.data);
      },
    },
  },
});
```
همانطور که می بنید ما یک آبجکت company در این بخش باز کردیم که تایپ آن بر اساس همان اسکیمایی هست که بالاتر برای شرکت ساختیم و مثل RootQuery تابع resolve دارد که همان تابعی هست که کمک می کند به ما تا از دیتابیس یا api یا هرچیز دیگری اطلاعات را بگیریم و به کاربر نشان بدهیم 
