import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MessageIcon from "@mui/icons-material/Message";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import "./Content.css";
import { removeItem, updateItem } from "../../redux";
import { MenuItem } from "@mui/material";

function Content() {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const item = useSelector((state) => state.items.find((i) => i.id == itemId));
  const [edittedName, setEdittedName] = useState(item?.name || "");
  const [isEditing, setIsEditing] = useState(false);
  const [activeVariant, setActiveVariant] = useState("A");

  const handleEditClick = () => {
    if (isEditing) {
      item.name = edittedName;
      dispatch(updateItem(item));
    }
    setIsEditing(!isEditing);
  };

  const handleDeleteClick = (popupState) => {
    dispatch(removeItem(itemId));
    popupState.close();
  };

  const toggleVariant = (variant) => {
    if (activeVariant === variant) return;
    setActiveVariant(variant);
  };

  return (
    <div className="content">
      {item && (
        <ul className="content-list">
          <li className="content-row content-edit">
            <div className="content-edit-left">
              <button>{item.icon}</button>
              {isEditing ? (
                <input
                  value={edittedName}
                  onChange={(e) => setEdittedName(e.target.value)}
                ></input>
              ) : (
                <div>{item.name}</div>
              )}
            </div>
            <div className="content-edit-right">
              <div>
                <MessageIcon />
              </div>
              <div onClick={() => handleEditClick()}>
                {isEditing ? <CheckOutlinedIcon /> : <EditOutlinedIcon />}
              </div>
              <div>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <div>
                      <MoreVertOutlinedIcon {...bindTrigger(popupState)} />
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={() => handleDeleteClick(popupState)}>
                          Delete
                        </MenuItem>
                      </Menu>
                    </div>
                  )}
                </PopupState>
                {/* <MoreVertOutlinedIcon />
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose()}>
                <MenuItem onClick={PopupState.close}>delete</MenuItem>
              </Menu> */}
              </div>
            </div>
          </li>
          <li className="content-row content-variants">
            <button
              onClick={() => toggleVariant("A")}
              className={activeVariant === "A" ? "active" : "inactive"}
            >
              Variant A
            </button>
            <button
              onClick={() => toggleVariant("B")}
              className={activeVariant === "B" ? "active" : "inactive"}
            >
              Variant B
            </button>
          </li>
          <li className="content-row content-display"></li>
        </ul>
      )}
    </div>
  );
}

export default Content;
