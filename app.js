const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect(process.env.DATA_BASE, { useNewUrlParser: true });

const authRoutes = require('./routes/auth');
app.use('/api/user', authRoutes);

const sendRequest = require("./routes/sendRequest");
app.use('/api/sendRequest', sendRequest);

const deleteRequest= require("./routes/deleteRequest");
app.use("/api/deleteRequest", deleteRequest);

const setAppointment = require("./routes/setAppointment");
app.use("/api/setAppointment", setAppointment)

const getRequests = require("./routes/getRequests");
app.use("/api/getRequests", getRequests);

const getAppointments = require("./routes/getAppointments");
app.use("/api/getAppointments", getAppointments);

const getSellers = require("./routes/getSellers");
app.use("/api/getSellers", getSellers);

app.listen(3000,()=>console.log('running on port 3000'));