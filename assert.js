/**
 * Created by dllo on 17/4/20.
 */
var assert=require('assert');
//
// var a=null;
// var b=1;
// function abc(num) {
//     return a=num;
// }
// abc(2);
//assert(value[, message])
//参数1表示表达式
//参数2表示当参数1的表达式不成立时候给出的错误提示
// assert( a === b, 'a!=b');



// assert.deepEqual(actual, expected[, message])
//参数1:目前值
//参数2:预期值
//参数3:当前两者比较不相等时的错误提示信息
//在两者比较的时候不比较对象的原型、连接符、或不可枚举的属性。 这可能会导致一些意料之外的结果.
//如:Error('a')的原型和Error('b')不等,但是他们的值是相等的,则不会报错
// assert.deepEqual(Error('a'), Error('b'));



const obj1 = {
    a : {
        b : 1
    }
};
const obj2 = {
    a : {
        b : 2
    }
};
const obj3 = {
    a : {
        b : 1
    }
};
// Object.create() 方法使用指定的原型对象和其属性创建了一个新的对象
//即obj4是obj1对象原型的一个新的对象
const obj4 = Object.create(obj1);

// assert.deepEqual(obj1, obj1,'不相等');
// 通过，对象与自身相等

// assert.deepEqual(obj1, obj2,'不相等');
// 抛出 AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// b 的值不同

// assert.deepEqual(obj1, obj3,'不相等');
// 通过，两个对象相等

// assert.deepEqual(obj1, obj4,'不相等');
// 抛出 AssertionError: { a: { b: 1 } } deepEqual {}
// 原型会被忽略


// assert.notDeepEqual(actual, expected[, message])
// 与assert.deepEqual相反









// assert.deepStrictEqual(actual, expected[, message])
// assert.deepStrictEqual与assert.deepEqual类似,只是他的判断运算符是'===',并且比较前后项的原型

// assert.notDeepStrictEqual(actual, expected[, message])
//与assert.deepStrictEqual相反



// assert.Equal(actual, expected[, message])
//简单对比两个参数的值是否相等

// assert.notEqual(actual, expected[, message])
//与assert.Equal相反

// assert.fail(actual, expected, message, operator)
//参数1和参数2是两个值
//参数3是错误提示信息
//参数4是当没有参数3时候链接参数1和2的字符串
// assert.fail(1, 2,undefined,'>');



// assert.ifError(value)
//如果value为真则抛出value,value为假则不抛出信息



// assert.ok(value[, message])
//当value不为真值，则抛出message


