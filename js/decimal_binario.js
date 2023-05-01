function dec2Bin(decNumber) {
    var restStack = [],
    rest,
    baseString = ''


    while(decNumber>0) {
        rest = Math.floor(decNumber%2)
        restStack.push(rest)
        decNumber = Math.floor(decNumber/2)
    }

    while(restStack.length>0) {
        baseString += restStack.pop()
    }

    return baseString
}

console.log(dec2Bin(23))