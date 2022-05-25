let express = require('express');
let app = express();



app.get('/', (req, res)=>{
    res.send('Welcome')
})
const port = process.env.PORT || 3000;
//server 
app.listen(port, ()=>{
    console.log(`Server started on port: ${port} 🚀🚀`);
})

