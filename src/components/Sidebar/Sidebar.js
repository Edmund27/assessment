import React from "react";
import { Link, useParams } from "react-router-dom";
import { addItem } from "../../redux";
import { useDispatch, useSelector } from "react-redux";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";

import "./Sidebar.css";

function Sidebar() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const { itemId } = useParams();

  const add = () => {
    const newItem = {
      id: items[items.length - 1]?.id + 1 || 1,
      name: "Label",
      icon: <QuestionMarkOutlinedIcon />,
      description: "description",
    };
    dispatch(addItem(newItem));
  };

  const mapItems = () => {
    return items?.map((value) => {
      const { id, name, icon, description } = value;
      return (
        <Link
          onClick={() => console.log(itemId, id)}
          className={`sidebar-item sidebar-row ${
            id == itemId ? "active" : "inactive"
          }`}
          key={id}
          to={`/${id}`}
        >
          <div className="sidebar-icon">{icon}</div>

          {description ? (
            <div>
              <div className="sidebar-name">{name}</div>{" "}
              <div className="sidebar-description">{description}</div>
            </div>
          ) : (
            <div className="sidebar-name">{name}</div>
          )}
        </Link>
      );
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-item sidebar-header">
        <div className="sidebar-name">Media</div>
        <div className="add-icon" onClick={() => add()}>
          <AddCircleOutlineIcon />
        </div>
      </div>
      {items && <ul className="sidebar-list">{mapItems()}</ul>}
    </div>
  );
}

export default Sidebar;
