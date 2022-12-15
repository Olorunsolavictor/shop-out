import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavBar({ totalItems }) {
	const location = useLocation();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar sx={{ bgcolor: 'orange' }} position='fixed'>
				<Toolbar>
					<Typography
						component={Link}
						to='/'
						variant='h6'
						sx={{ flexGrow: 1, color: 'white', textDecoration: 'none' }}
					>
						SHOP OUT!
					</Typography>
					{location.pathname === '/' ? (
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}
							component={Link}
							to='/cart'
						>
							<Badge badgeContent={totalItems} color='secondary'>
								<ShoppingCartOutlinedIcon sx={{ color: 'white' }} />
							</Badge>
						</IconButton>
					) : null}
					{/* <Link to={/signup}> */}
					<Button color='inherit'>SignUp</Button>
					{/* </Link> */}
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default NavBar;
