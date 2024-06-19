var express = require("express")
const app = express();
const port = 3000;

// Middleware для обслуживания статических файлов
app.use(express.static('public'));

// Обработчик для маршрута главной страницы
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// Обработчик для маршрута about
app.get('/about', (req, res) => {
  res.send('Это простое приложение на Express.js');
});

// Обработчик для несуществующих маршрутов
app.use((req, res, next) => {
    res.status(404).send('Страница не найдена');
  });

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});