import extend from 'extend'

const _toString = Object.prototype.toString

/**
 * 判断是否为null或undefined
 * @param {*} v
 */
export const isUndef = v => v === undefined || v === null

/**
 * 判断是否不为null，并且不为undefined
 * @param {*} v
 */
export const isDef = v => v !== undefined && v !== null

/**
 * 判断是否不为null、undefined，空字符串
 * @param {*} v
 */
export const isDefAndNotNullChar = v => isDef(v) && v.toString().trim() !== ''

/**
 * 是否是对象
 * @param {object} obj
 * @return {boolean}
 */
export const isObject = obj => obj !== null && typeof obj === 'object'

/**
 * Blob类型数据检测
 * @param {object} obj
 * @return {boolean}
 */
export const isBlobData = obj => _toString.call(obj) === '[object Blob]'

/**
 * FormData类型数据检测
 * @param {object} obj
 * @return {boolean}
 */
export const isFormData = obj => _toString.call(obj) === '[object FormData]'

/**
 * 判断是否是空对象
 * @param {object} obj
 * @return {boolean}
 */
export const isEmpty = obj =>
  Object.keys(obj).length === 0 && obj.constructor === Object

/**
 * 深度拷贝
 * @param {object,array} obj
 */
export const deepClone = obj => extend(true, Array.isArray(obj) ? [] : {}, obj)

/**
 * 移除对象中的空字符串
 * @param {object} obj
 * @param {boolean} recurse 是否递归移除子对象中的空字符串，默认false
 */
export function removeEmptyString(obj, recurse = false) {
  Object.keys(obj).forEach(key => {
    ;(recurse && isObject(obj[key]) && removeEmptyString(obj[key], recurse)) ||
      (obj[key] === '' && delete obj[key])
  })
  return obj
}

/**
 * 将对象中字符串字段trim
 * @param {object} obj
 * @returns {object}
 */
export function trimObj(obj) {
  if (!obj) return obj
  const result = Array.isArray(obj) ? [] : {}
  Object.keys(obj).forEach(k => {
    result[k] = typeof obj[k] === 'string' ? obj[k].trim() : obj[k]
  })
  return result
}

/**
 * json对象转FormData
 * @param {object} obj
 * @returns {FormData}
 */
export function jsonToFormData(obj) {
  const formData = new FormData()
  Object.keys(obj).forEach(k => {
    ![undefined, null].includes(obj[k]) && formData.append(k, obj[k])
  })
  return formData
}

/**
 * 扁平数据树形化
 * @param {array} listData 列表数据
 * @param {string} id id属性名称
 * @param {string} parentId 父级id属性名称
 * @param {string} children 存放子节点属性名称
 * @return {array}
 */
export function treeFlatData(
  listData,
  id = 'id',
  parentId = 'parentId',
  children = 'children'
) {
  const cloneData = JSON.parse(JSON.stringify(listData))
  const temp = {}
  const result = []
  const len = cloneData.length
  for (let i = 0; i < len; i++) {
    temp[cloneData[i][id]] = cloneData[i]
  }
  for (let j = 0; j < len; j++) {
    var data = cloneData[j]
    var parentData = temp[data[parentId]]
    if (parentData) {
      !parentData[children] && (parentData[children] = [])
      parentData[children].push(data)
    } else {
      result.push(data)
    }
  }
  return result
}

/**
 * 树形数据扁平化
 * @param {array} tree 树形结构数据
 * @param {string} children 子节点属性名称
 * @param {boolean} isClone 是否深拷贝
 * @return {array}
 */
/* eslint-disable */
export const flatTreeData = (
  treeData,
  children = 'children',
  isClone = false
) =>
  treeData.reduce(
    (acc, o) => (
      acc.push(isClone ? deepClone(o) : o) &&
        o[children] &&
        (acc = acc.concat(flatTreeData(o[children]))),
      acc
    ),
    []
  )

/**
 * 查找节点路径数组（包含当前节点）
 * @param {array} treeData 树形结构数据
 * @param {function} filterFunc 节点命中条件
 * @param {string} children 子节点属性名称
 * @param {boolean} isClone 是否深拷贝
 * @return {array}
 */
export function findTreeNodePath(
  treeData,
  filterFunc,
  children = 'children',
  isClone = false,
  path = []
) {
  if (!treeData) return []
  for (const data of treeData) {
    path.push(isClone ? deepClone(data) : data)
    if (filterFunc(data)) return path
    if (data[children] && data[children].length > 0) {
      const findChildren = findTreeNodePath(
        data[children],
        filterFunc,
        children,
        isClone,
        path
      )
      if (findChildren.length) return findChildren
    }
    path.pop()
  }
  return []
}

/**
 * 查找节点数据
 * @param {array} treeData 树形结构数据
 * @param {function} filterFunc(data) 命中条件函数，参数为节点数据，返回true则返回命中的节点数据
 * @param {string} children 子节点属性名称
 * @param {boolean} isClone 是否深拷贝
 * @return {object} 返回命中的节点数据，否则返回null
 */
export function findTreeNode(
  treeData,
  filterFunc,
  children = 'children',
  isClone = false
) {
  if (!treeData) return null
  for (const data of treeData) {
    if (filterFunc(data)) return data
    if (data[children] && data[children].length > 0) {
      const findChildren = findTreeNode(
        data[children],
        filterFunc,
        children,
        isClone
      )
      if (findChildren) return findChildren
    }
  }
  return null
}

/**
 * 树形数据遍历处理
 * @param {array} treeData 树形结构数据
 * @param {function} dataHandleFunc(data) 数据处理函数，参数为节点数据
 * @param {string} children 子节点属性名称
 */
export function traverseTreeData(
  treeData,
  dataHandleFunc,
  children = 'children'
) {
  if (!treeData) return
  for (const data of treeData) {
    dataHandleFunc(data)
    data[children] &&
      data[children].length > 0 &&
      traverseTreeData(data[children], dataHandleFunc, children)
  }
}

/**
 * 校验两个变量是否相等
 * @param {*} a
 * @param {*} b
 */
export function looseEqual(a, b) {
  if (a === b) return true
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        return (
          a.length === b.length &&
          a.every((e, i) => {
            return looseEqual(e, b[i])
          })
        )
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        return (
          keysA.length === keysB.length &&
          keysA.every(key => {
            return looseEqual(a[key], b[key])
          })
        )
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * 根据属性路径(prop1.prop2.prop3)，查找值
 * @param {object} object 数据对象
 * @param {string} prop 属性
 */
export function getValueByPath(object, prop) {
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}
