function solution(s) {
  const arrP = s.match(/p/gi);
  const arrY = s.match(/y/gi);
  if (arrP === null && arrY === null) return true;
  if (arrP !== null && arrY !== null) return arrP.length === arrY.length;
  return false;
}