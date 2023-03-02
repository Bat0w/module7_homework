

   //Задание 5.

    
   

    //родительский класс electricalAppliances
    

    class ElectricalAppliances{
        constructor(name){
            this.name = name;
            this.place = 'kitchen';
            this.status = false
        }
        changePower() {
            if (this.status){
                this.status = false;
            }else{
                this.status = true;
            }
        }
        getStatus (){
            if (this.status){
                console.log(`${this.name} turn on`);
            }else {
                console.log(`${this.name} turn off`);
            }
        }
    }
    
    //подкласс kitchenDevices

    class KitchenDevices extends ElectricalAppliances{
        constructor (name, maxPower, brand, color){
            super(name) ;
            this.maxPower = maxPower;
            this.brand = brand;
            this.color = color;
        }
    }
    

    //создаю элемент подкласса
    const fridge = new KitchenDevices('fridge', 600, 'samsung', 'grey');
    fridge.changePower();
    fridge.getStatus();
    
    

    const microwave = new KitchenDevices('microwave', 300, 'philips', 'white');
    microwave.getStatus();

    const toaster = new KitchenDevices('toaster', 200, 'bosch', 'black');
    toaster.changePower();
    toaster.getStatus();

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