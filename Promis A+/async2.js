function AA() {
    console.log(1);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200);
        }, 0);
    });
}

async function fn() {
    console.log(2);
    let res = await AA();
    console.log(3);
}

fn();
console.log(4);
while (true) {

}

//=> 2 1 4 3  =>AWAIT并不是同步