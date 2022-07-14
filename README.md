# مراحل یادگیری جاوااسکریپت

### جلوگیری از ریفرش شدن صفحه وب سایت 


```js
document.querySelector('#someIDOfAForm').addEventListener('submit', function(e) {
    e.preventDefault // it prevents refresh the post
    e.target.elements.productTitle.value // productTitle is the name of a field in a form
})
```
