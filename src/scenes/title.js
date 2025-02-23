class Title extends Phaser.Scene {
  // Tela de início do jogo
  constructor() {
    super({ key: "Title" });
  }

  preload() {
    this.load.image("background", "assets/title-bg.png"); // Carrega o background
    this.load.image("start", "assets/start-button.png"); // Carrega o botão de start
  }

  create() {
    this.add.image(width / 2, height / 2, "background"); // Adiciona o background na cena

    this.botao_start = this.add
      .image(width / 2, 500, "start")
      .setOrigin(0.5, 0); // Adiciona o botão na cena

    // Torna o botão interativo
    button(this.botao_start, () => {
      this.scene.start("Loading");
    }); // Vai para a tela de loading

    // Cria um retangulo invisivel
    const botaoReserva = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });
    createButton(botaoReserva, 725, 785, 620, 195, () => {
      this.scene.start("Loading");
    }); // Vai para a tela de loading
  }

  update() {}
}
