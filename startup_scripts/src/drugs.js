StartupEvents.registry("item", event => {
    event.create("cocaine_leaf").texture("kubejs:item/cocaine_leaf")

    event.create("cocaine").maxStackSize(8).food(food => {
        food.effect("meds_and_herbs:adrenaline", 2400, 0, 1.0).effect("minecraft:poison", 200, 1, 0.2).effect("minecraft:nausea", 200, 2, 0.2).effect("minecraft:regeneration", 200, 1, 1.0).alwaysEdible()
    }).rarity("rare").texture("kubejs:item/cocaine")

    event.create("hydrochloric_acid").maxStackSize(1).texture("kubejs:item/hydrochloric_acid")
    event.create("sulfuric_acid").maxStackSize(1).texture("kubejs:item/sulfuric_acid")
    event.create("cocaine_berries").food(food => {
        food.hunger(4).saturation(0.5).effect("minecraft:poison", 400, 0, 0.5).effect("minecraft:nausea", 400, 0, 0.5)
    }).texture("kubejs:item/cocaine_berries")

    event.create("cannabis_bud").texture("kubejs:item/cannabis_bud").food(food => {
        food.hunger(3).saturation(0.5).effect("minecraft:slowness", 400, 0, 0.8).effect("minecraft:weakness", 400, 0, 0.6).effect("minecraft:poison", 200, 0, 0.5)
    })
    event.create("dried_cannabis_bud").texture("kubejs:item/cannabis_bud").food(food => {
        food.hunger(5).saturation(1.5).effect("minecraft:nausea", 300, 1, 0.4).effect("minecraft:regeneration", 100, 1, 0.7)
    })
    event.create("grinded_cannabis").texture("kubejs:item/grinded_cannabis")
    event.create("cannabis_extract").texture("kubejs:item/cannabis_extract").food(food => {
        food.hunger(3).saturation(0.5).effect("minecraft:slowness", 300, 0, 0.5).effect("minecraft:weakness", 300, 0, 0.5).effect("minecraft:poison", 200, 1, 0.8).alwaysEdible()
    })

    event.create("hemp_flower").texture("kubejs:item/hemp_flower").food(food => {
        food.hunger(2).saturation(0.5).effect("minecraft:weakness", 300, 0, 1.0).effect("minecraft:poison", 200, 1, 0.8)
    })
    event.create("clean_hemp_flower").texture("kubejs:item/clean_hemp_flower").food(food => {
        food.hunger(3).saturation(0.8).effect("minecraft:nausea", 200, 0, 0.4).effect("minecraft:speed", 400, 0, 0.8)
    })
    event.create("hemp_joint").texture("kubejs:item/hemp_joint").food(food => {
        food.hunger(2).saturation(1.0).effect("meds_and_herbs:ultraviolet_vulnerability", 600, 0, 0.15).effect("meds_and_herbs:adrenaline", 1200, 0, 1.0).effect("minecraft:nausea", 400, 1, 0.4).alwaysEdible()
    })
})

StartupEvents.registry("block", event => {
    event.create("cocaine_plant", "crop").dropSeed(true)
        .age(3)
        .texture(0, "kubejs:block/cocaine_plant_0")
        .texture(1, "kubejs:block/cocaine_plant_1")
        .texture(2, "kubejs:block/cocaine_plant_2")
        .texture(3, "kubejs:block/cocaine_plant_3")
        .cropSoundType()
        .crop("kubejs:cocaine_leaf")
        .crop("kubejs:cocaine_berries", 0.75)
        .growTick(_tick => 60.0)
        .item(itemBuilder => {
            itemBuilder.texture("kubejs:item/cocaine_plant_seed")
        }
    )

    event.create("cannabis_plant", "crop").dropSeed(true)
        .age(3)
        .texture(0, "kubejs:block/cannabis_plant_0")
        .texture(1, "kubejs:block/cannabis_plant_1")
        .texture(2, "kubejs:block/cannabis_plant_2")
        .texture(3, "kubejs:block/cannabis_plant_3")
        .cropSoundType()
        .crop("kubejs:cannabis_bud", 0.75)
        .growTick(_tick => 60.0)
        .item(itemBuilder => {
            itemBuilder.texture("kubejs:item/cannabis_plant_seed")
        }
    )

    event.create("hemp_plant", "crop").dropSeed(true)
        .age(3)
        .texture(0, "kubejs:block/hemp_plant_0")
        .texture(1, "kubejs:block/hemp_plant_1")
        .texture(2, "kubejs:block/hemp_plant_2")
        .cropSoundType()
        .crop("kubejs:hemp_flowers", 0.75)
        .growTick(_tick => 60.0)
        .item(itemBuilder => {
            itemBuilder.texture("kubejs:item/hemp_plant_seed")
        }
    )

})
