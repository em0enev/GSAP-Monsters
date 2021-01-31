import gsap from "gsap/gsap-core";

export default class Monster {
    constructor(nodeElement) {
        this.nodeElement = nodeElement;
    }
    expand() {
       gsap.to(this.nodeElement, { width: '80%' })
    }

    contract() {
        gsap.to(this.nodeElement, { width: "4%" })
    }

    reset() {
        gsap.to(this.nodeElement, { width: "16.6%" })
    }
}