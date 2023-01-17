PDFDocument = require('pdfkit');
// const d3 = require("https://cdn.skypack.dev/d3@7");
const d3 = require('d3');

// import PDFDocument from 'pdfkit';
// import * as d3 from "https://cdn.skypack.dev/d3@7";

function drawChart() {
    const data = [1,2,3,4]
    const svgWidth = 1000;
    const svgHeight = 500;
    const barPadding = 5;
    const barWidth = svgWidth / data.data.length;

    let svg = d3.select("svg");
    let width = svg
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    svg
        .selectAll("rect")
        .data(data.data)
        .enter()
        .append("rect")
        .attr("y", (d) => svgHeight - d)
        .attr("height", (d) => d)
        .attr("width", () => barWidth - barPadding)
        .attr("transform", (d, i) => {
            let translate = [barWidth * i, 0];
            return `translate(${translate})`;
        })
        .style("fill", "steelblue");

        return svg;
}

function buildPDF(dataCallback,endCallback) {
    const doc = new PDFDocument();

    doc.on('data', dataCallback);
    doc.on('end', endCallback);
    
    // .fillColor('grey')
    doc
    .font('fonts/Bold.ttf')
    .fontSize(22).text('PAYSLIP', 45, 45)
    .font('fonts/Regular.ttf')
    .fillColor('grey')
    .fontSize(20).text('JUN 2022', 138, 45)
    .fillColor('black')
    .fontSize(12).text('WALKOVER WEB SOLUTIONS PVT. LTD.',45,80)
    .image(drawChart(), 500, 55, {fit: [60, 60]})
    .fontSize(8).text('405-406, CAPT. C.S. NAIDU ARCADE, NEAR GREATER KAILASH HOSPITAL, OLD PALASIA,',45,100)
    .fontSize(8).text('INDORE',45,110)
    .fontSize(8).text('INDORE MADHYA PRADESH 452001',45,120)
    .font('fonts/Bold.ttf')
    .fontSize(12).text('VIKAS EKKA',45,150)
    .underline(45, 10, 520, 160, { color: '##000000' })

    .font('fonts/Regular.ttf')
    .fillColor('grey')
    .fontSize(8).text('Emp no',45,180)
    .fontSize(8).text('Date Joined',170,180)
    .fontSize(8).text('Department',295,180)
    .fontSize(8).text('Designation',420,180)
    .fillColor('black')
    .fontSize(10).text('VIKAS EKKA',45,190)
    .fontSize(10).text('29 Jun 2022',170,190)
    .fontSize(10).text('Software Developer',295,190)
    .fontSize(10).text('SDE I',420,190)
    .underline(45, 10, 520, 205, { color: '#D3D3D3' })

    .fillColor('grey')
    .fontSize(8).text('Payment Mode',45,220)
    .fontSize(8).text('Date of Birth',170,220)
    .fontSize(8).text('Monthly Salary',295,220)
    .fillColor('black')
    .fontSize(10).text('Bank Transfer',45,230)
    .fontSize(10).text('23 Aug 1998',170,230)
    .fontSize(10).text('54,798',295,230)
    .underline(45, 10, 520, 245, { color: '#D3D3D3' })

    .fontSize(12).text('SALARY DETAILS', 45, 275)
    .underline(45, 10, 520, 285, { color: '##000000' })

    .fillColor('grey')
    .fontSize(8).text('Actual Payable Days',45,305)
    .fontSize(8).text('Total Working Days',170,305)
    .fontSize(8).text('Loss of Pay Days',295,305)
    .fontSize(8).text('Days Payable',420,305)
    .fillColor('black')
    .fontSize(10).text('25',45,315)
    .fontSize(10).text('25',170,315)
    .fontSize(10).text('2',295,315)
    .fontSize(10).text('23',420,315)
    .underline(45, 10, 520, 325, { color: '#D3D3D3' })

    .font('fonts/Bold.ttf')
    .moveTo(295,405)                               // set the current point
    .lineTo(295,345)                               // draw a line
    .fillAndStroke("grey", "#D3D3D3")              // stroke the path and fill color
    .fillColor('black')
    .fontSize(11).text('EARNINGS',45,350)
    .fontSize(11).text('TAX & DEDUCTIONS',300,350)
    .fontSize(10).text('Total Earnings(A)',45,370)
    .fontSize(10).text('Total Deductions(C)',300,385)
    .font('fonts/Regular.ttf')
    .fontSize(9).text('51,499',265,370)
    .fontSize(11).text('Professional Tax',300,370)
    .fontSize(9).text('5,597',500,370)
    .fontSize(9).text('5,597',500,385)
    .underline(45, 10, 520, 395, { color: '##000000' })

    .fontSize(9).text('Net Salary Payable ( A - C )',45,425)
    .fontSize(9).text('45,902',270,425)
    .fontSize(9).text('Net Salary in words',45,440)
    .font('fonts/Bold.ttf')
    .fontSize(9).text('Fourty Five Thousand Nine Hundered Two',270,440)
    .fontSize(9).text('**Note :',45,460)
    .fontSize(9).text('INR',265,460)
    .font('fonts/Regular.ttf')
    .fontSize(9).text('All amounts displayed in this payslip are in ',86,460)
    .fontSize(6).text('*This is computer generated statement, does not require signature.',45,490)
    .underline(0, 10, 610, 780, { color: '##000000' })

    doc.end();
}

module.exports = { buildPDF };