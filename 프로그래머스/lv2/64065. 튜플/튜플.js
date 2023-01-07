// convert str to arr
function splitS(s) {
  return s
    .slice(2, s.length - 2)
    .split("},{")
    .map((str) => str.split(",").map((strNum) => Number(strNum)));
}
function solution(s) {
  const arr = splitS(s);
  arr.sort((a, b) => a.length - b.length);
  const tuple = [];
  arr.forEach((ak) => {
    ak.forEach((el) => {
      if (!tuple.includes(el)) tuple.push(el);
    });
  });
  return tuple;
}


// function splitS(s) {
//   const result = [];
//   let tmp = [];
//   let isOpen = false;
//   let num = 0;
//   for (let i = 1; i < s.length - 1; i++) {
//     // if {
//     if (!isOpen && s[i] === "{") {
//       isOpen = true;
//       continue;
//     }
//     // 배열 열려있을 때
//     if (isOpen) {
//       // if 숫자
//       if (!isNaN(s[i])) {
//         num *= 10;
//         num += Number(s[i]);
//       }
//       // if ,
//       else if (s[i] === ",") {
//         tmp.push(num);
//         num = 0;
//       }
//       // if }
//       else {
//         tmp.push(num);
//         num = 0;
//         isOpen = false;
//         result.push(tmp);
//         tmp = [];
//       }
//     }
//   }
//   return result;
// }