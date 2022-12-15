import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { Grid } from '@mui/material';

const ProductsList = ({ products, onAddToCart }) => {
	return (
		<div className="products" id="products">
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
				{products.map(product => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<ProductItem product={product} onAddToCart={onAddToCart} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

ProductsList.propTypes = {
	products: PropTypes.array,
};

export default ProductsList;
