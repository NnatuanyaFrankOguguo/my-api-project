import express, { Request, Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(compression()); // Helps improve performance
app.use(express.json());

// Rate limiting middleware: Max 100 requests per 15 minutes
const limiter = rateLimit({
    windowMs : 15 * 60 * 1000, //15 minutes
    max: 100,    // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes"
})

app.use(limiter);
//Reply with your with my actual details
const EMAIL = "nnatuanyafrank@gmail.com";
const GITHUB_URL = "https://github.com/NnatuanyaFrankOguguo/my-api-project"


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: EMAIL, current_datetime: new Date().toISOString(), github_url: GITHUB_URL });
  });
  
  // Start Server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));