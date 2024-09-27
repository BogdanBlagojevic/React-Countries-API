import Main from "./Components/Main";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-l from-c5 to-c1 py-10 text-center p-[20px]">
        <Nav/>
        <Header/>
        <Main />
        <Footer/>
      </div>
    </>
  );
}

export default App;
