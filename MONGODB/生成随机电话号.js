function getTel() {
    var prefixArr = ['130', '131', '132', '133', '135', '186', '187', '188', '199', '155'];
    var tel = prefixArr[parseInt(Math.random() * 10)];
    for (var i = 0; i < 8; i++) {
        tel += Math.floor(Math.random() * 10);
    }
    return tel;
}
// console.log(getTel());
var startTime = (new Date()).getTime();
var db = connect('sunfengyang');
var tempInfo = [];
for (var i = 0; i < 1000000; i++) {
    tempInfo.push({
        logintime: new Date(),
        tel: getTel()
    });
}
db.tel.insert(tempInfo); //写在外面而不是里面的原因，插入一次效率高。放在里面要插入1000000次
var runTime = new Date().getTime() - startTime;
print('run time is ' + runTime + 'ms');




