// Select elements for success and failure modals
const successModal = document.getElementById('successModal');
const failureModal = document.getElementById('failureModal');
const closeBtns = document.querySelectorAll('.close-btn');
const redirectBtn = document.getElementById('redirectBtn');
const retryBtn = document.getElementById('retryBtn');

// Player's current position (start at 0,0)
let playerPosition = [0, 0];

// Maze size (assuming 8x8)
const mazeSize = 8;

// Handle move based on radio button clicks
document.querySelectorAll('input[name="maze"]').forEach(radio => {
    radio.addEventListener('click', (event) => {
        // Update player position based on selected radio button
        const selectedId = event.target.id;
        const [row, col] = selectedId.replace('r', '').split('-').map(Number);
        playerPosition = [row, col];

        // Check for success (if player reaches bottom right corner)
        if (playerPosition[0] === mazeSize - 1 && playerPosition[1] === mazeSize - 1) {
            showModal(successModal); // Player reached the end
        }
    });
});

// Show the success or failure modal
function showModal(modal) {
    modal.style.display = 'block';
}

// Close modal when the close button is clicked
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        successModal.style.display = 'none';
        failureModal.style.display = 'none';
    });
});

// Redirect on success
redirectBtn.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=Gy9URC1SlS8'; // Replace with desired link
});

// Retry button functionality (reset player position and hide modal)
retryBtn.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=z90_CpugQkI'; // Replace with desired link

    failureModal.style.display = 'none';
    document.querySelector('input#r0-0').checked = true; // Reset player to start position
    playerPosition = [0, 0];
});

// Close modal if user clicks outside modal content
window.onclick = function(event) {
    if (event.target == successModal || event.target == failureModal) {
        successModal.style.display = 'none';
        failureModal.style.display = 'none';
    }
};
