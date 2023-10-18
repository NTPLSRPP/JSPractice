function solution(number){
    // convert the number to a roman numeral
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let result = ""
    for (let i = 0; i < values.length ; i++) {
      while (number >= values[i]) {
        result += romanNum[i]
        number -= values[i]
      }
    }
    return result
  }