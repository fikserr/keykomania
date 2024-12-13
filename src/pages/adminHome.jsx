import React, { useEffect, useState } from "react";
import { fetchEntries } from "../utils/api";
import {
  COLLECTION_ID_SERVICES,
  REVIEWS_COLLECTION_ID,
  COLLECTION_ID,
} from "../config/appwriteConfig";
import AdminSidebar from "../components/shared/adminSidebar";

const AdminHome = () => {
  const [counts, setCounts] = useState({
    courses: 0,
    reviews: 0,
    services: 0,
  });
  const name = localStorage.getItem('nameData') ? JSON.parse(localStorage.getItem('nameData')) : '';
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const courses = await fetchEntries(COLLECTION_ID);
        const reviews = await fetchEntries(REVIEWS_COLLECTION_ID);
        const services = await fetchEntries(COLLECTION_ID_SERVICES);

        setCounts({
          courses: courses.length,
          reviews: reviews.length,
          services: services.length,
        });
      } catch (error) {
        console.error("Failed to fetch counts:", error);
      }
    };

    fetchCounts();
  }, [name.pass]);

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar/>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "100vh",
          backgroundColor: "#f7f7f7",
          paddingTop: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
            maxWidth: "800px",
          }}
        >
          <Card title="Курсы" count={counts.courses} />
          <Card title="Услуги" count={counts.services} />
          <Card title="Отзывы" count={counts.reviews} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, count }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        borderRadius: "15px",
        padding: "40px 20px",
        textAlign: "center",
        width: "300px",
        height: "200px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ marginBottom: "10px", fontSize: "22px" }}>{title}</h2>
      <p
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          margin: 0,
        }}
      >
        {count}
      </p>
      <p style={{ fontSize: "14px", marginTop: "10px" }}>
        Количество добавленных {title.toLowerCase()}
      </p>
    </div>
  );
};

export default AdminHome;
