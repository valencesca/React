import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,span } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
    return (
        <Button variant="dark">
            <ShoppingCartIcon/><Badge bg="secondary">4</Badge>
            {/* <span className="visually-hidden">unread messages</span> */}
        </Button>
    );
}