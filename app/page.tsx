import Navigation from "./components/Navigation";
import Home from "./components/index_page/Home";


export default function index() {
  return (
    <>
      <header className="flex justify-center shadow shadow-gray-500">
        <Navigation/ >
      </header>
      <main>
        <Home />
      </main>
    </>
  );
}
