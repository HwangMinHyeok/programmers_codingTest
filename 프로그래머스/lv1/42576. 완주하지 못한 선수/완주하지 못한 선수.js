// function solution(participant, completion) {
//   //   completion.forEach((el) => participant.splice(participant.indexOf(el), 1));
//   for (let i = 0; i < completion.length; i++) {
//     participant.splice(participant.indexOf(completion[i]), 1);
//   }
//   return participant[0];
// }

function solution(participant, completion) {
  const obj = {};
  for (let el of participant) {
    if (el in obj) obj[el]++;
    else obj[el] = 1;
  }
  for (let el of completion) {
    if (obj[el] === 1) delete obj[el];
    else obj[el]--;
  }
  return Object.keys(obj)[0];
}