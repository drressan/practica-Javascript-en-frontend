const foo = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 100);
    })

    return promise;
}

(async function () {
    let r = await foo();
    console.log(r)
})()

console.log(foo());