import React from 'react';
import { stripHtml } from 'string-strip-html';
import PropTypes from 'prop-types';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

const ProductItem = ({ product, onAddToCart }) => {
	const { result } = stripHtml(product.description);
	const handleAddToCart = () => {
		onAddToCart(product.id, 1);
	};

	return (
		<Card sx={{ minWidth: 250 }} className="product__card">
			<CardMedia
				sx={{ maxHeight: 250 }}
				component="img"
				image={product.image?.url}
				alt={product.image?.url}
			/>
			<CardContent>
				<div className="product__info">
					<Typography variant="h4" gutterBottom>
						{product.name}
					</Typography>
					<Typography paragraph gutterBottom>
						{/* product description stripped of html tags */}
						{result}
					</Typography>
				</div>
				<div className="product__details">
					<Typography
						variant="h6"
						color="secondary"
						gutterBottom
						align={'right'}
					>
						{product.price.formatted_with_symbol}
					</Typography>
				</div>
			</CardContent>
			<CardActions>
				<IconButton
					name="Add to cart"
					className="product__btn"
					onClick={handleAddToCart}
					aria-label="Add to Cart"
				>
					<AddShoppingCartRoundedIcon fontSize="large" />
				</IconButton>
			</CardActions>
		</Card>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object,
};

export default ProductItem;
