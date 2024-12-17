import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
const ProtectedRoute = React.lazy(() => import("./utils/protectedRoute"));
const Loading = React.lazy(() => import("./components/shared/loading"));
const AdminHome = React.lazy(() => import("./pages/adminHome"));
const AdminUsers = React.lazy(() => import("./pages/adminUsers"));
const AdminServices = React.lazy(() => import("./pages/adminServices"));
const AddService = React.lazy(() => import("./components/shared/addServices"));
const EditService = React.lazy(() => import("./components/shared/editServices"));
const AdminReviews = React.lazy(() => import("./pages/adminReviews"));
const AddReview = React.lazy(() => import("./components/shared/addReview"));
const EditReview = React.lazy(() => import("./components/shared/editReview"));
const AdminCourses = React.lazy(() => import("./pages/adminCourses"));
const AddCourse = React.lazy(() => import("./components/shared/addCourses"));
const EditCourse = React.lazy(() => import("./components/shared/editCourses"));
const AdminLayout = React.lazy(() => import("./layout/adminLayout"));
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
  const { name } = useSelector((state) => state.userData);
  const isAdmin = name?.pass === "2658474z";
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>

          <Route path="/stream" element={<Stream />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute isAdmin={isAdmin}>
                {isAdmin ? <AdminLayout /> : <HomeLayout />}
              </ProtectedRoute>
            }
          >

            <Route index element={isAdmin ? <AdminHome /> : <Main />} />
            <Route path="admin-users" element={<AdminUsers />} />
            <Route path="admin-stream" element={<AdminStream />} />
            <Route path="admin-services" element={<AdminServices />} />
            <Route path="admin-reviews" element={<AdminReviews />} />
            <Route path="admin-courses" element={<AdminCourses />} />
            <Route path="add-service" element={<AddService />} />
            <Route path="edit-service/:serviceId" element={<EditService />} />
            <Route path="add-review" element={<AddReview />} />
            <Route path="edit-review/:reviewId" element={<EditReview />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="edit-course/:courseId" element={<EditCourse />} />

            <Route path="services" element={<Services />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="courses" element={<Courses />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="billing" element={<Billing />} />
            <Route path="detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
