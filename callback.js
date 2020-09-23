//Change score.sh value to 234168

function multiple(number) {
    let sum = 0;
    for (let i = 0; i <= 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    number(sum);
}

function callback(sm) {
    console.log(sm);
}

multiple(callback);