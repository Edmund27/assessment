import React from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideocamIcon from "@mui/icons-material/Videocam";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Sidebar() {
  const sideBarItems = [
    { id: 1, name: "Label", icon: <InsertPhotoIcon /> },
    { id: 2, name: "Label", icon: <VideocamIcon /> },
    {
      id: 3,
      name: "Label",
      icon: <WebOutlinedIcon />,
      description: "description",
    },
  ];

  const mapSidebarItems = () => {
    return sideBarItems.map((value) => {
      const { id, name, icon, description } = value;
      return (
        <li
          className="sidebar-item sidebar-row"
          key={id}
          onClick={() => (window.location.pathname = name + id)}
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
        </li>
      );
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-item sidebar-header">
        <div className="sidebar-name">Media</div>
        <div>
          <AddCircleOutlineIcon />
        </div>
      </div>
      <ul className="sidebar-list">{mapSidebarItems()}</ul>
    </div>
  );
}

export default Sidebar;
