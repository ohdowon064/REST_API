const express = require('express');
const server = express();

// endpoint 생성
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
server.get('/api/user', (req, res) => {
    res.json(users);
    console.log(users, 'data is transfered')
});

server.listen(3000, ()=> {
    console.log('The server is running');
});