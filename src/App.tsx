import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    //@ts-ignore
    const dataLayer = window.dataLayer
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
      'event': 'productClick',
      'ecommerce': {
        'click': {
          'actionField': {'list': 'Search Results'},      // Optional list property.
          'products': [{
            'name': 'product name',                      // Name or ID is required.
            'id': 12345,
            'price': 25,
            'brand': 'product brand',
            'category': 'product category',
            'variant': 'variant',
            'position': 'position'
          }]
        }
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
