import '../styles/globals.css'
import Script from 'next/script';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import 'bootstrap/dist/css/bootstrap.min.css';                    // Bootstrap
import 'rsuite/dist/rsuite.min.css';                              // ReactSuite

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Component {...pageProps} />
        <Script
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
    </div>
  )
}

export default MyApp
