/**
 * 必有特性：开始日期必定小于等于结束日期
 * 可选特性1：开始和结束日期在限制天数的范围内 / 默认关闭
 * 可选特性2：某些日期范围禁止选择 / 默认关闭
 * @param {String} beginDate 开始日期的值
 * @param {String} endDate 结束日期的值
 * @param {String} type 返回开始日期还是结束日期的picker-options对象
 * @param {Number/Undefined} limitDays 限制的范围天数，如果不传就不限制
 * @param {String} disabledDate 【'disabledBeforeToday', 'disabledAfterToday', 'disabledAfterTomorrow'】
 * disabledBeforeToday 是否允许选择今天和今天以前的日期
 * disabledAfterToday 是否允许选择今天和今天以后的日期
 * disabledAfterTomorrow 是否允许选择明天和明天以后的日期
 */

export function disableDatePickerOptions(
  beginDate,
  endDate,
  type = 'begin',
  limitDays,
  disabledDate
) {
  const disabledDateIndex = [
    'disabledBeforeToday',
    'disabledAfterToday',
    'disabledAfterTomorrow'
  ].indexOf(disabledDate)
  if (disabledDate && disabledDateIndex === -1) {
    console.error('请输入下列正确的参数：\n ')
    console.log(
      'disabledBeforeToday, disabledAfterToday, disabledAfterTomorrow'
    )
    throw new Error('disableDatePickerOptions方法传参错误！')
  }

  // limitDays为undefined时，dateRange为NaN
  // NaN 与数字比较大小时，返回false
  const millisecondsInADay = 3600 * 1000 * 24 // 一天的毫秒数
  const dateRange = millisecondsInADay * limitDays
  const today = Date.now()
  const yesterday = today - millisecondsInADay
  if (type === 'begin') {
    return {
      // 开始日期可选区间
      disabledDate: time => {
        const tempTime = time.getTime()
        if (!endDate) {
          const map = {
            '-1': false,
            0: tempTime < today,
            1: tempTime > yesterday,
            2: tempTime > today
          }
          return map[String(disabledDateIndex)]
        } else {
          const endDay = new Date(new Date(endDate).toDateString()).getTime()

          let beginDay = endDay - dateRange
          if (disabledDate === 'disabledBeforeToday') {
            beginDay = beginDay > today ? beginDay : today
          }
          return tempTime < beginDay || tempTime > endDay
        }
      }
    }
  } else if (type === 'end') {
    return {
      // 结束日期可选区间
      disabledDate: time => {
        const tempTime = time.getTime()
        if (!beginDate) {
          const map = {
            '-1': false,
            0: tempTime < today,
            1: tempTime > yesterday,
            2: tempTime > today
          }
          return map[String(disabledDateIndex)]
        } else {
          const beginDay = new Date(
            new Date(beginDate).toDateString()
          ).getTime()

          let endDay = beginDay + dateRange

          if (disabledDate === 'disabledAfterToday') {
            endDay = endDay < yesterday ? endDay : yesterday
          }
          if (disabledDate === 'disabledAfterTomorrow') {
            endDay = endDay < today ? endDay : today
          }

          return tempTime < beginDay || tempTime > endDay
        }
      }
    }
  }
}
