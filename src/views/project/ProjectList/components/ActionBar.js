import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Tooltip } from "components/ui";
import { useLocation, useParams } from "react-router-dom";
import {
  HiOutlinePlusCircle,
  HiOutlineSearch,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";
import {
  toggleView,
  toggleSort,
  setSearch,
  toggleNewProjectDialog,
} from "../store/stateSlice";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from 'lodash';



const ActionBar = () => {
  const location = useLocation();
  const [headerText, setHeaderText] = useState("")
  // const [search, setSearch] = useState("");

  const inputRef = useRef()
  const { categoryIdx } = useParams();

  useEffect(() => {
    if (location.pathname === "/services/social-media") {
      setHeaderText("Social Media Tools")
    } else if (location.pathname === "/services/marketing-tools") {
      setHeaderText("Marketing Tools")
    } else if (location.pathname === "/services/business") {
      setHeaderText("Business Tools")
    } else if (location.pathname === "/services/writing-tools") {
      setHeaderText("Writing Tools")
    } else if (location.pathname === "/services/miscellaneous") {
      setHeaderText("Miscellaneous")
    } else if (location.pathname === "/services/all-services") {
      setHeaderText("All Services")
    } else {
      setHeaderText("Services")
    }


    dispatch(setSearch(""))
    inputRef.current.value = ""


  }, [categoryIdx])


  const dispatch = useDispatch();

  const updateQuery = (e) => dispatch(setSearch(e?.target?.value));

  const handleInputChange = debounce(updateQuery, 500);

  return (
    <div className="space-y-4">
      <h3 className="">{headerText}</h3>

      <div>
        <Input
          ref={inputRef}
          onChange={handleInputChange}
          placeholder="Search for a service"
          suffix={
            <Tooltip title="Search for a service">
              <HiOutlineSearch className="text-lg cursor-pointer ml-1"></HiOutlineSearch>
            </Tooltip>
          }
        />
      </div>
    </div>
  );
};

export default ActionBar;
