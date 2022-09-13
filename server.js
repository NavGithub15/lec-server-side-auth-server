const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5050;
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
