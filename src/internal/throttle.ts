//
// A lightweight debounce implementation
//
export function debounce(callback: (...arg: unknown[]) => void, delay: number) {
  let timer: any;

  return function (this: unknown, ...args: unknown[]) {
    if (timer) {
      return;
    }
    callback.apply(this, [...args]);
    timer = setTimeout(() => (timer = null), delay);
  };
}
/**
 * 防抖： 如果一个函数不停发生，则要等一定间隔才允许发生或者执行
 * @param fn 原始防抖函数
 * @param wait
 * @returns
 */
export function debounceWait(fn: (...arg: unknown[]) => void, wait: number) {
  let callback = fn;
  let timerId: any;
  return (...args: unknown[]) => {
    // 保存作用域
    let context = this;
    // 保存参数，例如 event 对象
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      callback.apply(context, args);
    }, wait);
  };
}
//
// A lightweight throttle implementation
//
/**
 * 函数节流， 持续触发事件时，保证一定时间段内只调用一次事件处理函数。节流通俗解释就比如我们水龙头放水，阀门一打开，水哗哗的往下流，秉着勤俭节约的优良传统美德，我们要把水龙头关小点
 * @param method 节流方法
 * @param delay 多少时间调用一次
 * @param scope 函数执行上下文
 */
export function throttle(method: (...arg: unknown[]) => void, delay: number, scope?: unknown) {
  let startTime = new Date().getTime();
  return function (this: unknown, ...args: unknown[]) {
    const context = scope != null ? scope : this,
      current = new Date().getTime();
    if (current - startTime >= delay) {
      method.apply(context, args);
      startTime = current;
    }
  };
}

export function throttleTimeout(method: (...arg: unknown[]) => void, wait: number, mustRun: number) {
  let startTime = new Date().getTime();
  let timeout: number;
  return function (this: unknown, ...args: unknown[]) {
    const context = this,
      current = new Date().getTime();
    clearTimeout(timeout);
    if (current - startTime >= mustRun) {
      method.apply(context, args);
      startTime = current;
    } else {
      timeout = window.setTimeout(method, wait);
    }
  };

  // 采用了节流函数
  //window.addEventListener('scroll',throttle(realFunc,500,1000));
  //大概功能就是如果在一段时间内 scroll 触发的间隔一直短于 500ms ，那么能保证事件我们希望调用的 handler 至少在 1000ms 内会触发一次
}
