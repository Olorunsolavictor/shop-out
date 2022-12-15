import { Typography, Grid, Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = ({
	cart,
	handleRemoveFromCart,
	handleUpdateCartQty,
	handleEmptyCart,
}) => {
	const EmptyCart = () => {
		return (
			<Typography component={Link} to="/" variant="subtitle1">
				shop with us
			</Typography>
		);
	};
	const FilledCart = () => {
		return (
			<>
				<Grid
					container
					justify="center"
					spacing={4}
					sx={{
						marginTop: 7,
						marginBottom: 10,
						paddingLeft: 10,
						paddingRight: 10,
					}}
				>
					{cart.line_items.map(item => (
						<Grid item key={item.id} xs={12} sm={6}>
							<CartItem
								item={item}
								onRemoveFromCart={handleRemoveFromCart}
								onUpdateCartQty={handleUpdateCartQty}
							/>
						</Grid>
					))}
				</Grid>
				<div>
					<Typography>
						Subtotal : {cart.subtotal.formatted_with_symbol}
					</Typography>
					<div>
						<Button
							type="button"
							variant="contained"
							color="primary"
							size="large"
							onClick={handleEmptyCart}
						>
							Empty Cart
						</Button>
						<Button
							type="button"
							variant="contained"
							color="secondary"
							size="large"
						>
							Checkout
						</Button>
					</div>
				</div>
			</>
		);
	};
	if (!cart.line_items)
		return <Typography sx={{ marginTop: 30 }}>Loading.....</Typography>;

	return (
		<Container sx={{ marginTop: 10 }}>
			<Typography variant="h3">My Shopping Cart</Typography>
			{!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
		</Container>
	);
};

export default Cart;
