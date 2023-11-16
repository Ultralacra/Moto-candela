import { useContext } from "react";
import { CircleButton } from "../../Button/Button";
import "./CartItem.scss";
import CartContext from "../../../providers/CartContext";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CartItem = ({ item }) => {
	const { tasaDeCambio, addToCart, removeFromCart } = useContext(CartContext);

	const truncate = (text, maxLength) => {
		return text.length > maxLength
			? `${text.substring(0, maxLength)}...`
			: text;
	};

	const increaseCount = () => {
		addToCart(item);
	};

	const decreaseCount = () => {
		removeFromCart(item);
	};

	const image =
		item.images.length >= 1 ? item.images[0] : "/motos/no-image.png";
	const description = item.description
		? item.description
		: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus illum adipisci officia rerum explicabo porro commodi similique nobis asperiores quo, harum quas quae hic tempora ab aspernatur earum sapiente?";
	
	const price = item.price ? parseFloat(item.price.$numberDecimal).toFixed(2) : null;
    const dolares = price ? price : "N/A";
    const bs = price ? (price * tasaDeCambio).toFixed(2) : "N/A";

	return (
		<div className="cart-item__container">
			<div className="cart-item__content">
				<img className="cart-item__content-image" src={image} />
				<div className="about">
					<p className="cart-item__content-title">{item.name}</p>
					<p className="cart-item__content-category">
						{item.category}
					</p>

					<p className="cart-item__content-description">
						{truncate(description, 40)}
					</p>

					<div className="cart-item__content-price">
						<p>$ {dolares}</p>
						<p>Bs. {bs}</p>
					</div>
				</div>
			</div>

			<div className="cart-item__detail-link">
				<div className="product-card__action">
					<NavLink
						to={
							image.split("/")[1] === "motos"
								? `/motos/${item.id}`
								: `/repuestos/${item.id}`
						}
						className="product-card__action-button"
					>
						Ver más
					</NavLink>
				</div>
			</div>

			<div className="cart-item__amount">
				<p>$ {dolares === "N/A" ? "N/A" : (dolares * item.count).toFixed(2)}</p>
				<p>Bs. {bs === "N/A" ? "N/A" : (bs * item.count).toFixed(2)}</p>
			</div>

			<div className="cart-item__action">
				<div className="cart-item__action-counter">{item.count}</div>
				<CircleButton
					color="primary"
					onClick={decreaseCount}
					iconName="IconMinus"
				/>
				<div className="plus">
					<CircleButton
						color="primary"
						onClick={increaseCount}
						iconName="IconPlus"
					/>
				</div>
			</div>
		</div>
	);
};

export default CartItem;

CartItem.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		category: PropTypes.string,
		description: PropTypes.string,
		images: PropTypes.arrayOf(PropTypes.string),
		characteristics: PropTypes.arrayOf(PropTypes.string),
		price: PropTypes.shape({
			$numberDecimal: PropTypes.string,
		}),
		count: PropTypes.number,
	}).isRequired,
};
