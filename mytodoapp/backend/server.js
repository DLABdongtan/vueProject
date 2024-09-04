const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL 연결 설정
const db = mysql.createConnection({
  host: 'localhost',  // MySQL 호스트
  user: 'root',       // MySQL 사용자
  password: 'dlab1234', // MySQL 비밀번호
  database: 'todo_db' // 사용할 데이터베이스 이름
});

// MySQL 연결 확인
db.connect(err => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
  } else {
    console.log('MySQL에 연결되었습니다.');
  }
});

// 할 일 목록 가져오기 API
app.get('/todos', (req, res) => {
  const sql = 'SELECT * FROM todos';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('MySQL에서 할 일 목록 가져오는 중 오류 발생:', err);
      res.status(500).send({ error: '할 일 목록을 가져오는 중 문제가 발생했습니다.' });
    } else {
      res.json(result);
    }
  });
});

// 할 일 목록 추가 API
app.post('/todos', (req, res) => {
  const { text } = req.body;
  const sql = 'INSERT INTO todos (text, completed) VALUES (?, ?)';
  db.query(sql, [text, false], (err, result) => {
    if (err) {
      console.error('MySQL에서 할 일 추가하는 중 오류 발생:', err);
      res.status(500).send({ error: '할 일을 추가하는 중 문제가 발생했습니다.' });
    } else {
      res.json({ id: result.insertId, text, completed: false });
    }
  });
});

// 할 일 완료 상태 토글 API
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  // 상태 변경 전 로그 출력
  console.log(`받은 요청: ID = ${id}, Completed = ${completed}`);

  const sql = 'UPDATE todos SET completed = ? WHERE id = ?';
  db.query(sql, [completed, id], (err, result) => {
    if (err) {
      console.error('MySQL에서 상태 업데이트 중 오류 발생:', err); // 오류 로그 추가
      res.status(500).send({ error: '상태를 업데이트하는 중 문제가 발생했습니다.' });
    } else {
      console.log(`ID = ${id}, 완료 상태가 ${completed}로 업데이트되었습니다.`);
      res.json(result);
    }
  });
});

// 서버 시작
app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});