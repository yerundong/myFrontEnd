import {
	create,
	addDependencies,
	subtractDependencies,
	multiplyDependencies,
	divideDependencies,
	fractionDependencies,
	chainDependencies,
	bignumberDependencies,
	formatDependencies,
} from 'mathjs'

export { default as currency } from 'currency.js'

const math = create({
	addDependencies,
	subtractDependencies,
	multiplyDependencies,
	divideDependencies,
	fractionDependencies,
	chainDependencies,
	bignumberDependencies,
	formatDependencies,
})

const { format, chain, bignumber } = math

// 处理小数点位数
const handlePrecision = (val) => {
	let precision = val.split('.')[1]?.length || 0
	precision > 6 && (precision = 6) // 最多保留6位小数
	return (val * 1).toFixed(precision) * 1
}

const add = (val1, val2) => {
	const val = format(chain(bignumber(val1)).add(bignumber(val2)).done())
	return handlePrecision(val)
}

const subtract = (val1, val2) => {
	const val = format(chain(bignumber(val1)).subtract(bignumber(val2)).done())
	return handlePrecision(val)
}

const multiply = (val1, val2) => {
	const val = format(chain(bignumber(val1)).multiply(bignumber(val2)).done())
	return handlePrecision(val)
}

const divide = (val1, val2) => {
	const val = format(chain(bignumber(val1)).divide(bignumber(val2)).done())
	return handlePrecision(val)
}

export { add, subtract, multiply, divide, math }

const strNumSize = (tempNum) => {
	const stringNum = tempNum.toString()
	const index = stringNum.indexOf('.')
	let newNum = stringNum
	if (index !== -1) {
		newNum = stringNum.substring(0, index)
	}
	return newNum.length
}

// 单位转化：根据金额数值，自动计算单位，返回：{num: 123, unit: '万元'}
export function unitConvert(num) {
	const moneyUnits = ['元', '万元', '亿元', '万亿']
	const dividend = 10000
	let curentNum = parseFloat(num) // 转换数字
	let curentUnit = moneyUnits[0] // 转换单位
	for (let i = 0; i < 4; i++) {
		curentUnit = moneyUnits[i]
		if (strNumSize(curentNum) < 5) {
			break
		}
		curentNum = curentNum / dividend
	}
	const m = { num: 0, unit: '' }
	m.num = parseFloat(curentNum.toFixed(2))
	m.unit = curentUnit
	return m
}
