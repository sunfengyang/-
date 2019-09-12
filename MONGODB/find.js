var modify = {
    findAndModify: 'user',
    query: {name: 'xiecheng'},
    update: {$set: {age: 32}},
    new: true
};

var result = db.runCommand(modify);
printjson(result);  //应答式




db.user.find(
    {age: {$gte: 20, $lte: 30}}, //  age在20-30之间的集合
    {name: true, age: true, _id: false}
)

db.user.find(
    {age: { $in: [20, 25]}}, //专门查 age是20和25的集合
    {name: true, age: true, _id: false}
)


db.user.find({
    $and: [
        {age: { $gte: 20}},
        {'pc.brand': 'IBM'}
    ]},
    {name: true, age: true, _id: false}
)


db.user.find(
    {hobby: '篮球'},//爱好有篮球的都能被查到，['篮球']的话 爱好只能有篮球才能被查到
    {name: true, age: true, _id: false}
);

db.user.find(
    {hobby: {$all: ['篮球', '敲代码']}},// 两者都有的
    {name: true, age: true, _id: false}
);

db.user.find(
    {hobby: {$in: ['篮球', '敲代码']}},// 有一即可
    {name: true, age: true, _id: false}
);


db.user.find(
    {hobby: {$size: 3}}, //爱好个数为3的
    {name: true, age: true, _id: false}
);



db.user.find(
    {},
    {name: true, age: true, _id: false}
).limit(10).skip(20).sort({age: -1}) //  查几条，跳过多少个从0开始，按年龄逆序



