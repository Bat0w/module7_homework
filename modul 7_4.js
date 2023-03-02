

   /* Задание 4.

    Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
    
    Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
    
    Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
    
    План:
    
    Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
    Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
    У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
    Создайте экземпляры каждого прибора.
    Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)*/
   
   

    //родительский класс electricalAppliances

    function electricalAppliances(name){
        this.name = name;
        this.place = 'kitchen';
        this.status = false
    }
    
    //метод вкл/выкл
    electricalAppliances.prototype.changePower = function() {
    if (this.status){
        this.status = false;
    }else{
        this.status = true;
    }
}
    //метод родительского класса
electricalAppliances.prototype.getStatus = function(){
    if (this.status){
        console.log(`${this.name} turn on`);
    }else {
        console.log(`${this.name} turn off`);
    }
}
   
    //подкласс kitchenDevices

    function kitchenDevices (name, maxPower, brand, color){
        this.name = name;
        this.maxPower = maxPower;
        this.brand = brand;
        this.color = color;
    }
    
    //расширяю родительский класс electricalAppliances
    kitchenDevices.prototype = new electricalAppliances;
    kitchenDevices.prototype.constructor = kitchenDevices;

    //создаю элемент подкласса
    const fridge = new kitchenDevices('fridge', 600, 'samsung', 'grey');
    
    fridge.getStatus();
    fridge.changePower();
    

    const microwave = new kitchenDevices('microwave', 300, 'philips', 'white');
    microwave.getStatus();

    const toaster = new kitchenDevices('toaster', 200, 'bosch', 'black');
    toaster.getStatus();
    toaster.changePower();

    //учитываем включенные приборы и суммируем мощность
    function getSumElectricalAppliancesPower(x, y){
        let a = x.maxPower;
        let b = y.maxPower;
        if(x.status === false){
          a = 0;
        }
        if(y.status === false){
          b = 0;
        }
        console.log('Total energy consuption - '+(a + b));
      }
      getSumElectricalAppliancesPower(fridge, toaster);