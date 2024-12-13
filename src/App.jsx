import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import ProtectedRoute from "./utils/protectedRoute";
import Loading from "./components/shared/loading";
import AdminHome from "./pages/adminHome";
import AdminUsers from "./pages/adminUsers";
import AdminServices from "./pages/adminServices";
import AddService from "./components/shared/addServices";
import EditService from "./components/shared/editServices";
import AdminReviews from "./pages/adminReviews";
import AddReview from "./components/shared/addReview";
import EditReview from "./components/shared/editReview";
import AdminCourses from "./pages/adminCourses";
import AddCourse from "./components/shared/addCourses";
import EditCourse from "./components/shared/editCourses";
import AdminLayout from "./layout/adminLayout";

// Lazy loading
const Main = React.lazy(() => import("./pages/main"));
const Portfolio = React.lazy(() => import("./pages/portfolio"));
const SignUp = React.lazy(() => import("./pages/signUp"));
const Services = React.lazy(() => import("./pages/services"));
const HomeLayout = React.lazy(() => import("./layout/homeLayout"));
const Courses = React.lazy(() => import("./pages/courses"));
const Reviews = React.lazy(() => import("./pages/reviews"));
const Login = React.lazy(() => import("./pages/login"));
const Detail = React.lazy(() => import("./pages/detail")); 
const Billing = React.lazy(() => import("./pages/billing"));
const Stream = React.lazy(() => import("./pages/stream"));
const AdminStream = React.lazy(() => import("./pages/adminStream"));

function App() {
  const name = (() => {
    try {
      return JSON.parse(localStorage.getItem("nameData")) || "";
    } catch (error) {
      console.error("localStorage parsing error:", error);
      return "";
    }
  })();
  const isAdmin = name?.pass === "2658474z";

  useEffect(() => {

  }, []);



  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Loading />
          </div>
        }
      >
        <Routes>
          {/* Public routes */}
          <Route path="/stream" element={<Stream />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Admin routes */}
          {isAdmin ? (
            
            <Route
              path="/"
              element={
                <ProtectedRoute isAdmin={isAdmin}>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminHome />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="adminStream" element={<AdminStream />} />
              <Route path="adminServices" element={<AdminServices />} />
              <Route path="reviews" element={<AdminReviews />} />
              <Route path="courses" element={<AdminCourses />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="add-service" element={<AddService />} />
              <Route path="edit-service/:serviceId" element={<EditService />} />
              <Route path="add-review" element={<AddReview />} />
              <Route path="edit-review/:reviewId" element={<EditReview />} />
              <Route path="add-course" element={<AddCourse />} />
              <Route path="edit-course/:courseId" element={<EditCourse />} />
            </Route>
          ) : (
            /* Protected Home routes */
            <Route
              path="/"
              element={
                <ProtectedRoute isAdmin={isAdmin}>
                  <HomeLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Main />} />
              <Route path="services" element={<Services />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="courses" element={<Courses />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="billing" element={<Billing />} />
              <Route path="detail/:id" element={<Detail />} />
            </Route>
          )}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
