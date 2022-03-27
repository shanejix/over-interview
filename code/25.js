const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(excutor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.onFullfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resovle = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;
        this.onFullfilledCallbacks.forEach(cb => cb())
      }
    }

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason;
        this.onRejectedCallbacks.forEach(cb => cb())
      }
    }

    try {

      excutor(resovle, reject)
    } catch (e) {
      // throw e
      reject(e)
    }

  }
  then(onFulfilled, onRejected) {

    onFulfilled = typeof onFulfilled === 'function'
      ? onFulfilled
      : v => v

    onRejected = typeof onRejected === 'function'
      ? onRejected
      : r => r


    const self = this;

    return new Promise((resolve, reject) => {

      if (self.status === PENDING) {
        self.onFullfilledCallbacks.push(() => {
          try {
            setTimeout(() => {
              const result = onFulfilled(self.value)

              result instanceof Promise
                ? result.then(
                  res => resolve(res),
                  rej => reject(rej)
                )
                : resolve(result)
            })
          } catch (error) {
            reject(error)
          }
        })

        self.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            const result = onRejected(self.reason)

            result instanceof Promise
              ? result.then(
                res => resolve(res),
                rej => reject(rej)
              )
              : reject(result)
          })
        })
      }

      if (self.status === FULFILLED) {
        try {
          setTimeout(() => {
            const result = onFulfilled(self.value);

            result instanceof Promise
              ? result.then(resolve, reject)
              : resolve(result)
          })
        } catch (error) {
          reject(error)
        }
      }

      if (self.status == REJECTED) {
        try {
          setTimeout(() => {
            const result = onRejected(self.reason);

            result instanceof Promise
              ? result.then(resolve, reject)
              : reject(result)
          })
        } catch (error) {
          reject(error)
        }
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  static resolve(value) {
    // return new Promise((resolve, reject) => {
    //   // resolve(null)


    // })

    if (value instanceof Promise) {
      return value
    } else {
      return new Promise((resolve, reject) => {
        resolve(value)
      })
    }
  }

  static reject(reason) {
    return new Promise((resolve, reject) => reject(reason))
  }

  all(promises) {
    return new Promise((resolve, reject) => {
      const result = [];
      let count = 0;

      for (let i = 0; i < promises.length; i++) {
        const promise = Promise.resolve(promises[i])

        promise
          .then(res => {
            result[i] = res
            count++
            if (count === promises.length) {
              resolve(result)
            }
          })
          .catch(error => {
            reject(error)
          })
      }
    })
  }

  trace(promises) {

  }

  allSetted(promises) {
    return new Promise((resovle, reject) => {
      try {
        const result = [];
        let count = 0;

        for (let i = 0; i < promises.length; i++) {
          promises[i]
            .then(res => {
              result[i] = {
                status: 'fulfilled',
                value: res,
              }
              count++
              if (count === promises.length) {
                resovle(result)
              }
            })
            .catch(err => {
              result[i] = {
                status: 'rejected',
                value: err,
              }
              count++
              if (count === promises.length) {
                resovle(result)
              }
            })
        }
      } catch (error) {
        reject(error)
      }

    })
  }
}