const express=require("express")
const app=express()


app.use(express.static("public"))


app.get("/", function (req, res) {
    res.render("index")
})


app.listen(process.env.PORT||3000,
    () => console.log("Server is running..."));