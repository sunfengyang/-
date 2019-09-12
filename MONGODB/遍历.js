var db = connect('sunfengyang');
var userList = db.user.find();
userList.forEach(function(user){
    printjson(user);
});