import React, { useEffect, useState } from "react";
import { fetchEntries, deleteEntry } from "../utils/api";
import { REVIEWS_COLLECTION_ID } from "../config/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { Client, Storage } from "appwrite";
import { APPWRITE_PROJECT, APPWRITE_ENDPOINT } from "../config/appwriteConfig";
import Loading from "../components/shared/loading";

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT);
const storage = new Storage(client);

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchEntries(REVIEWS_COLLECTION_ID);
        setReviews(data);
      } catch (err) {
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  const handleDelete = async (id, imageUrl) => {
    try {
      if (imageUrl) {
        const urlParts = imageUrl.split("/");
        const fileId = urlParts[urlParts.length - 2];

        await storage.deleteFile("67518f5b0030f28c87a5", fileId);
      }

      await deleteEntry(REVIEWS_COLLECTION_ID, id);

      setReviews(reviews.filter((review) => review.$id !== id));
    } catch (error) {
      console.error("Failed to delete review and image:", error);
    }
  };

  if (loading) return <Loading/>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => navigate("/add-review")}
        style={{
          marginBottom: "20px",
          padding: "12px 20px",
          backgroundColor: "#8B5E3C",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Добавить новый отзыв
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review.$id}
              style={{
                backgroundColor: "#8B5E3C",
                color: "white",
                borderRadius: "10px",
                padding: "20px",
                maxWidth: "300px",
                textAlign: "center",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
                <strong>Заголовок:</strong> {review.Name}
              </h2>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                <strong>Описание:</strong> {review.Description}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                <strong>Дата:</strong> {review.Data}
              </p>
              {review.Image && (
                <img
                  src={review.Image}
                  alt={review.Name}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginBottom: "10px",
                  }}
                />
              )}
              <div>
                <button
                  onClick={() => navigate(`/edit-review/${review.$id}`)}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "white",
                    color: "#8B5E3C",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Изменить
                </button>
                <button
                  onClick={() => handleDelete(review.$id, review.Image)}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "white",
                    color: "#8B5E3C",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ fontSize: "16px" }}>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminReviews;
