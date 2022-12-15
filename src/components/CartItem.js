import {
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from '@mui/material';
import React from 'react';

const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => {
	return (
		<Card sx={{ minWidth: 250 }} className="cart-item">
			<CardMedia
				sx={{ maxHeight: 250 }}
				component="img"
				image={item.image?.url}
				alt={item.name}
			/>
			<CardContent>
				<Typography variant="h4" gutterBottom>
					{item.name}
				</Typography>
				<div className="cart-item__details-qty"></div>
				<div className="cart-item__details-price">
					<Typography variant="h6" gutterBottom>
						{item.line_total.formatted_with_symbol}
					</Typography>
				</div>
			</CardContent>
			<CardActions>
				<div>
					<Button
						type="button"
						color="secondary"
						size="small"
						onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
					>
						+
					</Button>
					<Typography paragraph gutterBottom>
						{item.quantity}
					</Typography>
					<Button
						type="button"
						color="secondary"
						size="small"
						onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
					>
						-
					</Button>
				</div>
				<Button
					type="button"
					color="secondary"
					size="large"
					variant="contained"
					onClick={() => onRemoveFromCart(item.id)}
				>
					Remove
				</Button>
			</CardActions>
		</Card>
	);
};

export default CartItem;
