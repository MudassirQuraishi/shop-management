const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database.js');
const Product = require('./model/model')
const adminRoutes = require('./routes/admin')

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.use('/admin', adminRoutes);
app.use('/',adminRoutes);

sequelize.sync()
    .then(()=>{
        const port = 4000;
        console.log(`Server running at ${port}`);
        app.listen(port);
    })
    .catch(err => console.error(err))

