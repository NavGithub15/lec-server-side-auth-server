const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5050;
const postRoutes = require("./routes/postRoutes");

app.use("/posts", postRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
