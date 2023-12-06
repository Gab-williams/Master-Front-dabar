import Preloader from "@/components/elements/Preloader";
import { useEffect, useState } from "react";
import Head from "next/head";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../public/assets/css/animate.min.css';
import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/flaticon.css';
import '../public/assets/css/fontawesome-all.min.css';
import '../public/assets/css/imageRevealHover.css';
import '../public/assets/css/magnific-popup.css';
import '../public/assets/css/main.css';
import '../public/assets/css/slick.css';
import '../public/assets/css/spacing.css';
import '../public/assets/css/swiper-bundle.css';

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&display=swap"
                />
                <style>{`
                    @font-face {
                        font-family: 'Josefin Sans';
                        font-style: normal;
                        font-weight: 400;
                        src: url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&display=swap') format('woff2');
                    }

                    body {
                        font-family: 'Josefin Sans', sans-serif;
                        margin: 0;
                        padding: 0;
                    }

                    h1, h2, h3, h4, h5, h6 {
                        font-family: 'Josefin Sans', sans-serif;
                    }

                    p {
                        font-family: 'Josefin Sans', sans-serif;
                    }
                `}</style>
            </Head>
            <main>
                {!loading ? (
                    <Component {...pageProps} />
                ) : (
                    <Preloader />
                )}
            </main>
        </>
    );
}

export default MyApp;
