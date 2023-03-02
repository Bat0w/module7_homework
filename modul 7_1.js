/*Задание 1.

Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/
const obj ={a :1 , b : 2};
function getProp(a,b) {
    
    for (let key in obj){
      if(obj.hasOwnProperty(key, obj[key]))
        console.log(key, obj[key]);
    }
}
    getProp()
