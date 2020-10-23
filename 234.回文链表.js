/** 
 * 
 *  简单的做法 将链表拍成数组 然后双指针比较数组是否回文 这样时间复杂度和空间复杂度都是O(n)
 *  要让空间复杂度降低到O(1) 可以采用 
 *  1 找到前半部分链表的尾节点。
 *  2 反转后半部分链表。
 *  3 判断是否回文。
 *  4 恢复链表。
 *  5 返回结果。
 * 
 *  通过快慢指针获取的中间节点 如果有2个中间节点 会获取第二个中间节点 这里想当然了
 *  数据处理完毕之后 要记得恢复原始数据
 * 
*/

var isPalindrome = function(head) {
  let mid = getMidNode(head)
  let reversed = reverseList(mid)
  let result = compare(head, reversed)

  // 没有这一步也能过测试， 
  // 但是比较完成后我们应该将链表恢复原样
  reverseList(reversed)
  return result

  function getMidNode(head) {
      let slow = head
      let fast = head

      while (fast && fast.next) {
          slow = slow.next
          fast = fast.next.next
      }

      return slow
  }

  function  reverseList (head) {
      let [prev, cur] = [null, head]

      while (cur) {
          let temp = cur.next
          cur.next = prev
          prev = cur
          cur = temp
      }

      return prev
  }

  function compare (l1,l2) {
      while (l2) {
          if(l1.val !== l2.val) {
              return false
          }
          l1 = l1.next
          l2 = l2.next
      }
      return true
  }
};