import path from 'path'
import express, { urlencoded } from 'express'
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';

const app = express()
const port = 3000

app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')))

//body parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// HTTP logging
app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(path.dirname(fileURLToPath(import.meta.url)), 'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/search', (req, res) => {
  res.render('search')
})

app.post('/search', (req, res) => {
  res.send('')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
