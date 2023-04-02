import { Application } from 'pixi.js'
const game = new Application({
    width: 500,
    height: 500,
    resolution: window.devicePixelRatio || 1
})

document.body.append(game.view)


export function getRootComponent() {
    return game.stage
}