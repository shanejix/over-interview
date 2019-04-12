Fucntion.prototype.mybind = function (ctx, ...arg) {
    
    //this:obj.mybind()->obj
    
    return () => {
        //this:obj
        return this.call(ctx,...arg);
    }
}