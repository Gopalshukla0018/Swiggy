import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
export { appRouter };
