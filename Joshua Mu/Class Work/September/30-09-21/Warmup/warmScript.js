const prizes = ["🚗 New car", "🌴 Holiday", "🥁 Drum machine", "❌ You lose"]
const prizesWon = [];

function getPrize() {
    let randomNum = (Math.random() * 10);
    console.log(randomNum);
    if (randomNum > 5) {
        let prize = (Math.random() * 4);
        prize = Math.trunc(prize);

        if (prize === 1) {
            prizesWon.push(prizes[0]);
            console.log(prizesWon);
            return `Congratulation, you've won a ${prizes[0]} as a prize`
        }
        if (prize === 2) {
            prizesWon.push(prizes[1]);
            console.log(prizesWon);
            return `Congratulation, you've won a ${prizes[1]} as a prize`
        }
        else {
            prizesWon.push(prizes[2]);
            console.log(prizesWon);
            return `Congratulation, you've won a ${prizes[2]} as a prize`
        }
    }
    else {
        let thingy = prizesWon.length;
        for (let i = 0; i < thingy; i++) {
            prizesWon.pop();   
        }
        console.log(prizesWon);
        return `You've won nothing. ${prizes[3]}`;
    }
}

console.log(getPrize());