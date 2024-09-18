import AppStep from './components/AppStep';
import AppImage from './components/AppImage';
import Banner from './components/Banner';
import Header from './components/Header';
import Download from './components/Download';
import Footer from './components/Footer';
function App() {
    return (
        <div className="container mx-auto px-4">
            <Header />
            <div className="mt-12 md:mt-16">
                <Banner />
                <AppImage />
                <AppStep />
                <Download />
                <Footer />
            </div>
        </div>
    );
}

export default App;
