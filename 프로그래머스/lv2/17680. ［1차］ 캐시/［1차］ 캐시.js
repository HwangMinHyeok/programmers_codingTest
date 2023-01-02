function solution(cacheSize, cities) {
  const cache_lowercase = [];
  let exeTime = 0;
  for (const city of cities) {
    const isInCache = cache_lowercase.indexOf(city.toLowerCase());
    // cache hit
    if (isInCache !== -1) {
      cache_lowercase.splice(isInCache, 1);
      cache_lowercase.unshift(city.toLowerCase());
      exeTime += 1;
    }
    // cache miss
    else {
      cache_lowercase.unshift(city.toLowerCase());
      if (cache_lowercase.length > cacheSize) cache_lowercase.pop();
      exeTime += 5;
    }
  }
  return exeTime;
}