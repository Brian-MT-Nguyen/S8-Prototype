class Victory extends Phaser.Scene{
    constructor(){
        super('Victory')
    }
    preload() {
        this.load.image('rp', 'rolliepollie.png');
        this.load.image('crown', 'crown.png'); //Created using Pixilart.
    }
    create(){
        this.winText = this.add.text(this.cameras.main.width / 2 - 200, this.cameras.main.height / 2 - 200,"You won!!!", {font: "80px ArcadeClassic",color: "#FFFFFF",align: "center"});
        
        let scene=this;
        let fadeInTween = this.tweens.add({
            targets: this.winText,
            alpha: { start: 0, to: 1 },
            ease: 'Linear',
            duration: 2000,
            repeat: 0,
            yoyo: false,
            onComplete: function(){
                let rp = scene.add.sprite(-100, scene.cameras.main.height / 4, 'rp');
                rp.setScale(0.5);
                scene.tweens.add({
                    targets: rp,
                    x: { value: scene.cameras.main.width / 8, duration: 2000, ease: 'Power2' },
                    onComplete: function(){
                        scene.tapText = scene.add.text(scene.cameras.main.width / 2 + 200, scene.cameras.main.height / 2 + 200,"The Roly Poly gets a crown.", {font: "50px ArcadeClassic",color: "#FFFFFF",align: "center"});
                        let crown = scene.add.sprite(300, scene.cameras.main.height / 2, 'crown');
                        crown.setScale(3);
                        scene.tweens.add({
                            targets: crown,
                            x: { value: 200, duration: 2000, ease: 'Power2'},
                            y: { value: 50, duration: 2000, ease: 'Power2'},
                            onComplete(){
                                scene.scene.start('Title');
                            }

                        });
                    }
                });
            }
          });
        //Roly Poly gets a crown effect
        // Once effect finish, go to Title

        //Click to move for now
    }
}