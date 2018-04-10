# webpackvue

npm run build ---正式环境

npm run dev ---开发环境

http://htmlpreview.github.io/?https://github.com/abc2888630/webpackvue/blob/master/dist/index.html#/


#树形菜单

是用递归的思想来实现

在使用状态管理时，我们一定要记住，一旦数据写到了 state 中时，就不能再添加其它属性了。
什么时间？就拿上面的 menus 数据来说：
比如，本来菜单数据中没有 isExpanded 这个字段的,然后你在 mutations 的方法中给 menus 对象添加了一个 isExpanded 属性，但你会发现属性是不会被状态管理追踪到的，所以我们一开始就给这个数据添加了 isExpanded 和 isSelected 。


# 组件路由与懒加载
要先安装
npm install --save-dev babel-plugin-syntax-dynamic-import
