var userName = "sunfengyang";
var time = Date.parse(new Date());
var data = {
    "userName" : userName,
    "registTime" : time,
};
var db = connect('sunfengyang'); //连接数据库
db.user.insert(data);
print('insert success');