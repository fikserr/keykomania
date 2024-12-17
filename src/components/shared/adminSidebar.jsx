import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: "🔴",
      title: "Начать трансляцию",
      subtitle: "Включить стрим на сайте",
      path: "admin-stream",
    },
    {
      icon: "➕",
      title: "Услугу",
      subtitle: "Добавить услугу в список",
      path: "admin-services",
    },
    {
      icon: "➕",
      title: "Курс",
      subtitle: "Добавить курс в список",
      path: "admin-courses",
    },
    {
      icon: "➕",
      title: "Отзыв",
      subtitle: "Добавить отзыв",
      path: "admin-reviews",
    },
  ];

  return (
    <div
      style={{
        width: "20%",
        height: "90vh",
        backgroundColor: "white",
        borderRight: "1px solid #E5E5E5",
        padding: "20px 10px",
        boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(item.path)}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            cursor: "pointer",
            padding: "10px",
            borderBottom: index < menuItems.length - 1 ? "1px solid #F5F5F5" : "none",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: "8px",
              fontSize: "20px",
              marginRight: "15px",
              color: "#8B5E3C",
            }}
          >
            {item.icon}
          </div>

          <div>
            <h3
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333333",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                margin: "5px 0 0",
                fontSize: "14px",
                color: "#666666",
              }}
            >
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminSidebar;
