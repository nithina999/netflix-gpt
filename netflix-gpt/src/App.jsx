import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Login from "./Components/Login";
import { Provider, useDispatch } from "react-redux";
import Home from "./Components/Home";
import appStore from "./utils/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // useNavigate("/browser");
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
