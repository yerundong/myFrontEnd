import pinyin from 'pinyin'

// 获取拼音首字母大写
export const getFirstLetter = chinese => pinyin.getCamelChars(chinese || '')

// 获取全拼
export const getFullPinyin = chinese =>
  pinyin.getFullChars(chinese || '').toLocaleLowerCase()
