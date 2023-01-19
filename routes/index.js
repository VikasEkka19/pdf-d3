const express = require('express');
const pdfService = require('../service/pdf-service');
const report = require('../service/report-pdf');
// const svg = require('../images/headphone.svg')

// import express from 'express';
// import pdfService from '../service/pdf-service';

const router = express.Router();
router.get('/payslip', (req,res) => {
    const stream = res.writeHead(200, {
        'Content-Type' : 'application/pdf',
        'Content-Disposition' : 'attachment;filename=payslip.pdf'
    });

    pdfService.buildPDF(
        (chunk) => stream.write(chunk),
        () => stream.end()
    )

    pdfService.convertSVG()
});

router.get('/report', (req,res) => {
    const stream = res.writeHead(200, {
        'Content-Type' : 'application/pdf',
        'Content-Disposition' : 'attachment;filename=report.pdf'
    });

    report.buildPDF(
        (chunk) => stream.write(chunk),
        () => stream.end()
    )
});

module.exports = router;