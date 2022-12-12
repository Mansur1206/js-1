// вызвать в консоли пустой массив
let one = []
console.log(one)

// вывести сумму первого, и последнего элемента массива
let number = [1, 2, 3]
console.log(number[0] + number[2])

// после задачи C выведи в консоль строку, в которой склеены все три элемента массива;
let stroke = ["moon", "sun", "day"]
console.log(stroke)

// элемент массива - [тут сам элемент], а последний элемент - [тут сам элемент]
let numberStroke = ["moon", "sun", "day", 1, 2, 3]
console.log(numberStoke[0])
let a = numberStroke.pop()
console.log(a)

// выведи в консоль пятый элемент текущего массива и последний элемент массива из задания B;
let nameStudents = ["terminator", "spider man", "venom", "iron man", "captain america"]
console.log(numberStudents[4])
console.log(number[2])

// выведи каждый элемент массива в отдельный console.log();
let data = [1, "stroke", null, undefined, true, false]
console.log(data[0])
console.log(data[1])
console.log(data[2])
console.log(data[3])
console.log(data[4])
console.log(data[5])

// 
let ThreeInner = [[], [], []]
console.log(ThreeInner.length)

// выведи в консоль произведение второго элемента первого вложенного массива и третьего элемента второго вложенного массива.
let ThreeInnerTwo = [[1, 2, 3], [4, 5, 6]]
console.log((ThreeInnerTwo[0])[1] * (ThreeInnerTwo[1])[2])