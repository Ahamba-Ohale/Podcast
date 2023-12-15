import Head from 'next/head';
import Header from './components/Header';
import Main from './components/Main';
import Podcast from './components/Podcast';
import Essential from './components/Essential';
import Video from './components/Video';
import Meet from './components/Meet';
import Timmy from './components/Timmy';
import Footer from './components/Footer';


const Home = () => {
    return ( 
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/assets/CSS/style.css" />
                <title>LocTech Design</title>
            </Head>
            <Header />
            <Main />
            <Podcast />
            <Essential />
            <Video />
            <Meet />
            <Timmy />
            <Footer />
        </div>
     );
};
 
export default Home;