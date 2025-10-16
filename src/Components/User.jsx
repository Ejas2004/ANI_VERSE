import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./User.css";
import { Edit2, Save, X, Upload } from "lucide-react";

function User() {
  const { usernameParam } = useParams(); // 👈 get param from URL

  useEffect(() => {
    console.log("Username from URL:", usernameParam);
  }, [usernameParam]);

  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(usernameParam || "Ejas");
  const [bio, setBio] = useState("I love anime worlds full of emotion and action!");
  const [image, setImage] = useState(
    "https://i.pinimg.com/736x/f8/f7/cb/f8f7cbf4e4565e54757ca1383745767a.jpg"
  );
  const [tempImage, setTempImage] = useState(null);
  const [tempName, setTempName] = useState(username);
  const [tempBio, setTempBio] = useState(bio);

  // 🖼️ Handle image preview on file upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setTempImage(URL.createObjectURL(file));
  };

  // 💾 Save changes
  const handleSave = () => {
    if (tempImage) setImage(tempImage);
    setUsername(tempName);
    setBio(tempBio);
    setIsEditing(false);
  };

  // ❌ Cancel changes
  const handleCancel = () => {
    setTempImage(null);
    setTempName(username);
    setTempBio(bio);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Profile Image */}
        <div className="profile-image">
          <img src={tempImage || image} alt="Profile" />
          {isEditing && (
            <label htmlFor="upload" className="upload-btn">
              <Upload size={16} />
              <input
                id="upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
          )}
        </div>

        {/* URL Username Display */}
        <p className="url-username">
          Profile URL User: <strong>{usernameParam}</strong>
        </p>

        {/* Profile Info */}
        <div className="profile-info">
          {isEditing ? (
            <>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="edit-input"
                placeholder="Enter username"
              />
              <textarea
                value={tempBio}
                onChange={(e) => setTempBio(e.target.value)}
                className="edit-bio"
                placeholder="Write your bio..."
              />
            </>
          ) : (
            <>
              <h2>{username}</h2>
              <p>{bio}</p>
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button className="save-btn" onClick={handleSave}>
                <Save size={16} /> Save
              </button>
              <button className="cancel-btn" onClick={handleCancel}>
                <X size={16} /> Cancel
              </button>
            </>
          ) : (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              <Edit2 size={16} /> <h2>Edit Profile</h2>
            </button>
          )}
        </div>

        {/* Favorites Section */}
        <div className="favorites-section">
          <h3>Favorite Anime</h3>
          <div className="anime-list">
            <div className="anime-item">Naruto</div>
            <div className="anime-item">Attack on Titan</div>
            <div className="anime-item">One Piece</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
