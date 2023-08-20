import { datas } from "../components/Data";
import PropTypes from "prop-types";
const SidebarData = (props) => {
  return (
    <div className="">
      {datas.map((data) => {
        return (
          <div
            className={`${
              props.toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-white transition-all duration-300 last:absolute left-4 bottom-4`}
            key={data.id}
          >
            <div className="mr-8 text-[1.7rem] text-amber-800">{data.icon}</div>
            <div
              className={`${
                props.toggle ? "opacity-0 delay-200 " : ""
              } text-[1rem] text-amber-800 whitespace-pre`}
            >
              {data.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};
SidebarData.propTypes = {
  toggle: PropTypes.bool.isRequired,
};
export default SidebarData;
