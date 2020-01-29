import Item from "../../Modules/Item/ItemClass.js"
import Shop from "../../Modules/Shop/Shop.js";

let assert = chai.assert;
let shop = new Shop;
let item1 = new Item("Rayashk", 350, "Ledgendary Sword");
let item2 = new Item("Rayashk2", 450, "Ledgendary Sword of a King");

describe("ShopClass Tests", function () {
    it("Can get the price of an item", function () {
        shop.addDrougets(350);
        assert(shop.getDrougets() == 350);
    })

    it("Can Buy item", function () {
        assert(shop.canBuy(item1) == true);
    })

    it("Can't Buy item", function () {
        assert(shop.canBuy(item2) == false);
    })

    it("Buy item", function () {
        shop.buy(item1);
        assert(shop.getDrougets() == 0);
    })

})