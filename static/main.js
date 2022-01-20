let bigButton = document.getElementById("big-button")
let moneyText = Number(document.getElementById("money-text").value)
const game = new Game(moneyText)
game.reveal()
bigButton.addEventListener("click", () => {
    game.click()
})