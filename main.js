document.addEventListener('DOMContentLoaded', () => {
    let visited = [];
    let player1 = true; // Player 1 starts (X)
    let player1pos = [];
    let player2pos = [];
    let play1 = false;
    let play2 = false;

    // Define event handler for the cell clicks
    function handleEvent(event, arg) {
        console.log(event);
        console.log(arg);
        x(arg + 1);  // Use 1-based index
    }

    let CellElement = document.getElementsByClassName("Cell");
    let CE = Array.from(CellElement);
    console.log(CE);

    // Create an object to store handler references
    const handlers = {};

    // Define the handler function that uses a unique identifier for each cell
    const eventHandler = (event, index) => {
        handleEvent(event, index);
    };

    // Attach event listeners to each cell and store the handler references
    CE.forEach((element, index) => {
        handlers[element.id] = (event) => eventHandler(event, index);
        element.addEventListener("click", handlers[element.id]);
    });

    // Function to remove event listeners
    function removeEvent() {
        CE.forEach((element, index) => {
            element.removeEventListener("click", handlers[element.id]);
        });
    }

    // Winning condition checker
    let iswon = () => {
        // Player 1 win conditions
        if ((player1pos.includes(1) && player1pos.includes(2) && player1pos.includes(3)) ||
            (player1pos.includes(4) && player1pos.includes(5) && player1pos.includes(6)) ||
            (player1pos.includes(7) && player1pos.includes(8) && player1pos.includes(9)) ||
            (player1pos.includes(1) && player1pos.includes(4) && player1pos.includes(7)) ||
            (player1pos.includes(2) && player1pos.includes(5) && player1pos.includes(8)) ||
            (player1pos.includes(3) && player1pos.includes(6) && player1pos.includes(9)) ||
            (player1pos.includes(1) && player1pos.includes(5) && player1pos.includes(9)) ||
            (player1pos.includes(3) && player1pos.includes(5) && player1pos.includes(7))) {
            console.log("Player 1 wins!");
            return true;
        }

        // Player 2 win conditions
        if ((player2pos.includes(1) && player2pos.includes(2) && player2pos.includes(3)) ||
            (player2pos.includes(4) && player2pos.includes(5) && player2pos.includes(6)) ||
            (player2pos.includes(7) && player2pos.includes(8) && player2pos.includes(9)) ||
            (player2pos.includes(1) && player2pos.includes(4) && player2pos.includes(7)) ||
            (player2pos.includes(2) && player2pos.includes(5) && player2pos.includes(8)) ||
            (player2pos.includes(3) && player2pos.includes(6) && player2pos.includes(9)) ||
            (player2pos.includes(1) && player2pos.includes(5) && player2pos.includes(9)) ||
            (player2pos.includes(3) && player2pos.includes(5) && player2pos.includes(7))) {
            console.log("Player 2 wins!");
            return true;
        }

        return false;
    }

    // Player move handling
    let x = (i) => {
        if (visited[i - 1]) return;  // Check if the position is already visited
        if (player1) {
            player1 = false;  // Switch to player 2
            visited[i - 1] = 1;  // Mark this cell as visited
            player1pos.push(i);  // Store the move in player 1's positions
            const el = document.getElementsByClassName("Cell");
            el[i - 1].innerHTML = `<i class="bi bi-x-lg"></i>`;  // Mark with X
            if (iswon()) {
                play1 = true;
                removeEvent();  // Disable further clicks
            }
            return;
        }
        if (!player1) {
            player1 = true;  // Switch to player 1
            player2pos.push(i);  // Store the move in player 2's positions
            visited[i - 1] = 1;  // Mark this cell as visited
            const el = document.getElementsByClassName("Cell");
            el[i - 1].innerHTML = `<i class="bi bi-circle"></i>`;  // Mark with O
            if (iswon()) {
                play2 = true;
                removeEvent();  // Disable further clicks
            }
            return;
        }
    };

    // Function to drop events (remove listeners when the game is over)
    function dropEvents() {
        CE.forEach((element, index) => {
            element.removeEventListener("click", handlers[element.id]);
        });
    }

    // // Attach drop event listener to the "drop" button or any other element
    // document.getElementById('drop').addEventListener('click', dropEvents);
});
