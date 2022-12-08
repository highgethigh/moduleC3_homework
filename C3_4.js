function ElectroDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
};

ElectroDevice.prototype.plug = function () {
    console.log(this.name + ' is plugged');
    this.isPlugged = true;
};

ElectroDevice.prototype.unplug = function () {
    console.log(this.name + ' is unplugged');
    this.isPlugged = false;
};

// Device 1
function Hoover(name, brand, power, weight) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.weight = weight;
    this.isPlugged = true;
}

Hoover.prototype = new ElectroDevice();

// Device 2
function ElectricKettle(name, brand, power, color) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.weight = color;
    this.isPlugged = false;
}

ElectricKettle.prototype = new ElectroDevice();

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