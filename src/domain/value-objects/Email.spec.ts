import { Email} from "./Email.vo";
import { env } from "../../shared/utils/env/env";



describe("Test unity Email value-objects", ()=>{
  it("Should return value email class", ()=>{
    const email = new Email;

    expect(email).toBeInstanceOf(Email);
    expect(email).toHaveProperty("value");
    expect(email.value).toBe(env.EMAIL_FROM);
  });
});
