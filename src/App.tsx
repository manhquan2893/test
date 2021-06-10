import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    //@ts-ignore
    const dataLayer = window.dataLayer
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
      'event': 'EEproductClick',
      'ecommerce': {
        'click': {
          'actionField': {'list': 'Search Results'},      // Optional list property.
          'products': [{
            'name': 'Triblend Android T-Shirt',       // Name or ID is required.
            'id': '12345',
            'price': '15.25'
           }]
         }
       }
    });
  }, [])
  return (
    <div>
      <a href="/users">151515</a>
    </div>
  );
}

export default App;
