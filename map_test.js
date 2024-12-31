import { assertEquals } from "jsr:@std/assert";
import { squaresOf } from "./map.js";

const test = (description, assertion) => {
  console.log(description);
  assertion();
}

test("the array and element is empty", () => {
  assertEquals(squaresOf([]), "");
}
)