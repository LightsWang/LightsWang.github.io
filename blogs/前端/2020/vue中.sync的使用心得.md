---
title: vue中.sync的使用心得
date: 2020-07-04
tags:
 - 坑
 - vue
categories:
 - 前端
---

## .sync有神马用
- .sync是vue中用于实现简单的“双向绑定”的语法糖，在平时的开发中是非常使用的。
- vue的prop是单向下行绑定：父级的prop的更新会向下流动到子组件中，但是反过来不行。可是有些情况，我们需要对prop进行“双向绑定”。这个时候，就可以用.sync来解决

## .sync怎么用

```
    <my-title :title.sync="title"></my-title>

    // 当子组件需要更新 title 的值时，它需要显式地触发一个更新事件：
    this.$emit('update:title', newValue)
```

这是一个自定义my-title组件，父组件通过prop属性，将title传给子组件，假若子组件想改变title，可以通过这种方式自下而上的改变
