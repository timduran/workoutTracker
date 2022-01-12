const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",  {
  useNewUrlParser: true,
  useFindAndModify:false
})

app.use(require('./routes/api'));
app.use(require('./routes/view'));

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`)
});