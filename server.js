'use strict';
const express = require('express');
const bodyParser = require('body-parser');
let swaggerUi = require('swagger-ui-express');
let swaggerDocument = require('./swagger.json');
const port = process.env.PORT || 4200;
const log4js = require('log4js');
const logger = log4js.getLogger('Webapplication');
logger.level = 'debug'; // default level is OFF - which means no logs at all.



const sequelize = require('./config/database');

const userRouter = require('./routes/user.js');



const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/uploads',express.static('./views/uploads'));

app.use('/api-docs',swaggerUi.serve, (req,res) => {
    swaggerDocument.host = req.get('host');
    swaggerUi.setup(swaggerDocument)(req,res);
});

app.use('/api/user', userRouter);

sequelize.sync().then(() => {
    app.listen(port, () => {
        logger.info(`Server running at port ${port}`);
    });
}).catch((err) => {
    logger.error(err);
});

