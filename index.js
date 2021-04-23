const { Plugin } = require("powercord/entities");

module.exports = class sus extends Plugin {
  constructor() {
    super();
    this.images = [
      "/id/OIP.oMi5AReE7DTznYa7_QDRGQHaJp?w=138&h=180&c=7&o=5&pid=1.7",
      "/id/OIP.sf3BGxNx0RqsmSzcN4FV5AHaHa?w=173&h=180&c=7&o=5&pid=1.7",
      "/id/OIP.NJpbh9JWEKjWTAi8PzHtlAHaHa?w=154&h=180&c=7&o=5&pid=1.7",
      "/id/OIP.Pu400p9TjljSxMHkRnN7uQAAAA?w=133&h=180&c=7&o=5&pid=1.7",
      "/id/OIP.F0nrdiPwbXJQHVxBjZBadAHaHa?w=178&h=180&c=7&o=5&pid=1.7",
      "/id/OIP.JxGlctIZ6_Cn7loZcKF92wHaHa?w=172&h=180&c=7&o=5&pid=1.7",
    ];
  }

  startPlugin() {
    this.registerCommand(
      "sus",
      [],
      "Replaces every image with a random image of SUS",
      "{c}",
      this.sus.bind(this)
    );
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("sus");
  }

  getRandomURL() {
    return `https://th.bing.com/th${
      this.images[Math.floor(Math.random() * this.images.length)]
    }`;
  }

  sus() {
    document
      .querySelectorAll('[style*="background-image"]')
      .forEach(
        ({ style }) => (style.backgroundImage = `url("${this.getRandomURL()}")`)
      );

    document
      .querySelectorAll("img")
      .forEach((image) => (image.src = this.getRandomURL()));
  }
};
