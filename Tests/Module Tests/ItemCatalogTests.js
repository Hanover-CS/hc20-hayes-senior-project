import ItemCatalog from "../../Modules/Item/ItemCatalogClass.js"

let itemCatalog = new ItemCatalog;

let assert = chai.assert;

describe("ItemClass Tests", function(){
    it("Can get correct item.", function(){
        let item = itemCatalog.getItem("Rayashk");
        assert(item.getName() == "Rayashk");
        assert(item.getPrice() == 350);
        assert(item.getDescription() == "Ledgendary Sword");
    })
    
})