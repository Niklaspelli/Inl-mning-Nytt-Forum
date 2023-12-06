const express = require("express");
const mysql = require("mysql");
const app = express();
const articleRouter = require("./routes/articles");
const session = require("session");

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test article",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "Test article 2",
      createdAt: new Date(),
      description: "Test description",
    },
  ];
  res.render("articles/main", { articles: articles });
});

app.listen(5000);
