
export const addQty = (selectedItem) => {
console.log("addQty ",selectedItem)
   return{
     type:"ADDQTY",
     payload:selectedItem
   }
}
export const subQty = (selectedItem) => {
  console.log("subQty ",selectedItem)

   return{
     type:"SUBQTY",
     payload:selectedItem
   }
}

export const myCart = (cart) =>{
  console.log("action",cart)
  return{
    type:"NEWCART",
    payload:cart
  }

}