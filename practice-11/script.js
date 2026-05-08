// // Objects 

// const student = {
//     fullName : "M.Faisal",
//     marks : 25,
//     printMarks : function(){
//         console.log(this.marks);
//     }
// }

// const employee = {
//     caltax(){
//         console.log("tax rate is 10%");
//     }
// };

// const ali = {
//     salary : 30000,
// };

// ali.__proto__ = employee;

// // Class 

// class hondaCar{
    
//     constructor(brand, mileage){
//     console.log("creating new object");
//     this.brand = brand;
//     this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }

// let civic = new hondaCar("civic", 10);
// console.log(civic);
// let city = new hondaCar("city", 20);
// console.log(city);

// // inheritance

// class person{
//     constructor(){
//         this.species("home sapiens");
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class coder extends person{
//     work(){
//         console.log("coding");
//     }
// }

// class doctor extends person{
//     work(){
//         console.log("treat patients");
//     }
// }

// let hamza = new doctor();

// super keyword

class person{
    constructor(name){
        this.species = "home sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
}

class coder extends person{
    constructor(name){
        super(name)
        this.name = name;
    }
    work(){
        super.eat();
        console.log("coding");
    }
}

let umarCoder = new coder("umar");