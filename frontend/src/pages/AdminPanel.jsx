import { useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function AdminPanel() {
  const [form, setForm] = useState({
    name: "", category: "", price: "", quantity: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/sweets", {
      ...form,
      price: Number(form.price),
      quantity: Number(form.quantity)
    });
    alert("Sweet added");
    setForm({ name: "", category: "", price: "", quantity: "" });
  };

  return (
    <>
      <Navbar isAdmin />
      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add Sweet</h2>

        <form onSubmit={submit}>
          {["name", "category", "price", "quantity"].map((f) => (
            <input
              key={f}
              placeholder={f}
              className="w-full mb-3 px-3 py-2 border rounded-md"
              onChange={(e) => setForm({ ...form, [f]: e.target.value })}
              value={form[f]}
            />
          ))}
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md">
            Add Sweet
          </button>
        </form>
      </div>
    </>
  );
}
