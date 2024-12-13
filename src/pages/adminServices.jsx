import React, { useEffect, useState } from "react";
import { fetchEntries, deleteEntry } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { Client, Storage } from "appwrite";
import { APPWRITE_PROJECT, APPWRITE_ENDPOINT,COLLECTION_ID_SERVICES  } from "../config/appwriteConfig";

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT);
const storage = new Storage(client);

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchEntries(COLLECTION_ID_SERVICES);
        setServices(data);
      } catch (err) {
        setError("Failed to load services.");
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  const handleDelete = async (id, imageUrl) => {
    try {
      const urlParts = imageUrl.split("/");
      const fileId = urlParts[urlParts.length - 2];

      await storage.deleteFile("674fe4980016f22565b8", fileId);

      await deleteEntry(COLLECTION_ID_SERVICES, id);

      setServices(services.filter((service) => service.$id !== id));
    } catch (error) {
      console.error("Failed to delete service and image:", error);
    }
  };

  if (loading) return <p>Loading services...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => navigate("/add-service")}
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
        Добавить новую услугу
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {services.length > 0 ? (
          services.map((service) => (
            <div
              key={service.$id}
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
              <strong>Заголовок:</strong> {service.Name}
              </h2>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                <strong>Описание:</strong> {service.Description}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                <strong>Детали:</strong> {service.Details}
              </p>
              {service.Image && (
                <img
                  src={service.Image}
                  alt={service.Name}
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
                  onClick={() => navigate(`/edit-service/${service.$id}`)}
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
                  onClick={() => handleDelete(service.$id, service.Image)}
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
          <p style={{ fontSize: "16px" }}>Услуги отсутствуют.</p>
        )}
      </div>
    </div>
  );
};

export default AdminServices;
