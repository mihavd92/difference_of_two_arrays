/* First Solve */
let first = [1, 3, 3, 4, 6, 5, 4];
let second = [6, 3, 5, 2, 2];

function getDifference1(first, second) {
    return first.filter(element => {
        return !second.includes(element);
    });
}

let difference = [
    ...getDifference1(first, second),
    ...getDifference1(second, first)
];

function unique(difference) {
    let result = [];

    for (let str of difference) {
        if (!result.includes(str)) {
            result.push(str)
        }
    }
    return result
}

console.log(unique(difference).sort());

/* Second Solve */

function getDifference2 (first, second) {
    let temp = [];
    first = first.toString().split(',').map(Number);
    second = second.toString().split(',').map(Number);

    for (let i in first) {
        if(second.indexOf(first[i]) === -1) temp.push(first[i]);
    }
    for(let i in second) {
        if(first.indexOf(second[i]) === -1) temp.push(second[i]);
    }
    return temp.sort((a,b) => a-b);
}

console.log(getDifference2([1, 3, 3, 4, 6, 5, 4], [6, 3, 5, 2, 2]));

/* Third Solve */

function getDifference3(first, second) {
    let newArr = [];

    newArr = first.concat(second);

    function checkNum(num) {
        if (first.indexOf(num) === -1 || second.indexOf(num) === -1) {
            return num;
        }
    }

    return newArr.filter(checkNum);

}

getDifference3([1, 3, 3, 4, 6, 5, 4], [6, 3, 5, 2, 2]);
let result = getDifference3([1, 3, 3, 4, 6, 5, 4], [6, 3, 5, 2, 2]);
console.log(result)



