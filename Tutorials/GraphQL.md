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
```graphql
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


![Screen Shot 2022-10-20 at 20 02 28](https://user-images.githubusercontent.com/8413604/197006574-41b56120-8152-4a56-8595-5c49db116781.png)

---

### حل مشکل اینیشال شدن اولیه
یکی از مشکلاتی که در ادامه پیچیده تر شدن کد ها باهاش مواجه می شید ارور اینیشال نشدن مثلا کمپانی تایپ هست. فرض کنیم می خوایم اطلاعات یک شرکت با کارمنداشو بیاریم

```js
  name: 'Company',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`).then((res) => res.data);
      },
    },
  },
});
```
چون شرکت اسکیماش بالای اسکیمای کاربران هست شما مطمئنن در `type: new GraphQLList(UserType)` خطا می گیرید و می گه که UserType معرفی نشده است. برای حل این مشکل کافیه یک ارو فانکشن در فیلدز استفاده کنیم مثل کد زیر 
```js
const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`).then((res) => res.data);
      },
    },
  }),
});
```

---
### استفاده از query تو در تو
در قسمت graphql می تونیم یک کوری به این صورت بسازیم
```graphql
{
  company(id: "2") {
    id
    name
    description
    users {
      id
      firstName
      company {
        name
      }
    }
  }
}
```

حال فرض کنیم دوبار بخواهیم company را بیاریم اونجاست که به صورت زیر باید عمل کنیم. دلیل آن این هست که نمی توان در یک آبجکت بیاییم اسک تکراری داشته باشیم

```graphql
{
  apple: company(id: "1") {
    id
    name
    description
    users {
      id
      firstName
      company {
        name
      }
    }
  }
  google: company(id: "2") {
    id
    name
    description
    users {
      id
      firstName
      company {
        name
      }
    }
  }
}
```
اگر توجه کرده باشید قبل از compony اومدیم یک اسم قرار دادیم و این اسم می تواند دلخواه باشد حالا خروجی آن می شود
```js
{
  "data": {
    "apple": {
      "id": "1",
      "name": "Apple",
      "description": "iphone",
      ...
```
---
### استفاده از fragment
فرض کنید یک سری فیلد دارید قرار هست چندین بار تکرار شود اونجاست که می توانید از fragment استفاده کنید به عنوان مثال برای کمپانی که دوباره قرار هست لود شود می آییم یک فرگمنت می سازیم به صورت زیر آخر query

```graphql
fragment companyDetails on Company {
  id
  name
  description
}
```
حالا هرجا فیلد های شرکت یا کمپانی بود می آییم `...companyDetails` قرار می دهیم به صورت مثال
```graphql
{
  apple: company(id: "1") {
    ...companyDetails
    users {
      id
      firstName
      company {
        name
      }
    }
  }
  google: company(id: "2") {
    ...companyDetails
    users {
      id
      firstName
      company {
        name
      }
    }
  }
}
```
---
### ایجاد شرط برای ارسال اجباری یک سری داده ها
لازم به ذکر است ما کلاس اینترفیکس های زیادی را تا به حال فراخوانی کردیم که `GraphQLNonNull` برای اینکه داده ای اجباری باشد استفاده می شود به کد زیر توجه کنید دو فیلد اسم و سن حتما باید به وسیله کاربر ارسال شود
```js
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: GraphQLString },
      },
```

> تمامی متند هایی که استفاده کردیم یا کلاس اینترفیکس ها به شرح زیر می باشد
> `const { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLNonNull } = graphql;`

---
### ارسال داده mutation
اگر به یاد داشته باشید در فایل schema ما یک بخشی داشتیم که در آخر اکسپورت می کردیم که یکی از پارامتر های اون query بود که ما rootQuery رو بهش می دادیم این کد یک تگ دیگه ای داره به نام mutation که باعث می شه ما بتونیم و قادر باشیم اطلاعاتی رو از کاربر بگیریم مثل اضافه کردن کاربر نه فقط کواری زدن
```js
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
```
مثل روت کواری ما اینجا یک تابعی رو هم باید به اسم mutation بسازیم که می تونه اسم دیگه ای هم بگیره 
```js
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: GraphQLString },
      },
      resolve(parentValue, { firstName, age }) {
        return axios
          .post(`http://localhost:3000/users`, {
            firstName,
            age,
          })
          .then((resp) => resp.data);
      },
    },
  },
});
```
همانطور که می بنید در فیلد یک آبجکت با اسم دلخواه درست کردیم addUser و داخلش از نوع user که بالاتر تعریف کردیم قرار دادیم و از کاربر نیز آرگیومنت گرفتیم که دوتا از مواردش هم ضروری می باشد و در آخر با axios یا fetch اون رو به سمت سرور یا دیتابیس می فرستیم.
حالا در بخش کلاینت یوزر باید به این صورت query بزنه

```graphql
mutation {
  addUser(firstName: "Shahryar", age: 30) {
    id
    firstName
    age
  }
}
```
اگر توجه کرده باشید کمی با کواری زدن فرق داره و باید حتما mutation رو ذکر کنیم بعد جایی که نیاز داریم اطلاعات رو بفرستم و داخل آجکت می تونم بگیم بعد از ذخیره داده که چه اطلاعاتی رو بهمون نشون بده . ریسپانس بعد از ذخیره شدن
```json
{
  "data": {
    "addUser": {
      "id": "2CstPPJ",
      "firstName": "Shahryar",
      "age": 30
    }
  }
}
```

### اتصال در کلاینت ساید به ری اکت
متاسفانه این بخش از آموزش قدیمی هست و افزونه های به کاربردی شده به https://www.apollographql.com/docs/react/get-started انتقال پیدا کردند ولی ساختار کلی تغییر زیادی نکرده است در اسناد و ویدیو آماده است که می تونید کامپوننت پرووایدر آپالو رو استفاده کنید

در فایل index.js
```js
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

