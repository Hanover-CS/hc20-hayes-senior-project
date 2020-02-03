import ItemCatalog from "../../Modules/Item/ItemCatalogClass.js"

let itemCatalog = new ItemCatalog;

let assert = chai.assert;

describe("ItemClass Tests", function () {
    it("Can get correct item.", function () {
        let item = itemCatalog.getItem("Rayashk");
        assert(item.getName() == "Rayashk");
        assert(item.getPrice() >= 0);
        assert(item.getDescription() != null);
    })

    it("Returns a list of all buyable options", function () {
        let list = itemCatalog.allBuyableOptions()
        assert(list.length == 8);
    })

})