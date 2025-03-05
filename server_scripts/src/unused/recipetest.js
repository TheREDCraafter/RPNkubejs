ServerEvents.recipes(event => {
    event.shaped(
        "16x minecraft:barrier", // Either use a string...
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            A: "minecraft:glass",
            B: "minecraft:nether_star"
        }
    );

    event.shapeless(
        Item.of("minecraft:totem_of_undying", 3), // ...or an Item instance
        [
            "minecraft:totem_of_undying",
            "minecraft:totem_of_undying"
        ]
    );

    
});