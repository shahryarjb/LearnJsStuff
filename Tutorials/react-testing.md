# پوشش مباحث آموزشی مربوط به تست اپلیکیشن های react
در شروع این آموزش باید به نکته ای توجه کنید که هرجا روتر هست باید یک روتر مخصوص برای تست درست کنید و همینطور هرجا state هست باید این کار برای state نیز انجام بگیرد مخصوصا برای گلوبال state ها در پروژه. به همین منظور پروایدر برای متد render که مخصوص کتابخانه jest و ری اکت هست باید اور رایت شود و در هر تست این کار تکرار گردد


---
### ماک کردن المنت پرنت و ریداکس
در قطعه کد زیر ما در حقیقت می آییم دوباره ریداکس رو درست می کنیم یا ماک می کنیم با این تفاوت که این بار در index اصلی پروژه نیست بلکه هر کامپوننت را می تواند به عنوان فرزند در وسط خود لود کند به این صورت می توانیم مواردی که state دارد را در آن تست کنیم. این پروسه در ری اکت روتر نیز باید انجام بگیرد که به زودی این کد به روز رسانی می شود

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
