export default function resetGrid(container) {
    const selectedRows = container.querySelectorAll(".row");
        selectedRows.forEach(row => {
            container.removeChild(row);
        });
}