/**
 * 带有过期时间机制的localStorage、sessionStorage
 */

/**
 * 设置
 * @param {object} params { name: '名称', value: '值', expires: '过期时间，单位ms' }
 * @param {string} storageType 'localStorage' | 'sessionStorage'，默认localStorage
 */
const setItem = (params, storageType = 'localStorage') => {
  const obj = {
    name: '',
    value: '',
    expires: '',
    startTime: new Date().getTime()
  }
  const options = {}
  Object.assign(options, obj, params)
  const _toString = Object.prototype.toString
  if (options.expires) {
    window[storageType].setItem(options.name, JSON.stringify(options))
  } else {
    const type = _toString.call(options.value)
    if (['[object Object]', '[object Array]'].includes(type)) {
      options.value = JSON.stringify(options.value)
    }
    window[storageType].setItem(options.name, options.value)
  }
}

/**
 * 获取
 * @param {string} name 名称
 * @param {*} storageType 'localStorage' | 'sessionStorage'，默认localStorage
 */
const getItem = (name, storageType = 'localStorage') => {
  let item = window[storageType].getItem(name)
  if (!item) return null
  try {
    item = JSON.parse(item)
    if (item === null) return null // JSON.parse('null')===null
  } catch {
    return item
  }
  if (item.startTime) {
    const date = new Date().getTime()
    if (date - item.startTime > item.expires) {
      window[storageType].removeItem(name)
      return null
    } else {
      return item.value
    }
  } else {
    return item
  }
}

export const storage = {
  local: {
    setItem: params => setItem(params),
    getItem: name => getItem(name),
    removeItem: name => window.localStorage.removeItem(name),
    clear: () => window.localStorage.clear()
  },
  session: {
    setItem: params => setItem(params, 'sessionStorage'),
    getItem: name => getItem(name, 'sessionStorage'),
    removeItem: name => window.sessionStorage.removeItem(name),
    clear: () => window.sessionStorage.clear()
  }
}
