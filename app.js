const express = require('express')
const app = express()
const port = 3000
const posts = [{
    id: 1,
    title: "Ciambellone",
    content: "Foto di un ciambellone",
    image: "./assets/images/ciambellone.jpeg",
    tags: ["dolce", "circolare", "morbido"]
},
{
    id: 2,
    title: "Cracker alla barbabietola",
    content: "Dei cracker di dubbio gusto",
    image: "./assets/images/cracker_barbabietola.jpg",
    tags: ["cracker", "barbabietola", "abomini"]
},
{
    id: 3,
    title: "Pane fritto dolce",
    content: "Carboidrati e grassi fritti, cosa potrà mai andare storto?",
    image: "./assets/images/pane_fritto_dolce.jpeg",
    tags: ["pane", "fritto", "dolce", "colesterolo"]
},
{
    id: 4,
    title: "Pasta alla barbabietola",
    content: "La pasta è buona, no? Roviniamola insieme",
    image: "./assets/images/pasta_barbabietola.jpeg",
    tags: ["pasta", "barbabietola", "abomini", "asteroide"]
},
{
    id: 5,
    title: "Torta paesana",
    content: "Una torta, se proprio devi",
    image: "./assets/images/torta_paesana.jpeg",
    tags: ["torta", "dolce", "Oltre la nebbia"]
}
]

app.use(express.static('assets'))

app.get('/', (req, res) => {

    res.type("html").send(`Server del mio blog`)
}
)
app.get('/bacheca', (req, res) => {
    res.json(posts);
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})