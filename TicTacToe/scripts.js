class Game {
    constructor (fields) {
        this.fields = fields
        this.grid = new Array(3)
        for (let i = 0; i < 3; i++) {
            this.grid[i] = new Array(3)
            this.grid[i].fill("")
        }
        this.reset()
    }

    reset () {
        for (let i = 0; i < 3; i++) this.grid[i].fill("")

        Array.from(fields).forEach(field => { field.innerHTML = "" })
        this.endGame = false
        this.currentPlayer = "X"
        document.getElementById("container").style.background = "#c0f0d4"
        document.getElementById("turnText").querySelector("h1").innerHTML = this.currentPlayer + "'s turn"
    }

    announceWin (winner) {
        document.getElementById("turnText").querySelector("h1").innerHTML = winner + " won!"
        this.endGame = true

        if (winner == 'O') document.getElementById("container").style.background = "white"
        else document.getElementById("container").style.background = "black"

    }

    checkForWin (x, y) {
        let grid = this.grid
        if ((grid[x][0] + grid[x][1] + grid[x][2] == "OOO") || (grid[0][y] + grid[1][y] + grid[2][y] == "OOO") || (grid[0][0] + grid[1][1] + grid[2][2] == "OOO") || (grid[0][2] + grid[1][1] + grid[2][0] == "OOO")) {
            this.announceWin('O')
            return true
        }
        if ((grid[x][0] + grid[x][1] + grid[x][2] == "XXX") || (grid[0][y] + grid[1][y] + grid[2][y] == "XXX") || (grid[0][0] + grid[1][1] + grid[2][2] == "XXX") || (grid[0][2] + grid[1][1] + grid[2][0] == "XXX")) {
            this.announceWin('X')
            return true
        }
        return false
    }

    clickOnField (field) {
        if (this.endGame) return

        let x = parseInt(field.id[1])
        let y = parseInt(field.id[2])
        
        if (this.grid[x][y] == "") {
            this.grid[x][y] = this.currentPlayer
            
            if (this.currentPlayer == "O") {
                this.currentPlayer = "X"
                field.innerHTML = "O"
            }
            else {
                this.currentPlayer = "O"
                field.innerHTML = "X"
            }
            
            if(this.checkForWin(x, y)) return

            document.getElementById("turnText").querySelector("h1").innerHTML = this.currentPlayer + "'s turn"
        }
    }
}

const fields = document.getElementsByClassName("square")
const playAgain = document.getElementById("playAgain")

const game = new Game

Array.from(fields).forEach(field => {
    field.addEventListener('click', () => {
        console.log("Cick!")
        game.clickOnField(field)
    })
});