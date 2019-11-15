import Shop from "../Modules/Shop/Shop.js"

let shop = new Shop;

export default class ShopController{
    constructor(){
    }

    canBuy(item){
        return shop.canBuy(item);
    }

    getDrougets(){
        return shop.getDrougets();
    }

    buyItem(item){
        return shop.buy(item)
    }

    addDrougets(int){
        return shop.addDrougets(int);
    }
}
