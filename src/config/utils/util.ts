export function debounce<F extends (...args: any) => any>(
 func: F,
 delay: number
) {
 let timeout: NodeJS.Timeout;
 const debounced = (...args: any) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => func(...args), delay);
 };

 return debounced as (...args: Parameters<F>) => ReturnType<F>;
}

export function throttle<F extends (...args: any) => any>(
 func: F,
 delay: number
) {
 let timeout: NodeJS.Timeout | null;
 const throttled = (...args: any) => {
  if (!timeout) {
   timeout = setTimeout(() => {
    func(...args);
    timeout = null;
   }, delay);
  }
 };

 return throttled as (...args: Parameters<F>) => ReturnType<F>;
}
