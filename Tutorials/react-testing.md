# پوشش مباحث آموزشی مربوط به تست اپلیکیشن های react
در شروع این آموزش باید به نکته ای توجه کنید که هرجا روتر هست باید یک روتر مخصوص برای تست درست کنید و همینطور هرجا state هست باید این کار برای state نیز انجام بگیرد مخصوصا برای گلوبال state ها در پروژه. به همین منظور پروایدر برای متد render که مخصوص کتابخانه jest و ری اکت هست باید اور رایت شود و در هر تست این کار تکرار گردد

> فریم ورک nextjs خیلی در تنظیم تست مخصوصا jest خوب عمل کرده و ارور خیلی کمی داره برای ایده گرفتن به نظرم `npx create-next-app@latest --example with-jest first-next-test` رو کامند اجرا کنید و فایل هاشو ببنید. موردی بعدی اینکه کتابخانه هایی مثل ری اکت بوتسترپ ارور هایی رو می دند و باید دقت بشه که حتما حتما از داکیومنت import هاشو انجام بدید نه خود ادیتور پیشنهاد داد و اگر بازم تست شما شکسته شده مرحله به مرحله غیر فعال کنید ببنید با کدوم کامپوننت مشکل دارید بعد از اون بیایید اون قسمت مثلا دستی بوتسترپ بنویسید.


---
### ماک کردن المنت پرنت و ریداکس
در قطعه کد زیر ما در حقیقت می آییم دوباره ریداکس رو درست می کنیم یا ماک می کنیم با این تفاوت که این بار در index اصلی پروژه نیست بلکه هر کامپوننت را می تواند به عنوان فرزند در وسط خود لود کند به این صورت می توانیم مواردی که state دارد را در آن تست کنیم. این پروسه در ری اکت روتر نیز باید انجام بگیرد که به زودی این کد به روز رسانی می شود

> نکته: فرق نمی کند از it یا test استفاده کنید پس در تست ها وقتی می بنید گیج نشید هر دو یکی هست

```tsx
import {
  render as originalRender,
  RenderResult,
  RenderOptions,
} from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { RootState, store } from '../../../apps/state/store';

/**
 * `CustomRenderOptions` is an object with two optional properties: `preloadedState` and
 * `renderOptions`. The `preloadedState` property is of type `RootState` and the `renderOptions`
 * property is of type `Omit<RenderOptions, 'wrapper'>`.
 *
 * The `Omit` type is a built-in type that allows you to omit a property from a type. In this case,
 * we're omitting the `wrapper` property from the `RenderOptions` type.
 * @property {RootState} preloadedState - The initial state of the Redux store.
 * @property renderOptions - This is an object that contains the following properties:
 */
type CustomRenderOptions = {
  preloadedState?: RootState;
  renderOptions?: Omit<RenderOptions, 'wrapper'>;
};

// should add a router history memory like & { history: MemoryHistory }
type CustomRenderResult = RenderResult;

/* Setting the initial state of the store. */
const initialStates: RootState = { globalError: {} ,userOrders: [] };

/**
 * It takes a React element, wraps it in a Redux Provider, and then renders it
 * @param {ReactElement} ui - ReactElement
 * @param {CustomRenderOptions}  - ui: ReactElement
 * @returns The render function is being returned.
 */
function render(
  ui: ReactElement,
  { preloadedState = initialStates, ...renderOptions }: CustomRenderOptions = {}
): CustomRenderResult {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  // should add { routeHistory, initialRouteIndex } objects for router
  const renderObject = originalRender(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });

  return { ...renderObject };
}

export * from '@testing-library/react';
// Overwrite the render method
export { render };
```

---

### نمونه تست
باید توجه داشته باشید که در ری اکت کنار کامپوننت ها می آیند با همان اسمشان و فقط با اضافه کردن یک test یا spec تست نویسی را شروع می کنند ولی در nextjs تمام موارد به یک فولدری به نام `__test__` انتقال پیدا می کند و بازم یا spec یا test قرار می گیرد

