import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import { Provider, useDispatch } from "react-redux";
import Home from "./Components/Home";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
