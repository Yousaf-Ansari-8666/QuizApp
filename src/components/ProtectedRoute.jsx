import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, children }) => {
    // console.log(isAllowed)
  if (!isAllowed) {
    return <Navigate to={"/quiz"} replace />;
  }
  return children;
};

export default ProtectedRoute;
