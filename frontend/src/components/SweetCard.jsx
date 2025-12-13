import { useState } from "react";
import SweetEditModal from "./SweetEditModal";

export default function SweetCard({ sweet, onBuy, onDelete, onUpdated, isAdmin }) {
  const [editing, setEditing] = useState(false);
  const outOfStock = sweet.quantity === 0;

  return (
    <>
      <div className="bg-white border rounded-lg p-5">
        <h3 className="font-semibold">{sweet.name}</h3>
        <p className="text-sm text-gray-500">{sweet.category}</p>
        <p>₹{sweet.price}</p>
        <p className={outOfStock ? "text-red-600" : "text-green-600"}>
          Stock: {sweet.quantity}
        </p>

        <div className="mt-4 flex gap-2">
          <button
            disabled={outOfStock}
            onClick={() => onBuy(sweet._id)}
            className={`flex-1 py-2 rounded-md text-white ${
              outOfStock ? "bg-gray-400" : "bg-indigo-600"
            }`}
          >
            Purchase
          </button>

          {isAdmin && (
            <>
              <button
                onClick={() => setEditing(true)}
                className="px-3 py-2 border text-indigo-600 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(sweet._id)}
                className="px-3 py-2 border text-red-600 rounded-md"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>

      {editing && (
        <SweetEditModal
          sweet={sweet}
          onClose={() => setEditing(false)}
          onUpdated={onUpdated}
        />
      )}
    </>
  );
}
