---
title: Vue2 和 Vue3 创建相同组件的差异
time: 2020年5月1日
category: Vue
description: 随着 Vue3 即将发布，许多人都在想“ Vue2与Vue3有何不同？”
cover: https://gitee.com/chinesee/images/raw/master/img/img_035.png
type: translate
author: Matt Maribojoc
from: LearnVue
from_url: https://learnvue.co/2020/02/building-the-same-component-in-vue2-vs-vue3/
---

随着Vue3即将发布，许多人都在想“ Vue2与Vue3有何不同？”

尽管我们之前已经写过有关最大变化的文章，但实际上并没有真正深入地了解我们的代码将如何变化。因此，为了显示这些更改，我们将在Vue2和Vue3中构建一个简单的表单组件。 

到本文结尾，您将了解Vue2和Vue3之间的主要编程差异，并逐步成为一名更好的开发人员。

如果您想知道如何构建第一个Vue3应用程序，请查阅我们初学者的Vue3 Alpha应用程序指南。

好吧-走吧！

# 创建我们的模板

对于大多数组件，Vue2和Vue3中的代码将非常相似，甚至不完全相同。但是，Vue3支持Fragments，这意味着组件可以具有多个根节点。 

在呈现列表中的组件以删除不必要的包装div元素时，这特别有用。但是，在这种情况下，我们将为两个版本的Form组件保留一个根节点。

```html
Vue2

<template>
  <div class='form-element'>
    <h2> {{ title }} </h2>
    <input type='text' v-model='username' placeholder='Username' />
    
    <input type='password' v-model='password' placeholder='Password' />

    <button @click='login'>
      Submit
    </button>
    <p> 
      Values: {{ username + ' ' + password }}
    </p>
  </div>
</template>
```

唯一真正的区别是我们访问数据的方式。在Vue3中，我们的反应性数据都包装在反应性状态变量中-因此我们需要访问该状态变量以获取我们的值。

```html
Vue3

<template>
  <div class='form-element'>
    <h2> {{ state.title }} </h2>
    <input type='text' v-model='state.username' placeholder='Username' />
    
    <input type='password' v-model='state.password' placeholder='Password' />

    <button @click='login'>
      Submit
    </button>
    <p> 
      Values: {{ state.username + ' ' + state.password }}
    </p>
  </div>
</template>
```