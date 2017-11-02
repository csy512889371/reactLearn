'use strict';

/**
 * 测试 apply call bind
 * @type {{x: number}}
 */



/**
 * 测试 javascript aop 一
 * @type {{x: number}}
 */
/*let advice = function (originalFunc) {
    console.log("before function");
    originalFunc();
    console.log("after function");
};

let obj = {
    foo : function () {
        console.log('foo');
    }
};

advice(obj.foo);*/

/**
 * 测试 javascript aop 二
 * @type {{x: number}}
 */

/*let advice = function (originalFunc) {
    return function () {
        console.log("before function");
        originalFunc();
        console.log("after function");
    }

};

let obj = {
    foo : function () {
        console.log('foo');
    }
};

obj.foo =  advice(obj.foo);
obj.foo();*/

/**
 * 测试 javascript aop 三
 * @type {{x: number}}
 */

/*let advice = function(originalFunc){
    return function() {
        console.log("before function");
        originalFunc();
        console.log("after function");
    }
};
let obj = {
    foo: function(){
        console.log(this.name);
    },
    name: "obj"
};

let exist = obj.foo;
let keepContext = function() {
    return exist.call(obj);
};

obj.foo = advice(keepContext);
obj.foo();*/

/**
 * 测试 javascript aop 四
 * @type {{x: number}}
 */

/*let obj = {
    foo: function(){
        console.log(this.name);
    },
    name: "obj"
};

let advice = function(originalFunc, obj){
    let exist = obj.foo;
    return function() {
        console.log("before function");
        exist.call(obj);
        console.log("after function");
    };
};

obj.foo = advice(obj.foo, obj);
obj.foo();*/


/**
 * 测试 javascript aop 五
 * @type {{x: number}}
 */

/*function around(obj, prop, advice){
    let exist = obj[prop];
    let advised = advice(function(){
        return exist.call(obj, arguments);
    });
    obj[prop] = advised;
}

let advice = function(originalFunc){
    return function() {
        console.log("before function");
        originalFunc();
        console.log("after function");
    }
};
let obj = {
    foo: function(){
        console.log(this.name);
    },
    name: "obj"
};

around(obj, 'foo', advice);

obj.foo();
obj.foo();*/

/**
 * 测试 javascript aop 六
 * @type {{x: number}}
 */
/*function around(obj, prop, advice){
    let exist = obj[prop];
    let previous = function(){
        return exist.call(obj, arguments);
    };
    let advised = advice(previous);
    obj[prop] = advised;

    return {
        remove: function(){
            obj[prop] = exist;
            advice = null;
            previous = null;
            exist = null;
            obj = null;
        }
    }
}

let count = 1;
let advice = function(originalFunc){
    let current = count++;
    return function() {
        console.log("before function " + current);
        originalFunc(arguments);
        console.log("after function " + current);
    }
};

let obj = {
    foo: function(arg){
        console.log(this.name + " and " + arg);
    },
    name: "obj"
};

let h1 = around(obj, 'foo', advice);
let h2 = around(obj, 'foo', advice);
obj.foo();
h1.remove();
obj.foo();
h2.remove();
obj.foo();*/



