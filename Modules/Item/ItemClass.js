

export default class Item {
    constructor(name, price, description, area, stats) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.area = area;
        this.stats = stats;
    }

    getName() { return this.name; }

    getPrice() { return this.price; }

    getDescription() { return this.description; }

    getStats() { return this.stats; }

    equippableTo() { return this.area; }
}