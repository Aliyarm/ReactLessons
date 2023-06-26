import express from 'express'
import morgan from 'morgan'
import colors from 'colors'
import dotenv from 'dotenv'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

const app = express()
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(express.json())

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 8080

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
)
