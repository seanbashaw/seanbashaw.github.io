let gifcache = [
    {
        "title":"Malcolm in the Middle",
        "gif": "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ZkeWxnMWFod2w5bGwxbmUxMXJhYWpjb3JvazA1ZHNueXE1Z2pnMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13PZ0dKw1J3LzO/giphy.gif"
    },
    {
        "title": "Cheese",
        "gif": "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnY3dnp5OHdzOTFqYXJuNm43eTlvMHN4NzhkdGl3ZnE2YzY5ZzZ1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1L2UkgpuiE4U/giphy.gif"
    },
    {
        "title": "Run",
        "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDhwazNpNGU5ajd6Y3d3anIwZGJnNjI3bnEydGhkYXN6ajByaXJxMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9KorRVD13syoU/giphy.gif"
    },
    {
        "title": "Napa",
        "gif": "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNThrcGZ1MHo0ZGhlNjZvZnY5aGU4aWMxaDBxY3Z1MGdscG1kb29hZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fV7Uit32tfBp9QDyYB/giphy.gif"
    },
    {
        "title": "PI",
        "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3hwa3ZtczM3NmJnYWd4Z3A1cjJweWkxejk1MzNkdHN3OW10N2p4MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUPGcrKb11ruRXE2BO/giphy.gif"
    },
    {
        "title": "Portal",
        "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGc4d28ybm5ubzMyaWlvbWdqMXJkNWh1Ym84M3E0aHc1OW52OG5xNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HyvnMHUEOSY8M/giphy.gif"
    },
    {
        "title": "Coffee",
        "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFta24wd2xva3J1cTZkbDZiZzl0NjlsNzZ4MnJ1eXg0NDB6ZGJ5cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/oZEBLugoTthxS/giphy.gif"
    },
    {
        "title": "African Grey",
        "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2d4ZDZoYXg0aGw4MGtyZGg0dmV3NDJsaDBnMml5M3V2MDJobDFlZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NDAf4PVui8mUU/giphy.gif"
    },
    {
        "title": "Femur",
        "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnpoMno2N3FlaWx3bHpqM3h1bzNocGhmM3F6eG50YngzdWptcHg5biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/q9HHyHPISNZD2/giphy.gif"
    },
    {
        "title": "Boston",
        "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG5pYTI3OGhoaG54cTM2MHVzNW4yOTdyZTM3cHZybGtxMGdkcDFrcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sQpl7yebgk3Pq/giphy.gif"
    },
    {"title": "Pizza",
        "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3FneWdjb2twNWtlN3I3Mm5pOXRmNzRkbWhuZTdpNzd3bTU2aW1yaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10kxE34bJPaUO4/giphy.gif"
    },
    {"title":"San Francisco",
        "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDBidjExdDV0MDRpNXA1bmgyMzBtNTVjNXpsdzllM3RnNml5a2tmZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IUD2rEenlSH4NAeAQY/giphy.gif"
    },
    {
        "title": "Rochester Institute of Technology",
        "gif": "https://media.giphy.com/media/duiTKGGd7Bw7w9RQok/giphy.gif"
    }
];
class Game extends HTMLElement {
    engine = "";
    world = "";

    crates = new Array()
    addCrate(...data){
        const crateEl = new Crate(...data);
        this.appendChild(crateEl);
        this.crates.push(crateEl);
        return crateEl;
    }
    addMemory(...data){
        const memoryM = new Memory(...data);
        this.appendChild(memoryM);
        this.crates.push(memoryM);
    }
    
    constructor() {
        super();
        this.engine = Matter.Engine.create();
        this.world = this.engine.world;
        for (let a in gifcache){
            this.addMemory(this.world,150,-100-a*35,35,"url("+gifcache[a]["gif"]+")")
        };
                // "gumball machine"
        let leftwall = this.addCrate(this.world,50,200,10,300,{isStatic:true})
        let rightwall = this.addCrate(this.world, 350, 200, 10, 300,{isStatic:true});
        let leftslant = this.addCrate(this.world,100,400,150,10,{isStatic:true});
        Matter.Body.rotate(leftslant.physicsBox,Math.PI/4);
        let rightslant = this.addCrate(this.world,300,400,150,10,{isStatic:true});
        Matter.Body.rotate(rightslant.physicsBox,-Math.PI/4);
        let bottom = this.addCrate(this.world,175,450,100,10,{isStatic:true});
        this.gameLoop();
    }
    gameLoop(){
        Matter.Engine.update(this.engine, 1000/60);
        for (let c of this.crates){
            c.update();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
}
customElements.define('game-component', Game)