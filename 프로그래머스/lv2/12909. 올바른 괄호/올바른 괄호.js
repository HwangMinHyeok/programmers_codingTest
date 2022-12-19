// function solution(s) {
//     let openBracketCnt = 0;
//     let closeBracketCnt = 0;
//     for (const b of s) {
//         if (b === "(") openBracketCnt++;
//         else closeBracketCnt++;
//         if (openBracketCnt < closeBracketCnt) return false;
//     }
//     if (openBracketCnt !== closeBracketCnt) return false;
//     return true;
// }

function solution(s){
    const stack = [];
    for(const b of s){
        if(b === "(") stack.push(b);
        else{
            if(stack.length!==0) stack.pop();
            else return false;
        }
    }
    return stack.length!==0 ? false : true;
}