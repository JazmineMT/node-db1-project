const server = require("./api/server.js");

const PORT = process.env.PORT || 5000;

const AccountsRouter = require('./accountsRouter');

server.get('/', (req, res)=> {
  res.send('Working!')
})

server.use('/api/accounts', AccountsRouter)

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
