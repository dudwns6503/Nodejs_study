const path = require('path');

console.log(path.join(__dirname, '..', 'var.js'));    // 상대경로로 표시
console.log(path.resolve(__dirname, '..', '/var.js')); // 절대경로가 들어있다면 앞에 것이 무시당함.