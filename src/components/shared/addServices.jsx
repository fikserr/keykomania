import React, { useState } from "react";
import { addEntry } from "../../utils/api";
import { Client, Storage } from "appwrite";
import {
  COLLECTION_ID_SERVICES,
  APPWRITE_PROJECT,
  APPWRITE_ENDPOINT,
} from "../../config/appwriteConfig";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Details: "",
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Name || !formData.Description || !formData.Details) {
      alert("Please fill all fields.");
      return;
    }

    if (!imageFile) {
      alert("Please upload an image.");
      return;
    }

    try {
      setLoading(true);

      const bucketId = "674fe4980016f22565b8";
      const fileId = "unique()";
      const uploadResponse = await storage.createFile(bucketId, fileId, imageFile);

      const imageUrl = `${APPWRITE_ENDPOINT}/storage/buckets/${bucketId}/files/${uploadResponse.$id}/view?project=${APPWRITE_PROJECT}`;

      const updatedFormData = {
        ...formData,
        Image: imageUrl,
      };

      await addEntry(COLLECTION_ID_SERVICES, updatedFormData);

      navigate("/services");
    } catch (error) {
      console.error("Failed to add service:", error);
      alert("Failed to add service. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/services");
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
      <div
        style={{
          display: "flex",
          width: "80%",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6e4e3d",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Подождите..." : "Добавить услугу"}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Ⓧ Отмена
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "50px"
          }}
        >
          <div style={{ width: "48%" }}>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
              >
                Название услуги
              </label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="введите текст"
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
              <label
                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
              >
                Описание
              </label>
              <textarea
                name="Description"
                value={formData.Description}
                onChange={handleChange}
                placeholder="введите текст"
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
              <label
                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
              >
                Детали
              </label>
              <textarea
                name="Details"
                value={formData.Details}
                onChange={handleChange}
                placeholder="введите текст"
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
          </div>

          <div
            style={{
              width: "40%",
              textAlign: "center",
              marginTop: "25px"
            }}
          >
            <div
              style={{
                backgroundColor: "#D9D9D9",
                borderRadius: "10px",
                height: "355px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
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
                  }}
                />
              ) : (
                <span style={{ fontWeight: "bold", color: "#8B5E3C" }}>
                  Загрузить фото
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
