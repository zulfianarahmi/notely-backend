import express from "express";
import authRoutes from "./routes/auth.routes";
import notesRoutes from "./routes/note.routes"; // Import route baru

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes); // Tambahkan route baru

app.listen(3000, () => console.log("Server running on port 3000"));
