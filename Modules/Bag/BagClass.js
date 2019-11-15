export default class Bag{
    constructor(){
        this.listOfItems = [];
    }

    addItem(item){
        this.listOfItems.push(item);
        console.log(this.listOfItems);
    }

    getAllItems(){
        return this.listOfItems;
    }

}