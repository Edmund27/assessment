import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideocamIcon from "@mui/icons-material/Videocam";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

import "./Sidebar.css";

const initialItems = [
  { id: 1, name: "Label", icon: <InsertPhotoIcon /> },
  { id: 2, name: "Label", icon: <VideocamIcon /> },
  {
    id: 3,
    name: "Label",
    icon: <WebOutlinedIcon />,
    description: "description",
  },
];

function Sidebar() {
  const { itemId } = useParams();
  const [unsavedItem, setUnsavedItem] = useState();
  const [sideBarItems, setSideBarItems] = useState(initialItems);

  const addItem = () => {
    const newItem = {
      id: -1,
      name: "Label",
      icon: <QuestionMarkOutlinedIcon />,
      description: "description",
    };
    setUnsavedItem(newItem);
  };

  const saveItem = () => {
    const itemToSave = {
      ...unsavedItem,
      id: sideBarItems[sideBarItems.length - 1].id + 1,
      description:
        unsavedItem.description === "description"
          ? undefined
          : unsavedItem.description,
    };
    setSideBarItems([...sideBarItems, itemToSave]);
    setUnsavedItem(undefined);
  };

  const deleteItem = () => {
    setUnsavedItem(undefined);
  };

  const mapSidebarItems = () => {
    return sideBarItems.map((value) => {
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
        <div className="add-icon" onClick={() => addItem()}>
          <AddCircleOutlineIcon />
        </div>
      </div>
      <ul className="sidebar-list">
        {mapSidebarItems()}
        {unsavedItem && (
          <li className="sidebar-item-unsaved sidebar-row-unsaved">
            <div className="sidebar-item" style={{ padding: 0 }}>
              <div className="sidebar-icon">{unsavedItem.icon}</div>
              <div>
                <div className="sidebar-name">
                  <input
                    value={unsavedItem.name}
                    onChange={(event) =>
                      setUnsavedItem({
                        ...unsavedItem,
                        name: event.target.value,
                      })
                    }
                  ></input>
                </div>{" "}
                <div className="sidebar-description">
                  <input
                    value={unsavedItem.description}
                    onChange={(event) =>
                      setUnsavedItem({
                        ...unsavedItem,
                        description: event.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
            </div>
            <div>
              <div onClick={() => saveItem()} className="unsaved-row-icon">
                <CheckOutlinedIcon />
              </div>
              <div onClick={() => deleteItem()} className="unsaved-row-icon">
                <ClearOutlinedIcon />
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
