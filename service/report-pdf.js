const { createCanvas, loadImage } = require('canvas');
var SVGtoPNG = require('svg-to-png');
var fs = require('fs');
var Canvas = require('canvas');
PDFDocument = require('pdfkit');


let date = 'JAN 2023';
let name = 'VIJAY';
let promotional = 35;
let transactional = 180;
let otp = 90;
let percentPromo = 10;
let percentTrans = 25;
let percentOtp = 12;

function buildPDF(dataCallback,endCallback) {
    const doc = new PDFDocument();

    doc.on('data', dataCallback);
    doc.on('end', endCallback);
    
    doc
    .fillColor('#1A66A5')
    .font('fonts/Regular.ttf')
    .fontSize(11).text('SMS|Email|RCS|Voice|Whatsapp|Short URL', 300, 30)
    .fontSize(11).text('Segmento|Campaign|Hello|Send OTP', 320, 45)
    .image('images/Wlogo.png', 40, 10, {fit: [130, 100]})
    .underline(0, 10, 610, 65, { color: '#1A66A5' })
    .fillColor('black')
    .fontSize(22).text('MONTHLY REPORT ', 45, 95)
    .font('fonts/Bold.ttf')
    .fontSize(22).text(`- ${date}`, 240, 95)
    .font('fonts/Italic.ttf')
    .fillColor('#494F56')
    .fontSize(22).text(`FOR ${name} SALES`, 45, 115)
    .lineJoin('square')
    .rect(45, 160, 120, 80)
    .rect(210, 160, 120, 80)
    .rect(380, 160, 120, 80)
    .fillOpacity(0.5)
    .fillAndStroke("#E8F4FF", "#E8F4FF")
    .lineJoin('square')
    .rect(45, 240, 120, 20)
    .rect(210, 240, 120, 20)
    .rect(380, 240, 120, 20)
    .fillOpacity(.8)
    .fillAndStroke("#1A66A5", "#1A66A5")

    .font('fonts/Regular.ttf')
    .fillColor('#1A66A5')
    .fontSize(10).text('PROMOTIONAL', 65, 180)
    .fontSize(10).text('TRANSACTIONAL', 230, 180)
    .fontSize(10).text('OTP', 430, 180)
    .font('fonts/Bold.ttf')

    .fontSize(30).text(`${promotional}K`, 65, 195)
    .fontSize(30).text(`${transactional}K`, 230, 195)
    .fontSize(30).text(`${otp}K`, 420, 195)

    .fillColor('white')
    .fontSize(9).text('from last month', 80, 243)
    .fontSize(9).text('from last month', 250, 243)
    .fontSize(9).text('from last month', 420, 243)

    // if increment from last data then green else red
    .image('images/down.jpg', 47, 246, {fit: [8, 8]})
    .image('images/up.jpg', 213, 246, {fit: [8, 8]})
    .image('images/up.jpg', 383, 245, {fit: [8, 8]})

    .fillColor('red')
    .fontSize(9).text(`${percentPromo}%`, 57, 243)
    .fillColor('#90EE90')
    .fontSize(9).text(`${percentTrans}%`, 225, 243)
    .fontSize(9).text(`${percentOtp}%`, 397, 243)

    .lineJoin('square')
    .rect(0, 772, 615, 20)
    .fillOpacity(0.9)
    .fillAndStroke("#1A66A5", "#1A66A5")
    // .fillColor('red')
    // .fontSize(9).text('WALKOVER WEB SOLUTION PRIVATE.LTD', 220, 700)

    .image('images/bar.png', 30, 280, {fit: [560, 270]})
    .image('images/pie.png', 30, 560, {fit: [220, 220]})
    .image('images/donut.png', 300, 560, {fit: [230, 230]})

    doc.end();
}

//This method will convert svg to image

// function convertSVG() {
// loadImage('images/headphone.svg').then((image) => {
//     const canvas = createCanvas(image.width, image.height);
//     const ctx = canvas.getContext('2d');
//     ctx.drawImage(image, 0, 0, image.width, image.height);
//     const buffer = canvas.toBuffer();
//     fs.writeFileSync('output.png', buffer);
//     console.log("Converted successfully!");
// });
// }
module.exports = { buildPDF};