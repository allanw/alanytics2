import { formatValue } from "../modules/formatting";

test("formatValue with number and format", () => {
  let columnFormat = {
    valueType: "number",
    formatCode: "#,##0.00",
  };
  expect(formatValue(3.14159, columnFormat)).toStrictEqual("3.14");
  expect(formatValue(3, columnFormat)).toStrictEqual("3.00");
  expect(formatValue(3000.1, columnFormat)).toStrictEqual("3,000.10");
});
