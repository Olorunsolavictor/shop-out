import React, { useState, useEffect } from 'react';
import commerce from './lib/commerce';
import NavBar from './components/NavBar';
import Login from './components/Login';
import ProductsList from './components/ProductsList';
import { Box } from '@mui/system';
import Cart from './components/Cart';
import { Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
// import Login from './components/Login';

const App = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});

	const fetchProducts = () => {
		commerce.products
			.list()
			.then((products) => {
				setProducts(products.data);
			})
			.catch((error) => {
				console.log('There was an error fetching the products', error);
			});
	};
	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	};
	const handleAddToCart = (productId, quantity) => {
		commerce.cart
			.add(productId, quantity)
			.then((item) => {
				setCart(item.cart);
			})
			.catch((error) => {
				console.error('There was an error adding the item to the cart', error);
			});
	};
	const handleUpdateCartQty = async (productId, quantity) => {
		const { cart } = await commerce.cart.update(productId, { quantity });
		setCart(cart);
	};
	const handleRemoveFromCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.remove(productId);
		setCart(cart);
	};
	const handleEmptyCart = async () => {
		const { cart } = await commerce.cart.empty();
		setCart(cart);
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);
	console.log(cart);

	return (
		<Box sx={{ bgcolor: '#F3DEC4' }}>
			<NavBar totalItems={cart.total_items} />

			<Routes>
				<Route
					path='/'
					element={
						<ProductsList products={products} onAddToCart={handleAddToCart} />
						// <Login />
					}
				/>
				<Route
					path='cart'
					element={
						<Cart
							cart={cart}
							handleRemoveFromCart={handleRemoveFromCart}
							handleUpdateCartQty={handleUpdateCartQty}
							handleEmptyCart={handleEmptyCart}
						/>
					}
				/>
				<Route path='login' element={<Login />} />
			</Routes>
		</Box>
	);
};

export default App;
