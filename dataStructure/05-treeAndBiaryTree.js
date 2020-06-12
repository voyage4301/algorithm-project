'use strict'

/* 
树(tree) 是 n(n>=0)个节点的有限集. 当n=0时, 称为空树

特点: 
    1. 有且仅有一个特定的称为根的节点(root)
    2. 当 n>1 时, 其余节点可分为 m 个互不相交的有限集, 每个集合本身又是一颗数, 并称为根的子树
    3. 没有孩子的节点称为 叶子节点; 由同一个父节点衍生出的节点称为兄弟节点

树的最大层级树, 称为树的高度或深度
*/

/* 
二叉树(biary tree)是树的一种特殊形式

特点: 
    1.树的每个节点最多有2个孩子节点
    2.二叉树的孩子节点, 左边的叫左孩子(left child), 右边的叫右孩子(right child)
*/

/* 
满二叉树: 一个二叉树的所有非叶子节点都拥有左右孩子, 并且所有叶子节点都在同一层级
*/

/* 
完全二叉树: n个节点的二叉树, 按层级顺序编号, 所有节点都是从1到n; 如果这个树所有节点和同样深度的满二叉树的编号从1到n的节点位置相同, 称为完全二叉树
*/


let array = [1, 2, 3, 5, 2]

// console.log(getRes(array, 2));



function getRes(array, num) {
    let resArr = []
    let sum = 0
    getMax(array, num)
    console.log(resArr);
    return sum

    function getMax(array, num) {
        let index = 0
        let len = array.length
        if (num > len || num <= 0) {
            return
        } else {
            let tempArr = array.slice(index, num + index)
            array.splice(index, 1)
            let tempSum = tempArr.reduce((prev, next) => prev + next) / num

            if (tempSum > sum) {
                sum = tempSum
                resArr = tempArr
            }
            index++
            getMax(array, num)
        }
    }
}

console.log(getRes1(array, 3));
function getRes1(array, num) {
    let len = array.length
    let sum = 0
    let resArr = []
    if (num > len || num <= 0) {
        return sum
    }

    for (let index = 0; index < len + num; index++) {
        if (index + num > len) {
            break
        }
        let tempArr = array.slice(index, num + index)
        let tempSum = tempArr.reduce((prev, next) => prev + next) / num

        if (tempSum > sum) {
            sum = tempSum
            resArr = tempArr
        }
    }

    console.log(resArr);
    return sum
}

