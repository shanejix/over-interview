//闭包具有“保存”作用：形成不销毁的栈内存，把一些值保存下来，方便后面的调取使用


//从一个例子出发
{
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>

    var list = document.getElementsByTagName('li');
    for (var i = 0; i < list.length; i++) {
        list[i].onclick = function () {
            console.log(i);
        }
    }
    //6

    //为什么？

    //事件绑定是异步的，主栈空闲后，i已经是6；再执行等待队列中的函数，基于作用域链找到window下的i，因此都是6

    //亦可以理解为，绑定事件的时候没有执行函数，绑定完后再执行


}

//解决方案1：自定义属性
{
    for (var i = 0; i < list.length; i++) {
        list[i].index = i;
        list[i].onclick = function () {
            console.log(this.index);
        }
    }
}

//解决方案2：闭包

{
    for (var i = 0; i < list.length; i++) {
        list[i].onclick = (function (n) {
            //创建一个自执行函数，形成一个私有作用域，并且返回绑定的时间
            var i = n;
            return function () {
                console.log(i);//=>上级作用域：自执行函数形成的作用域
            }
        })(i);
    }

    //总结：
    //循环三次，形成三个不销毁的私有作用域（自执行函数执行），
    //而每一个不销毁的栈内存中都存储了一个私有变量I，而这个值分别是每一次执行传递进来的全局I的值
    //也就是：第一个不销毁的作用域存储的是0，第二个是1，第三个是2）；
    //当点击的时候，执行返回的小函数，遇到变量I，向它自己的上级作用域查找，找到的I值分别是：0 ,1 , 2

    //原理都是形成三个不销毁的私有作用域,分别存储需要的索引值

}

//解决方案3：基于ES6解决
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        console.log(i);
    }

    //块级作用域

    //类似于这样_不太清楚let的内部原理

    {
        list[0].onclick = function () {
            console.log(0);
        }
    }
    {
        list[1].onclick = function () {
            console.log(1);
        }
    }
    {
        list[2].onclick = function () {
            console.log(2);
        }
    }
}



