function cachingDecoratorNew(func) {

  const cache = [];

  return (...args) => {
    let hash = args.join(',');
    let objectInCache = cache.findIndex((item) => item.hash === hash);

    if (objectInCache != -1) {
      let result = cache[objectInCache].value;
      console.log("Из кэша: " + result);
      return "Из кэша: " + result;
    }

    let value = func(...args);
    cache.push({
      hash,
      value
    });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;
  }
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  function wrapper(...args) {

    if (timeoutId == null) {

      wrapper.count++;
      func(...args);

    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => { wrapper.count++; func(...args) }, delay);
    wrapper.allCount++;

  }

  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;

}