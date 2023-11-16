import { NavLink } from "react-router-dom";
import * as Icons from "@tabler/icons-react";
import CartIcon from "../Cart/CartIcon/CartIcon";

export default ({ links, active, handler }) => {
    const ICON_MAP = {
        "Carrito": CartIcon,
        "Ingresar": Icons.IconLogin,
        "Usuario": Icons.IconUser,
    }
	return (
		<ul>
			{links.map((link) => {
				const linkKey = `nav-link-${link.name}`;
				const IconComponent = ICON_MAP[link.name];

				return (
					<li
						key={linkKey}
						id={linkKey}
						className={`${active === linkKey ? "active" : ""}`}
						onClick={(event) => handler(event.target.id)}
					>
						<NavLink to={link.path}>
							{IconComponent ?
								<IconComponent size={24} color="#FFF" />
                                : link.name
							}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};
