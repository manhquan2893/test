import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    //@ts-ignore
    const dataLayer = window.dataLayer
    // dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
      'event': 'select_item',
      'ecommerce': {
        'items': [{
          'item_name': 'productObj name', // Name or ID is required.
          'item_id': 23423,
          'item_brand': 'productObj brand',
          'item_category': 'productObj category',
          'item_category2': 'productObj category_2',
          'quantity': 12,
          'price': 25
        }]
      }
    });
    }, [])
  return (
    <div className="App" >
     my name is Quan
    </div>
  );
}

export default App;