const client = new ApolloClient({});

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
```

---
### استفاده از کوری به وسیله هوک مربوط به این کتابخانه
مثلا در فایل app.js اگر به شرح زیر می باشد 
```js
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}
```
ما اومدیم usequery رو که برای خود این کتابخانه هست با gql اضافه کردیم حالا وقت آن هست که بیاییم در یک متغیر کواری خودمون رو قرار بدیم

```js
const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
```

حالا بیاییم یک کامپوننت کوچک در app.js بسازیم به شرح زیر 
```js
function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}
```

بعد زمان آن است که اینطور آن را لود کنیم
```js
export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br/>
      <DisplayLocations />
    </div>
  );
}
```
همانطور که می بنید به راحتی برای شما مواردی از جمله loading و error و data آماده شده است تا به راحتی از آن ها استفاده کنید 

به کواری های زیر توجه کنید:
```js
import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
```

حال می توانید کامپوننت آن را به صورت زیر بسازید
```js
function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name='dog' onChange={onDogSelected}>
      {data.dogs.map((dog) => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}
```

---
### کش
مثل اینکه آپلود به صورت دیفالت می یاد اطلاعات از سرور به صورت لوکالی ذخیره می شه برای کش تا درخواست بعدی سریع تر باشه. در کد زیر می بنید که متغیر تعریف شده برای دریافت از کاربر و در هوک هم اون تعریف شده
```js
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
  );
}
```
---
### به روز رسانی کش
خوب برخی مواقع نیاز هست شما مطمئن شوید که اطلاعات سرور و کش شما به روز می باشد که می توانید اینتروال تعریف کنید که هر چند لحظه به روز شود
```js
function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    pollInterval: 500,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
  );
}
```

مورد بعدی ریفچ کردن هست که اطلاعات رو دوباره بگیره و بر اساس یک متغیر هست و اگر متغیر تعریف نشود باز از اطلاعات قبلی دریافت می کند
```js
function DogPhoto({ breed }) {
  const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      <button onClick={() => refetch({ breed: 'new_dog_breed' })}>
        Refetch new breed!
      </button>
    </div>
  );
}
```

> لازم به ذکر است شما می توانید همیشه ریفچ کنید

```js
<button
  onClick={() =>
    refetch({
      breed: 'dalmatian', // Always refetches a dalmatian instead of original breed
    })
  }
>
  Refetch!
</button>
```

---
### اطلاع رسانی مجدد
خوب مورد loading قبلا به این صورت بود که داشت لود می شد برامون یک بولین بر می گردوند حال فرض کنیم می خواهیم ریفچ کنیم در کامپوننت چطور باید عمل کند؟ در اینجا نیاز هست که مورد جدید لود بشه به نام `import { NetworkStatus } from '@apollo/client';` حالا می تونیم در هوک مذکور یک تغییر کوچیک بدیم

```js
import { NetworkStatus } from '@apollo/client';

function DogPhoto({ breed }) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      notifyOnNetworkStatusChange: true,
    }
  );

  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      <button onClick={() => refetch({ breed: 'new_dog_breed' })}>
        Refetch!
      </button>
    </div>
  );
}
```

توضیحات بیشتر:
https://www.apollographql.com/docs/react/data/queries#inspecting-loading-states
