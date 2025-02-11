import { tokenGenerate } from "./auth.middleware";
import jwt from "jsonwebtoken";

describe("Test unity: Authorization", ()=>{

    it("Should token generate for user and decoded id", ()=>{
      const userId = "123";
      const token = tokenGenerate(userId);
      expect(token).not.toBeNull();
      expect(typeof token).toBe("string");

      const decoded = jwt.decode(token) as jwt.JwtPayload;
      expect(decoded).toBeDefined();
      expect(decoded.id).toBe(userId);
    });
});
