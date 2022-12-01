function solution(numbers, hand) {
    // L - 1,4,7
    // R - 3,6,9
    // L R 중 가까운 놈 2,5,8,0
    let posL = "*";
    let posR = "#";
    const result = [];
    for (let num of numbers) {
        switch (num) {
            case 1:
            case 4:
            case 7:
                result.push("L");
                posL = num;
                break;
            case 3:
            case 6:
            case 9:
                result.push("R");
                posR = num;
                break;
            case 2:
            case 5:
            case 8:
            case 0:
                let distL = getDist(posL, num);
                let distR = getDist(posR, num);
                if (distL === distR) {
                    if (hand === "left") {
                        result.push("L");
                        posL = num;
                    } else {
                        result.push("R");
                        posR = num;
                    }
                } else {
                    if (distL < distR) {
                        result.push("L");
                        posL = num;
                    } else {
                        result.push("R");
                        posR = num;
                    }
                }
                break;
            default:
                break;
        }
    }
    return result.join("");
}

// num의 2차원배열 인덱스 리턴
function getIdx(num) {
    const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"],
    ];
    switch (num) {
        case 1: case 2: case 3:
            return [0, arr[0].indexOf(num)];
        case 4: case 5: case 6:
            return [1, arr[1].indexOf(num)];
        case 7: case 8: case 9:
            return [2, arr[2].indexOf(num)];
        case "*": case 0: case "#":
            return [3, arr[3].indexOf(num)];
        default: break;
    }
}

// present ~ target 거리 계산
function getDist(present, target) {
    const presentIdx = getIdx(present);
    const targetIdx = getIdx(target);
    return Math.abs(presentIdx[0] - targetIdx[0]) + Math.abs(presentIdx[1] - targetIdx[1]);
}