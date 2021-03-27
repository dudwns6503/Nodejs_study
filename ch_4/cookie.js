const http = require('http');

http.createServer((req, res) => {      // req 객체에 담겨있는 쿠키를 가져옴.
  console.log(req.url, req.headers.cookie); // 쿠키는 req.headers.cookie에 들어있다. req.headers => 요청의 헤더
  res.writeHead(200, { 'Set-Cookie': 'mycookie=test' }); // 서버가 브라우저에게 mycookie=test 라는 쿠키를 저장
  res.end('Hello Cookie');
})
  .listen(8083, () => {
    console.log('8083번 포트에서 서버 대기 중입니다.');
  });