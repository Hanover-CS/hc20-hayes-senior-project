export default class Shop{
    constructor(){
        this.drougets = 0;
    }

    getDrougets(){
        return this.drougets;
    }

    addDrougets(amount){
        this.drougets += amount;
    }

    canBuy(item){
        if(item.getPrice() <= this.getDrougets()){return true;} 
        else {return false;}
    }
    
    getDrougets(){
        return this.drougets;
    }

    buy(item){
        let x = item.getPrice();
        this.drougets += -x;
    }
}