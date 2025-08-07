const players = ["virat","rohit","gill","msd"];

function alldetails() {
    return players.map(x=>(
     console.log(`players : ${x}`)
    ));
}
function pdetails() {
    players.forEach((x)=>{
        console.log(`players : ${x}`);
    })
}
module.exports = {players,alldetails,pdetails};