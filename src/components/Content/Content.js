import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MessageIcon from "@mui/icons-material/Message";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import "./Content.css";
import { removeItem, updateItem } from "../../redux";
import { MenuItem } from "@mui/material";
import ImageCard from "../ImageCard/ImageCard";

function Content() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const item = useSelector((state) => {
    return state.items.find((i) => i.id === parseInt(itemId));
  });
  const [edittedName, setEdittedName] = useState(item?.name || "");
  const [isEditing, setIsEditing] = useState(false);
  const [activeVariant, setActiveVariant] = useState(
    item?.variants?.[0] || undefined
  );

  useEffect(() => {
    setActiveVariant(item?.variants?.[0]);
  }, [location, item]);

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
    setActiveVariant(item.variants.find((v) => v.name === variant));
  };

  const mapVariants = () => {
    if (!item) return;
    return item.variants?.map((variant) => {
      const { name } = variant;
      return (
        <button
          key={name}
          onClick={() => toggleVariant(name)}
          className={activeVariant?.name === name ? "active" : "inactive"}
        >
          variant {name}
        </button>
      );
    });
  };

  if (!item) return <div>Please select item from the sidebar</div>;
  if (!activeVariant) return <div>Loading...</div>;

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
              </div>
            </div>
          </li>
          <li className="content-row content-variants">{mapVariants()}</li>
          <li className="content-row content-display">
            <div className="image-column">
              <ImageCard name={activeVariant.imageNames[0]}></ImageCard>
              <ImageCard name={activeVariant.imageNames[1]}></ImageCard>
            </div>
            <ImageCard name={activeVariant.imageNames[2]}></ImageCard>
            <ImageCard name={activeVariant.imageNames[3]}></ImageCard>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Content;
