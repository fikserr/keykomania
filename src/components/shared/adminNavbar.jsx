import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearName } from "../../store/userSlice";

const AdminNavbar = () => {
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(clearName());
    window.location.reload();
  }
  const navStyle = {
    padding: "15px 20px 15px 100px",
    background: "#7E5943",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  };

  const logoStyle = {
    fontWeight: "bold",
    fontSize: "37px",
  };

  const linkContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    gap: "8%",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    fontSize: "20px",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#D1C4A8",
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        keykomania<sup>®</sup>
      </div>

      <div style={linkContainerStyle}>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
        >
          Главная
        </Link>
        <Link
          to="/adminStream"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
        >
          Трансляция
        </Link>
        <Link
          to="/users"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
        >
          Пользователи
        </Link>
        <Link
          to="adminServices"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
        >
          Услуги
        </Link>
        <Link
          to="/courses"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
        >
          Курсы
        </Link>
        <Link
          to="/reviews"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
        >
          Отзыв
        </Link>
        <button onClick={() => handleLogOut()} style={linkStyle}>
          Выйти
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
