StartupEvents.registry("item", event => {
    event.create("cocaine_leaf").displayName("Kokablatt").texture("kubejs:item/cocaine_leaf")

    event.create("cocaine").displayName("Kokain").maxStackSize(8).food(food => {
        food.effect("minecraft:speed", 2400, 0, 1.0).effect("minecraft:poison", 600, 1, 0.5).effect("minecraft:nausea", 200, 2, 0.2).alwaysEdible()
    }).rarity("rare").texture("kubejs:item/cocaine")

    event.create("hydrochloric_acid").displayName("Salzsäure").maxStackSize(1).texture("kubejs:item/hydrochloric_acid")
    event.create("sulfuric_acid").displayName("Schwefelsäure").maxStackSize(1).texture("kubejs:item/sulfuric_acid")
    event.create("cocaine_berries").food(food => {
        food.hunger(4).saturation(0.5).effect("minecraft:poison", 400, 0, 0.5).effect("minecraft:nausea", 400, 0, 0.5)
    }).displayName("Kokabeeren").texture("kubejs:item/cocaine_berries")
})

StartupEvents.registry("block", event => {
    event.create("cocaine_plant", "crop").dropSeed(true).displayName("Kokapflanze")
        .age(3)
        .texture(0, "kubejs:block/cocaine_plant_0")
        .texture(1, "kubejs:block/cocaine_plant_1")
        .texture(2, "kubejs:block/cocaine_plant_2")
        .texture(3, "kubejs:block/cocaine_plant_3")
        .cropSoundType()
        .crop("kubejs:cocaine_leaf")
        .crop("kubejs:cocaine_berries", 0.75)
        .growTick(tick => 60.0)
        .item(itemBuilder => {
            itemBuilder.displayName("Kokasamen").texture("kubejs:item/cocaine_plant_seed")
        })
})
