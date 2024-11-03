import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import quizRoutes from './routes/quizRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use('/api/quizzes', quizRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Quiz API!');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
