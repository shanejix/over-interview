{
    var name = "rose";
    var obj = {
        name: 'jack',
        func: () => {
            console.log(this, this.name);

        }
    }

    var obj2 = {
        name: 'jay'
    }

    var func = obj.func.bind(obj);//

    func.call(obj2);

    func();
}

{
    var name = "rose";
    var obj = {
        name: 'jack',
        func: function () {
            console.log(this.name);
        }
    }

    var obj2 = {
        name: 'jay'
    }

    var func = obj.func.bind(obj);

    func.call(obj2);

    func();
}