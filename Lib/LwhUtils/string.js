/**
 * 生成指定长度的随机字符串
 * @param {number} 字符串长度，默认32
 * @return {string} 随机串
 */
export const randomString = (len = 32) => {
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  var maxPos = $chars.length
  var str = ''
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return str
}

/**
 * 生成指定长度的随机数字字符串
 * @param {number} 字符串长度，默认5
 * @return {string} 随机串
 */
export function randomNumberString(len = 5) {
  const result = []
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let index = 0; index < len; index++) {
    result.push(numbers[Math.floor(Math.random() * 10)])
  }
  return result.join('')
}
