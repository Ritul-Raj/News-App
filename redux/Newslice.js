import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


 export const fetchdata=createAsyncThunk('products/fetch',async function ({query}){
    //const api_url=`https://newsapi.org/v2/everything?q=${query}&from=2023-08-15&to=2028-08-03&sortBy=popularity&apiKey=bc2d065ecb01409fa460c222c16a10db`;
 const response= await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-08-10&sortBy=publishedAt&apiKey=bc2d065ecb01409fa460c222c16a10db');
  
      return await response.json();
})
const productslice=createSlice({
name:'productslice',
initialState:{
    products:[] ,
    status:'idle',
    error:null 
}
,

// reducers:{
//     loadproducts:(action,state)=>{
//         state.products=action.payload;
//     } 
// }

extraReducers: function (builder){
    
    builder 
    .addCase(fetchdata.pending,(state,action)=>{
        state.status='Loading';
    })     
    .addCase(fetchdata.fulfilled,(state,action)=>{
        state.products=action.payload;
        state.status='Success';
    })
    .addCase(fetchdata.rejected,(state,action)=>{
        state.status="failed";
        state.error=action.error.message;
    })
} ,
});

export default productslice.reducer;
export const {loadproducts}=productslice.actions;
