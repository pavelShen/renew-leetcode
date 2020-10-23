/**
 * 
 * 容易想到的方案就是把链表打散 最后通过双指针去处理
 * 但写的过程中 还是没有考虑到打散链表的时候 每个head 都是一个链表的关系 所以最后再拼接列表的时候造成了环
 * 处理方案是再开个临时变量储存后一个值 然后将head.next制成空再进行push操作
 * 
 */

var reorderList = function(head) {
  let arr = []
  while(head) {
      // arr.push(head)
      // head = head.next
      let temp = head.next
      head.next = null
      arr.push(head)
      head = temp
  }

  let len = arr.length
  let count = 0
  for (let i=0,j=len-1;i<j;) {
      if (count % 2 === 0) {
          arr[i].next = arr[j]
          i++
      } else {
          arr[j].next = arr[i]
          j--
      }
      count ++
  }

  return arr[0]
};


/** 
 * 
 * 比较复杂的解法可以拆成三步： （空间复杂度可以由上一种解法的N 降低到 1）
 * 1. 寻找中间节点 (快慢指针)
 * 2. 反转中间节点之后的链表
 * 3. 合并链表
 * 
 * 可以顺便复习下老的题目 876 寻找中间节点 和 206 反转链表
 * 
*/

var reorderList = function(head) {
  if (!head) return null
  let mid = middleNode(head)
  let l2 = reverseList(mid.next)
  let l1 = head
  mid.next = null
  return mergeList(l1, l2)

  function middleNode (head) {
      let slow = head
      let fast = head

      while (fast && fast.next) {
          fast = fast.next.next
          slow = slow.next
      } 
      return slow
  }

  function reverseList(head) {
      let [prev, curr] = [null, head]

      while (curr) {
      let temp = curr.next
      curr.next = prev
      prev = curr
      curr = temp
      }

      return prev
  }

  function mergeList (l1, l2) {
      while (l1 && l2) {
      let tmp1 = l1.next
      let tmp2 = l2.next

      l1.next = l2
      l2.next = tmp1

      l1 = tmp1
      l2 = tmp2
      }

      return l1
  }
}