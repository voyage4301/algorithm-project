'use strict'

/* 
什么是链表? (linked list)

是一种在物理上非连续, 非顺序的数据结构, 由若干个节点(node)组成

单向链表: 每一个节点包含两部分, 一部分是存放数据的变量 data, 另一部分是指向下一个节点的指针 next

链表的第一个节点称为头节点, 最后一个节点称为尾节点, 尾节点的 next 指针指向空(null)

双向链表: 每个节点除了变量 data 和指针 next, 还有指向前置节点的 prev, 头节点的 prev 指向空(null)

存储方式: 随机存储 (数组在内存中占用了连续完整的存储空间, 而链表的每个节点分布在内存中的不同位置, 依靠指针next关联起来. 这样可以灵活有效的利用了零散的碎片空间)

*/

/* js实现单向链表 */

class myNode /* 节点对象 */ {
    data = null
    next = null
    constructor(data) {
        this.data = data
    }
}

class LineList /* 链表对象 */ {
    head = null
    constructor() {
        this.head = new myNode("head")
    }
    find(item) /* 查找链表某一节点 O(n) */ {
        let currentNode = this.head

        while (currentNode.data !== item) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    insert(newItem, item) /* 向链表某一节点后插入新节点 O(n) */ {
        let newNode = new myNode(newItem)
        let current = this.find(item)
        newNode.next = current.next
        current.next = newNode
    }
    findPrevious(item) /* 查找某一节点的前一个节点 O(n) */ {
        let current = this.head
        while (!(current.next === null) && (current.next.data !== item)) {
            current = current.next
        }
        return current
    }
    remove(item) /* 删除某个节点 O(n) */ {
        let prevNode = this.findPrevious(item)
        if (!(prevNode.next === null)) {
            prevNode.next = prevNode.next.next
        }
    }
    update(item, newItem) /* 更新某个节点 O(n) */ {
        let current = this.find(item)
        current.data = newItem
    }
    display() /* 打印节点 */ {
        let current = this.head
        while (!(current.next == null)) {
            console.log(current.next.data);
            current = current.next
        }
    }
}

let ll = new LineList()
ll.insert('first', 'head')
ll.insert('second', 'first')
ll.insert('three', 'second')
ll.insert('four', 'three')
ll.display()

ll.remove('second')
ll.display()

ll.update('three', 'three1')
ll.display()

console.log(ll);


