import supertest from "supertest";
import { app } from "../../../app";

const request = supertest(app);
const expectedProperties = {
  id: expect.any(Number),
  firstName: expect.any(String),
  gender: expect.any(String),
  email: expect.any(String),
  phone: expect.any(String),
  username: expect.any(String),
  password: expect.any(String),
};

const validateUser = (user: any) => {
  expect(user).toMatchObject(expectedProperties);
};

describe("Integration test - User controller", ()=>{

  it("Index: should return users list with correct properties", async ()=> {
    const { status, body } = await request.get("/api/users");

    expect(status).toBe(200);
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    body.forEach(validateUser);
  });

  it("findById: should return a user with correct properties", async ()=> {
    const { status, body } = await request.get("/api/users/1");
    const user = Array.isArray(body) ? body[0] : body;

    expect(status).toBe(200);
    expect(user).toMatchObject(expectedProperties);
  });

  it("findById: should return 404 for a non-existent user", async () => {
    const { status, body } = await request.get("/api/users/9999");

    expect(status).toBe(404);
    expect(body).toHaveProperty("User not found");
  });
});
