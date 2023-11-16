import { useContext } from 'react';
import CartContext from '../../../providers/CartContext';
import { IconShoppingCart } from '@tabler/icons-react';
import './CartIcon.scss';
import PropTypes from 'prop-types';

const CartIcon = (props) => {
	const { cart } = useContext(CartContext);
	const size = props.size || 24;
	const color = props.color || "#FFF";
	
	return (
	<div style={{ position: 'relative' }}>
		<IconShoppingCart size={size} color={color} />
		{cart.length > 0 && (
			<span className='badge-cart-icon-primary'>
				{cart.reduce((acc, item) => acc + item.count, 0)}
			</span>
		)}
	</div>
)};

export default CartIcon;

CartIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
};