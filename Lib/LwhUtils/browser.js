/**
 * 浏览器相关函数
 */

const UA = window.navigator.userAgent.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA)
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isFF = UA && UA.match(/firefox\/(\d+)/)
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isAndroid = UA && UA.indexOf('android') > 0
export const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

/**
 * 获取协议类型+IP地址+端口号
 * @return {string}
 */
export function getHost() {
  return `${document.location.protocol}//${document.location.host}`
}

/**
 * 获取url上下文
 * 如：http://172.18.166.134:30000/test-industry-02/index.html，获取到的结果是：/test-industry-02
 * @return {string}
 */
export function getUrlContext() {
  const pathName = window.location.pathname.substr(1)
  const context = pathName.substr(0, pathName.lastIndexOf('/'))
  return context ? `/${context}` : ''
}

/**
 * 获取协议类型+IP地址+端口号+url上下文
 * @return {string}
 */
export function getFullContextPath() {
  return `${getHost()}${getUrlContext()}`
}

/**
 * 获取url，不包含参数、哈希路由地址等信息，
 * 如：http://172.18.166.134:30000/test-industry-02/index.html#/operation-log-query，
 * 获取到的结果是：http://172.18.166.134:30000/test-industry-02/index.html
 * @return {string}
 */
export function getHostWithPathname() {
  return `${getHost()}${document.location.pathname}`
}

/**
 * 获取url指定名称的参数
 * 不包括哈希路由地址后面的参数，如果没有找到，则返回null
 * @param {string} name 参数名
 * @return {string|null}
 */
export function getQueryString(name) {
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] === name) return pair[1]
  }
  return null
}

/**
 * 获取url全部参数
 * 不包括哈希路由地址后面的参数，如果没有找到，则返回null
 * @return {object|null}
 */
export function getAllQueryString() {
  let params = null
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    pair[1] && ((params = params || { ...params }), (params[pair[0]] = pair[1]))
  }
  return params
}
