# react学习资料汇总

>* 学习笔记
>* demo
>* 心得

##目录结构

### config 配置文件
>* package 包依赖
>* webpack.config.js
>* .eslintrc

以上几个配置文件 可以实习开发 React 热部署。方便学习。
将其放在项目跟目录下：npm install

>* dist 文件夹 是项目运行后 base文件夹

### src 目录为 demo例子代码

#### 1. 例子一 src/myredux 仿redux功能
类似redux功能 

#### 2. 例子二 src/myreduxSec/app
例子：简单登录、列表、添加列表、导航
myreduxThird 对myreduxSec改造成ES6语法。

#### 3. 例子三  src/examplel/counterVanilla
官网例子 counterVanilla

#### 4. 例子四 src/examplel/counter
官网例子 counter

#### 5. 例子五 src/examplel/todos
官网例子todos

#### 6. 例子六 src/examplel/router
官网例子router


## css 文件夹下 darkdown.css 用于软件 Cmd Markdown.exe 生成的html的样式

## 学习文档
学习笔记
>* JavaScript学习笔记_AMD规范
>* JavaScript学习笔记_Reduce和Transduce
>* JavaScript学习笔记_闭包
>* JavaScript学习笔记_非构造函数的继承
>* JavaScript学习笔记_封装
>* JavaScript学习笔记_构造函数的继承
>* JavaScript学习笔记_箭头函数
>* JavaScript学习笔记_模块的写法
>* JavaScript学习笔记_尾调用优化
>* JavaScript学习笔记_异步模式
>* nodeJs笔记20170926.doc
>* react实战.html
>* React学习笔记_react-redux
>* React学习笔记_Reduce()方法详解
>* React学习笔记_redux
>* React学习笔记_redux二



## 学习笔记

### 初始化Redux整体状态流转，如图
![image](https://github.com/csy512889371/reactLearn/blob/master/img/initRedux.jpg)

### 进而触发初始化过程中注册的listener回调函数。如图
![image](https://github.com/csy512889371/reactLearn/blob/master/img/doRedux.jpg)

### mapStateToProps 调用
数据变化才调用
```javascript
function mapStateToProps(state) {
    console.log("get state funciton....");
    return store.getState();
}

function mapStateToProps(state, props) {
    console.log("get state funciton....");
    return store.getState();
}
```
建议和顶端 绑定 1 个store 绑定多个UI
```javascript
UI = connect(mapStateToProps, mapDispatchToProps)(UI);
```
### 思维导图

> * Component like(UI) this.props.onClick  => dispatch(Action) => combineReducers(reducer) => render(component)

![image](https://github.com/csy512889371/reactLearn/blob/master/img/redux1.jpg)

> * Containers connect =>mapDispatchToprops => reducer => mapStateToProps => components
![image](https://github.com/csy512889371/reactLearn/blob/master/img/redux2.jpg)

> * store => action->despatch </br>
> * store => reducer </br>
> * store => subscribe => render =>components </br>

![image](https://github.com/csy512889371/reactLearn/blob/master/img/redux3.jpg)