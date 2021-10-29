import express from "express";
const app = express()
const port =process.env.PORT || 3000

app.get ('/profile',(req,res)=>{
    res.send("here is your profile")
}
) 
app.get ('/home',(req,res)=>{
    res.send("here is your home,welcome")
}
) 
app.get ('/',(req,res)=>{
    res.send("this is Syed musab")
}) 
app.listen(port,()=>{
    console.log(`Example app listening at https://localhost:${port}`)
})