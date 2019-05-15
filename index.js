//coments

const express = require('express');
const app = express();
const PORT = 8000;
const HOST = '0.0.0.0';

app.get('/',function(req,res){
	res.send('serve funcionando :)');
})
app.listen(PORT,HOST);
