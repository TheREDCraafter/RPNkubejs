ServerEvents.recipes(event => {
    event.recipes.create.milling(Item.of("minecraft:clay_ball"), Item.of("minecraft:cobblestone")).id("create:milling/clay_ball_from_cobblestone")
    event.shapeless(
        Item.of("kubejs:hydrochloric_acid"),
        ["refurbished_furniture:sea_salt", "meds_and_herbs:bottled_water", "kubejs:sulfuric_acid"]
    )
    event.shapeless(
        Item.of("kubejs:sulfuric_acid"),
        ["butcher:sulfuricacid"]
    )
    event.shapeless(
        Item.of("butcher:sulfuricacid"),
        ["kubejs:sulfuric_acid"]
    )
    event.shapeless(
        Item.of("kubejs:sulfuric_acid"),
        ["meds_and_herbs:bottled_water", "minecraft:gunpowder", "minecraft:lava_bucket"]
    )
    event.shapeless(
        Item.of("kubejs:cocaine"),
        ["kubejs:hydrochloric_acid", "3x kubejs:cocaine_leaf"]
    )
    event.campfireCooking(
        Item.of("kubejs:dried_cannabis_bud"),
        Item.of("kubejs:cannabis_bud")
    ).cookingTime(400)
    event.recipes.create.milling(
        Item.of("kubejs:grinded_cannabis"),
        Item.of("kubejs:dried_cannabis_bud")
    )
    event.shapeless(
        Item.of("kubejs:cannabis_extract"),
        ["3x kubejs:grinded_cannabis", "meds_and_herbs:alcohol_ethanol"]
    )
    event.shapeless(
        Item.of("kubejs:clean_hemp_flower", 3),
        ["3x kubejs:hemp_flower", "meds_and_herbs:alcohol_ethanol"]
    )
    event.shapeless(
        Item.of("kubejs:hemp_joint"),
        ["kubejs:clean_hemp_flower", "kubejs:grinded_cannabis", "minecraft:paper"]
    )
    event.shapeless(
        Item.of("kubejs:hemp_plant_seed", 8),
        ["8x kubejs:cannabis_plant_seed", "minecraft:honey_bottle"]
    )
    event.shapeless(
        Item.of("kubejs:cannabis_plant_seed", 8),
        ["4x farmersdelight:tomato_seeds", "4x minecraft:beetroot_seeds"]
    )
    event.shapeless(
        Item.of("kubejs:cocaine_plant_seed", 8),
        ["4x minecraft:pumpkin_seeds", "4x minecraft:wheat_seeds", "meds_and_herbs:opium_seeds"]
    )
    event.shapeless(
        Item.of("kubejs:cannabis_dough", 3),
        ["3x create:dough", "kubejs:cannabis_extract"]
    )
    event.smelting(Item.of("kubejs:cannabis_bread"), "kubejs:cannabis_dough")
})
