import React, { useState } from 'react';
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import styles from './styles.module.css';
import Modal from 'react-modal';
import { useAuth } from '../../Context/AuthContext';

Modal.setAppElement('#root');

const Cart = () => {
  const { items, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const { loggedIn } = useAuth();

  const subtotal = items
    .reduce(
      (acc, obj) => acc + obj.price * obj.weight * (quantity[obj.id] || 1),
      0
    )
    .toFixed(1);

  const navigator = useNavigate();

  const handleIncrement = (itemId) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [itemId]: (prevQuantity[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    if (quantity[itemId] > 1) {
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [itemId]: prevQuantity[itemId] - 1,
      }));
    } else {
      removeFromCart(itemId);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBuyNowClick = async (e) => {
    e.preventDefault();
    if (!loggedIn) {
      alert('Please login to proceed with the purchase.');
      return;
    }
    openModal();
  };

  return (
    <div>
      {items.length < 1 && (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-center text-gray-500 text-lg mb-4">Your cart is Empty</p>
          <Link to='/'>
            <button className="continueButton bg-[#ff9900] text-white px-4 py-2 rounded-md hover:bg-yellow-500">Explore Our Products</button>
          </Link>
        </div>
      )}

      {items.length > 0 && (
        <div className="flex flex-wrap max-w-7xl mx-auto my-4">
          <div className="flex flex-col flex-1">
            {items.map((item) => {
              return (<>
                <p className="text-center text-gray-500 text-lg mb-4"><b>Your Products</b></p>
                <div
                  className="w-full sm:w-2/2 md:w-2/2 xl:w-5/5 p-4 my-auto"
                  key={item.id}
                >
                  <div className={styles.bgCart}>
                    <div className="flex flex-row">
                      <div className="w-32 h-32 my-auto p-4 object-contain">
                        <img src={item.image} alt="Cart Item" />
                      </div>
                      <div className="flex flex-col ml-2 mt-2 flex-grow">
                        <Link to={`/product/${item.id}`}>
                          <p className="font-extralight">{item.title}</p>
                        </Link>
                        <div className="flex flex-row items-center">
                          <button
                            className="w-5 h-5 m-2 hover:text-red-500"
                            onClick={() => handleDecrement(item.id)}
                          >
                            <FaMinus />
                          </button>
                          <span className="font-extralight text-lg">
                            Weight: {item.weight} kg
                          </span>
                          <button
                            className="w-5 h-5 m-2 hover:text-green-500"
                            onClick={() => handleIncrement(item.id)}
                          >
                            <FaPlus />
                          </button>
                        </div>
                        <div className="flex flex-row items-center">
                          <button
                            className="w-5 h-5 m-2 hover:text-red-500"
                            onClick={() => handleDecrement(item.id)}
                          >
                            <FaTrash />
                          </button>
                          <span className="mt-auto mb-4 font-extralight text-xl">
                            Rs. {item.price * item.weight * (quantity[item.id] || 1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </>
              );
            })}
          </div>
          <div className="w-full h-full sm:w-2/2 md:w-2/2 xl:w-1/5 p-4">
            <div className={styles.bgCart}>
              <div className="flex flex-col p-4">
                <span className="text-xl mb-4 font-semibold">
                  Order Summary
                </span>
                <span className="text-sm my-2 font-extralight flex">
                  Subtotal{' '}
                  <span className="ml-auto font-normal">Rs {subtotal}</span>
                </span>
                <span className="text-sm my-2 font-extralight flex">
                  Shipping Estimate <span className="ml-auto font-normal">Rs 5</span>
                </span>
                <span className="text-sm my-2 font-extralight flex">
                  Tax Estimate <span className="ml-auto font-normal">Rs 5</span>
                </span>
                <span className="text-md my-2 font-normal flex">
                  Order Total <span className="ml-auto">Rs {parseFloat(subtotal) + 10}</span>
                </span>
                <div className={styles.button}>
                  <button
                    className="flex-1"
                    onClick={handleBuyNowClick}
                  >
                    <div className="flex flex-col self-center bg-[#ff9900]">
                      <span className={styles.buttonText}>Buy Now</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
      >
        <div className={styles.modalContent}>
          <span className={styles.modalTitle}>Enter Your Details</span>
          <form>
            <div className={styles.formField}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className={styles.nameInput}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className={styles.emailInput}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your Phone Number"
                className={styles.phoneInput}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Your Address"
                className={styles.addressInput}
              />
            </div>
            <div className={styles.button}>
              <button
                className="flex-1"
                onClick={handleBuyNowClick}
              >
                <div className="flex flex-col self-center bg-[#ff9900]">
                  <span className={styles.buttonText}>Buy Now</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
