let visited = [];
let player1 = true;
let player1pos = [];
let player2pos = [];

let iswon = () => {
    if ((player1pos[1] && player1pos[2] && player1pos[3]) ||
        (player1pos[1] && player1pos[4] && player1pos[7]) ||
        (player1pos[3] && player1pos[6] && player1pos[9]) ||
        (player1pos[7] && player1pos[8] && player1pos[9]) ||
        (player1pos[2] && player1pos[5] && player1pos[8]) ||
        (player1pos[1] && player1pos[5] && player1pos[9]) ||
        (player1pos[3] && player1pos[5] && player1pos[7])) {
        console.log("Player1 wins");
        return;
    }
    
    if( (player2pos[1] && player2pos[2] && player2pos[3]) ||
        (player2pos[1] && player2pos[4] && player2pos[7]) ||
        (player2pos[3] && player2pos[6] && player2pos[9]) ||
        (player2pos[7] && player2pos[8] && player2pos[9]) ||
        (player2pos[2] && player2pos[5] && player2pos[8]) ||
        (player2pos[1] && player2pos[5] && player2pos[9]) ||
        (player2pos[3] && player2pos[5] && player2pos[7])){
        console.log("Player2 wins");
        return;

    }
}

let x = (i) => {
    if (visited[i] == 1) return;
    if (player1) {
        player1 = false;
        visited[i] = 1;
        player1pos[i] = 1;
        const el = document.getElementsByClassName("Cell");
        console.log(i);
        console.log(el[i - 1]);
        el[i - 1].innerHTML = `
        <i class="bi bi-x-lg"></i>
        `;
        iswon();
        return;
    
    }
    if (!player1) {
        player1 = true;
        player2pos[i] = 1;
        visited[i] = 1;
        const el = document.getElementsByClassName("Cell");
        console.log(i);
        console.log(el[i - 1]);
        el[i - 1].innerHTML = `
        <i class="bi bi-circle"></i>
        `; 
        iswon();
        return;
    }
}