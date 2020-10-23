/** 
 * 
 * 两种解法
 * 第一种递归 又臭又长 性能还差 就随便看看好了
 * 第二种是迭代方案 只要记得是每一次迭代的时候 才去链接prev节点就没什么难的了 (最后别忘记return prev节点)
 * 
*/

var reverseList = function(head) {
  /** 递归 */
  if (head === null) return null
  let oriHead = head
  let reverseHead

  function reverse(head) {
      if(head.next === null) {
          reverseHead = head
          return reverseHead
      } else {
          let node = reverse(head.next)
          node.next = head
          if (head === oriHead) {
              head.next = null
              return reverseHead
          } else {
              return head
          }
      }
  }

  return reverse(head)

  /** 迭代 */
  // [1->2->3->4]
  let [prev, curr] = [null, head]

  while (curr) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return prev
};