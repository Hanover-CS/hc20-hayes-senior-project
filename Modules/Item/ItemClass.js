

export default class Item{
    constructor(name, price, description, area){
        this.name = name;
        this.price =  price;
        this.description = description;
        this.area = area;
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

    equippableTo(){
        return this.area;
    }
}