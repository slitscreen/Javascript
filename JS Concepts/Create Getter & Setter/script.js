class Car {
    constructor(make, model, year){
        this._make = make;
        this._model = model;
        this._year = year;
    }

    //getter
    get make (){
        return this._make;
    }

    //setter
    set make(value){
        const possibleMakes = ["Honda", "Toyota", "Nissan"];

        if (possibleMakes,includes(value)){
            this._make = value;
        } else{
            throw Error(value + " is not a valid make");
        }
    }
    
    get description(){
        return this._year + " " + this._make + " " + this.model;
    }
}

let myCar = new Car("Toyota", "Corolla", 2011);