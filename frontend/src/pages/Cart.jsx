import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, updateQty, removeFromCart, totalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="p-10 text-center text-white">
                Cart is empty
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-6 text-white">
            <h1 className="text-2xl mb-6">Your Cart</h1>

            {cartItems.map((item) => (
                <div
                    key={item._id}
                    className="flex items-center justify-between border-b border-slate-800 py-4"
                >
                    <div>
                        <h3>{item.name}</h3>
                        <p className="text-indigo-400">₹{item.price}</p>
                    </div>

                    <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) => updateQty(item._id, Number(e.target.value))}
                        className="w-16 bg-slate-800 text-center"
                    />

                    <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-red-400"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <div className="mt-6 flex justify-between items-center">
                <h2 className="text-xl">Total: ₹{totalPrice}</h2>
                <Link
                    to="/checkout"
                    className="px-6 py-2 bg-indigo-600 rounded"
                >
                    Checkout
                </Link>
                <button
                    onClick={() => navigate("/checkout")}
                    className="mt-6 px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
