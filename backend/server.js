const app = require("./app");
const connectDatabase = require("./config/database");
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

connectDatabase();
