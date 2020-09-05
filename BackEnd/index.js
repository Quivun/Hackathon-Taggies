const express = require('express')
// Find express that was installed and refer to it as variable express - Joshi

const app = express()
const port = 80
// HTTP is on 80 we don't want to worry about Secure - Joshi

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

app.use(express.static(path.join(__dirname, "../FrontEnd")))

// Get Request first arguement is the request ^ 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})