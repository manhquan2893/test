import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    //@ts-ignore
    const dataLayer = window.dataLayer
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  'ecommerce': {
    'detail': {
      'products': [{
        'name': 'Triblend Androdsdid T-Shirt',         // Name or ID is required.
        'id': '12345',
        'price': '15.25',
        'brand': 'Googlafsde',
        'category': 'Appdasarel',
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
