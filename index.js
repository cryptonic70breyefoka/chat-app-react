const express = require ('express')
const cors = require ('cors')

const app = express ()
app.use(express.json())
app.use(cors({origin: true}))

app.post('/authenticate', (req, res) =>{
    const {username} = req.body;

})


app.listen(3000, () => {
    console.log('Server running on port 3000')
})