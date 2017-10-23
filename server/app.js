const express = require('express'),
app = express();

app.use(express.static('app'));

app.listen(4545, function () {
    console.log('Server on port http://localhost:4545')
});