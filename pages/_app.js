import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

import '../public/css/bootstrap.min.css'
import '../public/css/animate.css'
import '../public/css/boxicons.min.css'
import '../public/css/flaticon.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../public/css/style.css'
import '../public/css/responsive.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import Layout from '../components/_App/Layout'
import { useStore } from '../store/reducers/reducers'
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState)
    return (
        <Layout>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Layout>
    )
}

export default MyApp