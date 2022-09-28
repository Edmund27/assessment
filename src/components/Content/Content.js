import { useState } from "react";

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MessageIcon from "@mui/icons-material/Message";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

import "./Content.css";

function Content() {
  const [activeVariant, setActiveVariant] = useState("A");

  const toggleVariant = (variant) => {
    if (activeVariant === variant) return;
    setActiveVariant(variant);
  };

  return (
    <div className="content">
      <ul className="content-list">
        <li className="content-row content-edit">
          <div className="content-edit-left">
            <button>
              <InsertPhotoIcon />
            </button>
            <div>Image</div>
          </div>
          <div className="content-edit-right">
            <div>
              <MessageIcon />
            </div>
            <div>
              <EditOutlinedIcon />
            </div>
            <div>
              <MoreVertOutlinedIcon />
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
    </div>
  );
}

export default Content;
