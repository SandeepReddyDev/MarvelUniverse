
import ReactPlayer from "react-player";
import "./index.css"; // Import the CSS file

const TrailerModal = ({ videoUrl, isOpen, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <ReactPlayer url={videoUrl} playing controls className="react-player"/>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default TrailerModal;
