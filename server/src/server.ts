import { app } from "./app";

const PORT = process.env.PORT || 3000;
process.env.DEBUG = "prisma:*";

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}/`);
});
