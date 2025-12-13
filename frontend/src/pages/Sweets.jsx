export default function SweetCard({ sweet, onBuy, onDelete, isAdmin }) {
  const outOfStock = sweet.quantity === 0;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 flex flex-col justify-between">
      {/* Sweet Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {sweet.name}
        </h3>

        <p className="text-sm text-gray-500 mb-2">
          Category: {sweet.category}
        </p>

        <p className="text-sm text-gray-700">
          Price: <span className="font-medium">₹{sweet.price}</span>
        </p>

        <p
          className={`text-sm mt-1 ${
            outOfStock ? "text-red-600" : "text-green-600"
          }`}
        >
          Stock: {sweet.quantity}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-4 flex items-center gap-2">
        <button
          disabled={outOfStock}
          onClick={() => onBuy(sweet._id)}
          className={`flex-1 py-2 rounded-md text-sm font-medium text-white transition ${
            outOfStock
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          Purchase
        </button>

        {isAdmin && (
          <button
            onClick={() => onDelete(sweet._id)}
            className="px-3 py-2 rounded-md text-sm font-medium text-red-600 border border-red-500 hover:bg-red-50 transition"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
