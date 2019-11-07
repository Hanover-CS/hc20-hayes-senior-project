export default class Shop{
    constructor(){
        this.drougets = 0;
    }

    canBuy(itemPrice){
        if(isBuyable(itemPrice)){return true;} 
        else {return false;}
    }
    
    getDrougets(){
        return this.drougets;
    }
}

function isBuyable(itemPrice) {
    return this.getDrougets() > itemPrice;
}