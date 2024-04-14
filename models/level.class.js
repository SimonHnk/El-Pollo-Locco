class Level {
    enemies;
    clouds;
    sky;
    backgroundObjects;
    level_end_x =2200;


    constructor(enemies, clouds, sky, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.sky = sky;
        this.backgroundObjects = backgroundObjects;
    }
}