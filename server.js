const express = require('express')
const cors = require('cors')
const axios = require('axios')
const PORT = process.env.PORT || 5000
const API_KEY = '927281a6'
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	res.send('<h1>Hello App</h1>')
})

app.get('/api/movies', async (req, res) => {
	const movies = await axios({
		method: "GET",
		url: `http://www.omdbapi.com/?apikey=${API_KEY}&t=Blade+Runner`
	})
	const data = await movies.data
	res.json(data)
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})