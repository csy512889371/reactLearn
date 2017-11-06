# reactLearn
> * 学习笔记 demo： 包含简单的登录、列表

# 配置文件
>* 1 package 包依赖
>* 2 webpack.config.js
>* 3 .eslintrc

# redux学习demo

## 1. 例子一 src/myredux 仿redux功能
类似redux功能 

## 2. 例子二 src/myreduxSec/app
例子：简单登录、列表、添加列表、导航

## 3. 例子三  counterVanilla
src/examplel/counterVanilla 官网例子 counterVanilla
myreduxThird 对myreduxSec改造成ES6语法。

## 4. 例子四 counter
src/examplel/counter 官网例子 counter

## 5. 例子五 todos
src/examplel/todos 官网例子todos


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