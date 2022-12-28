import React, { useRef, useState } from "react";
import { Button, Input, Tooltip } from "components/ui";
import { useLocation } from "react-router-dom";
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
import debounce from "lodash/debounce";

const ActionBar = () => {
  const location = useLocation();

  let headerText;

  if (location.pathname === "/services/social-media") {
    headerText = "Social Media Tools";
  } else if (location.pathname === "/services/marketing-tools") {
    headerText = "Marketing Tools";
  } else if (location.pathname === "/services/business") {
    headerText = "Business Tools";
  } else if (location.pathname === "/services/writing-tools") {
    headerText = "Writing Tools";
  } else if (location.pathname === "/services/miscellaneous") {
    headerText = "Miscellaneous";
  } else if (location.pathname === "/services/all-services") {
    headerText = "All Services";
  } else {
    headerText = "Services";
  }

  const dispatch = useDispatch();

  const inputRef = useRef();

  const [search, setSearch] = useState("");

  const view = useSelector((state) => state.projectList.state.view);

  const { sort } = useSelector((state) => state.projectList.state.query);

  const onViewToggle = () => {
    dispatch(toggleView(view === "grid" ? "list" : "grid"));
  };

  const onToggleSort = () => {
    dispatch(toggleSort(sort === "asc" ? "desc" : "asc"));
  };

  const onAddNewProject = () => {
    dispatch(toggleNewProjectDialog(true));
  };

  const debounceFn = debounce(handleDebounceFn, 500);

  function handleDebounceFn(val) {
    dispatch(setSearch(val));
  }

  const handleInputChange = (e) => {
    debounceFn(e.target.value);
  };

  return (
    <div className="space-y-4">
      <h3 className="">{headerText}</h3>

      <div>
        <Input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
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
