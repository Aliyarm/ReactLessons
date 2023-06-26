import { useEffect, useState } from 'react'
import { IProduct } from '../../../types'
import ProductItem from './ProductItem'

const Products = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState('')
	const [products, setProducts] = useState<IProduct[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api/products')
				const data = await response.json()

				setProducts(data)
			} catch (error) {
				setError(error.message)
			}
			setIsLoading(false)
		}

		fetchData()
	}, [])

	return (
		<>
			{error && <div className='text-red-700 text-center mt-5'>{error}</div>}
			{isLoading && (
				<div className='text-blue-400 text-center mt-4'>Loading...</div>
			)}
			<div className='grid grid-cols-2 gap-7 mt-7'>
				{products.map((product, idx) => (
					<ProductItem key={`product ${idx}`} product={product} />
				))}
			</div>
		</>
	)
}

export default Products
