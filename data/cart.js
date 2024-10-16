export const cart = [];

export function addToCart(productId) {
    //when quantity += 1 and sometime same branchname item issue time while use id
      let matchingItem;
    
      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
    
        if (matchingItem) {
          matchingItem.quantity += 1;
      } else {
          cart.push({
            productId: productId,
            quantity: 1
        });
      }
    }