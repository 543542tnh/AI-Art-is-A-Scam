function cycleImage(elementID, hamster) {
    const element = document.getElementById(elementID)
    hamster.current++;
    if (hamster.current >= 2) {
        hamster.current = 0;
    }
    element.src = hamster.images[hamster.current];
};
const penelopeElement = document.getElementById('penelope');

let penelope = {
    current: 0,
    images: ["Image/Asset 2.svg", "Image/NOTHING-09-02-2024.gif"]
}

penelopeElement.addEventListener('click', (event) => {
    cycleImage('penelope', penelope)
});
