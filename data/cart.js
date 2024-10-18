export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

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

    export function removeFromCart(productId) {
      const newCard = [];

      cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCard.push(cartItem);
        }
      });

      cart = newCard;
    }