# ساختار فایل در پروژه های ری اکت

در این بخش یکی از موارد ارائه شده مربوط به کتاب حرکت به مسیر اینترپرایز در ری اکت می باشد و دیگری نمونه استفاده شده در پروژه های [میشکا](https://github.com/mishka-group) می باشد که هر کدام ویژگی ها و همینطور دلایل مخصوص به خودشان را دارند. ولی هر دوی آن ها Encapsulating components  و جدا سازی business logic رو در خودشون دارند

## نمونه استفاده شده در پروژه های میشکا

```
public
  |-- assets
src
  |-- __TEST__
    |-- mockedData
  |-- apps
    |-- each subsystems // like users, auth
      |-- exampleQuery.ts // for api etc
      |-- exampleSchema.ts // sender or etc like axios interceptor
      |-- behaviour.ts // Typescript types, decorator and custom debugger
    |-- states
    |-- helper or utilities// each subsystems can have its helper, but it is global
  |-- pages
  |-- template
    |-- each template or aggregator .tsx
      |-- components
        |-- ExampleComponents.tsx
      |-- ExampleTemplate.tsx
    |-- layout
      |-- components
        |-- ExampleGlobalComponents.tsx // textField, etc
      |-- Layout.tsx  
  |-- router.ts
```
## نمونه استفاده شده در کتاب مذکور


```
src
|-- api
|-- assets
  |-- fonts 
  |-- images
|-- components
  |-- common
    |-- button
      |-- Button.tsx
    |-- form
      |-- TextField.tsx
      |-- FieldLabel.tsx
    |-- text
      |-- Typography.tsx
      |-- Headline.tsx
  |-- transitions
|-- hooks
|-- context
|-- layout
|-- config
|-- constants
|-- helpers
|-- intl (optional)
|-- services
|-- store
|-- styles
|-- types
|-- views
```
