function solution(N, stages) {
    // info[ [k, stage k의 실패율] ] ( 0 <= k < N )
    // stage k의 실패율 = 분자 / 분모
    // 분자: stages.filter ( stage === k+1) .len
    // 분모: stages.filter ( stage >= k+1 ) .len
    let info = Array(N).fill();
    info = info.map(function (el, idx) {
        const numerator = stages.filter(stage => stage === idx + 1).length;
        const denominator = stages.filter(stage => stage >= idx + 1).length;
        return [idx + 1, numerator / denominator];
    });

    // info[i][1] (실패율) 기준 내림차순 정렬
    info.sort((a, b) => b[1] - a[1]);

    // return
    return info.map(el => el[0]);
}