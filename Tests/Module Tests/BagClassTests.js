import Bag from "../../Modules/Bag/BagClass.js"
import ItemCatalog from "../../Modules/Item/ItemCatalogClass.js";

let bag = new Bag;
let catalog = new ItemCatalog

describe("Bag Class", function () {
    it("Can Remove requested Item", function () {
        let item1 = catalog.getItem("Rayashk");
        let item2 = catalog.getItem("Thronian Helm");
        let item3 = catalog.getItem("Rayashk");
        let item4 = catalog.getItem("Thronian Helm");
        bag.addItem(item1);
        bag.addItem(item2);
        bag.addItem(item3);
        bag.addItem(item4);
        bag.removeItem(item2);
        chai.assert(bag.getAllItems().length == 3)
    })
})