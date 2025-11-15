import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
      </div>
    </PageTransition>
  );
}

export default App;