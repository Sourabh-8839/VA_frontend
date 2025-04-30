import { createContext, useContext, useState } from 'react';

export const datacontext = createContext(null);

export const DataProvider = ({ children }) => {
  const intialState = JSON.parse(localStorage.getItem('user'));

  const [account, setAccount] = useState(intialState);
  const [savedPost, setSavedPost] = useState([]);

//   const addItemToCart = (item) => {
//     const existingCartItemIndex = cartList.findIndex(
//       (items) => items._id === item._id
//     );

//     const existingCartItem = cartList[existingCartItemIndex];

//     let updateItems;

//     if (existingCartItem) {
//       const updateItem = {
//         ...existingCartItem,
//         quantity: item.quantity,
//       };

//       updateItems = [...cartList];

//       updateItems[existingCartItemIndex] = updateItem;

//       setCartList(updateItems);
//     } else {
//       setCartList((prev) => [...prev, item]);
//     }
//   };

//   const removeItemFromCart = (id) => {
//     const existingCartItemIndex = cartList.findIndex((item) => item._id === id);

//     console.log(existingCartItemIndex);
//     const updateItems = [...cartList];

//     updateItems.splice(existingCartItemIndex, 1);
//     setCartList(updateItems);
//   };

  return (
    <datacontext.Provider
      value={{
        account,
        setAccount,
        savedPost,
        setSavedPost,
        // addItemToCart,
        // removeItemFromCart,
      }}
    >
      {children}
    </datacontext.Provider>
  );
};

export const useData = () => {
  return useContext(datacontext);
};
