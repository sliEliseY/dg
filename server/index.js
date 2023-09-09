import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import fs from 'fs'; // Импорт модуля fs
import path from 'path'; // Импорт модуля path

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3002;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// MongoDB connection
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.fldtisa.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const imageSchema = new mongoose.Schema({
  imageBuffer: Buffer, // Поле для хранения бинарных данных изображения
  // Другие поля, которые вам могут понадобиться
});

const Image = mongoose.model('Image', imageSchema);

// Путь к папке, где хранятся изображения
const imagesFolder = 'C:\\react-js\\DetailingGarage\\client\\src\\images'; // Убедитесь, что путь указан с двойными обратными слешами

// Чтение и сохранение всех изображений из папки
fs.readdir(imagesFolder, (err, files) => {
  if (err) throw err;

  files.forEach((filename) => {
    const imagePath = path.join(imagesFolder, filename);

    fs.readFile(imagePath, (readErr, data) => {
      if (readErr) throw readErr;

      const newImage = new Image({ imageBuffer: data });
      // newImage.save((saveErr) => {
      //   if (saveErr) throw saveErr;
      //   console.log(`Изображение ${filename} успешно сохранено в MongoDB`);
      // });
      newImage.save()
  .then(() => {
    console.log(`Изображение ${filename} успешно сохранено в MongoDB`);
  })
  .catch((saveErr) => {
    console.error(saveErr);
  });
    });
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'All is fine.' });
});

app.get('/images/:imageId', async (req, res) => {
  try {
    const image = await Image.findById(req.params.imageId);

    if (!image) {
      return res.status(404).json({ message: 'Изображение не найдено' });
    }

    // Отправка бинарных данных изображения в ответе
    res.setHeader('Content-Type', 'image/jpeg'); // Задайте правильный тип контента
    res.send(image.imageBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Произошла ошибка при получении изображения' });
  }
});


// Запуск сервера
async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.fldtisa.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    );

    app.listen(PORT, () =>
      console.log(`Server started on port: ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
}

start();
