export default function resetGrid(container) {
    const selectedRows = container.querySelectorAll(".row");
    // console.log(selectedRows);
        selectedRows.forEach(row => {
            container.removeChild(row);
        });
}