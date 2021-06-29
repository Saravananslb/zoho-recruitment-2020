const oddLetter = letter => {
    
    const letterArr = letter.split(' ');
    const letterLen = letterArr.length;
    const middle = (letterLen -1) / 2;
    const newLetter = letterArr.slice(middle).concat(letterArr.slice(0, middle))
    const arr = [];
    letterArr.forEach(element => {
        arr.push(newLetter.join(' '));
        newLetter.pop();
        newLetter.unshift(' ');
    });
    arr.reverse();
    return arr.join('\n');
}

console.log(oddLetter('W A T E R'));