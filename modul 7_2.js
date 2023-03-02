
/*Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

const user = {
    name:'Nick',
    city:'London',
}

function userUser(string, obj) {
    console.log (string in obj)
    }
userUser('age', user)
