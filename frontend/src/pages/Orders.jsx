import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; // Ensure the path is correct
import Title from '../components/Title'; // Ensure the path is correct

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      {/* Title Section */}
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* Orders List */}
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row"
          >
            {/* Product Details */}
            <div className="flex items-start gap-6 text-sm w-full md:w-1/2">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-500">
                  <p className="text-lg">
                    {currency} {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">25, July, 2024</span>
                </p>
              </div>
            </div>

            {/* Order Status and Action */}
            <div className="mt-4 md:mt-0 md:w-1/2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
