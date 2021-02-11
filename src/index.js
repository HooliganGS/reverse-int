module.exports = function reverse(n) {
    n = String(n);
    n.split('');
    let newArray = [];
    for (let i = 0; i < n.length; i++) {
        newArray[n.length - i] = n[i];
    }
    newArray.splice(0, 1);
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === '-') {
            newArray.pop();
        }
    }
    return newArray.join('');
}