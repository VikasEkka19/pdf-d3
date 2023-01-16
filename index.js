const express = require('express');
const pdfService = require('./service/pdf-service');
const router = require('./routes')

const app = express();
app.use(express.json());
app.use(router)

// app.get('/', (req,res,next) => {
//     res.send('Pdf Downloaded');

//     pdfService.buildPDF(
//         (chunk) => stream.write(chunk),
//         () => stream.end()
//     )
// });
app.listen(3001, () => console.log('Listening to port 3001...'));