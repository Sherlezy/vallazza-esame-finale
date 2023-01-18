import '../styles/globals.css';
import { TimerCountdownProvider } from '../store/timer-context';

function MyApp({ Component, pageProps }) {
  return (
    <TimerCountdownProvider>
      <Component {...pageProps} />
    </TimerCountdownProvider>
  );
}

export default MyApp;
