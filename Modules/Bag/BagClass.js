export default class Bag{
    constructor(){
        this.listOfItems = [];
    }

    addItem(item){
        this.listOfItems.push(item);
    }

    getAllItems(){
        return this.listOfItems;
    }

    removeItem(item){
        let index = 0;
        for (let items in this.listOfItems){
            if (item.getName() === this.listOfItems[items].getName()){
                this.listOfItems.splice(index, 1);
                return
            }
            index++;
        }
    }

}