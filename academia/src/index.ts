import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const courses = [
  { id: 1, title: "Programación con TypeScript", capacity: 25 },
  { id: 2, title: "Desarrollo web con Express", capacity: 20 },
  { id: 3, title: "Bases de datos", capacity: 30 }
];

// Devuelve todos los cursos.
app.get("/courses", (req, res) => {
  res.status(200).json(courses);
});

// Devuelve un curso según su id.
app.get("/courses/:id", (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find((course) => course.id === id);

  if (!course) {
    res.status(404).json({ error: "Curso no encontrado" });
    return;
  }

  res.status(200).json(course);
});
app.get("/version", (req, res) => {
  res.status(200).json({ version: "1.0.0" });
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});