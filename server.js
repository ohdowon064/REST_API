const express = require('express');
const server = express();
const bodyParser = require('body-parser');
// 현재 있는 json 포맷의 데이터를 읽을 수 있도록 한다.

server.use(bodyParser.json());
// server가 req.body로 들어오는 모든 json 포맷의 데이터를 읽을 수 있도록 한다.

const users = [
    {
        id : 'dhehdnjs',
        name : 'ohdowon',
        email : 'ohdowon123@naver.com'
    },
    {
        id : 'djawjdqls',
        name : 'umjungbin',
        email : 'umjungbin456@html.com'
    }
];

// 클라이언트에서 /api/user 주소로 get방식의 요청이 왔을 때
// user json 데이터를 전송한다.
// get method를 통해서 get으로 /api/user endpoint에 요청이 왔을 경우 res응답으로 users 데이터를 불러왔다.
server.get('/api/user', (req, res) => {
    res.json(users);
    console.log(users, 'data is transfered by GET method');
});

server.post('/api/user', (req, res) => {
    // user 추가하기
    users.push(req.body);
    res.json(users);
    console.log("user is pushed", users);
})

server.listen(3000, ()=> {
    console.log('The server is running');
});