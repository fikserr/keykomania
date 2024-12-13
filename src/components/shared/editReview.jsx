import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchEntries, updateEntry } from "../../utils/api";
import { REVIEWS_COLLECTION_ID } from "../../config/appwriteConfig";
import { Client, Storage, ID } from "appwrite";
import { APPWRITE_PROJECT, APPWRITE_ENDPOINT } from "../../config/appwriteConfig";

const client = new Client().setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);
const storage = new Storage(client);

const EditReview = () => {
  const { reviewId } = useParams();
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Date: "",
    Image: null,
  });
  const [oldImage, setOldImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loadReview = async () => {
    try {
      const reviews = await fetchEntries(REVIEWS_COLLECTION_ID);
      const review = reviews.find((review) => review.$id === reviewId);
      if (review) {
        setFormData({
          Name: review.Name,
          Description: review.Description,
          Date: review.Data,
        });
        setOldImage(review.Image);
      }
    } catch (err) {
      console.error("Failed to load review:", err);
      setError("Failed to load review details.");
    }
  };

  useEffect(() => {
    loadReview();
  }, [reviewId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, Image: e.target.files[0] });
  };

  const handleUpdate = async () => {
    const { Name, Description, Date, Image } = formData;

    if (!Name.trim() || !Description.trim() || !Date.trim()) {
      console.error("Please provide valid inputs.");
      return;
    }

    let newImageUrl = oldImage;

    try {
      setLoading(true);

      if (Image) {
        const uniqueFileId = ID.unique();

        const uploadedFile = await storage.createFile(
          "67518f5b0030f28c87a5",
          uniqueFileId,
          Image
        );
        newImageUrl = uploadedFile.$id
          ? `${APPWRITE_ENDPOINT}/storage/buckets/67518f5b0030f28c87a5/files/${uploadedFile.$id}/view?project=${APPWRITE_PROJECT}`
          : newImageUrl;

        if (oldImage) {
          const oldFileId = oldImage.split("/").at(-2);
          await storage.deleteFile("67518f5b0030f28c87a5", oldFileId);
        }
      }

      const updatedReview = {
        Name,
        Description,
        Data: Date,
        Image: newImageUrl,
      };

      await updateEntry(REVIEWS_COLLECTION_ID, reviewId, updatedReview);
      navigate("/reviews");
    } catch (error) {
      console.error("Failed to update review:", error);
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
      <div
        style={{
          display: "flex",
          width: "80%",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={handleUpdate}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6e4e3d",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Подождите..." : "Измененить"}
        </button>
        <button
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
          Отмена
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
              <label
                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
              >
                Название отзыва
              </label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Enter name"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
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
                placeholder="Enter description"
                style={{
                  width: "100%",
                  height: "100px",
                  padding: "10px",
                  borderRadius: "5px",
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
                дата
              </label>
              <input
                type="text"
                name="Date"
                value={formData.Date}
                onChange={handleChange}
                placeholder="Enter date (e.g., 2024year)"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  fontSize: "16px",
                  color: "black",
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
            <span
              style={{
                fontWeight: "bold",
                color: "#8B5E3C",
                fontSize: "16px",
              }}
            >
              Загрузить фото
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReview;
