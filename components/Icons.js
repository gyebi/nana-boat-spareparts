import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLocationDot, faMagnifyingGlass, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function SearchIcon(props) { return <FontAwesomeIcon icon={faMagnifyingGlass} {...props} />; }
export function MenuIcon(props) { return <FontAwesomeIcon icon={faBars} {...props} />; }
export function PhoneIcon(props) { return <FontAwesomeIcon icon={faPhone} {...props} />; }
export function LocationIcon(props) { return <FontAwesomeIcon icon={faLocationDot} {...props} />; }
export function WhatsAppIcon(props) { return <FontAwesomeIcon icon={faWhatsapp} {...props} />; }
export function FacebookIcon(props) { return <FontAwesomeIcon icon={faFacebook} {...props} />; }
