import { useEffect, useState } from "react";
import {
  getCategories,
  createCategory,
  deleteCategory,
} from "../../api/categoryApi";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    await createCategory(name);
    setName("");
    fetchCategories();
  };

  const deleteHandler = async (id) => {
    if (!window.confirm("Delete category?")) return;
    await deleteCategory(id);
    fetchCategories();
  };

  return (
    <div className="p-6 text-white space-y-6">
      <h1 className="text-2xl font-bold">
        Manage Categories
      </h1>

      <form
        onSubmit={submitHandler}
        className="bg-slate-900 p-4 rounded flex gap-3"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category name"
          className="flex-1 bg-slate-800 p-2 rounded"
          required
        />

        <button className="bg-indigo-600 px-4 py-2 rounded">
          Add
        </button>
      </form>

      <div className="space-y-3">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="flex justify-between bg-slate-900 p-3 rounded"
          >
            <span>{cat.name}</span>

            <button
              onClick={() => deleteHandler(cat._id)}
              className="text-red-400 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;