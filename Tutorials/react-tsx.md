# مراحل یادگیری ری اکت با تایپ اسکریپت

### ساخت یگ پروژه ری اکت
```
npx create-react-app app_name --template typescript
```

### معرفی یک متغییر به عنوان ری اکت

به کد زیر توجه کنید

```tsx
export const Child = ({color}: ChildProps) => {
    return <div>{color}</div>
};
```
همانطور که در کد بالا می بنید ما یک متغییر ساختیم و تایپ هارو مشخص کردیم ولی سیستم نمی داند این یک ری اکت کامپوننت هست پس دستورات آن را نمی آورد. حالا تغییر می دهیم به مورد زیر
```tsx
export const ChildAsFc: React.FC<ChildProps> = ({color}) => {
    return <div>{color}</div>
};
```
حال در auto کامپلیت این مورد در ایدتور نمایان می شود. حالا فرض کنید شما می خواهید یکی از این فانکشن ها که اولیش مثلا Child هست رو صدا بزنید. وقتی اون رو صدا می زنید باید به صورت تک خطی باشه مثلا
```tsx
return <Child color="red" onClick={() => console.log('Cliked')} />
```
نمی تونید صدا بزنید مثلا
```tsx
return <Child color="red" onClick={() => console.log('Cliked')}/>
    ssss
    </Child>;
```
بخاطر اینکه در اینترفیس مثلا شما فقط گفتید

```tsx
interface ChildProps {
    color: string;
    onClick: () => void;
}
```
فقط رنگ و فانکشن بیاد ولی بین دوتا چایلد رو اگر چیزی بیاد خطا می گیرید اینجاست که باید مثل کد بالا از دومین متغییر که با ` React.FC` استفاده کنید

```tsx
interface ChildProps {
    color: string;
    onClick: () => void;
    children: any;
}


export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => {
    return (
        <div>
            {color}
            {children}
            <button onClick={onClick}>Clic me</button>
        </div>
    );
};
```

### کتابخانه های پیشفرض اکثر پروژه ها ( به روز می شود)

1. redux-thunk
2. redux
3. react-redux
4. @types/react-redux
5. axios


---

### استفاده از کلاس set

```ts
setContent(prev => [...new Set([...prev, ...lastPosts.entries])])
```
باید تبدیل شود به
```ts
setContent(prev => Array.from(new Set([...prev, ...lastPosts.entries])));
```
