import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
  }, [])
  return (
    <div className="App" >
      <script
            dangerouslySetInnerHTML={{
              __html: `
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-NNRHWPYJFR"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-NNRHWPYJFR');
              </script>
              `,
            }}
          />
    </div>
  );
}

export default App;
