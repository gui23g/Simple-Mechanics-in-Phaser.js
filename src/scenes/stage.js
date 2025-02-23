class Stage extends Phaser.Scene{
    // Um mini plataforma

    constructor(){
        super({ key: "Stage" });
    }

    enzo;

    preload(){

    }

    create(){
        // Definindo os limites do mundo para o tamanho total da fase
        this.physics.world.setBounds(0, 0, 10560, 1080);

        // Configurando os limites da câmera
        this.cameras.main.setBounds(0, 0, 10560, 1080);

        // Criando os objetos no cenário.
        this.add.image(0, 0, "bg").setOrigin(0, 0);
        this.enzo = this.physics.add.sprite(0, height - 1, "enzoIdle").setOrigin(0, 1);
        this.enzo.setCollideWorldBounds(true);
        createAnimation(this, "idle", "enzoIdle", 0, 3, 3.5, -1)
        createAnimation(this, "walk", "enzoWalk", 0, 7, 7.5, -1)
        this.enzo.anims.play("idle", true)

        // Faz a camêra seguir um objeto da tela, nesse caso, o Enzo
        this.cameras.main.startFollow(this.enzo, true);
        
    }

    update(){
        moveCharWithJump(this, 400, 400, this.enzo)

        if (this.enzo.body.velocity.x > 0){
            this.enzo.anims.play("walk", true)
            this.enzo.setFlip(0,0)
        } else if (this.enzo.body.velocity.x < 0) {
            this.enzo.anims.play("walk", true)
            this.enzo.setFlip(1,0)
        } else {
            this.enzo.anims.play("idle", true)
        }
    }
}