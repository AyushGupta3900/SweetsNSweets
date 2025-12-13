import { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";
import SweetCard from "../components/SweetCard";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const isAdmin = localStorage.getItem("role") === "admin";

  const fetchSweets = async () => {
    setLoading(true);
    const res = await api.get("/sweets/search", {
      params: { name: search }
    });
    setSweets(res.data.sweets);
    setLoading(false);
  };

  useEffect(() => { fetchSweets(); }, [search]);

  const purchaseSweet = async (id) => {
    await api.post(`/sweets/${id}/purchase`, { quantity: 1 });
    fetchSweets();
  };

  const deleteSweet = async (id) => {
    if (!window.confirm("Delete this sweet?")) return;
    await api.delete(`/sweets/${id}`);
    fetchSweets();
  };

  return (
    <>
      <Navbar isAdmin={isAdmin} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <input
          className="mb-6 px-3 py-2 border rounded-md w-full md:w-1/3"
          placeholder="Search sweets"
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading ? <p>Loading...</p> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sweets.map((sweet) => (
              <SweetCard
                key={sweet._id}
                sweet={sweet}
                onBuy={purchaseSweet}
                onDelete={deleteSweet}
                onUpdated={fetchSweets}
                isAdmin={isAdmin}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
