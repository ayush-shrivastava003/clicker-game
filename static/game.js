class Item {
    constructor(name, rate, gameRef) {
        this.name = name;
        this.rate = rate;
        this.intervalId = null;
        this.gameRef = gameRef;
        this.stopReapeat = true;
    }

    start() {
        this.stopReapeat = false

        let nextClick = () => {
            if (this.stopReapeat) {return}
            this.gameRef.click()
            setTimeout(nextClick, 1000)
        }

        nextClick()
    }

    stop() {
        this.stopReapeat = true
    }
}
class Game {
    constructor(moneyText) {
        this.moneyText = moneyText;
        this.money = 0;
        this.items = {'cookie': []};
    }

    click() {
        this.money++;
        this.moneyText.textContent = this.money
    }

    addItem(itemName) {
        let i = new Item(itemName, 1, this)
        this.items[itemName].push(i)
        i.start()
        return i
    }

    reveal() {
        console.log(
            "this.moneyText", this.moneyText,
            "this.money", this.money,
            "this.items", this.items
        )
    }
}