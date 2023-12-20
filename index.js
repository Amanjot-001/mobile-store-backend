import Express from "express";

const app = Express();

app.listen(8080, (req, res) => {
    console.log("Server running on 8080");
});