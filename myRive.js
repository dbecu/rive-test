//RIVE
const btn = document.querySelector('a')
const stateName = document.querySelector('p')

const r = new rive.Rive({
    // src: "./rive-doesntwork.riv",
    src: "./rive-works.riv",
    canvas: document.getElementById('canvas'),
    // artboard: 'Person',
    autoplay: true,
    stateMachines: 'State Machine 1',
    fit: rive.Fit.cover
});
