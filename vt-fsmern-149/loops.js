
function loopex() {
    const arr = [1,2,3];
    let res = [];
    for(let i=0; i<arr.length;i++){
        res.push(arr[i]*2);
    }
    return res;
}
module.exports = {loopex}