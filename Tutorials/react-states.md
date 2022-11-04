# معرفی و روش پیاده سازی انواع state در ری اکت
در این بخش از آموزش ها ما انواع state هایی که نیاز هست در پروژه چه با hook های خود ری اکت چه با کتابخانه های واسط رو قرار می دیم و سمپل کد درست می کنیم. لازم به ذکر است کتابخانه واسط انتخاب شده ریداکس است و اگر مورد دیگری را بلد هستید لطفا به پست اضافه کنید

---
## فهرست state ها

1. [useState](#%D8%B3%D8%A7%D8%AE%D8%AA-%D9%84%D9%88%DA%A9%D8%A7%D9%84-state-%D8%A8%D8%A7-usestate)
2. [useRef](#%D8%B3%D8%A7%D8%AE%D8%AA-%D9%84%D9%88%DA%A9%D8%A7%D9%84-state-%D8%A8%D8%A7-useref)
3. useContext
4. [redux](#%D8%A7%D8%B3%D8%AA%D9%81%D8%A7%D8%AF%D9%87-%D8%A7%D8%B2-redux-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B3%D8%A7%D8%AE%D8%AA-state-%DA%AF%D9%84%D9%88%D8%A8%D8%A7%D9%84)

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


---
### استفاده از redux برای ساخت state گلوبال
برای ساخت این state یک هوک می سازیم که تایپ ها داخلش باشد و همینطور یک فایل معرف کلی به نام store و برای هر استیت نیز اسلایس نامگذاری می کنیم

فایل store

```ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import errorReducer from './general/errorSlice';

/* Creating a store with the reducer. */
export const store = configureStore({
  reducer: {
    globalError: errorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
```

در این فایل یک بخش داریم به نام reducer که می آییم هر اسلایس یا استیدی درست می کنیم را در اون قرار می دیم فعلنه فقط در این آموزش globalError رو داریم. بعد از این مرحله یک hook درست می کنیم که به ما کمک کند تا هم تایپ اسکریپت رو مدیریت کنیم هم راحتر صدا بزنیم

```ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
/* A type definition for useSelector. */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

و حالا زمان این هست که state مورد نظر را بسازید. در استیت زیر ما save و همینطور clean را درست می کنیم و موردی بعدی اینکه از state اصلی ولیو مورد نظر را لود می کنیم
```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ErrorState {
  text?: string;
  type?: 'success' | 'danger' | 'warning';
}

const initialState: ErrorState = {};

export const errorReducer = createSlice({
  name: 'error',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<ErrorState>) => {
      state.text = action.payload.text;
      state.type = action.payload.type;
    },
    clean: (state) => {
      return initialState
    },
  },
});

export const { save, clean } = errorReducer.actions;
export const selectError = (state: RootState) =>
  Object.keys(state.globalError).length === 0 ? null : state.globalError;

export default errorReducer.reducer;
```

در آخرین مرحله کانفیگ نیاز است که بیاییم آن را در app یا index بستگی به فریم ورک شما دارد آن را معرفی کنیم
```ts
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../apps/state/store';
...
<ReduxProvider store={store}>
  <Layout>
    <Component {...pageProps} />
  </Layout>
</ReduxProvider>
```

حال در هر فایلی نیاز دارید می تونید آن را صدا کنید یا آن را ویرایش کنید منظورم استیت مورد نظر شماست. برای صدا زدن شما باید فایل خود استیت که همان اسلایس هست را در جایی که نیاز دارید صدا بزنید و همینطور هوک دیسپچ رو از فایل هوکی که ساختیم
```ts
import { useAppSelector, useAppDispatch } from '../../apps/state/hooks';
import { clean, selectError } from '../../apps/state/general/errorSlice';
...
// call hooks
const error = useAppSelector(selectError);
const dispatch = useAppDispatch();
```

خوب با کد های بالا زمانش رسیده مثلا در html بیاییم بر اساس کلیک کاربر کاری را انجام بدهیم. در این مثال پاک کردن state
```tsx
{error && (
<div onClick={() => dispatch(clean())}>
  <AlertComponent text={error.text!} type={error.type!} />
</div>
)}
```
در قطعه کد بالا ما هم اومدیم متغیر error رو لود کردیم هم اومدیم یک دیسپچ کردیم تابع درخواستی برای پاک کردن state که قبلا نوشتیمش برای تابع save هم می تونید مثلا اینجوری عمل کنید
```ts
dispatch(save({ text: error.message, type: 'danger' }));
```
