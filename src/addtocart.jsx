// import React, { useState } from "react";

// const ProductCard = ({ onAddToCart }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     onAddToCart(quantity);
//   };

//   return (
//     <div className="flex items-center justify-center">
//       <div className="">
//         <div className="  flex  items-center  justify-around    ">
//           <span className=" px-[10px] bg-slate-300 text-xl">{quantity}</span>
//           <div className=" flex flex-col">
//             <button
//               onClick={handleDecrement}
//               className="m-2 px-[10px] bg-slate-300 text-xl"
//             >
//               -
//             </button>
//             <button
//               onClick={handleIncrement}
//               className="m-2 px-[10px] bg-slate-300 text-xl"
//             >
//               +
//             </button>
//           </div>
//         </div>
//         <button
//           onClick={handleAddToCart}
//           className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
