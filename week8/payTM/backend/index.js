const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.set('PORT', process.env.PORT || 3000)

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(app.get('PORT'), () =>
    console.log(`Server running on port ${app.get('PORT')}`),
);


