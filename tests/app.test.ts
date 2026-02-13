import request from "supertest";
import app from "../src/index";

describe("Health Endpoint", () => {
  test("GET /health returns status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(res.body).toHaveProperty("version");
  });

  test("GET /health returns JSON content type", async () => {
    const res = await request(app).get("/health");
    expect(res.headers["content-type"]).toMatch(/json/);
  });
});

describe("Greet Endpoint", () => {
  test("GET /api/greet with name returns greeting", async () => {
    const res = await request(app).get("/api/greet?name=Alice");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello, Alice!");
  });

  test("GET /api/greet without name defaults to World", async () => {
    const res = await request(app).get("/api/greet");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello, World!");
  });
});
