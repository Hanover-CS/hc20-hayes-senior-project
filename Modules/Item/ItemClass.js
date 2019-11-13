

export default class Item{
    constructor(name, price, description){
        this.name = name;
        this.price =  price;
        this.description = description;
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    getDescription(){
        return this.description;
    }
}