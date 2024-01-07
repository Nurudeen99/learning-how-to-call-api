
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./components/home/Home";
import Post from "./components/post/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post",
    element: <Post />,
  },
]);

const App = ()=>{

  return (
    <>
        <RouterProvider router={router} />
    </>
      )
}
export default App
