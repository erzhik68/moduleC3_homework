class Device {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  plugIn(){
    this.isPlugged = true;
    return this.name + " is plugged!";
  }
  
  unplug(){
    this.isPlugged = false;
    return this.name + " is unplugged!";
  }
    
}

class TV extends Device {
  constructor(name, brand, power, model){
    super(name, power);
    this.brand = brand;
    this.model = model;
    this.isPlugged = false;
  }
}

class Computer extends Device {
  constructor(name, brand, power, type){
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.isPlugged = false;
  }
}

let tv = new TV("Televisor", "Sony", 50, "LED");
let computer = new Computer("Laptop", "Intel Core i7", 100, "Transformer");

console.log(tv.unplug());
console.log(computer.plugIn());

console.log(tv);
console.log(computer);