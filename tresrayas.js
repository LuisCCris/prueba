let board;
let numSelected = 0;
let emojiIndex  = 0;

function createBoard(numrows,numcols) {
    const rows = []
    cards=elemento();
    for (let i=0; i<numrows;i++){
        for(let j=0; j<numcols ;j++){
            casillas.push({
                semuestra : false,
                emoji: cards[emojiIndex],
            }

            )
        }
        rows.push(casillas)
    }
    return rows
}


function printBoard(numrows,numcols){
    for (let row of board) {
        let rowStr = ""
        for (let casilla of row) {
            rowStr = rowStr + casilla + " "
        }
        console.log(rowStr)
    }
}

function elemento(){
    let element=['X','O','X','O','X','O','X','O','X','O','X']
    let e = cards.sort(() => Math.random() - 0.5);

    return e; 
}


const renderizado = (board) => {
    for (let i = 0; i < board.length; i++) {
        const casillas = board[i]
        for (let j=0; j < casillas.length; j++) {
            const butCasilla = document.getElementById(`${i}_${j}`) 
            if (casillas[j].seMuestra || casillas[j].match) {
                butCasilla.innerHTML = casillas[j].emoji
            }else {
                butCasilla.innerHTML = ""
            }
            
        }
    }
}

function setValue(board, row, col, value) {
    board[row][col] = value
}



const getValue = (board, row, col) => {
    return board[row][col]
}



const casillaOnClick = (numrows,numcols) =>{
    
    const casilla =  getValue(board,row,col) 
    casilla.semuestra = true

}

const main = () => {
    board = createBoard(3, 3) 
    renderizarBoard(board)
    
   

}

main()
