const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.engine(".hbs", exphbs.engine({ defualtLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(
    `Server running  in ${process.env.NODE_ENV} mode on port : ${PORT}`
  );
});
