import Cookie from 'js-cookie'

/**
 * 设置cookie
 * @param {string} name 名称
 * @param {string} value 值
 * @param {number} expires 过期时间，单位：ms，默认24h
 */
export function setCookie(name, value, expires = 24 * 60 * 60 * 1000) {
  const exp = new Date()
  exp.setTime(exp.getTime() + expires)
  Cookie.set(name, value, { expires: exp })
}

/**
 * 获取cookie
 * @param {string} name 名称
 * @return {string}
 */
export const getCookie = name => Cookie.get(name)

/**
 * 清除指定名称的cookie
 * @param {string} name 名称
 */
export const removeCookie = name => Cookie.remove(name)

/**
 * 清空cookie
 */
export function clearCookie() {
  var cookies = document.cookie.split(';')
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i]
    var eqPos = cookie.indexOf('=')
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=; expires = Thu, 01 Jan 1970 00: 00: 00 GMT'
  }
}

/**
 * 从当前时间续签cookie
 * @param {string} name 名称
 * @param {number} expires 续签时间，单位ms
 */
export function renewCookie(name, expires) {
  const value = getCookie(name)
  if (!value) return
  const exp = new Date()
  exp.setTime(exp.getTime() + expires)
  Cookie.set(name, value, { expires: exp })
}
