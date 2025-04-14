ServerEvents.recipes(event => {
    event.recipes.create.milling(Item.of("minecraft:clay_ball"), Item.of("minecraft:cobblestone")).id("create:milling/clay_ball_from_cobblestone")
    event.shapeless(
        "kubejs:hydrochloric_acid",
        ["refurbished_furniture:sea_salt", "meds_and_herbs:bottled_water", "kubejs:sulfuric_acid"]
    )
    event.shapeless(
        "kubejs:sulfuric_acid",
        ["meds_and_herbs:bottled_water", "minecraft:gunpowder", "minecraft:lava_bucket"]
    )
    event.shapeless(
        "kubejs:cocaine",
        ["kubejs:hydrochloric_acid", "kubejs:cocaine_leaf", "kubejs:cocaine_leaf", "kubejs:cocaine_leaf"]
    )
})
