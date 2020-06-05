/* 
什么是数组? (array)

有限个相同类型(js中也可以不是相同类型)的变量所组成的集合, 数组中每个变量被称为数组的元素.

特点: 顺序存储; 每个元素都有自己的下标;

在内存中也算顺序存储, 是一个个连续的内存单元组成

*/

/* 数组的读取 => 通过下标的方式直接读取 => 时间复杂度为 O(1) */
let tempArray = [3, 5, 12, 4, 9]
// console.log(tempArray[1]) // 5 

/* 数组的更新 => 通过下标的方式直接更新 => 时间复杂度为O(1) */
tempArray[2] = 333
// console.log(tempArray) // [3, 5, 333, 4, 9]

/* 插入元素 */
/* 1. 尾部插入 O(1) 或 O(n) */
function myPush() {
    let len = this.length
    let argLen = arguments.length

    if (argLen === 1) {
        this[len] = arguments[0]
    } else {
        for (var i = 0; i < argLen; i++) {
            this[len + i] = arguments[i]
        }
    }
    return this.length
}

Array.prototype.myPush = myPush
// let arr = [1, 2, 3]
// arr.myPush(4)
// console.log(arr); // [ 1, 2, 3, 4 ]
// arr.myPush(5, '', undefined)
// console.log(arr); // [ 1, 2, 3, 4, 5, '', undefined ]

/* 2.头部插入  O(2n) */
function myUnShift() {
    let argLen = arguments.length

    for (var i = this.length - 1; i >= 0; i--) /* 置换 */ {
        this[i + argLen] = this[i]
    }

    for (var j = 0; j < argLen; j++) /* 插入 */ {
        this[j] = arguments[j]
    }

    return this.length
}

Array.prototype.myUnShift = myUnShift
// let arr1 = [1, 2, 3]
// arr1.myUnShift(3, 4, 5)
// console.log(arr1); // [ 3, 4, 5, 1, 2, 3 ]

/* 2.数组中间插入 O(2n) */
function insertMiddle() {
    var index = arguments[0] // 要插入的索引
    var argLen = arguments.length - 1
    var length = this.length

    /* 处理空值 */
    if (!index && index !== 0) {
        return length
    }

    /* 处理边界 */
    index < 0 && (index = 0)
    index >= length && (index = length)

    for (var i = length - 1; i >= index; i--) /* 置换 */ {
        this[i + argLen] = this[i]
    }

    for (var j = 1; j <= argLen; j++) /* 插入 */ {
        this[j + index - 1] = arguments[j]

    }

    return this.length
}

Array.prototype.insertMiddle = insertMiddle
let arr1 = [1, 2, 3]
arr1.insertMiddle(1, 4, 5)
console.log(arr1); // [ 1, 4, 5, 2, 3 ]