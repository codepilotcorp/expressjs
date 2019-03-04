// lib/app.ts
import express from "express";
import expressWs from "express-ws";

import cors from "cors";

import { environment } from './environment';

import { ping } from './handlers/ping';

// Create a new express application instance
const app = expressWs(express()).app;

app.use(cors())

app.get('/ping', ping);

app.listen(
    environment.port,
    environment.ipAddress,
    function () {
        console.log(`Express.js API is starting up: ${environment.ipAddress}:${environment.port}`);
    });