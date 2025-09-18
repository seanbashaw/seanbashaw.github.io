class Memory extends HTMLElement {
    physicsCircle
    world
    x
    y
    radius
    gif
    constructor(world, x, y, radius, gif, options){
        super()
        this.world = world;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.gif = gif;
        this.style.width = radius*2+"px";
        this.style.height = radius*2+"px";
        this.style.left = (x-radius) + "px";
        this.style.top = (y-radius)+"px";
        this.style.backgroundImage=gif;
        this.physicsCircle = Matter.Bodies.circle(x, y, radius, options);
        Matter.Composite.add(this.world, this.physicsCircle);
    }
    update(){
        if (!this.physicsCircle) return;
        const pos = this.physicsCircle.position;
        const angle = this.physicsCircle.angle;
        const degrees = angle * (180/ Math.PI);
        this.style.left = (pos.x - this.radius) +"px";
        this.style.top = (pos.y - this.radius) + "px";
        this.style.transform = `rotate(${degrees}deg)`;
    }
}
customElements.define("memory-component", Memory)