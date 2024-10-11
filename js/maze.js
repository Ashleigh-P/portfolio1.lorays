document.addEventListener('DOMContentLoaded', function () {
    const maze = document.getElementById('maze');
    const gridSize = 15; // Grid size is 15x15
    const player = { x: 0, y: 0 }; // Player starts at the top-left corner
    const finishPosition = { x: gridSize - 1, y: gridSize - 1 }; // Finish position at the bottom-right corner
    let moveCount = 0; // Track player moves
    const maxMoves = 27; // Maximum allowed moves for failure

    // Modal elements
    const successModal = document.getElementById('successModal');
    const failureModal = document.getElementById('failureModal');
    const closeBtns = document.querySelectorAll('.close-btn');
    const redirectBtn = document.getElementById('redirectBtn');
    const retryBtn = document.getElementById('retryBtn');

    // Create maze grid with walls and colors
    const mazeBlocks = [];

    function createBlock(x, y) {
        const block = document.createElement('div');
        block.classList.add('maze-block', getRandomColor());

        // Determine if the block is a wall or path
        if (isWall(x, y)) {
            block.classList.add('wall');
        }

        return block;
    }

    function getRandomColor() {
        return Math.random() > 0.5 ? 'color1' : 'color2';
    }

    function isWall(x, y) {
        // Randomly place walls but ensure start and finish are clear
        return (Math.random() > 0.5) && !(x === player.x && y === player.y) && !(x === finishPosition.x && y === finishPosition.y);
    }

    function createMaze() {
        for (let y = 0; y < gridSize; y++) {
            const row = [];
            for (let x = 0; x < gridSize; x++) {
                const block = createBlock(x, y);
                maze.appendChild(block);
                row.push(block);
            }
            mazeBlocks.push(row);
        }
    }

    // Create the player block
    const playerBlock = document.createElement('div');
    playerBlock.classList.add('maze-block', 'player');
    maze.appendChild(playerBlock);
    updatePlayerPosition();

    // Movement function
    function movePlayer(direction) {
        let newX = player.x;
        let newY = player.y;

        // Update position based on direction
        switch (direction) {
            case 'ArrowUp':
                newY = Math.max(0, player.y - 1);
                break;
            case 'ArrowDown':
                newY = Math.min(gridSize - 1, player.y + 1);
                break;
            case 'ArrowLeft':
                newX = Math.max(0, player.x - 1);
                break;
            case 'ArrowRight':
                newX = Math.min(gridSize - 1, player.x + 1);
                break;
        }

        // Check if the new position is a wall
        if (!mazeBlocks[newY][newX].classList.contains('wall')) {
            player.x = newX;
            player.y = newY;
            updatePlayerPosition();
            moveCount++; // Increment move count

            // Check for failure condition
            if (moveCount > maxMoves) {
                failureModal.style.display = 'flex'; // Show failure modal
                return;
            }

            // Check for success condition
            if (player.x === finishPosition.x && player.y === finishPosition.y) {
                successModal.style.display = 'flex'; // Show success modal
            }
        }
    }

    // Handle keyboard movement
    window.addEventListener('keydown', function (event) {
        // Prevent arrow keys from scrolling the page
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
            event.preventDefault(); // Stop the default action
            movePlayer(event.key); // Call the movement function
        }
    });

    // Update the player's position in the grid
    function updatePlayerPosition() {
        playerBlock.style.gridColumn = player.x + 1; // Grid column is 1-based
        playerBlock.style.gridRow = player.y + 1; // Grid row is 1-based
    }

    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            successModal.style.display = 'none';
            failureModal.style.display = 'none';
        });
    });

    // Redirect to YouTube (on success)
    redirectBtn.addEventListener('click', function () {
        window.location.href = 'https://www.youtube.com/watch?v=Gy9URC1SlS8'; // Replace with your YouTube link
    });

    // Retry the maze (on failure)
    retryBtn.addEventListener('click', function () {
        window.location.href = 'https://www.youtube.com/watch?v=z90_CpugQkI'; // Replace with your YouTube link
        player.x = 0; // Reset player position to the start
        player.y = 0; // Reset player position to the start
        moveCount = 0; // Reset move counter
        updatePlayerPosition(); // Update the player’s position on the grid
        failureModal.style.display = 'none'; // Hide failure modal
    });

    // Initialize maze creation
    createMaze();
});
