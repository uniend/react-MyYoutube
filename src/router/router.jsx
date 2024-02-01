import { createBrowserRouter } from "react-router-dom";
import Rayout from "../components";
import Today from "../pages/Today";
import Developer from "../pages/Developer";
import Webd from "../pages/Webd";
import Website from "../pages/Website";
import Gasp from "../pages/Gsap";
import Port from "../pages/Port";
import Youtube from "../pages/Youtube";
import Channel from "../pages/Channel";
import Video from "../pages/VIdeo";
import Search from "../pages/Search";
import Not from "../pages/Not";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    element: <Rayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/today",
        element: <Today />,
      },
      {
        path: "/developer",
        element: <Developer />,
      },
      {
        path: "/webd",
        element: <Webd />,
      },
      {
        path: "/website",
        element: <Website />,
      },
      {
        path: "/gasp",
        element: <Gasp />,
      },
      {
        path: "/port",
        element: <Port />,
      },
      {
        path: "/yutube",
        element: <Youtube />,
      },
      {
        path: "/channel/:channelId",
        element: <Channel />,
      },
      {
        path: "/video/:videoId",
        element: <Video />,
      },
      {
        path: "/search/:searchId",
        element: <Search />,
      },
      {
        path: "*",
        element: <Not />,
      },
    ],
  },
]);

export default router;
