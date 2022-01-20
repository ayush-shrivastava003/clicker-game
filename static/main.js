let bigButton = document.getElementById("big-button")
let moneyText = document.getElementById("money-text")
const game = new Game(moneyText)
game.reveal()
bigButton.addEventListener("click", () => {
    game.click()
})
document.getElementById("item-button").addEventListener("click", () => {
    game.addItem("cookie")
})