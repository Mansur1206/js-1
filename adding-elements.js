// Создай переменную с пустым массивом. После этого с помощью метода .push() добавь в него любой элемент. Выведи результат в консоль.
let pust = []
pust.push("Салам");
console.log(pust);


// Создай новую переменную с пустым массивом. Добавь в него три новых текстовых элемента с помощью метода .push()
// (подсказка: несколько элементов можно указать через запятую). Выведи результат в консоль.
let pustTwo = []
pustTwo.push("hello", "goodby", "whatsupp")
console.log(pustTwo)


// Создай новую переменную с массивом из двух значений: true и false. Добавь в начало этого массива новый элемент со значением null. Выведи результат в консоль. 
let pustThree = [3 > 1, 1 > 3]
pustThree.unshift(null)
console.log(pustThree)


//Создай массив из двух вложенных пустых массивов. Во второй вложенный массив с помощью .push() добавь три значения true. 
//В итоге массив должен стать таким: [[], [true, true, true]]. Выведи результат в консоль.
let pustFour = [[], []]
pustFour[1].push(true, true, true)
console.log(pustFour)


//Создай переменную со следующим массивом: ["html", "css"]. В начало этого массива добавь значение "git", а в конец "javascript". Выведи результат в консоль.
//В конец массива добавь строку "figma" не используя метод .push() (вспоминай про способ с []). 
let pustFive = ["html", "css"]
pustFive.unshift("git")
pustFive.push("javascript")
console.log(pustFive)
pustFive[pustFive.length] = "figma";
console.log(pustFive)


//Скопируй следующий код в конец файла adding-elements.js и выполни задания из комментариев.
//Свой код пиши на следующей строке после комментария. Сами комментарии не удаляй.
let stack = ["html", "css", "bem", "js"]

// A) добавь в конец массива значение "react" (используй .push())
stack.push("react")
console.log(stack)

//// C) добавь в конец массива значение "redux" (используй способ с [])
stack[5] = "redux";
console.log(stack)

// E) добавь в начало массива значение "git"
stack.unshift ("Git");
console.log(stack)

// G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux". 
console.log(`Сначала мы изучим ${stack[0]} а в конце мы изучим ${stack[6]}`)

// H) добавь в конец массива сразу два элемента: "mysql" и "nosql".
stack.push("mysql", "nosql")
console.log(stack)
console.log(stack.length)


