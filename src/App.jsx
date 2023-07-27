import Navbar from "./@core/layout/navbar/Navbar"
import Header from "./@core/layout/header/Header"
import Ticker from "./@core/components/ticker/Ticker";
import About from "./@core/layout/about/About";
import Project from "./@core/layout/project/Project";
import Footer from "./@core/layout/footer/Footer";
import MainContent from "./@core/layout/mainContent/MainContent";



function App() {
  const items = [
    'Contact@binnovant.com',
    "LET'S TALK",
    'Contact@binnovant.com',
    "LET'S TALK",
    'Contact@binnovant.com',
    "LET'S TALK",
  ];

  const developmentItems = [
    'NEXT jS',
    'REACT JS',
    'MONGODB',
    'POSTGRESS JS',
    'REACT JS',
    'REACT JS',
    'NEXT jS',
    'MONGODB',

  ]

  return (
    <>
      <Navbar />
      <Header />
      <Ticker items={items} />
      <About />
      <Project />
      <Ticker items={developmentItems} />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
