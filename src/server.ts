import { app } from "./app";
import { env } from "./utils/env";

const PORT:number = env.PORT || 3000;
const ENV:string = env.ENV || "development";

app.listen(PORT, ()=>
  console.log(`server running in ${ENV} mode on port ${PORT}`)
);

