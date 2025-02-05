import supertest from "supertest";
import { app } from "../../../src/app";

const request = supertest(app);

describe("Integration test user controller", ()=>{

  it("Index: list users", async ()=> {
    const response = await request.get("/api/users");
    const users = response.body[0];

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(users).toHaveProperty("id", expect.any(Number));
    expect(users).toHaveProperty("firstName", expect.any(String));
    expect(users).toHaveProperty("gender", expect.any(String));
    expect(users).toHaveProperty("email", expect.any(String));
    expect(users).toHaveProperty("phone", expect.any(String));
    expect(users).toHaveProperty("username", expect.any(String));
    expect(users).toHaveProperty("password", expect.any(String));
  });

  it("findById: get user", async ()=> {
    const response = await request.get("/api/users/1");
    // const user = response.body[0];

    expect(response.status).toBe(200);
    // expect(user).toHaveProperty("id", expect.any(Number));
    // expect(user).toHaveProperty("firstName", expect.any(String));
    // expect(user).toHaveProperty("gender", expect.any(String));
    // expect(user).toHaveProperty("email", expect.any(String));
    // expect(user).toHaveProperty("phone", expect.any(String));
    // expect(user).toHaveProperty("username", expect.any(String));
    // expect(user).toHaveProperty("password", expect.any(String));
  });
});
