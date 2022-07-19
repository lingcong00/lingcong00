// sqrt:求一个正数的平方根

// 1、普通办法，一直加到i * i 接近 n * n
function sqrt(n) {
  for (var i = 0; i < n; i += 0.000000001) {
    if (Math.abs(i * i - n) < 0.00000001) {
      return i
    }
  }
}

// 2、二分法
function sqrt(n) {
  let l = 0
  let r = n

  while (r - l > 0.0000000001) {
    let m = 0
    m = (l + r) / 2
    if (m * m == n) {
      return m
    } else if (m * m < n) {
      l = m
    } else if (m * m > n) {
      r = m
    }
  }

  return (l + r) / 2
}

// 3、牛顿法
function sqrt(n) {
  let x = n
  while (Math.abs(x * x - n) >= 0.0000000000001) {
    x = (x + n / x) / 2
  }
  return x
}


// narcissistic: 写一个函数判断一个数是否为水仙花数

// 计算n的十进制位宽
function digitWidth(n) {
  let width = 0
  do {
    let digit = n % 10
    n = (n - digit) / 10
    width++
  } while (n > 0)
  return width
}

// 计算x的n次方
function power(x, n) {
  let result = 1
  for (let i = 0; i < n; i++) {
    result *= x
  }
  return result
}

function isNarcissistic(n) {
  let width = digitWidth(n)

  let m = n
  let sum = 0

  do {
    let digit = m % 10
    m = (m - digit) / 10
    sum += power(digit, width)
  } while (m > 0)

  if (sum == n) {
    return true
  } else {
    return false
  }
}



// factorial阶乘
function factorial(n) {
  let factorial = 1
  for (let i = 2; i <= n; i++) {
    factorial *= i
  }
  return factorial
}


// palindrom判断是否为回文数字
function palindrom(n) {
  let result = 0
  let m = n
  while (m > 0) {
    let digit = m % 10
    m = (m - digit) / 10
    result = result * 10 + digit
  }

  return result == n
}


// prime判断素数
function isPrinme(n) {
  sqrt_n = Math.sqrt(n)

  for (let i = 2; i <= sqrt_n; i++) {
    if (n % i == 0) {
      return false
    }
  }

  if (n == 1 || n == 0) {
    return false
  }

  return true
}

//输出1000以内的素数
for (let i = 0; i < 1000; i++) {
  let n = i
  if (isPrinme(n)) {
    console.log(i)
  }
}



// completeNumber完全数（因子之和等于它自己,除自身外的因子）
function isCompleteNumber(n) {
  let sum = 0
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum += i
    }
  }

  if (n == 0 || n == 1) {
    return false
  }

  return sum == n

}

// 输出1000以内的完全数
for (let i = 0; i < 1000; i++) {
  if (isCompleteNumber(i)) {
    console.log(i)
  }
}



// itob:不使用隐式类型转换将一个数转换为字符串
function itob(n) {
  let = result = ''
  let m = n

  while (m % 10 == 0 && m != 0) {
    m = m / 10
    result = ntos(0) + result
  }

  do {
    let digit = 0
    digit = m % 10
    m = (m - digit) / 10
    result = ntos(digit) + result
  } while (m > 0)

  return result
}

function ntos(n) {
  if (n == 1) {
    return '1'
  }
  if (n == 2) {
    return '2'
  }
  if (n == 3) {
    return '3'
  }
  if (n == 4) {
    return '4'
  }
  if (n == 5) {
    return '5'
  }
  if (n == 6) {
    return '6'
  }
  if (n == 7) {
    return '7'
  }
  if (n == 8) {
    return '8'
  }
  if (n == 9) {
    return '9'
  }
  if (n == 0) {
    return '0'
  }
}



// lcf (largest common factor)最大公因子
function lcf(m, n) {
  let min = m > n ? n : m

  for (let i = min; i >= 1; i--) {
    if (m % i == 0 && n % i == 0) {
      return i
    }
  }
}

// 辗转相减法求最大公因子
function lcf(m, n) {
  if (m == n) {
    return m
  }

  while (m != n) {
    if (m < n) {
      let t = m
      m = n
      n = t
    }
    m = m - n
  }

  return m
}

// 辗转相除法求最大公因子
function lcf(m, n) {
  while (m % n != 0) {
    let x = n
    n = m % n
    m = x
  }
  return n
}

// 两个数的乘积等于它们吗lcm * lcf
// lcm 最小公倍数
function lcm(m, n) {
  return m * n / lcf(m, n)
}



// weekday 给年和月，计算这个月的第一天是星期几
function weekDay(year, month) {
  let totalDay = 0

  for (let i = 1; i < year; i++) {
    if (isLeapYear(i)) {
      totalDay += 366
    } else {
      totalDay += 365
    }
  }

  // 不用循环计算year天数
  // totalDay = (year - 1) * 365 + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100)
  //   + Math.floor((year - 1) / 400)

  for (let i = 1; i < month; i++) {
    totalDay += getDayOfMonth(year, i)
  }

  let d = (totalDay + 1) % 7

  return d
}

// 判断是否为闰年
function isLeapYear(year) {
  if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    return true
  } else return false
}

// 每个月的天数
function getDayOfMonth(year, month) {
  switch (month) {
    case 2: if (isLeapYear(year)) {
      return 29
    } else return 28
    case 4:
    case 6:
    case 9:
    case 11:
      return 30
    default:
      return 31
  }
}



// 递归
function findSolution(target) {
  function find(start, history) {
    if (start == target) {
      return history
    }

    if (start > target) {
      return null
    }

    if (start < target) {
      return find(start + 5, '(' + history + ' +5)') || find(start * 3, '(' + history + ' *3)')
    }
  }

  return find(1, '1')
}

function findSolution(target) {
  let H = []

  function find(start, history) {

    if (start == target) {
      H.push(history)
      return H
    }

    if (start > target) {
      return
    }

    if (start < target) {
      find(start + 5, '(' + history + ' +5)')
      find(start * 3, '(' + history + ' *3)')
    }
  }

  find(1, '1')

  return H
}

// 递归求斐波那契数列
let cache = []

function fibb(n) {

  if (n == 1 || n == 2) {
    return 1
  } else {
    if (cache[n] !== undefined) {
      return cache[n]
    }
    let result = fibb(n - 1) + fibb(n - 2)
    cache[n] = result

    return result
  }
}

