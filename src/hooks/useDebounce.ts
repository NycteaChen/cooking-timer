// https://www.explainthis.io/zh-hant/swe/debounce
export const useDebounce = (
  fn: (...args: any[]) => void,
  delay: number = 500
) => {
  let timer: number = 0;

  return (...args: any[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
