import supertest from "supertest";
import { app } from "../../app";

const request = supertest(app);

describe("Integration Test application:", () => {
  it("should return 200 OK with a success message", async () => {
    const response = await request.get("/api");

    expect(response.status).toBe(200);
  });

  it("should return 404 for non-existent routes", async () => {
    const response = await request.get("/api/unknown");

    expect(response.status).toBe(404);
  });
});
