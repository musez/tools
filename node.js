var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

connection.connect();

/*
connection.query('SELECT * from mengzhuo', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});*/

/*var addSql = 'INSERT INTO mengzhuo(id,title,description,datetime) VALUES(100,?,?,?)';
var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com',''];

connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');
})*/

var server = http.createServer(function (req, res) {
    ///如果你发一个GET到http://127.0.0.1:9000/test
    var url_info = require('url').parse(req.url, true);

    if (url_info.pathname === '/test') {
        res.writeHead(200, {'Content-Type': 'application/json'});

        var addSql = 'SELECT * from mengzhuo';

        connection.query(addSql, function (err, rows, fields) {
            //处理你的结果
            // res.end(rows.constructor);
            // 输出结果
            var data = {
                code: 1,
                msg: "success",
                data: rows
            }
            res.end(JSON.stringify(data));

            res.end(rows.join);

        });

    }
    //这个是用来回复上面那个post的，显示post的数据以表示成功了。你要是有别的目标，自然不需要这一段。
    else {
        req.pipe(res);
    }
})

server.listen(9000, '127.0.0.1');
//在server关闭的时候也关闭mysql连接
server.on('close', function () {
    connection.end();
});