const express = require("express")
const PORT = process.env.PORT || 3000;
const app = express();
app.listen(PORT, () => {
    console.log("Express server listening on port: ", PORT)
})
// HTTP request is sent to http://localhost:3000/
// Call the handler function
app.get('/', (req,res) => {
res.send("Hello there")
})

app.get('/favorite-food', (req,res) => {
    res.send({
        fruit: "peaches",
        drink: "smoothie"
    })
})

app.get("/favorite-movie", (req, res) => {
    res.send({
        "animated-movie": "Howl's Moving Castle",
        inspirational: "The Pursuit of Happiness"
    })
})

app.get("/about-me", (req,res) => {
    res.send("Hello! This is me.")
})

app.get("/contact", (req,res) => {
    res.send({
        phone: "1-800-008-0808",
        email: "test@test.com"
    })
})