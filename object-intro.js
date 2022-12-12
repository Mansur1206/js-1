// В файле object-intro.js создай объект start, у которого будут два любых ключа и значения
let start = {
    It: "Gun",
    And: "miniGun"
};

// В том же файле создай объект, person у которого будут следующие ключи и значения:
let person = {
    firstName: "Mansur",
    lastName: "Tukhugov",
    city: "Grozny",
    age: 16,
    height: 176, 
    heightMeters: 1.76,
    born: 2006,
    haveCar: false,
    carName: undefined,
    HaveSkills: true,
    level: 7,
      mobile: {
         mobilePhone: "iphone 12", 
         price: 65000,
         operator: "Megafon",
         producer: "Apple",
      }
}

// В том же файле создай объект galaxy, у которого будут минимум 10 свойств.
let Galaxy = {
    Name: "Milky way",
    color: "bluish",
    dimensions: "1E18",
    ourGalaxy: true,
    type: "Spiral Galaxy with a bar",
    includetIn: "local group",
    quantity: "billion",
    DistanceFronTheCenter: 8.5, 
    RotationSpeed: 220, 
    TheNearestGalaxy: "Andromeda"  
}
// Пользуясь оператором delete удали из объекта galaxy любое свойство.
//Выведи объект galaxy в консоль.
    delete(Galaxy.dimensions)
    console.log(Galaxy)


// В том же файле создай объект student, в котором будет инфа о любом из твоих одногруппников.
//Инфа должна включать имя, фамилию и регион проживания.
let student = {
    Name: "Rasul",
    SurName: "Tokaev",
    Region: 95
}
// Добавь в объект student из задачи 1.4 новый ключ age, в котором будет возраст студента.
// Выведи объект student в консоль.
    student.age = 15
    console.log(student.age)