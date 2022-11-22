function solution(phone_number) {
    let arr= [...phone_number].slice(-4);
    let front = Array(phone_number.length-4).fill("*");
    return front.concat(arr).join("");
}