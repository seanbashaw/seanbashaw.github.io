class Crate extends HTMLElement {
    physicsBox
    world
    x
    y
    width
    height

    constructor(world, x, y, width, height, options) {
        super()
        // Store parameters; actual physics body is created when connected
        this.world = world;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.style.width = width+"px";
        this.style.height = height+"px";
        this.style.position = "absolute";
        this.style.left = (x - width/2) + "px";
        this.style.top = (y - height/2) + "px";
        
        this.physicsBox = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        Matter.Composite.add(this.world, this.physicsBox);
    }
    update(){
        if (!this.physicsBox) return;
        const pos = this.physicsBox.position;
        const angle = this.physicsBox.angle;
        const degrees = angle * (180 / Math.PI);
        this.style.left = (pos.x - this.width/2) + "px";
        this.style.top = (pos.y - this.height/2) + "px";
        this.style.transform = `rotate(${degrees}deg)`;
    }
}
customElements.define("crate-component", Crate);