چند نمونه تست معمول:
```tsx
test('Displays reservation and purchase more button when reservations exist', async () => {
  render(<UserReservations userId={1} />);

  const purchaseButton = await screen.findByRole('button', {
    name: /Purchase more tickets/i,
  });

  expect(purchaseButton).toBeInTheDocument();
});

test('Displays no reservations and purchase button when no reservations exist', async () => {
  render(<UserReservations userId={0} />);

  const purchaseButton = await screen.findByRole('button', {
    name: /purchase tickets/i,
  });

  expect(purchaseButton).toBeInTheDocument();

  const ticketsHeading = screen.queryByRole('heading', {
    name: /your tickets/i,
  });

  expect(ticketsHeading).not.toBeInTheDocument();
});
```

> نکته: باید توجه داشت که می توانیم برای کار های تکراری در سایپرس تسک درست کنیم به عنوان پلاگین

---
### ماک کردن درخواست های http و گراف کیو ال
چه در nextjs و چه در React کتابخانه https://mswjs.io/ بسیار کاربردی و خوش کانغیگ هست در کل مراحل کانفیگ آن با چند کپی پست انجام می شود

اول اون رو به صورت دولپر نصب می کنید
```
npm install msw --save-dev
```

بعد می آیید یک مسیر می سازید `src/mocks` و داخل اون `handlers.js` و در داخل این فایل هم خط های زیر رو کپی می کنید

```js
import { rest } from 'msw'
export const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),
  // Handles a GET /user request
  rest.get('/user', null),
]
```
همانطور که می بنید داخل handlers ما دوتا مسیر رو ماک کردیم که شما باید بر اساس نیازتون اینکارو بکنید مثلا در یک پروژه دیگری من اینطور ماک کردم
```js
import { fakeUserReservations } from '@/__tests__/__mocks__/fakeData/userReservations';

export const handlers = [
  rest.get(`http://localhost:3000/api/shows/:showId`, async (req, res, ctx) => {
    const { fakeShows } = await readFakeData();
    const { showId } = req.params;

    return res(ctx.json({ show: fakeShows[Number(showId)] }));
  }),
  rest.get(
    `http://localhost:3000/api/users/:userId/reservations`,
    (req, res, ctx) => {
      return res(ctx.json({ userReservations: fakeUserReservations }));
    }
  ),
];
```
اطلاعات بیشتر و چطور ماک کردن در لینک زیر
https://mswjs.io/docs/getting-started/mocks/rest-api

حالا بیایید بریم سر موضوع اینکه چطور تست هارو اجرا کنیم

یک فایل در مسیر `src/mocks/server.js` می سازید و کد های زیر رو کپی می کنید در داخل اون
```js
// src/mocks/server.js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'
// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)
```

حالا آخرین مرحله این هست که در حقیقت هر تست این اجرا شود و همینطور استپ شود یا به روالی ریست گردد پس در مسیر پروژه ای که jest رو کانفیگ کردید بگردید و فایل `src/setupTests.js` رو پیدا کنید و به این صورت عمل کنید
```js
// src/setupTests.js
import { server } from './mocks/server.js'
// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())
```

---
### ساخت پلاگین در سایپرس
این کتابخانه یا فریم ورک مربوط به تست یک فایلی در مسیر می سازد `cypress.config.ts` در این فایل شما می توانید یک سری پلاگین بسازید که در فایل های دیگر تست اون هارو صدا کنید به عنوان مثال ما یک ریست کننده فایل json درست می کنیم که مثل دیتابیس در هر تست اولش پاکش کند

```js
import { defineConfig } from 'cypress'
const { resetDB } = require('./__tests__/__mocks__/db/utils/reset-db');

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        'db:reset': () => resetDB().then(() => null),
      });
    },
  },

  "component": {
    "devServer": {
      "framework": "next",
      "bundler": "webpack"
    }
  }
})
```
اگر توجه کنید ما یک تسک تعریف کردیم به نام db:reset که کد زیر هست
```js
on('task', {
    'db:reset': () => resetDB().then(() => null),
});
```
حالا در تست می تونیم به این صورت عمل کنیم

```js
it('resets the db', () => {
  cy.task('db:reset');
});
```
