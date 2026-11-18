
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("App error:", error);
        });

        const server = app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

        server.on("error", (error) => {
            console.log("Server error:", error);
            process.exit(1);
        });

    } catch (error) {
        console.log("Startup failed:", error);
        process.exit(1);
    }
};

startServer();
