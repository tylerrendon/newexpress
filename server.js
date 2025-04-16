const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path=require('path');



//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  res.redirect('https://github.com/tylerrendon/NewClimateCrisis/tree/master');
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {

  res.redirect('https://github.com/tylerrendon/typesetting');
  //TODO add code
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.redirect('https://github.com/tylerrendon/4sort');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});