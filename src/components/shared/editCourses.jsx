import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchEntries, updateEntry } from "../../utils/api";
import { COLLECTION_ID } from "../../config/appwriteConfig";
import { Client, Storage, ID } from "appwrite";
import { APPWRITE_PROJECT, APPWRITE_ENDPOINT } from "../../config/appwriteConfig";

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT);
const storage = new Storage(client);

const EditCourse = () => {
  const { courseId } = useParams();
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Details: "",
    Price: "",
    Image: null,
  });
  const [oldImage, setOldImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loadCourse = async () => {
    try {
      const courses = await fetchEntries(COLLECTION_ID);
      const course = courses.find((course) => course.$id === courseId);
      if (course) {
        setFormData({
          Name: course.Name,
          Description: course.Description,
          Details: course.Details,
          Price: course.Price,
        });
        setOldImage(course.Image);
      }
    } catch (err) {
      console.error("Failed to load course:", err);
      setError("Failed to load course details.");
    }
  };

  useEffect(() => {
    loadCourse();
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, Image: e.target.files[0] });
  };

  const handleUpdate = async () => {
    const { Name, Description, Details, Price, Image } = formData;

    if (
      !Name.trim() ||
      !Description.trim() ||
      !Details.trim() ||
      isNaN(Price) ||
      Price <= 0
    ) {
      console.error("Please provide valid inputs.");
      return;
    }

    let newImageUrl = oldImage;

    try {
      setLoading(true);

      if (Image) {
        const uniqueFileId = ID.unique();
        const bucketId = "67517cf0003612a28451";
        const uploadedFile = await storage.createFile(bucketId, uniqueFileId, Image);
        newImageUrl = uploadedFile.$id
          ? `${APPWRITE_ENDPOINT}/storage/buckets/${bucketId}/files/${uploadedFile.$id}/view?project=${APPWRITE_PROJECT}`
          : newImageUrl;

        if (oldImage) {
          const oldFileId = oldImage.split("/").at(-2);
          await storage.deleteFile(bucketId, oldFileId);
        }
      }

      const updatedData = {
        Name,
        Description,
        Details,
        Price: parseFloat(Price),
        Image: newImageUrl,
      };

      await updateEntry(COLLECTION_ID, courseId, updatedData);
      navigate("/courses");
    } catch (error) {
      console.error("Failed to update course:", error);
      setError("Failed to update course.");
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
      <div style={{ display: "flex", width: "80%", marginBottom: "30px" }}>
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
          {loading ? "Подождите..." : "Изменить"}
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
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                Название курса
              </label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Enter text"
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
                placeholder="Enter text"
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
                Детали
              </label>
              <textarea
                name="Details"
                value={formData.Details}
                onChange={handleChange}
                placeholder="Enter text"
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
                Цена
              </label>
              <input
                type="number"
                name="Price"
                value={formData.Price}
                onChange={handleChange}
                placeholder="Enter price"
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

export default EditCourse;
