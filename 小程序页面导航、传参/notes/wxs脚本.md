# 1.wxs脚本--概述
## 1.1.wxs的应用场景
wxml无法调用在页面的.js中定义的函数，但是，在wxml中可以调用wxs的函数。因此，小程序中wxs的典型应用场景就是"过滤器"
## 1.2.wxs和js的关系
wxs的语法类似于js，但是<br>
(1)wxs有自己的数据类型<br>
number,string,boolean,object,function,array,date,regexp<br>
(2)wxs不支持类似于es6及以上的语法形式<br>
不支持：let,const,解构赋值，展开运算符，箭头函数，对象属性的简写...<br>
支持：var定义变量，普通function函数类似于es5的语法<br>
(3)wxs遵循common.js规范<br>
module对象、require()函数、module.exports对象
# 2.wxs脚本--普通语法
内嵌的wxs脚本
wxs代码可以编写在wxml文件的```<wxs>```标签中,就像js代码可以写下html中的```<script>```一样<br>
wxml文件的每一个wxs标签，必须提供module属性，用来指定当前的wxs模块名称，方便在wxml中访问模块的成员

