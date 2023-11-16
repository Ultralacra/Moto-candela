import React from "react";
import CartContext from "./CartContext";
import PropTypes from "prop-types";

const CartProvider = ({ children }) => {
	const tasaDeCambio = 35;
	const IVA = 0.16;

	const [cart, setCart] = React.useState([
		{
			count: 2,
			_id: {
				$oid: "64af849a45743628dffe7016",
			},
			name: "Arsen II",
			id: 1,
			category: "Street",
			images: [
				"/motos/street/arsen-II.jpg",
				"/motos/enduro/tx.jpg",
				"/motos/street/ek.png",
				"/motos/street/horse.jpg",
				"/motos/street/cruiser.png",
				"/motos/street/owen.jpg",
				"/motos/street/superlight.jpg",
				"/motos/street/speed.jpg",
				"/motos/scooter/caffe-nero.jpg",
				"/motos/scooter/macis.jpg",
				"/motos/scooter/outlook.jpg",
				"/motos/scooter/silverblade.jpg",
			],
			characteristics: [
				"Motor: 200cc / 4 tiempos balanceado",
				"Sistema de enfriamiento: Radiador de aceite",
				"Cilindro: 63.50 mm x 62.20 mm",
				"Compresión radio: 8.3:1",
				"Potencia: 9.5 KW / 75550 RPM",
				"Torque máximo: 14 NM 6000 RPM",
				"Sistema de arranque: Eléctrico y pedal",
				"Tipo de encendido: CDI",
				"Tipo de embrague: Multidisco húmedo",
				"Caja de cambios: 5 velocidades cadena",
				"Longitud: 2260 mm",
				"Ancho: 800 mm",
				"Altura: 1110 mm",
				"Relación peso potencia: 0.0708 kW / kg",
				"Peso neto: 134 Kg",
				"Suspensión delantera: hidráulica",
				"Suspensión trasera: doble amortiguador",
				"Freno delantero: disco ventilado",
				"Freno trasero: tambor mecánico",
				"Rueda delantera: 110/90 -16",
				"Rueda trasera: 130/90-15",
				"Cap. Tanque combustible: 15 lt",
				"Cap. Tanque aceite motor: 1.0 lt",
				"Tipo de aceite motor: 4 tiempos SAE 15W40",
				"Carga máxima: 181 kg",
				"Tipo de pintura: protección UV 3 capas",
				"Acabado en faros: Antifog UV",
				"Tipo de batería: 12V 6Ah",
				"Tipo de escape: deportivo",
				"Tablero: análogo",
			],
			price: {
				$numberDecimal: "999.99",
			},
		},
	]);

	const addToCart = (item) => {
		const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
		if (itemIndex !== -1) {
			// Item is already in the cart, increment the count
			const newCart = [...cart];
			newCart[itemIndex].count += 1;
			setCart(newCart);
		} else {
			// Item is not in the cart, add it with a count of 1
			setCart([...cart, { ...item, count: 1 }]);
		}
	};

	const removeFromCart = (item) => {
		const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
		if (itemIndex !== -1) {
			const newCart = [...cart];
			if (newCart[itemIndex].count > 1) {
				// If item count is more than 1, decrease the count
				newCart[itemIndex].count -= 1;
			} else {
				// If item count is 1, remove the item from the cart
				newCart.splice(itemIndex, 1);
			}
			setCart(newCart);
		} else {
			// If item is not in the cart, return the current cart
			setCart(cart);
		}
	};

	return (
		<CartContext.Provider
			value={{ tasaDeCambio, IVA, cart, addToCart, removeFromCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
