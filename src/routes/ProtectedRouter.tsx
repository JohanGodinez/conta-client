import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: JSX.Element;
}

export const ProtectedRouter: React.FC<Props> = ({
  children,
}) => {
  const { user } = useAuth()

  return user ? children : <Navigate to="/login" />;
};
