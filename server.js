const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());
// CRUD : create read update delete

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

server.get('/api/user', (req, res) => {
    res.json(users);
    console.log(users);
})

server.get('/api/user/:id', (req, res) => {
    res.json(users);
    console.log(users, 'data is transfered by GET method');
});

server.get("/api/user/:id", (req, res) => {
    const user = users.find(u => {
        return u.id === req.params.id;
    });
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({errorMessage : "user was not found"});
    }
})

server.post('/api/user', (req, res) => {
    users.push(req.body);
    res.json(users);
    console.log("user is pushed", users);
})

// update는 put을 쓴다.
server.put('/api/user/:id', (req, res) => {
    let foundIndex = users.findIndex(u => u.id == req.params.id);
    // 같은 해당 인덱스를 리턴하고 맞는 아이디가 발견이 안될경우 -1을 리턴
    if(foundIndex === -1){
        res.status(404).json({errorMessage : 'User was not found'});
    }else {
        users[foundIndex] = {...users[foundIndex], ...req.body}; // ...은 해당 오브젝트의 property값을 복사하게 된다.
        // 해당 인덱스의 값을 새로 들어온 req.body값으로 업데이트
        res.json(users[foundIndex]);
    }
});

server.delete('/api/user/:id', (req, res) => {
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    if(foundIndex === -1) {
        res.status(404).json({errorMessage : "user was not found"});
    } else {
        let foundUser = users.splice(foundIndex, 1);
        // foundIndex부터 1칸을 지운다. 지운 데이터는 foundUser에 저장이 되고, 나머지는 users에 그대로 남아있게 된다.
        res.json(foundUser[0]);
    }
})

server.listen(3000, ()=> {
    console.log('The server is running');
}); 