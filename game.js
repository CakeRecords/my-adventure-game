const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: { default: 'arcade' },
    scene: {
        preload: function () {
            this.load.image('background', 'assets/background.png');
        },
        create: function () {
            this.add.image(400, 300, 'background');
        }
    }
};

const game = new Phaser.Game(config);
