const http = require('http');

http.createServer((req, res) => {
  // 여기에 어떻게 응답할지 적습니다.
  res.write('<h1>Hello Node!</h1>');
  res.write('<p>Hello server</p>');
  res.end('<p>Hello YeongJun</p>');
})
  .listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
  });