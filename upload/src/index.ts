import express from 'express'
import multer from 'multer'
import bodyParser from 'body-parser'
import * as path from 'path'
import * as fs from 'fs'
import md5 from 'blueimp-md5'

const app = express();
app.use(bodyParser.json());


const upload = multer({
  limits: { fieldSize: 25 * 1024 * 1024 }
  });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});	

/*
console.log(__dirname)
let a = fs.readdirSync('./src/images')
console.log(a)

*/

app.use('/images', express.static('./src/images'));
// should be base 64
app.post('/api/upload', upload.array('photo'), function(req, res) {
//    let fulluri = req.body.datauri;
//   console.log(req.body.datauri)
    let base64Data  =  req.body.datauri
//    let fext = fulluri.split(',')[0].split(';')[0].split('/')[1]
    let fname = md5(base64Data) + '.png'  
    fs.writeFile(`./src/images/${fname}`, base64Data, 'base64', function(err) {
        if (err) console.log(err);
    });
    res.status(200).json({
      message: 'success!', 
      filename: fname
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `server is running at http://localhost:${process.env.PORT || 3000}`
  );
});

/* 
    let fulluri = req.body.datauri;
    let base64Data  = fulluri.split(',')[1]
    let fext = fulluri.split(',')[0].split(';')[0].split('/')[1]
    let fname = md5(base64Data) + '.' + fext

*/
