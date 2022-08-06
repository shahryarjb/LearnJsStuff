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
حال در auto کامپلیت این مورد در ایدتور نمایان می شود
