/**
 * 等待
 * @param {number} time 时间，单位ms
 */
export function sleep(time = 1000) {
  const t = Date.now()
  const wait = d => {
    /* eslint-disable */
    while (Date.now() - t <= d) {}
  }
  wait(time)
}
