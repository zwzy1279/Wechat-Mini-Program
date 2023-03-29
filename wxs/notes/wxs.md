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
## 2.1内嵌的wxs脚本
wxs代码可以编写在wxml文件的```<wxs>```标签中,就像js代码可以写下html中的```<script>```一样<br>
wxml文件的每一个wxs标签，必须提供module属性，用来指定当前的wxs模块名称，方便在wxml中访问模块的成员(wxml不能直接调用js中的方法，调用也是绑定的事件触发。所以采用wxs)<br>
在.wxml中
```
<view>{{username}}</view>
<view>{{m1.toUpper(username)}}</view>
<wxs module="m1">
  //将文本转为大写形式
  module.exports.toUpper=function(str){
    return str.toUpperCase();
  }
</wxs>
```
## 2.2定义使用在外联的wxs脚本
wxs代码还可以编写在.wxs为后缀名的文件中，就像js代码可以编写在.js的文件中一样<br>
在wxml中引入外联的wxs脚本时，必须为```<wxs>```标签添加module和src属性，其中<br>
module用来指定模块的名称<br>
src用来指定要引入的脚本的路径，且必须是相对路径<br>
在.wxs文件中
```
function toLower(str){
  return str.toLowerCase();
}
module.exports={
  toLower:toLower
}
```
在.wxml中
```
<view>{{m2.toLower(username)}}</view>
<wxs src="../../utils/tools.wxs" module="m2"></wxs>
```


