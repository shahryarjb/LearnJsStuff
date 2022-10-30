# معرفی و روش پیاده سازی انواع state در ری اکت
در این بخش از آموزش ها ما انواع state هایی که نیاز هست در پروژه چه با hook های خود ری اکت چه با کتابخانه های واسط رو قرار می دیم و سمپل کد درست می کنیم. لازم به ذکر است کتابخانه واسط انتخاب شده ریداکس است و اگر مورد دیگری را بلد هستید لطفا به پست اضافه کنید

---
## فهرست state ها

1. [useState](#%D8%B3%D8%A7%D8%AE%D8%AA-%D9%84%D9%88%DA%A9%D8%A7%D9%84-state-%D8%A8%D8%A7-usestate)
2. useRef
3. useContext
4. redux

---

### ساخت لوکال state با useState
این مورد در یک فایل یا بهتر بگوییم در یک فانکشن کامپوننت انجام می گیرد و state همون صفحه را نگهداری می کند و لازم به ذکر است در صورت route شدن به صفحه دیگر پاک می شود. این state ورودی اولیه می گیرد. این hook با دوتا کالر صدا زده می شود یکی خود state را بر می گرداند یکی هم state را تغییر می دهد به مثال زیر توجه کنید

```tsx
const ClientHomePage = () => {
 const [foods, setFoods] = useState<FoodsTypes[] | never[]>([]);
 return <HomeTemplate foods={foods} />;
};
```
برای تغییر state می توانید از تابع یا کال بک setFoods مثل یک تابع معمولی استفاده کنید مثلا اون رو تبدیل کنید به یک لیست خالی `([])setFoods`

---
### ساخت لوکال state با useRef
هوک useRef مثل useState عمل نمی کند و بیشتر برای فرم و فیلد های یک فرم استفاده می شود ولی برخی مواقع برای ذخیره تک کلمه یا مواردی مثل boolian باشد می تواند مورد استفاده قرار بگیرد و برخی مواقع بر خلاق useState جلوی re-render شدن کامپوننت را می گیرد و راه کم هزینه تری می باشد
```tsx
const ClientHomePage = () => {
	const loadingRef = useRef(true);

	useEffect(() => {
		console.log("ClientHomePage - useEffect rerender");
		loadingRef.current = false;
	}, []);

	if (loadingRef.current) {
		return <h1>Loading...</h1>;
	}
};

export default ClientHomePage;
```

---
### استفاده از useContext برای ساخت state گلوبال
