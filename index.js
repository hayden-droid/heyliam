const { Plugin } = require("powercord/entities");

module.exports = class HeyLiam extends Plugin {
  constructor() {
    super();
    this.images = [
      "752300699030781962/IMSOCUTE.png",
      "752300700947578910/Liam_headshot.png",
      "752300702344151180/Me_but_protogen.png",
      "752300707490824232/MEH_SIS_IS_SO_TALENTED_SHE_TURNED_ME_INTO_A_ROBOT_FUR_BOI.png",
      "752300707444555863/skin.png",
      "752300709659279441/Undertale_me.png",
      "752302434466136064/0.png",
    ];
  }

  startPlugin() {
    this.registerCommand(
      "heyliam",
      [],
      "Replaces every image with a random image of Liam",
      "{c}",
      this.heyliam.bind(this)
    );
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("heyliam");
  }

  getRandomURL() {
    return `https://cdn.discordapp.com/attachments/752299658839195692/${
      this.images[Math.floor(Math.random() * this.images.length)]
    }`;
  }

  heyliam() {
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
