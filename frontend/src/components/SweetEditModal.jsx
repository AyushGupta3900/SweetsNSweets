import { useState } from "react";
import api from "../api/api";

export default function SweetEditModal({ sweet, onClose, onUpdated }) {
  const [form, setForm] = useState({
    name: sweet.name,
    category: sweet.category,
    price: sweet.price,
    quantity: sweet.quantity,
    description: sweet.description || ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.put(`/sweets/${sweet._id}`, {
      ...form,
      price: Number(form.price),
      quantity: Number(form.quantity)
    });
    onUpdated();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Update Sweet</h2>

        <form onSubmit={submit}>
          <input className="w-full mb-3 px-3 py-2 border rounded-md"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input className="w-full mb-3 px-3 py-2 border rounded-md"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
          <input type="number" className="w-full mb-3 px-3 py-2 border rounded-md"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <input type="number" className="w-full mb-3 px-3 py-2 border rounded-md"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          />

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded-md">
              Cancel
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
