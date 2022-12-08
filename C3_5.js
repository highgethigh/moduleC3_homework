class ElectroDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plug() {
        console.log(this.name + ' is plugged');
        this.isPlugged = true;
    }

    unplug() {
        console.log(this.name + ' is unplugged');
        this.isPlugged = false;
    }
}

//Device 1
class Hoover extends ElectroDevice {
    constructor(name, brand, power, weight) {
        super(name, power);
        this.brand = brand;
        this.power = power;
        this.weight = weight;
        this.isPlugged = true;
    }
}

//Device 2 
class ElectricKettle extends ElectroDevice {
    constructor(name, brand, power, color) {
        super(name, power);
        this.brand = brand;
        this.power = power;
        this.weight = color;
        this.isPlugged = false;
    }
}

// экземпляр Пылесоса
const Samsung_SC4520_Hoover = new Hoover('Hoover', 'Samsung', 1600, 4.3);

// экземпляр Электрочайника
const Polaris_PWK_1712CGLD_ElectricKettle = new ElectricKettle('Electric Kettle', 'Polaris', 2150, 'black');

// Power on
Samsung_SC4520_Hoover.plug();

// Power off
Polaris_PWK_1712CGLD_ElectricKettle.unplug();

console.log(Samsung_SC4520_Hoover);
console.log(Polaris_PWK_1712CGLD_ElectricKettle);