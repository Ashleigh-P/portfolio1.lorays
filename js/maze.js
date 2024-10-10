document.addEventListener('DOMContentLoaded', function() {
    const maze = document.getElementById('maze');
    const gridSize = 15; 
    const player = { x: 0, y: 0 }; // Player starts at the top-left corner
    const center = { x: 7, y: 7 }; // Coordinates of the center

    // Function to generate a random number (0 or 1)
    function getRandomColor() {
        return Math.random() > 0.5 ? 'color1' : 'color2';
    }

    // Create maze grid with walls and colors
    const mazeBlocks = [];
    for (let y = 0; y < gridSize; y++) {
        const row = [];
        for (let x = 0; x < gridSize; x++) {
            const block = document.createElement('div');
            block.classList.add('maze-block');
            block.classList.add(getRandomColor());

            // Randomly assign some blocks as walls
            if (Math.random() > 0.7 && (x !== player.x || y !== player.y) && !(x >= center.x && x <= center.x + 1 && y >= center.y && y <= center.y + 1)) {
                block.classList.add('wall');
            }

            maze.appendChild(block);
            row.push(block);
        }
        mazeBlocks.push(row);
    }

    // Create the player
    const playerBlock = document.createElement('div');
    playerBlock.classList.add('maze-block', 'player');
    maze.appendChild(playerBlock);
    updatePlayerPosition();

    // Create the center goal
    const centerBlock = document.createElement('div');
    centerBlock.classList.add('maze-center');

    // Hide the video initially
    const video = document.createElement('video');
    video.src ='ashleigh-p.lorays.github.io/vids/Lo Rays - 27 Club (Visualiser).mp4' ;
    video.controls = true;
    video.style.display = 'none'; // Initially hidden
    video.style.width = '100%';


     // Fullscreen button
     const fullScreenButton = document.createElement('button');
     fullScreenButton.innerText = 'Full Screen';
     fullScreenButton.style.display = 'none'; // Hidden until player reaches the center
 
     // Add video and button to the center
     centerBlock.appendChild(video);
     centerBlock.appendChild(fullScreenButton);
     maze.appendChild(centerBlock);

    // Handle keyboard movement
    document.addEventListener('keydown', function(event) {
        let newX = player.x;
        let newY = player.y;

        switch (event.key) {
            case 'ArrowUp':
                newY = player.y > 0 ? player.y - 1 : player.y;
                break;
            case 'ArrowDown':
                newY = player.y < gridSize - 1 ? player.y + 1 : player.y;
                break;
            case 'ArrowLeft':
                newX = player.x > 0 ? player.x - 1 : player.x;
                break;
            case 'ArrowRight':
                newX = player.x < gridSize - 1 ? player.x + 1 : player.x;
                break;
        }

        // Check if the new position is a wall
        if (!mazeBlocks[newY][newX].classList.contains('wall')) {
            player.x = newX;
            player.y = newY;
            updatePlayerPosition();
        }

// Check if player reached the center
if (player.x >= center.x && player.x <= center.x + 1 && player.y >= center.y && player.y <= center.y + 1) {
    alert('Escape! Congratulations, Redirecting to YouTube... Enjoy!!! ');
    window.location.href = 'https://www.youtube.com/watch?v=Gy9URC1SlS8'; // Replace with your YouTube video link
}
});
    // Update the player block's position in the grid
    function updatePlayerPosition() {
        playerBlock.style.gridColumn = player.x + 1;
        playerBlock.style.gridRow = player.y + 1;
    }
});
