import React, { useEffect, useState } from "react";
import { fetchEntries, deleteEntry } from "../utils/api";
import { COLLECTION_ID } from "../config/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { Client, Storage } from "appwrite";
import { APPWRITE_PROJECT, APPWRITE_ENDPOINT } from "../config/appwriteConfig";
import Loading from "../components/shared/loading";

// Initialize Appwrite Client and Storage
const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT);
const storage = new Storage(client);

// Replace with the appropriate bucket ID for courses
const COURSES_BUCKET_ID = "67517cf0003612a28451";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchEntries(COLLECTION_ID);
        setCourses(data);
      } catch (err) {
        setError("Failed to load courses.");
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  const handleDelete = async (id, imageUrl) => {
    try {
      if (imageUrl) {
        const urlParts = imageUrl.split("/");
        const fileId = urlParts[urlParts.length - 2];
        await storage.deleteFile(COURSES_BUCKET_ID, fileId);
      }

      await deleteEntry(COLLECTION_ID, id);
      setCourses(courses.filter((course) => course.$id !== id));
    } catch (error) {
      console.error("Failed to delete course and image:", error);
    }
  };

  if (loading) return <Loading/>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => navigate("/add-course")}
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
        Добавить новый курс
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course.$id}
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
                <strong>Заголовок:</strong> {course.Name}
              </h2>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                <strong>Описание:</strong> {course.Description}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                <strong>Детали:</strong> {course.Details}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                <strong>Цена:</strong> ${course.Price}
              </p>
              {course.Image && (
                <img
                  src={course.Image}
                  alt={course.Name}
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
                  onClick={() => navigate(`/edit-course/${course.$id}`)}
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
                  onClick={() => handleDelete(course.$id, course.Image)}
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
          <p style={{ fontSize: "16px" }}>No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminCourses;
