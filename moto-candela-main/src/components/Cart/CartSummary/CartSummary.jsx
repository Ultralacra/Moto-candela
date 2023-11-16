import { useContext } from "react";
import CartContext from "../../../providers/CartContext";
import "./CartSummary.scss";
import PropTypes from "prop-types";

const CartSummary = ({ subtotal }) => {
	const { tasaDeCambio, IVA } = useContext(CartContext);
	const subDolares = +subtotal.toFixed(2);
	const subBs = +(subDolares * tasaDeCambio).toFixed(2);

	const ivaDolares = +(subDolares * IVA).toFixed(2);
	const ivaBs = +(subBs * IVA).toFixed(2);

	const totalDolares = +(subDolares + ivaDolares).toFixed(2);
	const totalBs = +(subBs + ivaBs).toFixed(2);

	return (
		<div className="cart-summary__container">
			<div className="cart-summary__titles">
				<div className="cart-summary__titles-subtotal">Subtotal</div>
				<div className="cart-summary__titles-iva">
					+ I.V.A ({IVA * 100}%)
				</div>
				<div className="cart-summary__titles-total">TOTAL</div>
			</div>

			<div className="cart-summary__dollar">
				<div className="cart-summary__dollar-subtotal">
					$ {subDolares}
				</div>
				<div className="cart-summary__dollar-iva">$ {ivaDolares}</div>
				<div className="cart-summary__dollar-total">
					$ {totalDolares}
				</div>
			</div>

			<div className="cart-summary__bs">
				<div className="cart-summary__bs-subtotal">Bs. {subBs}</div>
				<div className="cart-summary__bs-iva">Bs. {ivaBs}</div>
				<div className="cart-summary__bs-total">Bs. {totalBs}</div>
			</div>
		</div>
	);
};

export default CartSummary;

CartSummary.propTypes = {
	subtotal: PropTypes.number.isRequired,
};
