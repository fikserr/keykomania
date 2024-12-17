import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  products: localStorage.getItem('productsData')
    ? JSON.parse(localStorage.getItem('productsData'))
    : [], 
  totalPrice: localStorage.getItem('totalPrice')
    ? JSON.parse(localStorage.getItem('totalPrice'))
    : 0, 
  error: null,
};


const calculateTotalPrice = (products) => {
  return products.reduce((total, product) => total + product.Price, 0);
};


const productSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {

    addProduct: (state, action) => {
      const newProduct = action.payload;


      const exists = state.products.some((product) => product.$id === newProduct.$id);
      if (!exists) {
        state.products.push(newProduct);
        state.totalPrice = calculateTotalPrice(state.products); 
        localStorage.setItem('productsData', JSON.stringify(state.products)); 
        localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice)); 
        state.error = null;
      } else {
        state.error = `Mahsulot allaqachon mavjud: ${newProduct.Name}`;
      }
    },
    
    // Mahsulot o'chirish
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((product) => product.$id !== productId);
      state.totalPrice = calculateTotalPrice(state.products); 
      localStorage.setItem('productsData', JSON.stringify(state.products)); 
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice)); 
    },
    
    // Mahsulotlar ro'yxatini tozalash
    clearProducts: (state) => {
      state.products = [];
      state.totalPrice = 0;
      localStorage.removeItem('productsData'); // Mahsulotlarni o'chirish
      localStorage.removeItem('totalPrice'); // Jami narxni o'chirish
    },
  },
});

// Export reducer va actions
export const { addProduct, removeProduct, clearProducts } = productSlice.actions;
export default productSlice.reducer;
