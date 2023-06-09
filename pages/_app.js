import '../styles/globals.css'
import {CluckinProvider} from '../context/CluckinProvider'

function MyApp({ Component, pageProps }) {
  return (
    <CluckinProvider>
      <Component {...pageProps} />
    </CluckinProvider>
  )
}

export default MyApp
