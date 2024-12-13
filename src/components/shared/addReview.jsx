import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEntry } from "../../utils/api";
import { REVIEWS_COLLECTION_ID } from "../../config/appwriteConfig";
import { Client, Storage } from "appwrite";
import { APPWRITE_PROJECT, APPWRITE_ENDPOINT } from "../../config/appwriteConfig";

const AddReview = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Date: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT);
  const storage = new Storage(client);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    const { Name, Description, Date } = formData;

    if (!Name || !Description || !Date) {
      alert("Please fill in all fields.");
      return;
    }

    if (!imageFile) {
      alert("Please upload an image.");
      return;
    }

    try {
      setLoading(true);

      const bucketId = "67518f5b0030f28c87a5";
      const fileId = "unique()";

      const uploadResponse = await storage.createFile(bucketId, fileId, imageFile);

      const imageUrl = `${APPWRITE_ENDPOINT}/storage/buckets/${bucketId}/files/${uploadResponse.$id}/view?project=${APPWRITE_PROJECT}`;

      const newReview = {
        Name,
        Description,
        Data: Date,
        Image: imageUrl,
      };

      await addEntry(REVIEWS_COLLECTION_ID, newReview);
      navigate("/reviews");
    } catch (error) {
      console.error("Failed to add review:", error);
      alert("Failed to add review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/reviews");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", width: "80%", marginBottom: "30px" }}>
        <button
          onClick={handleAdd}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6e4e3d",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Подождите..." : "Добавить отзыв"}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          style={{
            padding: "10px 20px",
            backgroundColor: "white",
            color: "#6e4e3d",
            border: "2px solid #6e4e3d",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "30px",
          }}
        >
          Ⓧ отмена
        </button>
      </div>

      <div
        style={{
          width: "80%",
          backgroundColor: "#8B5E3C",
          borderRadius: "10px",
          padding: "20px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "48%" }}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                Название отзыва
              </label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Введите текст"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  fontSize: "16px",
                  color: "black",
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                Описание
              </label>
              <textarea
                name="Description"
                value={formData.Description}
                onChange={handleChange}
                placeholder="Введите текст"
                style={{
                  width: "100%",
                  height: "100px",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  fontSize: "16px",
                  resize: "none",
                  color: "black",
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                Дата
              </label>
              <input
                type="text"
                name="Date"
                value={formData.Date}
                onChange={handleChange}
                placeholder="Введите дату"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  fontSize: "16px",
                  color: "black",
                }}
              />
            </div>
          </div>

          <div
            style={{
              width: "45%",
              backgroundColor: "#D9D9D9",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              height: "300px",
              marginTop: "23px"
            }}
          >
            <input
              type="file"
              onChange={handleFileChange}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer",
              }}
            />
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            ) : (
              <span
                style={{
                  fontWeight: "bold",
                  color: "#8B5E3C",
                  fontSize: "16px",
                }}
              >
                Загрузить фото
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
