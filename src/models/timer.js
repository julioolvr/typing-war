/* @flow */
export default class Timer {
  onTick: Function;
  interval: number;

  constructor (onTick: Function) {
    this.onTick = onTick
  }

  start (interval: number) {
    // TODO: Is `setInterval` the best alternative here?
    this.interval = setInterval(this.onTick, interval)
  }

  stop () {
    clearInterval(this.interval)
  }
}
