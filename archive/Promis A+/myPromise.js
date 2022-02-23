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
    then(fulfilledCB,rejectedCB) {
        this.fulfilledArr.push(fulfilledCB);
        this.rejectedArr.push(rejectedCB);
    }
}

module.exports = myPromise; 