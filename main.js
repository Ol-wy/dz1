const userName = prompt("Введите Ваше имя")
const userLastname = prompt("Введите Вашу фамилию")
alert("Здравствуйте " + userName + " " + userLastname)
console.log("Здравствуйте " + userName + " " + userLastname);

//________________________________________

const arr1 = Number(prompt("Введите первое число"))
const arr2 = prompt("Введите второе число")

if (arr1 < arr2) {
    alert(arr2 + " больше " + arr1)   
} else if (arr1 === arr2) {
    alert("Числа равны")
} else if (arr1 > arr2) {
    alert(arr1 + " больше " + arr2)
}
//________________________________________

const color = prompt ("Укажите цвет: зеленый, красный, желтый") 
const colorList = [
    {name: red = ("Красный")},
    {name: green = ("Зеленый")},
    {name: yellow = ("Желтый")}
];

if (color === red) {
    alert("Стоять")
} else if (color === green) {
    alert("Идти")
} else if (color === yellow) {
    alert("Ждать")
}

