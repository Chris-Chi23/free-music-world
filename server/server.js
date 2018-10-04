const express = require('express'),
      app = express(),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      userRouter = require('./routers/user'),
      server = require('http').Server(app),
      io = require('socket.io')(server)
io.on('connection', socket=>{
    console.log('user logged in')
})
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)
server.listen(9093, ()=>{
    console.log('The server is listening to port 9093')
})

