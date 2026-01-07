import { useEffect, useState } from "react";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../api/productApi";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* CREATE / UPDATE */
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    if (image) formData.append("image", image);

    if (editingId) {
      await updateProduct(editingId, formData);
      alert("Product updated successfully");
    } else {
      await createProduct(formData);
      alert("Product created successfully");
    }

    setName("");
    setPrice("");
    setImage(null);
    setEditingId(null);

    fetchProducts();
  };

  /* DELETE */
  const deleteHandler = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await deleteProduct(id);
    fetchProducts();
  };

  /* EDIT */
  const editHandler = (product) => {
    setEditingId(product._id);
    setName(product.name);
    setPrice(product.price);
  };

  return (
    <div className="p-6 text-white space-y-8">
      <h1 className="text-2xl font-bold">
        Admin – Manage Products
      </h1>

      {/* FORM */}
      <form
        onSubmit={submitHandler}
        className="bg-slate-900 p-4 rounded space-y-3"
      >
        <h2 className="text-indigo-400 font-semibold">
          {editingId ? "Edit Product" : "Create Product"}
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product name"
          className="w-full bg-slate-800 p-2 rounded"
          required
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full bg-slate-800 p-2 rounded"
          required
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button className="bg-indigo-600 px-4 py-2 rounded">
          {editingId ? "Update" : "Create"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setName("");
              setPrice("");
              setImage(null);
            }}
            className="ml-3 text-sm text-gray-400"
          >
            Cancel
          </button>
        )}
      </form>

      {/* LIST */}
      <div className="space-y-3">
        {products.map((p) => (
          <div
            key={p._id}
            className="flex justify-between items-center bg-slate-900 p-3 rounded"
          >
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-indigo-400">₹{p.price}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => editHandler(p)}
                className="text-yellow-400 text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => deleteHandler(p._id)}
                className="text-red-400 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;