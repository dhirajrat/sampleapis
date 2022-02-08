const express = require("express");

// const dotenv =
require("dotenv").config();

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

let cors = require("cors");
app.use(cors());

// Conneting To the Database
// const connection = require("./config/database.config");

// connection.database();

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to application User Registration.",
  });
});

app.get("/reg/:id",(req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  res.json({
          message: "api hit",
        });
})

app.get("/avaluos/errors/filter/:serviceName/:date/:pageNo/:pageSize",(req, res) => {
  console.log("REQ BODY ::",req.body);
  console.log("REQUEST PARAMS ::",req.params.serviceName,req.params.date,req.params.pageNo,req.params.pageNo,req.params.pageSize);
  res.json({
    message: "Showing status failure APIs",
    filterCount: 10,
    errorModels: [
        {
            id: "61e6c72465ab5526c18f50e1",
            api: "Georeferenciación",
            request_type: "GET",
            createdOn: 1642514207592,
            httpStatus: "400",
            status: "failure"
        },
        {
            id: "61e703c8d7c98c7c46b5809e",
            api: "Georeferenciación",
            request_type: "GET",
            createdOn: 1642529727426,
            httpStatus: "400",
            status: "failure"
        },
        {
            id: "61e70a46d10c8d4b031e0c46",
            api: "Georeferenciación",
            request_type: "GET",
            createdOn: 1642531393834,
            httpStatus: "400",
            status: "failure"
        },
        {
            id: "61e998e4509319512ef9f636",
            api: "Georeferenciación",
            request_type: "GET",
            createdOn: 1642698975733,
            httpStatus: "400",
            status: "failure"
        },
        {
            id: "61e6c72465ab5526c18f50e1",
            api: "Georeferenciación",
            request_type: "GET",
            createdOn: 1642514207592,
            httpStatus: "400",
            status: "failure"
        },
        {
            id: "61e703c8d7c98c7c46b5809e",
            api: "Georeferenciación",
            request_type: "GET",
            createdOn: 1642529727426,
            httpStatus: "400",
            status: "failure"
        },
        {
            id: "61e70a46d10c8d4b031e0c46",
            api: "Georeferenciación",
            request_type: "GET",
            createdOn: 1642531393834,
            httpStatus: "400",
            status: "failure"
        },
        {
            id: "61e998e4509319512ef9f636",
            api: "Georeferenciación",
            request_type: "GET",
            createdOn: 1642698975733,
            httpStatus: "400",
            status: "failure"
        },
        {
            id: "61e70a46d10c8d4b031e0c46",
            api: "Georeferenciación",
            request_type: "GET",
            createdOn: 1642531393834,
            httpStatus: "400",
            status: "failure"
        },
        {
            id: "61e998e4509319512ef9f636",
            api: "Georeferenciación",
            request_type: "GET",
            createdOn: 1642698975733,
            httpStatus: "400",
            status: "failure"
        },
    ]
  });
})

// Require user routes
// require("./app/routes/user")(app);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

module.exports = app;
