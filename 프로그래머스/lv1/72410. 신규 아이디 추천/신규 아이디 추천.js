function stage1(id) {
  return id.toLowerCase();
}

function stage2(id) {
  const result = [];
  for (const el of id) {
    if (/[a-z\d\-\_\.]/.test(el)) result.push(el);
  }
  return result;
}

function stage3(idArr) {
  const result = [];
  for (const el of idArr) {
    if (result.at(-1) === "." && el === ".") continue;
    result.push(el);
  }
  return result;
}

function stage4(idArr) {
  if (idArr.at(0) === ".") idArr.shift();
  if (idArr.at(-1) === ".") idArr.pop();
  return idArr;
}

function stage5(idArr) {
  return idArr.length === 0 ? ["a"] : idArr;
}

function stage6(idArr) {
  if (idArr.length >= 16) {
    idArr.splice(15);
    if (idArr.at(-1) === ".") idArr.splice(-1);
  }
  return idArr;
}

function stage7(idArr) {
  if (idArr.length <= 2) {
    let arr = [...idArr];
    for (let i = idArr.length; i < 3; i++) {
      arr[i] = idArr.at(-1);
    }
    return arr.join("");
  }
  return idArr.join("");
}

function solution(new_id) {
  return stage7(stage6(stage5(stage4(stage3(stage2(stage1(new_id)))))));
}