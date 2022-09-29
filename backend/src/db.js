import { createPool } from "mysql2";

export const connection = createPool({
  host: "72.167.87.128",
  user: "franz2",
  password: "12345",
  database: "ecommerce",
});
