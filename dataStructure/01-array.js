'use strict'
/* 
什么是数组? (array)

有限个相同类型(js中也可以不是相同类型)的变量所组成的集合, 数组中每个变量被称为数组的元素.

特点: 顺序存储; 每个元素都有自己的下标;

在内存中也是顺序存储, 是一个个连续的内存单元组成

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
// let arr1 = [1, 2, 3]
// arr1.insertMiddle(1, 4, 5)
// console.log(arr1); // [ 1, 4, 5, 2, 3 ]

/* 删除元素 */
/* 删除最后一个 O(1) */
function myPop() {
    let len = this.length
    if (!len) {
        return undefined
    }
    let del = this[len - 1]
    this.length = len - 1
    return del
}
Array.prototype.myPop = myPop
// let arr = [1, 2, 3, 4, 5]
// arr.myPop()
// console.log(arr);

/* 删除第一个 O(n) */
function myShift() {
    let len = this.length
    if (!len) {
        return undefined
    }
    let del = this[0]

    for (let index = 1; index < len; index++) {
        this[index - 1] = this[index]
    }
    this.length = len - 1
    return del
}

Array.prototype.myShift = myShift
// let arr = [1, 2, 3, 4, 5, 6]
// arr.myShift()
// console.log(arr); // [2, 3, 4, 5, 6]

/* 数组 指定位置 删除 n 个 */
function mySimpleSplice(delIndex, num = 0) {
    let len = this.length
    if (!delIndex && delIndex !== 0) return undefined
    if (!len) return []

    let temp = []
    for (let index = 0; index < len; index++) {
        if (delIndex <= index) {
            if (index + num > len - 1) {
                break
            } else {
                temp.myPush(this[index])
                this[index] = this[index + num]
            }
        }
    }
    this.length = len - num <= 0 ? delIndex : len - num + delIndex
    return temp
}
Array.prototype.mySimpleSplice = mySimpleSplice
let arr = [1, 2, 3, 4, 5, 6]
console.log(arr.mySimpleSplice(2, 3)); // [ 1, 2, 3 ]
console.log(arr); // [ 1, 4, 5, 6 ]