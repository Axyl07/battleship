export default function renderGameboard(GameBoard, Grid) {
    const missedShots = GameBoard.missedShots;
    console.log(missedShots)
    missedShots.forEach(array => {
        const x = array[0];
        const y = array[1];
        console.log(x,y)
        console.log(`#${x},${y}`)
        const cell = document.getElementById(`${x},${y}`);
        cell.textContent = '•'
    });
}