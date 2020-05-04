console.log('---this is worker1 start---');
for (let i = 0; i < 10000; i++) {
    // console.log('worker1.js');
}
console.log(this);
this.onmessage = function (e) {
    console.log('ttt', e.data);
}
console.log('---this is worker1 end---');
