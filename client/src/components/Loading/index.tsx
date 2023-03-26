import { Backdrop, CircularProgress } from "@mui/material";
import { useDashContext } from "../../contexts/DashContext";

// Loading circle da aplicação.

const Loading = () => {
  const { loading } = useDashContext();

  return (
    <Backdrop
      className="filterBackdrop"
      sx={{ color: "var(--color-primary)", zIndex: 999999 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
