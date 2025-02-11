import { User } from "./User.entitie";

describe("Test unity: User entitie", ()=>{

  it("should creaate a new user with valid properties", ()=>{
    const newUser = new User({
      name: "Júlio",
      email: "jj@gmail.com",
      password: "12345678"
    });

    expect(newUser).not.toBeUndefined();
    expect(newUser).toBeInstanceOf(User);
    expect(newUser).toHaveProperty("id");
    expect(newUser).toHaveProperty("name");
    expect(newUser).toHaveProperty("email");
    expect(newUser).toHaveProperty("password");
  });

  it("should throw an error if the user is created with missing data", () => {
    expect(() => {
      new User({
        name: "",
        email: "jj@gmail.com",
        password: "12345678"
      })
      .name}).toThrow("Invalid user data")

    expect(() => {
      new User({
        name: "Júlio",
        email: "",
        password: "12345678"
      })
      .email}).toThrow("Invalid user data")

    expect(() => {
      new User({
        name: "Júlio",
        email: "jj@gmail.com",
        password: ""
      })
      .password}).toThrow("Invalid user data")
  });

});
