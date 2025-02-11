
import { Product } from "./Product.entities";

const expectedProperties = ["id", "title", "description", "category", "price","thumbnail"];
const newProduct = new Product({
  title: "Essence Mascara Lash Princess",
  description:"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  category: "beauty",
  price: 9.99,
  thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
});

describe("Test unit: Product entitie", ()=>{

  it("should creaate a new product with valid properties", ()=>{
    expect(newProduct).not.toBeUndefined();
    expect(newProduct).toBeInstanceOf(Product);

    expectedProperties.forEach((prop)=> {
      expect(newProduct).toHaveProperty(prop);
    });
  });

  it("should throw an error if the product is created with missing data", () => {
    expect(() => {
      new Product({
        title: "",
        description: "Valid description",
        category: "beauty",
        price: 9.99,
        thumbnail: "https://example.com/image.png"
      });
    }).toThrow("Invalid user data");

    expect(() => {
      new Product({
        title: "Valid Title",
        description: "",
        category: "beauty",
        price: 9.99,
        thumbnail: "https://example.com/image.png"
      });
    }).toThrow("Invalid user data");

    expect(() => {
      new Product({
        title: "Valid Title",
        description: "Valid description",
        category: "",
        price: 9.99,
        thumbnail: "https://example.com/image.png"
      });
    }).toThrow("Invalid user data");
  });

});
