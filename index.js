import app from "./src/app"


const startServer =()=>{
  const port = process.env.PORT || 3000

app.listen(port,()=>{
      console.log(`Listening to port: ${port}`)
})
}

startServer()