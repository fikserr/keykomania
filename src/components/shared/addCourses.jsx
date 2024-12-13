import React, { useState } from "react";
import { addEntry } from "../../utils/api";
import { Client, Storage } from "appwrite";
import { COLLECTION_ID, APPWRITE_PROJECT, APPWRITE_ENDPOINT } from "../../config/appwriteConfig";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Details: "",
    Price: "",
  });
  const [imageFile, setImageFile] = useState(null);
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
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.Name || !formData.Description || !formData.Details || !formData.Price) {
      alert("Please fill all fields.");
      return;
    }
  
    if (!imageFile) {
      alert("Please upload an image.");
      return;
    }
  
    try {
      setLoading(true);
  
      const bucketId = "67517cf0003612a28451";
      const fileId = "unique()";
  
      console.log("Uploading file...");
      const uploadResponse = await storage.createFile(bucketId, fileId, imageFile);
      console.log("Upload Response:", uploadResponse);
  
      const imageUrl = `${APPWRITE_ENDPOINT}/storage/buckets/${bucketId}/files/${uploadResponse.$id}/view?project=${APPWRITE_PROJECT}`;
      console.log("Image URL:", imageUrl);
  
      const updatedFormData = {
        ...formData,
        Price: parseFloat(formData.Price),
        Image: imageUrl,
      };
  
      console.log("Adding entry to database:", updatedFormData);
      await addEntry(COLLECTION_ID, updatedFormData);
  
      navigate("/courses");
    } catch (error) {
      console.error("Failed to add course:", error);
      alert("Failed to add course. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleCancel = () => {
    navigate("/courses");
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
          {loading ? "Подождите..." : "Добавить курс"}
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
          }}
        >
          <div style={{ width: "48%" }}>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
              >
                Название курса
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
                  color: "black"
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
                  color: "black"
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
                  color: "black"
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
              >
                Цена
              </label>
              <input
                type="number"
                name="Price"
                value={formData.Price}
                onChange={handleChange}
                placeholder="введите цену"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  fontSize: "16px",
                  color: "black"
                }}
              />
            </div>
          </div>

<div
  style={{
    width: "48%",
    backgroundColor: "#D9D9D9",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: "353px",
    marginTop: "23px",
    overflow: "hidden",
  }}
>
  <input
    type="file"
    accept="image/*,video/*"
    onChange={handleFileChange}
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: 0,
      cursor: "pointer",
    }}
  />
  {imageFile ? (
    <div style={{ width: "100%", height: "100%" }}>
      {imageFile.type.startsWith("image/") ? (
        <img
          src={URL.createObjectURL(imageFile)}
          alt="Preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <video
          src={URL.createObjectURL(imageFile)}
          controls
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  ) : (
    <span
      style={{
        fontWeight: "bold",
        color: "#8B5E3C",
        fontSize: "16px",
      }}
    >
      Загрузить фото или видео
    </span>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default AddCourse;
