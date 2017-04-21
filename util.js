/**
 * Created by dllo on 17/4/21.
 */
const util=require('util');
//实现对象间原型继承 的函数
// util.inherits(继承, 原型);

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);
//定义了一个基础对象Base 和一个继承自Base 的Sub，Base 有三个在构造函数 内定义的属性和一个原型中定义的函数，
// 通过util.inherits 实现继承。运行结果如下：
// base
// Hello base
// { name: 'base', base: 1991, sayHello: [Function] }
// sub
// { name: 'sub' }




// util.inspect
// util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。
// 它至少接受一个参数 object，即要转换的对象。
// showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
// depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归2层，
// 指定为 null 表示将不限递归层数完整遍历对象。 如果color 值为 true，输出格式将会以ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。
// 特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了toString 方法也不会调用。
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
//参数写全的
console.log(util.inspect(obj, true,2,true));
// 运行结果是：
// Person { name: 'byvoid', toString: [Function] }
// Person {
//     name: 'byvoid',
//         toString:
//     { [Function]
//         [length]: 0,
//         [name]: '',
//         [arguments]: null,
//         [caller]: null,
//         [prototype]: { [constructor]: [Circular] } } }



// util.format(format[, ...args])
// format <String> 一个类似 printf 的格式字符串。
// util.format() 方法返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式。
//
// 第一个参数是一个字符串，包含零个或多个占位符。 每个占位符会被对应参数转换后的值所替换。 支持的占位符有：
//
// %s - 字符串。
// %d - 数值（包括整数和浮点数）。
// %j - JSON。如果参数包含循环引用，则用字符串 '[Circular]' 替换。
// %% - 单个百分号（'%'）。不消耗参数。
// 如果占位符没有对应的参数，则占位符不被替换。

util.format('%s:%s', 'foo');
// 返回: 'foo:%s'

// 如果传入 util.format() 方法的参数比占位符的数量多，则多出的参数会被强制转换为字符串（对于对象和符号，使用 util.inspect()），
// 然后拼接到返回的字符串，参数之间用一个空格分隔。
util.format('%s:%s', 'foo', 'bar', 'baz');
// 'foo:bar baz'
// 如果第一个参数不是一个格式字符串，则 util.format() 返回一个所有参数用空格分隔并连在一起的字符串。.
// 每个参数都使用 util.inspect() 转换为一个字符串。
util.format(1, 2, 3);
// '1 2 3'









