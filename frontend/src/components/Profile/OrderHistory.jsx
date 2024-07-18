import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v1/get-order-history", { headers });
        setOrderHistory(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching order history:', error);
        setError('Failed to fetch order history. Please try again later.');
        setIsLoading(false);
      }
    };
    fetchOrderHistory();
  }, []);

  return (
    <div className="p-4 bg-[#F3F8F9] min-h-screen">
      <h1 className="text-3xl font-semibold text-[#086D8A] mb-4">Order History</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && orderHistory.length === 0 && (
        <p className="text-zinc-400">You have no orders yet.</p>
      )}
      {!isLoading && orderHistory.length > 0 && (
        <div className="space-y-4">
          {orderHistory.map((order, index) => (
            <div key={index} className="p-4 bg-white rounded border border-[#086D8A]">
              <h2 className="text-xl font-semibold text-[#086D8A]">{order.book.title}</h2>
              <p className="text-zinc-700">{order.book.desc}</p>
              <p className="text-zinc-700">Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p className="text-zinc-700">Status: {order.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderHistory;
