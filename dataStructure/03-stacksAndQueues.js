'use strict'

/* 
什么是栈? (stack)

栈是一种线性数据结构

特点是 先进后出 FILO (first in last out), 最早进入的元素存放的位置叫做栈底, 最后进入的元素存放的位置叫做栈顶
*/

/* 栈的基本操作 */
/* 入栈 */
/* 
入栈操作(push)就是把新元素放入栈中, 只允许从栈顶放入元素, 新元素成为新的栈顶
*/
/* 出栈 */
/* 
出栈操作(pop)就是把元素从栈中弹出, 只有栈顶元素才允许弹出, 出栈元素的前一个元素成为新的栈顶
*/


/* 
什么是队列? (queues)

队列是一种线性数据结构

特点是先进先出 FIFO (first in first out), 队列的出口端叫做对头, 入口段叫做队尾
*/

/* 队列的基本操作 */
/* 入队 */
/* 
入队(enqueue)就是把新元素放到队列中, 只允许在队尾添加新元素, 新元素的下一个位置成为新的队尾
*/
/* 出队 */
/* 
出队(dequeue)就是把元素移除队列, 只允许在队头移除元素, 出队元素的下一个元素将成为新的队头
*/

/* 循环队列的实现 */

class MyQueue /*  */ {
    array = null // 数组模拟队列
    front = 0 // 队头下标
    rear = 0 // 队尾下标

    constructor(length) {
        this.array = new Array(length) // 初始化队列空间长度
    }

    enqueue(data) /* 复杂度 O(1) */ {
        let temp = (this.rear + 1) % this.array.length
        if (temp === this.front) {
            throw new Error('队列已满!')
        }

        this.array[this.rear] = data // 数据入队
        this.rear = temp // 修改队尾下标
    }
    dequeue() /* 复杂度 O(1) */ {
        if (this.rear === this.front) {
            throw new Error('队列已空!')
        }

        let dequeueElement = this.array[this.front] // 即将出栈的数据
        this.front = (this.front + 1) % this.array.length //修改队头下标
        return dequeueElement // 返回出栈的数据
    }
    output() {
        for (let index = this.front; index != this.rear; index = (index + 1) % this.array.length) {
            console.log(this.array[index]);
        }
    }
}

let myQueue = new MyQueue(6)
myQueue.enqueue(3)
myQueue.enqueue(5)
myQueue.enqueue(6)
myQueue.enqueue(7)
myQueue.enqueue(9)
console.log(myQueue.array);
console.log('------------');
myQueue.dequeue()
myQueue.dequeue()
myQueue.enqueue(12)
console.log(myQueue.array);
myQueue.enqueue(13)
console.log(myQueue.array);


