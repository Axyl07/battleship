export default function renderGameboard(GameBoard, Grid) {
    // const colElements = Grid.querySelectorAll('.row > class^=["col"]');
    // colElements.forEach(col => {
    //     const id = col.id;
    //     if (id===`${x},${y}`) {
    //         col.textContent = '•'
    //     }
    // })
    const missedShots = GameBoard.missedShots;
    const positions = GameBoard.positions;
    console.log(positions)
    missedShots.forEach(array => {
        const x = array[0];
        const y = array[1];
        console.log(`${Grid.className}-${x},${y}`);
        const cell = document.getElementById(`${Grid.className}-${x},${y}`);
        cell.textContent = '•'
        // const colElements = Grid.querySelectorAll('.row > class^=["col"]');
        // colElements.forEach(col => {
        //     const id = col.id;
        //     if (id===`${x},${y}`) {
        //         col.textContent = '•'
        //     }
        // })
    });
    for (let i = 0; i < positions.length; i++) {
        const row = positions[i];
        for (let j = 0; j < row.length; j++) {
            const col = row[j];
            if (typeof(col)==='object') {
                // console.log(`${i},${j}`)
                if (col.isSunk()) {
                    const gridCell = document.getElementById(`${Grid.className}-${i},${j}`);
                    gridCell.style.backgroundColor = 'red'
                    gridCell.style.border = '1px solid red'
                    // gridCell.textContent = 'X'
                } else {
                    const gridCell = document.getElementById(`${Grid.className}-${i},${j}`);
                    gridCell.style.backgroundColor = 'aquamarine'
                    gridCell.style.border = '1px solid yellow'
                }
            } 
        }
    }
}