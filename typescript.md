# مراحل یادگیری تایپ اسکریپت

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

```js
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
