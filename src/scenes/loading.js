class Loading extends Phaser.Scene {
  // Tela de loading
  constructor() {
    super({ key: "Loading" });
  }

  loadingProgress;
  loaingText;

  preload() {
    // Atualizando a porcentagem carregado
    this.load.on("progress", (value) => {
      this.loadingProgress = value * 100; // Armazena a porcentagem
    });

    // Carrega o spritesheet do personagem parado para a próxima cena
    this.load.spritesheet("enzoIdle", "assets/enzo_idle.png", {
      frameWidth: 640,
      frameHeight: 640,
    });
    // Carrega o spritesheet do personagem andando para a próxima cena
    this.load.spritesheet("enzoWalk", "assets/enzo_andando.png", {
      frameWidth: 640,
      frameHeight: 640,
    });
    this.load.image("bg", "assets/rua_dia.png");
    this.load.image("bricks", "assets/tijolos.png");
  }

  create() {
    // Adiciona um texto na tela
    this.loaingText = this.add
      .text(width / 2, height / 2, "Loading: " + this.loadingProgress + "%", {
        fontFamily: '"Press Start 2P"', // Fonte utilizada (ATENÇÃO: Essa fonte só existe porque foram carregadas fontes no html)
        resolution: 5, // Resolução da fonte
        fontSize: "30px", // Tamanho da fonte
        fill: "#FFFFFF", // Cor da fonte
        align: "center", // Alinhamento do texto
        wordWrap: { width: 500 }, // Tamanho para a quebra do texto
      })
      .setOrigin(0.5, 0.5); // Mudando a origem para o centro do texto
  }

  update() {
    // Atualizando a porcentagem do loading
    this.loaingText.setText("Loading: " + this.loadingProgress + "%");

    // Quando completar 100% ele troca de cena
    if (this.loadingProgress == 100){
        this.scene.start("Stage");
    }

  }
}
