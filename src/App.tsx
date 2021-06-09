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
        'products': [{
          'name': 'product 1',                      // Name or ID is required.
          'id': 1,
          'price': 20,
         }]
       }
     },
  });
  }, [])
  return (
    <div className="App" >
     waefawefawefawfe
    </div>
  );
}

export default App;
