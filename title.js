class Title extends Phaser.Scene {
    constructor() {
        super('Title')
    }

    preload() {
        this.load.image('rp', 'rolliepollie.png');
        this.load.image('snail', 'snail.png');
        this.load.image('fairy', 'fairy.png');
    }

    create() {
        // Create Rollie Pollie
        this.rp = this.add.sprite(
            this.cameras.main.width / 2,
            this.cameras.main.height,
            'rp'
        );
        this.rp.setOrigin(0.5);

        // Create Snail
        this.snail = this.add.sprite(
            1500,
            this.cameras.main.height,
            'snail'
        );
        this.snail.setOrigin(0.5).setScale(0.7);
        this.snail.visible = false;

        // Create Fairy
        this.fairy = this.add.sprite(
            300,
            this.cameras.main.height,
            'fairy'
        );
        this.fairy.setOrigin(0.5).setScale(0.7);
        this.fairy.visible = false;

        // Create Title Text
        this.titleText = this.add.text(
            600,
            200,
            'Roly Poly: To The End',
            {
                fontFamily: 'ArcadeClassic',
                fontSize: '64px',
                fill: '#ffffff'
            }
        );
        this.titleText.setOrigin(0.5);
        this.titleText.visible = false;

        // Create Jump Text
        this.jumpText = this.add.text(
            1500,
            400,
            '❌ to Continue (and Jump)!',
            {
                fontFamily: 'ArcadeClassic',
                fontSize: '40px',
                fill: '#ffffff'
            }
        );
        this.jumpText.setOrigin(0.5);
        this.jumpText.visible = false;
        
        // Create the animations
        this.tweens.add({
            targets: this.rp,
            y: this.cameras.main.height/2,
            duration: 1000,
            ease: 'Cubic.easeOut',
            onComplete: ()=> {
                this.snail.visible = true;
                this.tweens.add({
                    targets: this.snail,
                    y: 800,
                    duration: 1000,
                    ease: 'Cubic.easeOut',
                    onComplete: () => {
                        this.fairy.visible = true;
                        this.tweens.add({
                            targets: this.fairy,
                            y: 800,
                            duration: 1000,
                            ease: 'Cubic.easeOut',
                            onComplete: () => {
                                this.titleText.visible = true;
                                this.tweens.add({
                                    targets: this.titleText,
                                    y: 100,
                                    duration: 1000,
                                    ease: 'Bounce.easeOut',
                                    repeat: -1,
                                    yoyo: true,
                                });
                                this.time.delayedCall(1000, () => {
                                    this.jumpText.visible = true;
                                    this.tweens.add({
                                        targets: this.jumpText,
                                        y: 350,
                                        duration: 300,
                                        ease: 'Cubic.easeOut',
                                        repeat: -1,
                                        yoyo: true,
                                    });
                                });
                            }
                        });
                    }
                });
            }       
        });

        // Go to Victory Screen on Tap/Click
        this.input.on('pointerdown', () => {
            this.scene.start('Victory');
        });

    }
}