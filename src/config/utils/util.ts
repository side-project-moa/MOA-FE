export function debounce<F extends (...args: any) => any>(
  func: F,
  delay: number,
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
  delay: number,
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

export function verifyEmail(text: string) {
  const emailRule =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return emailRule.test(text);
}

export function verifyPassword(text: string) {
  const passwordRule = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/i;
  return passwordRule.test(text);
}


const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  1440: customMediaQuery(1440),
  768: customMediaQuery(768),
  tablet: customMediaQuery(1100),
  mobile: customMediaQuery(500),
};