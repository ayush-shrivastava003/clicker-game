class Item {
    constructor(name, rate, gameRef) {
        this.name = name;
        this.rate = rate;
        this.intervalId = null;
        this.gameRef = gameRef;
    }

    start() {
        this.intervalId = setInterval(this.rate, this.gameRef.click);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
}
class Game {
    constuctor(moneyText) {
        this.moneyText = moneyText;
        this.money = 0;
        this.items = {};
    }

    click() {
        console.log(this.money, "is money")
        this.money = this.money + 1;
        this.moneyText.innerHTML = this.money
    }

    addItem(itemName) {
        this.items[itemName].push(new Item(itemName, 0.5))
    }

    reveal() {
        console.log(
            "this.moneyText", this.moneyText,
            "this.money", this.money,
            "this.items", this.items
        )
    }
}