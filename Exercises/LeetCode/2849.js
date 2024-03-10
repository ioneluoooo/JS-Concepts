function isReachableTime(sx, sy, fx, fy, t) {
  if (sx === fx && sy === fy) {
    return t >= 2 || t === 0
  }

  let count = 0;

  while (sx !== fx || sy !== fy) {
    if (sx < fx) {
      sx++;
    } else if (sx > fx) {
      sx--;
    }

    if (sy < fy) {
      sy++;
    } else if (sy > fy) {
      sy--;
    }

    count++;

    if (count > t) {
      return false;
    }
  }

  console.log(sx, sy, count);
  return count <= t;

  // not optimal
}
console.log(isReachableTime(1,2, 1, 2, 2));

// solution 
var isReachableAtTime = function (sx, sy, fx, fy, t) {
    if (sx === fx && sy === fy) {
        return t !== 1
    }

    let x = Math.abs(sx - fx) + 1
    let y = Math.abs(sy - fy) + 1
    let distance = Math.min(x, y)
    distance += Math.max(x, y) - Math.min(x, y)
    distance--

    return distance <= t
}; 
