function maxRot(n) {
    let nString = n.toString()
    let rotations = []
    let max = n

    for(let i = 0; i < nString.length; i++) {
        nString = nString.slice(0, i) + nString.slice(i + 1) + nString[i]
        rotations.push(parseInt(nString))
        if(nString > max) {{
            max = nString
        }}
    }

    return max
}


console.log(maxRot(56789))