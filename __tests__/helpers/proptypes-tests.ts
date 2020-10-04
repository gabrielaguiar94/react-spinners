import {
  sizeDefaults,
  sizeMarginDefaults,
  heightWidthDefaults,
  heightWidthRadiusDefaults
} from "../../src/helpers";

describe("Default Props functions for different loaders", () => {
  describe("sizeDefaults", () => {
    it("should be a function", () => {
      expect(typeof sizeDefaults).toEqual("function");
    });

    it("should return an object containing the common props: loading, color, css", () => {
      const defaultProps = sizeDefaults(1);
      expect(defaultProps).toHaveProperty("loading");
      expect(defaultProps.loading).toEqual(true);
      expect(defaultProps).toHaveProperty("color");
      expect(defaultProps.color).toEqual("#000000");
      expect(defaultProps).toHaveProperty("css");
      expect(defaultProps.css).toEqual("");
    });

    it("should return the size as the passed in size value", () => {
      const defaultProps1 = sizeDefaults(1);
      expect(defaultProps1).toHaveProperty("size");
      expect(defaultProps1.size).toEqual(1);

      const defaultProps2 = sizeDefaults(2);
      expect(defaultProps2).toHaveProperty("size");
      expect(defaultProps2.size).toEqual(2);
    });
  });

  describe("sizeMarginDefaults", () => {
    it("should be a function", () => {
      expect(typeof sizeMarginDefaults).toEqual("function");
    });

    it("should return an object containing the common props: loading, color, css", () => {
      const defaultProps = sizeMarginDefaults(1);
      expect(defaultProps).toHaveProperty("loading");
      expect(defaultProps.loading).toEqual(true);
      expect(defaultProps).toHaveProperty("color");
      expect(defaultProps.color).toEqual("#000000");
      expect(defaultProps).toHaveProperty("css");
      expect(defaultProps.css).toEqual("");
    });

    it("should return the size as the passed in size value", () => {
      const defaultProps1 = sizeMarginDefaults(1);
      expect(defaultProps1).toHaveProperty("size");
      expect(defaultProps1.size).toEqual(1);
      expect(defaultProps1).toHaveProperty("margin");
      expect(defaultProps1.margin).toEqual(2);

      const defaultProps2 = sizeMarginDefaults(2);
      expect(defaultProps2).toHaveProperty("size");
      expect(defaultProps2.size).toEqual(2);
    });
  });

  describe("heightWidthDefaults", () => {
    it("should be a function", () => {
      expect(typeof heightWidthDefaults).toEqual("function");
    });

    it("should return an object containing the common props: loading, color, css", () => {
      const defaultProps = heightWidthDefaults(1, 1);
      expect(defaultProps).toHaveProperty("loading");
      expect(defaultProps.loading).toEqual(true);
      expect(defaultProps).toHaveProperty("color");
      expect(defaultProps.color).toEqual("#000000");
      expect(defaultProps).toHaveProperty("css");
      expect(defaultProps.css).toEqual("");
    });

    it("should return the height/width as the passed in height/width value", () => {
      const defaultProps1 = heightWidthDefaults(1, 2);
      expect(defaultProps1).toHaveProperty("height");
      expect(defaultProps1.height).toEqual(1);
      expect(defaultProps1).toHaveProperty("width");
      expect(defaultProps1.width).toEqual(2);

      const defaultProps2 = heightWidthDefaults(3, 4);
      expect(defaultProps2).toHaveProperty("height");
      expect(defaultProps2.height).toEqual(3);
      expect(defaultProps2).toHaveProperty("width");
      expect(defaultProps2.width).toEqual(4);
    });
  });

  describe("heightWidthRadiusDefaults", () => {
    it("should be a function", () => {
      expect(typeof heightWidthRadiusDefaults).toEqual("function");
    });

    it("should return an object containing the common props: loading, color, css", () => {
      const defaultProps = heightWidthRadiusDefaults(1, 1, 1);
      expect(defaultProps).toHaveProperty("loading");
      expect(defaultProps.loading).toEqual(true);
      expect(defaultProps).toHaveProperty("color");
      expect(defaultProps.color).toEqual("#000000");
      expect(defaultProps).toHaveProperty("css");
      expect(defaultProps.css).toEqual("");
    });

    it("should return the height/width as the passed in height/width value", () => {
      const defaultProps1 = heightWidthRadiusDefaults(1, 2, 3);
      expect(defaultProps1).toHaveProperty("height");
      expect(defaultProps1.height).toEqual(1);
      expect(defaultProps1).toHaveProperty("width");
      expect(defaultProps1.width).toEqual(2);
      expect(defaultProps1).toHaveProperty("radius");
      expect(defaultProps1.radius).toEqual(3);

      const defaultProps2 = heightWidthRadiusDefaults(4, 5, 6);
      expect(defaultProps2).toHaveProperty("height");
      expect(defaultProps2.height).toEqual(4);
      expect(defaultProps2).toHaveProperty("width");
      expect(defaultProps2.width).toEqual(5);
      expect(defaultProps2).toHaveProperty("radius");
      expect(defaultProps2.radius).toEqual(6);
    });

    it("radius value should default to 2", () => {
      const defaultProps = heightWidthRadiusDefaults(5, 6);
      expect(defaultProps.radius).toEqual(2);
    });
  });
});
