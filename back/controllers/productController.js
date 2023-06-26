export const getProducts = async (req, res) => {
	const products = [
		{
			img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			price: '$15',
			newPrice: '$10',
			name: 'Beret Hat Red',
		},
		{
			img: 'https://images.unsplash.com/photo-1416339698674-4f118dd3388b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			price: '$40',
			newPrice: '$20',
			name: 'Women Blazer',
		},
		{
			img: 'https://images.unsplash.com/photo-1558004282-4e9954e17f8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2VhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			price: '$100',
			newPrice: '$78',
			name: 'Women Blazer Suits',
		},
		{
			img: 'https://images.unsplash.com/photo-1453486030486-0a5ffcd82cd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			price: '$22',
			newPrice: '$50',
			name: 'Read maxi dress',
		},
	]
	res.json(products)
}
