import mongoose from "mongoose";
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://baxtiyorjan3_db_user:m59Iw1LD36qrv8E6@cluster0.h9q7zqf.mongodb.net/CareTrack",
    )
    .then(() => {
      console.log("DB CONNECTED");
    });
};
