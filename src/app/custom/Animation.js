import Monster from "./Monster";

export default class Animation {
    constructor() {
        this.monsters = [];
        this.init();
    }

    init() {
        const monsterNodes = document.querySelectorAll('.monster')

        monsterNodes.forEach(monsterNode => {
            const monster = new Monster(monsterNode)

            monster.nodeElement.addEventListener("mouseover", () => this.expandMonster(monster))
            monster.nodeElement.addEventListener("mouseleave", () => this.resetMonster())
            this.monsters.push(monster)
        })

    }

    expandMonster(monster){
        monster.expand();
        monster.nodeElement.id = "expand"
        const contractMonsters = this.monsters.filter(x => {return x !== monster} )
        
        contractMonsters.forEach(monster => {
            monster.contract();
            monster.nodeElement.id ="contract"
        })
    }

    resetMonster(){
        this.monsters.forEach(monster => {
            monster.reset()
            monster.nodeElement.id ="reset"
        })
    }
}