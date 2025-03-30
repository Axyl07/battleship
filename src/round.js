const switchPlayerTurn = () => {
    return activePlayer = activePlayer === p1 ? p2 : p1;
}
export default function playRound(p1, p2) {
    let activePlayer = p1;
    activePlayer = switchPlayerTurn();
}
