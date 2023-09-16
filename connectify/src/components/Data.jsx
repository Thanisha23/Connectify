import { RxDashboard } from "react-icons/rx";
import { AiTwotoneFire } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";

import { FaUser } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";

export const datas = [
  {
    id: 1,
    icon: <RxDashboard />,
    text: "Dashboard",
    navigateTo: "/dashboard",
  },
  {
    id: 2,
    icon: <AiTwotoneFire />,
    text: "Trending",
    navigateTo: "/trending",
  },
  {
    id: 3,
    icon: <CiSaveDown2 />,
    text: "Saved Posts",
    navigateTo: "/mysavedposts",
  },
  {
    id: 4,
    icon: <FaUser />,
    text: "My Profile",
    navigateTo: "/myprofile",
  },
  {
    id: 5,
    icon: <AiOutlineMessage />,
    text: "Messages",
    navigateTo: "/mymessages",
  },
  {
    id: 6,
    icon: <IoSettings />,
    text: "Settings",
    navigateTo: "/mysettings",
  },
];
