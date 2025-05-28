ServerEvents.recipes(event => {
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
    event.shapeless(
        Item.of("kubejs:fingerprint_kit", 1),
        ["minecraft:brush", "minecraft:paper"]
    )
    event.smelting(Item.of("kubejs:cannabis_bread"), "kubejs:cannabis_dough")
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_herbal", 1).withChance(0.4)],
        "meds_and_herbs:bouquet"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_vinca", 1).withChance(0.4)],
        "meds_and_herbs:vinca_leaves"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_belladonna").withChance(0.4)],
        "meds_and_herbs:belladonna_leaves"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_sweet_clover").withChance(0.4)],
        "meds_and_herbs:sweet_clover_flowers"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_chamomile").withChance(0.4)],
        "meds_and_herbs:chamomile_flowers"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_artemisia").withChance(0.4)],
        "meds_and_herbs:artemisia_leaves"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_opium").withChance(0.4)],
        "meds_and_herbs:opium_poppies"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_opium").withChance(0.4)],
        "meds_and_herbs:opium_flowers"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_aloe").withChance(0.4)],
        "meds_and_herbs:aloe_leaves"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_cocoa").withChance(0.4)],
        "minecraft:cocoa_beans"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_shrooms").withChance(0.4)],
        "minecraft:red_mushroom"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_shrooms").withChance(0.4)],
        "minecraft:brown_mushroom"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_wood").withChance(0.4)],
        "minecraft:oak_log"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_charcoal").withChance(0.4)],
        "minecraft:charcoal"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_kelp").withChance(0.4)],
        "minecraft:kelp"
    )
    event.recipes.create.milling(
        [Item.of("meds_and_herbs:powder_sugarcane").withChance(0.4)],
        "minecraft:sugar_cane"
    )
})
