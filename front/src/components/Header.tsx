import { MenuIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import styles from './Common.module.css'

const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='flex item-center justify-between relative'>
			<button onClick={handleClick}>
				<MenuIcon height='35' color='#423C46' />
				<div className={isOpen ? styles.open : ''}>
					<ul
						className={`${styles['sub-menu']} shadow bg-white p-3 rounded absolute z-10`}
					>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/'>Products</a>
						</li>
						<li>
							<a href='/'>About us</a>
						</li>
					</ul>
				</div>
			</button>
			<div className='flex items-center'>
				<SearchIcon height='35' color='#423C46' className='mr-5' />
				<ShoppingBagIcon height='35' color='#423C46' />
			</div>
		</div>
	)
}

export default Header
