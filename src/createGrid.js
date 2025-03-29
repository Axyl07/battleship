// const humanGrid = document.querySelector('.humanGrid');
// const computerGrid = document.querySelector('.computerGrid');

export function createGrid(row, col, container) {
    console.log('grid test')
    for (let index = 0; index < row; index++) {
        const row = document.createElement("div");
        
        row.className = "row";
        row.style.display = "flex";
        row.style.border = "1px solid black"
        row.style.flex = "1";
        container.appendChild(row);
        for (let j = 0; j < col; j++) {
            let col = document.createElement("div");
    
            col.style.display = "flex";
            col.style.flex = "1";
            col.style.border = "1px solid black"
            col.className = "col";
            col.style.backgroundColor = "cyan";
            col.id = `${container.className}-${[index,j]}`
            // col.textContent = 'X'
            col.style.alignItems= 'center'
            col.style.justifyContent = 'center'
            col.style.fontSize= '3rem'
            col.style.borderRadius= '5px'
            col.style.margin= '1px'
            row.appendChild(col);
        }
    }
}
