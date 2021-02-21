import Sales from './components/sales/Sales';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';
function App() {
    return (
        <div className="salesApp">
            <Header />
            <Sales />
            <Footer />
        </div>
    );
}

export default App;
