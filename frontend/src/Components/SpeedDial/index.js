import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { TfiMenuAlt } from "react-icons/tfi";
import { GiSpinningBlades ,GiSpinningRibbons} from 'react-icons/gi';
import { FaTimeline } from "react-icons/fa6";


import {
  FaInfoCircle,
  FaRegHeart,
  FaRegBookmark,
} from "react-icons/fa";
import "./index.css"; // Import external CSS

const actions = [
  { icon: <FaRegHeart />, name: "Favourite", route: "favourites" },
  { icon: <FaRegBookmark />, name: "WatchList", route: "watchlist" },
   { icon: <FaTimeline />, name: "Timeline", route: "timeline" },
  { icon: <FaInfoCircle />, name: "About", route: "about" },
 
];

export default function FloatingSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <Box className="speed-dial-container">
      <SpeedDial
        ariaLabel="Floating SpeedDial"
        className="custom-speed-dial"
        icon={<span className="speed-dial-icon">
          <GiSpinningRibbons />
        </span>
      }
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={action.name}
            icon={<span className="action-icon">{action.icon}</span>}
            tooltipTitle={action.name}
            className={`custom-speed-action action-${index}`}
            onClick={() => {
              handleClose();
              navigate(`/${action.route}`);
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
