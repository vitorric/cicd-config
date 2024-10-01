"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.server.listen(process.env.PORT, () => {
    console.log(`\x1b[33mServer listening on port ${process.env.PORT}\x1b[0m`);
});
