const cors = require("cors"); // สำหรับการเปิดให้ฝั่ง Frontend สามารถยิงเข้ามาผ่าน cross domain ได้
const express = require("express"); //สำหรับ library node สำหรับทำ Rest API
const mysql = require("mysql2/promise"); //สำหรับจัดการฐานข้อมูล mysql
const jwt = require("jsonwebtoken"); //สำหรับการเข้ารหัสข้อมูลสำหรับแนบเข้า token ตอน login สำเร็จ
const cookieParser = require("cookie-parser"); //สำหรับเรียกใช้และ save cookie
const session = require("express-session"); //สำหรับการ login ในเคสที่ใช้ session
const bcrypt = require("bcrypt"); // สำหรับเข้ารหัส password
const dotenv = require('dotenv') // env ที่กำหนดค่าต่างได้
const { Pool } = require('pg') // Module ที่เชื่อมต่อกับ database

const app = express();
app.use(express.json());
dotenv.config({ path: './config.env' }) // กำหนด path ที่ env จะดึงค่า --> process.env 

// ** อนุญาติเฉพาะ DOMAIN นี้ **
// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:5173"], // **  อนุญาตให้เฉพาะ localhost นี้เท่านั้นในการส่ง req **
//   })
// );

// ** อนุญาติหมด **
app.use(cors())

// app.use(cookieParser());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  }),
);

const port = process.env.PORT;
const secret = "mysecret";

let conn = null;

// ** function init connection mysql **
const initMySQL = async () => {
  conn = await new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT // port Mysql
  });
};

/*-------- เราจะแก้ไข code ที่อยู่ตรงกลาง ---------- */

// Register
app.post('/api/register', async (req, res) => {
  try {
    const { firstname, lastname, email, phone, password } = req.body // ดึงค่าจาก Object {email, password}

    // hashPassword --> ป้องpassword เมื่อโดน hack
    const passwordHash = await bcrypt.hash(password, 10) // (password, salt (ใส่ number or string ก็ได้) --> เป็น random number ให้รหัสมีความ uniq )
    const userData = {
      firstname,
      lastname,
      email, // email: email --> key ชื่อเหมือน value ใส่ตัวเดียว
      phone,
      password: passwordHash // password: password --> key ชื่อเหมือน value ใส่ตัวเดียว
    }
    //ต้องตรวจสอบว่ามี email ซ้ำกันไหมที่ database โดยมี 2 วิธี (**Mysql**)
    //1. กำหนดที่ database ให้ row นั้นเป็น uniq แล้วจะ hadle ว่า error (แนะนำใช้วิธีนี้ --> ง่ายไม่ต้อง code)
    //2. email ทั้งหมดใน database มาเทียบว่าซ้ำกันไหม
    let sql = `INSERT INTO public.users
            (firstname, lastname, email, phone, password)
            VALUES('${userData.firstname}', '${userData.lastname}', '${userData.email}', '${userData.phone}','${userData.password}');`
    const response = await conn.query(sql)
    res.json({ status: "success", data: response[0] })
  } catch (error) {
    console.log('error', error)
    // ตรวจสอบว่ามี email ซ้ำกัน
    res.json({ message: 'insert error', error })
  }
})

//Login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body
    let sql = 'select * from public.users where email = $1'
    const response = await conn.query(sql, [email]) // ค้นหา email ที่ตรงกันจาก database
    const userData = response.rows[0]
    console.log(response)

    // compare password
    const match = await bcrypt.compare(password, userData.password) // เทียบ password return true or false ** await ด้วย
    if (!match) {
      res.status(400).json({ message: "login fail (wrong email, pass)" })
      return false
    }

    // // create jwt token
    const token = jwt.sign({ email, role: "user" }, secret, { expiresIn: '5h' }) // ( payload , secretkey, option)

    res.json({ message: "login success", token })
  } catch (error) {
    console.log('error', error)
    res.status(401).json({ message: 'login fail', error })
  }
})

// เมื่อมีการขอข้อมูลจาก Database
app.get('/api/users', async (req, res) => {
  try {
    // ** 1.ต้องตรวจสอบว่ามี token ส่งมาไหม **
    const authHeader = req.headers['authorization'] // ส่งมากับ header --> ชื่อ authorization
    if (authHeader) {
      authToken = authHeader.split(" ")[1]
      console.log("Token :", authToken)
      // ** 2.check ว่า token ถูกต้องไหม
      const user = jwt.verify(authToken, secret) // ถ้าไม่ถูกจะ throw error เลย
      console.log(user)
      // มั่นใจได้ว่า token ถูกต้องแล้ว
      // หรือจะเข็ค email 
      let sql = 'select * from public.users where email = $1'
      const checkEmail = await conn.query(sql, [user.email])
      console.log('test', checkEmail.rows[0])
      if (!checkEmail.rows[0]) {
        throw { message: "user not found" }
      }
      // const response = await conn.query('select * from users')
      res.json({ status: "success", data: checkEmail.rows[0] })
    }
  } catch (error) {
    console.log('error', error)
    res.status(403).json({ message: 'authentication fail', error })
  }
})

// ------------------------------------------------

// Listen
app.listen(port, async () => {
  await initMySQL(); //** Connect Database **/
  console.log("Server started at port 8000");
});