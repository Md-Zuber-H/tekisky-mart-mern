import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

const Home = () => <h1 className="text-3xl font-bold">Home</h1>;
const Cart = () => <h1 className="text-3xl font-bold">Cart</h1>;
const Orders = () => <h1 className="text-3xl font-bold">Orders</h1>;
const Login = () => <h1 className="text-3xl font-bold">Login</h1>;

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;