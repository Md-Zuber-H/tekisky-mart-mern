import { useState } from "react";
import { createProduct } from "../../api/productApi";

const AdminProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);

    await createProduct(formData);
    alert("Product created");
  };

  return (
    <form onSubmit={submitHandler} className="p-6 space-y-4">
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        className="bg-slate-800 p-2"
      />
      <input
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        className="bg-slate-800 p-2"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button className="bg-indigo-600 px-4 py-2">
        Create
      </button>
    </form>
  );
};

export default AdminProducts;