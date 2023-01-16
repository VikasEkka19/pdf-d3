const express = require('express');
const pdfService = require('../service/pdf-service');

// import express from 'express';
// import {buildPDF} from '../service/pdf-service';

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
});

module.exports = router;