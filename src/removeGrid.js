export default function removeGrid(container) {
        const selectedRows = container.querySelectorAll(".row");
        selectedRows.forEach(row => {
            container.removeChild(row);
        });
 
}