import React, { useEffect, useState } from "react";
import { fetchEntries } from "../utils/api";
import { COLLECTION_ID_USERS } from "../config/appwriteConfig";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchEntries(COLLECTION_ID_USERS);
        const transformedUsers = data.map((user) => ({
          id: user.$id,
          name: `${user.FirstName} ${user.LastName}`,
          phoneNumber: user.PhoneNumber,
          registrationDate: user.$createdAt,
          purchasedCourses: user.purchasedCourses || [],
        }));
        setUsers(transformedUsers);
      } catch (err) {
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const toggleAccordion = (userId) => {
    setExpandedUserId((prevId) => (prevId === userId ? null : userId));
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "25px" }}>Пользователи</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#7E5943", color: "white" }}>
            <th style={tableHeaderStyle}>Пользователь</th>
            <th style={tableHeaderStyle}>Куплено курсов</th>
            <th style={tableHeaderStyle}>Телефон</th>
            <th style={tableHeaderStyle}>Дата регистрации</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <React.Fragment key={user.id}>
              <tr
                onClick={() => toggleAccordion(user.id)}
                style={{
                  borderBottom: "1px solid #ddd",
                  cursor: "pointer",
                  backgroundColor: expandedUserId === user.id ? "#eef2ff" : "white",
                  transition: "background-color 0.3s",
                }}
              >
                <td style={tableCellStyle}>{user.name}</td>
                <td style={tableCellStyle}>{user.purchasedCourses.length}</td>
                <td style={tableCellStyle}>{user.phoneNumber}</td>
                <td style={tableCellStyle}>
                  {new Date(user.registrationDate).toLocaleDateString()}
                </td>
              </tr>
              {expandedUserId === user.id && (
                <tr>
                  <td colSpan="4" style={{ padding: "15px", backgroundColor: "#f1f1f1" }}>
                    <div>
                      <h4 style={{ marginBottom: "15px", color: "#333" }}>Купленные курсы</h4>
                      {user.purchasedCourses.length > 0 ? (
                        user.purchasedCourses.map((course, index) => (
                          <div
                            key={index}
                            style={{
                              marginBottom: "15px",
                              backgroundColor: "#7E5943",
                              color: "white",
                              padding: "15px",
                              borderRadius: "8px",
                              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                              display: "inline-block",
                              marginRight: "10px",
                              width: "300px",
                              textAlign: "left",
                            }}
                          >
                            <p style={{ margin: "5px 0" }}>
                              <strong>Курс:</strong> {course.courses.Name}
                            </p>
                            <p style={{ margin: "5px 0" }}>
                              <strong>Способ оплаты:</strong> {course.PaymentMethod}
                            </p>
                            <p style={{ margin: "5px 0" }}>
                              <strong>Дата покупки:</strong>{" "}
                              {new Date(course.$createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p style={{ color: "#555" }}>Нет купленных курсов.</p>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  padding: "10px",
  textAlign: "left",
  fontWeight: "bold",
};

const tableCellStyle = {
  padding: "10px",
  textAlign: "left",
};

export default AdminUsers;
