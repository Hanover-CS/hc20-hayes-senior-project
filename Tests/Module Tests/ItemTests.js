import Item from "../../Modules/Item/ItemClass.js"

let assert = chai.assert;

describe("ItemClass Tests", function(){
    it("Can create an item with the correct values.", function(){
        let item  = new Item("Rayashk", 350, "Ledgendary Sword");
    
        assert(item.getName() == "Rayashk");
        assert(item.getPrice() == 350);
        assert(item.getDescription() == "Ledgendary Sword");

    })
    
})