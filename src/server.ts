import { app } from "./app";

const PORT:number = Number(process.env.PORT) || 3000;
const ENV:string = process.env.ENV || "development";

app.listen(PORT, ()=>
  console.log(`server running in ${ENV} mode on port ${PORT}`)
);

