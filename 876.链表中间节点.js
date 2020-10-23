/** 
 * 
 * 此题三种解法
 * 1. 将链表拆成线性表 然后获取N/2的节点
 * 2. 遍历一次数组获取数组的长度N，再遍历一次数组，记录一个变量 当变量为N/2时返回该节点
 * 3. 快慢指针
 * 
 * 此题比较简单 所以就只写了快慢指针的方法 (~~雾~~)
 * 解法二写的时候 要注意第一次遍历的时候 需要再开个临时变量储存头结点 不然那个头结点就再也找不大了 
 * 再有就是那个边界值问题 多思考一下
 * 
*/

var middleNode = function(head) {
  /* 两次遍历 */
  let len = 0
  let k = 0
  let temp = head
  while (head) {
      len ++
      head = head.next
  }

  while (k < Math.floor(len / 2)) {
      temp = temp.next
      k++
  }
  return temp
  
  /**------- 分割线 ----------- */
  
  /* 快慢指针 */
  let slow = head
  let fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  } 
  return slow
};