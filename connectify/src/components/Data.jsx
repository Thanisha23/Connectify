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
  },
  {
    id: 2,
    icon: <AiTwotoneFire />,
    text: "Trending",
  },
  {
    id: 3,
    icon: <CiSaveDown2 />,
    text: "Saved Posts",
  },
  {
    id: 4,
    icon: <FaUser />,
    text: "My Profile",
  },
  {
    id: 5,
    icon: <AiOutlineMessage />,
    text: "Messages",
  },
  {
    id: 6,
    icon: <IoSettings />,
    text: "Settings",
  },
];
