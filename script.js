// Click Event
document.getElementById('clickMeBtn').addEventListener('click', () => {
    gtag('event', 'button_click', {
      event_category: 'Interaction',
      event_label: 'Click Me Button'
    });
  });
  
  // Register Event
  document.getElementById('registerBtn').addEventListener('click', () => {
    const email = document.getElementById('emailInput').value;
    gtag('event', 'sign_up', {
      method: 'email',
      user_email: email
    });
  });
  
  // Add to Cart
  document.getElementById('addToCartBtn').addEventListener('click', () => {
    gtag('event', 'add_to_cart', {
      items: [{
        item_id: 'P12345',
        item_name: 'Cool Product',
        price: 29.99
      }]
    });
  });
  
  // Purchase Event
  document.getElementById('purchaseBtn').addEventListener('click', () => {
    gtag('event', 'purchase', {
      transaction_id: 'T123456',
      value: 29.99,
      currency: 'USD',
      items: [{
        item_id: 'P12345',
        item_name: 'Cool Product',
        price: 29.99
      }]
    });
  });
  