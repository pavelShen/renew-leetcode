/**
 * 
 * 果然算法这东西， 一阵子不碰 就全忘了
 * 一道不算难的贪心算法题，最终还是看了答案
 * 通过遍历 + hash获取最远距离 这个一开始竟然没想到，一开始自己想的双指针+hash来回扫 想复杂了
 * 要记得 贪心 / 动态规划 需要常常用到Math.max/min 等来记录暂时的最优解
 * 
 * 这题的核心就是通过比较 当前字母的最远距离 和 保存的临时最佳解 来更新最优解
 * 当当前索性和最优解相等时候 计算出之间的间距   
 * 
 * 贪心这块 还是得练
 * 
 */


var partitionLabels = function(S) {
  let map = {}
  for (let i=0;i<S.length;i++) {
    map[S[i]] = i
  }

  let result = []
  let start = 0;   // 因为result需要记录间距 所以才开了这个变量
  let scannedCharMaxPos = 0; 

  for (let i=0;i<S.length;i++) {
    let curCharMaxPos = map[S[i]]  // 当前字母的最远距离
    scannedCharMaxPos = Math.max(scannedCharMaxPos, curCharMaxPos) // 更新切片的最远距离

    if (i === scannedCharMaxPos) {
      result.push(i - start + 1)
      start = i + 1 
    }
  }

  return result
};


// 输入：S = "ababcbacadefegdehijhklij"
// 输出：[9,7,8]
// 解释：
// 划分结果为 "ababcbaca", "defegde", "hijhklij"。
// 每个字母最多出现在一个片段中。
// 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。