import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";




function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

export default App;
export { appRouter };
