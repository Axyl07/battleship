export default function playRound(p1, p2) {
    let activePlayer = p1;
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === p1 ? p2 : p1;
    }
}
