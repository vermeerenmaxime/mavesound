import 'tailwindcss/tailwind.css'
import "../styles/screen.scss";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
