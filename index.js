const server = require("./api/server.js");

const PORT = process.env.PORT || 5000;

server.get('/', (req, res)=> {
  res.send('Working!')
})

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
