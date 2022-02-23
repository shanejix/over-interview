class myPromise{
    constructor(excutorCB) {
        this.status = 'pending';
        this.value = null;
        this.fulfilledArr = [];
        this.rejectedArr = [];
        
        let resolveFn = (result) => {
            let timer = setTimeout(() => {
                if (this.status !== 'pending') return;
                this.status = 'fulfilled';
                this.value = result;
                this.fulfilledArr.forEach(item => {
                    item(this.value);
                }) 
            },0)
        }
        let rejectFn = (reason) => {
            let timer = setTimeout(() => {
                if (this.status !== 'pending') return;
                this.status = 'rejected';
                this.value = reason;
                this.rejectedArr.forEach(item => {
                    item(this.value);
                })
             }, 0);
        }
        try {
            excutorCB(resolveFn,rejectFn)
        } catch (err){
            rejectFn(err)
        }
    }
    then(fulfilledCB, rejectedCB) {
        
        return new myPromise((resolve, reject) => {
            this.fulfilledArr.push(() => { 
                try { 
                    let x = fulfilledCB(this.value);
                    x instanceof Promise ? x.then(resolve, reject) : reject(x);
                } catch (err) {
                    reject(err)
                }
            });
            this.rejectedArr.push(() => {
                try { 
                    let x = rejectedCB(this.value);
                    x instanceof Promise ? x.then(resolve, reject) : reject(x);
                } catch (err) {
                    reject(err)
                }
             });

        });
        // this.fulfilledArr.push(fulfilledCB);
        // this.rejectedArr.push(rejectedCB);
    }
}

module.exports = myPromise; 