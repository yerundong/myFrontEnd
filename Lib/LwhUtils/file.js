const MIME = {
  gif: 'image/gif',
  txt: 'text/plain',
  xml: 'text/plain',
  png: 'image/jpeg',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  zip: 'application/zip',
  pdf: 'application/pdf',
  doc: 'application/msword',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.ms-excel',
  ppt: 'application/vnd.ms-powerpoint'
}

/**
 * 基于blob数据的文件下载
 * @param {blob} blobData 文件数据
 * @param {string} fileName 文件名称
 * @param {string} type MIME类型，非必传，会根据文件名称的后缀名，自动设置对应的MIME类型，默认为application/vnd.ms-excel
 */
export function downloadFile(blobData, fileName = '文件', type) {
  if (!type) {
    const suffixName = fileName
      .substr(fileName.lastIndexOf('.') + 1)
      .toLowerCase()
    type = MIME[suffixName] || 'application/vnd.ms-excel'
  }
  const blob = new Blob([blobData], { type })
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    window.navigator.msSaveBlob(blob, fileName)
  } else {
    const link = document.createElement('a')
    link.style.display = 'none'
    const objectUrl = (window.URL || window.webkitURL).createObjectURL(blob)
    link.href = objectUrl
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(objectUrl)
  }
}

/**
 * 通过iframe方式下载文件
 * 限制条件：1、请求方式只能是Get方式；2、参数只能传递url参数
 * @param {string} url url地址
 */
export function downloadFileByIfm(url) {
  const ifm = document.createElement('iframe')
  ifm.src = url
  ifm.style.display = 'none'
  document.body.appendChild(ifm)

  var timer = setInterval(function () {
    var ifmDoc = ifm.contentDocument || ifm.contentWindow.document
    if (['complete', 'interactive'].includes(ifmDoc.readyState)) {
      ifm.parentNode.removeChild(ifm)
      clearInterval(timer)
    }
  }, 500)
}

/**
 * base64数据转blob
 * @param {string} base64 base64格式数据
 * @param {string} fileType 文件类型
 * @param {string} slice 分段大小，默认1024
 */
export function base64ToBlob(base64, fileType, slice = 1024) {
  return new Blob(
    window
      .atob(base64.replace(/[\r\n]/g, ''))
      .match(new RegExp(`([\\s\\S]{${slice}})|([\\s\\S]{1,${slice}})`, 'g'))
      .map(function(item) {
        return new Uint8Array(
          item.split('').map(function(s, i) {
            return item.charCodeAt(i)
          })
        )
      }),
    { type: fileType }
  )
}

/**
 * base64数据转二进制数据
 * @param {string} base64 base64格式数据
 */
export function base64ToBinary(base64) {
  try {
    const raw = window.atob(base64)
    const rawLength = raw.length
    const array = new Uint8Array(new ArrayBuffer(rawLength))
    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i) & 0xff
    }
    return array
  } catch (e) {
    console.log(e)
  }
}
