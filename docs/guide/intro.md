<!-- 目录 -->
[[toc]]

## 跳转
[Home](/) <!-- 点击跳转到 根目录的 index.md -->

[install](/guide/install)

[foo heading](./#heading) <!-- 锚点会定位到 foo 的 heading 标题 -->

[bar - three](../bar/three) <!-- 你可以不写后缀名 -->

[bar - three](../bar/three.md) <!-- 也可以加 .md -->

[bar - four](../bar/four.html) <!-- 或者加 .html -->

## 表格

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## emoji

:100: :+1: :smile: :sparkles: :camel: :tada: :rocket: :metal: :face_with_thermometer:

## 自定义容器

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details danger
This is a details block.
:::

### 代码

```js
export default {
  name: 'MyComponent',
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

### 行高亮

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```