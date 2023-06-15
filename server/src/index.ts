import * as dotenv from "dotenv";
dotenv.config();
import express from 'express';
import router  from './routes/routes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;


app.use(router);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    }
);