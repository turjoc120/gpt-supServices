import React from "react";
import { Card } from "components/ui";
import ItemDropdown from "./ItemDropdown";
import Members from "./Members";
import ProgressionBar from "./ProgressionBar";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { FcEditImage } from "react-icons/fc";
import navigationIcon from "configs/navigation-icon.config";

const GridItem = ({ data, categoryIdx }) => {
  const { name, totalTask, completedTask, progression, desc, member, icon } =
    data;

  return (
    <Link to={`/services/${categoryIdx}/${data.id}`}>
      <Card className="h-full">
        <div className="flex items-center">
          <div className="mr-4">
            <span className="text-3xl">{navigationIcon[icon]}</span>
          </div>
          <div className="">
            <h6 className="text-sm mb-1">{name}</h6>
            <p className="text-gray-500 block text-xs">{desc}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default GridItem;
