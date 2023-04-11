const order = {
  customer: {
    address:{
      city: ""
    }
  }    
};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }
 if (Object.values(!order.customer.address.city)) {
  console.log('City is required');
 }