const app = require("./server");
const PORT = 8000;

app.listen(PORT, success => 
    console.log(`listening to localhost:${PORT}`));