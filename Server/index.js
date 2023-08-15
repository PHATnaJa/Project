import express, { json } from "express";
const app = express();
import { createConnection } from "mysql";
import cors from "cors";
import multer from "multer";
import path from "path";
import * as fs from 'node:fs';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';


const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
app.use(json());



const db = createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "test",
});
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'tqfDOCX')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({
  storage: storage
})
app.post("/upload", upload.single('docx'), (req, res) => {
  const docx = req.file.filename;
  const sql1 = "UPDATE tqf SET docx = ? WHERE id_TQF = 1";
  db.query(sql1, [docx], (err, result) => {
    if (err) {
      console.log(err);
      res.send({ Message: "Error" });
    }
    else{
      res.send(result);
    }
  })
});
app.post("/test", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const status = req.body.status;
  db.query("SELECT * FROM accounts WHERE email = ? AND password = ?",
    [email, password,status],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);

      }
      else {
        res.send({ message: "id/pass ไม่ถูกต้อง" });
      }
    });
});


app.get("/db/TQF", (req, res) => {
  const page = parseInt(req.query.page);
  const per_page = parseInt(req.query.per_page);
  const sort_colum = req.query.sort_colum;
  const sort_direction = req.query.sort_direction;
  const search = req.query.search;
  const start_idx = (page - 1) * per_page;
  var params = [];
  var sql = 'SELECT * FROM tqf ';
  if (search) {
    sql += 'WHERE name_subject LIKE ?'
    params.push('%' + search + '%')
  }
  if (sort_colum) {
    sql += 'ORDER BY ' + sort_colum + '' + sort_direction;
  }
  sql += 'LIMIT ?, ?'
  params.push(start_idx)
  params.push(per_page)
  db.query(sql, params,
    function (err, result) {
      console.log(result);
      db.query('SELECT COUNT(id_TQF) as total FROM tqf',
        function (err, counts) {
          const total = counts[0]['total'];
          const total_pages = Math.ceil(total / per_page);
          res.json({
            page: page,
            per_page: per_page,
            total: total,
            total_pages: total_pages,
            data: result
          })
        })

    })
});

app.get('/api/downloadDocxFile/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, 'tqfDOCX', fileName); // กำหนดเส้นทางไฟล์

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).json({ message: 'Error reading file' });
    } else {
      res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.send(data);
    }
  });
});

app.get('/api/getTemplate', (req, res) => {
  const idTQF = req.query.idTQF; // รับชื่อเทมเพลตจากคำขอ

  const query = `SELECT template_file FROM tqf WHERE id_TQF = ?`;
  
  db.query(query, [idTQF], (error, results) => {
    if (error) {
      console.error('Error fetching template from database:', error);
      res.status(500).json({ message: 'Error fetching template from database' });
    } else {
      const templateFile = results[0].template_file;
      res.setHeader('Content-Disposition', `attachment; filename="template.docx"`);
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.send(templateFile);
    }
  });
});


app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});