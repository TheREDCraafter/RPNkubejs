StartupEvents.registry("item", event => {
    event.create("cocaine_seeds").displayName("Kokasamen").texture("kubejs:item/cocaine_seeds")

    event.create("cocaine_leaf").displayName("Kokablatt").texture("kubejs:item/cocaine_leaf")

    event.create("cocaine").displayName("Kokain").maxStackSize(8).food(food => {
        food.effect("minecraft:speed", 2400, 0, 1.0).effect("minecraft:poison", 600, 1, 0.5).effect("minecraft:nausea", 10, 2, 0.2).alwaysEdible()
    }).rarity("uncommon").texture("kubejs:item/cocaine")
})

StartupEvents.registry("block", event => {
    event.create("cocaine_plant", "crop").displayName("Kokapflanze")
        .age(3)
        .texture(0, "kubejs:block/cocaine_plant_0")
        .texture(1, "kubejs:block/cocaine_plant_1")
        .texture(2, "kubejs:block/cocaine_plant_2")
        .texture(3, "kubejs:block/cocaine_plant_3")
        .cropSoundType()
        .crop("2x cocaine_leaf", 0.75)
        .crop("cocaine_seeds")
        // .growTick(60)
        .item(Item.of("cocaine_seeds"))
})
