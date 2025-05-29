import PropTypes from 'prop-types';

export const CartPropTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setCartItems: PropTypes.func.isRequired
};

export const HeaderPropTypes = {
  cartItemsCount: PropTypes.number.isRequired,
  toggleCart: PropTypes.func.isRequired
};

export const ProductPropTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  addToCart: PropTypes.func.isRequired
};
