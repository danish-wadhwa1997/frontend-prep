/**
 * Exercise 8: Shopping Cart System - Solution
 */

function createShoppingCart() {
  let items = [];
  let discountCode = null;
  
  const DISCOUNT_CODES = {
    'SAVE10': 0.10,
    'SAVE20': 0.20
  };
  
  return {
    addItem: (item) => {
      const existingItem = items.find(i => i.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        items.push({
          ...item,
          quantity: item.quantity || 1
        });
      }
      
      return items;
    },
    
    removeItem: (itemId) => {
      items = items.filter(item => item.id !== itemId);
      return items;
    },
    
    updateQuantity: (itemId, quantity) => {
      const item = items.find(i => i.id === itemId);
      if (item) {
        if (quantity <= 0) {
          return this.removeItem(itemId);
        }
        item.quantity = quantity;
      }
      return items;
    },
    
    getItems: () => [...items], // Return copy
    
    getSubtotal: () => {
      return items.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    },
    
    applyDiscount: (code) => {
      if (DISCOUNT_CODES[code]) {
        discountCode = code;
        return true;
      }
      return false;
    },
    
    getDiscount: () => {
      if (!discountCode) return 0;
      const discountRate = DISCOUNT_CODES[discountCode];
      return this.getSubtotal() * discountRate;
    },
    
    getShipping: () => {
      const subtotal = this.getSubtotal();
      return subtotal >= 100 ? 0 : 10;
    },
    
    getTax: () => {
      const subtotal = this.getSubtotal();
      const discount = this.getDiscount();
      const afterDiscount = subtotal - discount;
      return afterDiscount * 0.08; // 8% tax
    },
    
    getTotal: () => {
      const subtotal = this.getSubtotal();
      const discount = this.getDiscount();
      const shipping = this.getShipping();
      const tax = this.getTax();
      
      return subtotal - discount + shipping + tax;
    },
    
    clearCart: () => {
      items = [];
      discountCode = null;
    },
    
    getSummary: () => {
      return {
        items: this.getItems(),
        subtotal: this.getSubtotal(),
        discount: this.getDiscount(),
        discountCode,
        shipping: this.getShipping(),
        tax: this.getTax(),
        total: this.getTotal()
      };
    }
  };
}

// Example usage
const cart = createShoppingCart();

cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
cart.addItem({ id: 2, name: 'Mouse', price: 25, quantity: 2 });
cart.addItem({ id: 3, name: 'Keyboard', price: 75, quantity: 1 });

console.log('Cart Items:', cart.getItems());
console.log('Subtotal:', cart.getSubtotal());

cart.applyDiscount('SAVE10');
console.log('Discount applied:', cart.getDiscount());

const summary = cart.getSummary();
console.log('Cart Summary:', summary);

