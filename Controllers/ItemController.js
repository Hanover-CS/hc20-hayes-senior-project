import ItemCatalog from "../Modules/Item/ItemCatalogClass.js"
import Bag from "../Modules/Bag/BagClass.JS"

let itemCatalog = new ItemCatalog;
let bag = new Bag;

export default class ItemController{
    constructor(){}

    getItem(string){
        return itemCatalog.getItem(string)
    }

    addItemToBag(item){
        bag.addItem(item);
    }

    getAllItemsInBag(){
        let x = bag.getAllItems();
        return x;
    }
}