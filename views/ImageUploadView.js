import React, { useState } from "react";
import "./ImageUpload.css";

function ImageUpload({ user }) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  /*Upload to the contract*/

  return (
    <div className="imageUpload">
      <input
        type="text"
        placeholder="Enter a comment..."
        onChange={(e) => setCaption(e.target.value)}
        value={caption}
      />
      <div className="uploadCapBtn">
        <input className="uploadCap" type="file" onChange={handleChange} />
        <button className="primary__button uploadBtn" >
          Save
        </button>
      </div>
      <progress className="progress" value={progress} max="100" />
    </div>
  );
}

export default ImageUpload;
