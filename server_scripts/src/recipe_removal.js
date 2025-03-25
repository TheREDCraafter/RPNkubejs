ServerEvents.recipes(event => {
    event.remove({
        input: "#minecraft:logs",
        output: "#minecraft:planks"
    });
    event.remove({
        input: "minecraft:wheat",
        output: "minecraft:bread"
    })
})