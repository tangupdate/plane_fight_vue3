import { Circle, Graphics } from 'pixi.js'
import { createRenderer } from 'vue'

const renderer = createRenderer({
    createElement(type): void {
        let element
        if (type === 'circle') {
            element = new Circle()
            element.beginFill(0xff0000)
            element.drawCircle(20, 0, 50, 50)
            element.endFill()
            // element.
        } else if (type === 'rect') {
            element = new Graphics()
            element.beginFill(0xff0000)
            element.drawRect(0, 0, 50, 50)
            element.endFill()
        }
        return element
    },
    insert(el, parent) {
        parent.addChild(el)
    },
    patchProp(el, key, prevValue, nextValue) {
        el[key] = nextValue
    },
    createText(text) {
        console.log(text);
    },
    setElementText(node, text) {
        node.textContent = text
    }
})

export function createApp(rootComponent) {
    return renderer.createApp(rootComponent)
}