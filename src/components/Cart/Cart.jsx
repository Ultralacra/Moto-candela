import { useContext, useState, useEffect } from "react";
import './Cart.scss';
import { Button } from '../Button/Button';
import CartItem from "./CartItem/CartItem";
import CartSummary from "./CartSummary/CartSummary";
import CartContext from "../../providers/CartContext";


export default () => {
	const { cart } = useContext(CartContext);
	const [subtotal, setSubtotal] = useState(cart.reduce((acc, item) => {
		if (item.price) 
			return acc + parseFloat(item.price.$numberDecimal) * item.count;
		return acc;
	}, 0));

	useEffect(() => {
		setSubtotal(cart.reduce((acc, item) => {
			if (item.price) 
				return acc + parseFloat(item.price.$numberDecimal) * item.count;
			return acc;
		}, 0));
	}, [cart]);

	return (
		<div className="cart-container">
			<h2 className="title">Carrito</h2>
			<div className="cart-list">
				{cart.map((item, i) => (
					<CartItem 
						item={item}
						key={i}
					/>
				))}
				<CartSummary subtotal={subtotal} />
				<Button color="primary">Método de pago</Button>
			</div>
		</div>
	);
};
