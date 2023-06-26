import { HeartIcon } from '@heroicons/react/outline'
import { FC } from 'react'
import { IProduct } from '../../../types'
import styles from './Products.module.css'

interface IProductItem {
	product: IProduct
}

const ProductItem: FC<IProductItem> = ({ product }) => {
	return (
		<div
			style={{ backgroundImage: `url(${product.img})` }}
			className={styles.product}
		>
			<div className={styles['fav-buttons']}>
				<HeartIcon stroke='#ff6768' height='35' />
			</div>

			<div className={styles.bottom}>
				<div className='flex items-center justify-between'>
					{product.newPrice && (
						<span className='text-white font-bold'>{product.newPrice}</span>
					)}
					<span
						className={`text-white font-bold ${
							product.newPrice ? 'line-through opacity-50' : ''
						}`}
					>
						{product.price}
					</span>
				</div>
				<div className='text-white'>{product.name}</div>
			</div>
		</div>
	)
}

export default ProductItem
