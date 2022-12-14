// a -> b, a -> b
// a -> c
// b -> c

// complainantObj ={
//     a: Set {b, c},
//     b: Set {c}
// }
// dependantObj = {
//     b: Set {a},
//     c: Set {a, b}
// }

function solution(id_list, reports, k) {
    const complainantObj = {}; // 신고자 당 피신고자 객체
    const dependantObj = {}; // 피신고자 당 신고자 객체
    reports.forEach(report => {
        const [complainant, dependant] = report.split(" ");
        complainantObj[complainant] = !complainantObj[complainant]
            ? new Set().add(dependant)
            : complainantObj[complainant].add(dependant);
        dependantObj[dependant] = !dependantObj[dependant]
            ? new Set().add(complainant)
            : dependantObj[dependant].add(complainant);
    });

    // complainantObj의 각 신고자 당 피신고자
    // id of id_list
    // if complainantObj[id] !== undefined -> result.push(cnt)
    // else -> result.push(0)
    const result = [];
    id_list.forEach(id => {
        if (complainantObj[id]) {
            let cnt = 0;
            complainantObj[id].forEach(dependant => {
                if (dependantObj[dependant].size >= k) cnt++;
            });
            result.push(cnt);
        } else result.push(0);
    });
    return result;
}
