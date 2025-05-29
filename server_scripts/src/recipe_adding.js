function extractMixing(event, plant) {
    event.recipes.create.mixing(
        [Item.of(`meds_and_herbs:extract_${plant}`)],
        [`meds_and_herbs:powder_${plant}`, "meds_and_herbs:bottled_water"]
    ).heated()
    event.recipes.create.mixing(
        [Item.of(`meds_and_herbs:extract_${plant}`)],
        [`meds_and_herbs:powder_${plant}`, "meds_and_herbs:empty_bottle_clean", Fluid.of("minecraft:water", 1000)]
    ).heated()
}

function standardAutoFrame(event, color) {
    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_frame", {frame: `automobility:standard_${color}`}),
        [
            "RSR",
            " L ",
            "BOB"
        ],
        {
            R: "#forge:stone",
            S: `minecraft:${color}_dye`,
            L: "minecraft:leather",
            B: "minecraft:iron_ingot",
            O: "minecraft:copper_block"
        }
    )
}

function autoWheel(event, name, base, material) {
    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_wheel", {wheel: `automobility:${name}`}),
        [
            "BMB"
        ],
        {
            B: base,
            M: material
        }
    )
}

ServerEvents.recipes(event => {
    /* Custom KubeJS Recipes*/
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

    /* Meds and Herbs */

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
    extractMixing(event, "herbal")
    extractMixing(event, "vinca")
    extractMixing(event, "belladonna")
    extractMixing(event, "sweet_clover")
    extractMixing(event, "chamomile")
    extractMixing(event, "artemisia")
    extractMixing(event, "opium")

    event.recipes.create.mixing(
        [Item.of(`meds_and_herbs:extract_mushroom`)],
        [`meds_and_herbs:powder_shrooms`, "meds_and_herbs:bottled_water"]
    ).heated()
    event.recipes.create.mixing(
        [Item.of(`meds_and_herbs:extract_mushroom`)],
        [`meds_and_herbs:powder_shrooms`, "meds_and_herbs:empty_bottle_clean", Fluid.of("minecraft:water", 1000)]
    ).heated()

    event.recipes.create.mixing(
        [Item.of(`meds_and_herbs:extract_caffeine`)],
        [`meds_and_herbs:powder_cocoa`, "meds_and_herbs:bottled_water"]
    ).heated()
    event.recipes.create.mixing(
        [Item.of(`meds_and_herbs:extract_caffeine`)],
        [`meds_and_herbs:powder_cocoa`, "meds_and_herbs:empty_bottle_clean", Fluid.of("minecraft:water", 1000)]
    ).heated()

    event.recipes.create.mixing(
        [Item.of(`meds_and_herbs:extract_glucose`)],
        [`meds_and_herbs:powder_sugarcane`, "meds_and_herbs:bottled_water"]
    ).heated()
    event.recipes.create.mixing(
        [Item.of(`meds_and_herbs:extract_glucose`)],
        [`meds_and_herbs:powder_sugarcane`, "meds_and_herbs:empty_bottle_clean", Fluid.of("minecraft:water", 1000)]
    ).heated()

    event.recipes.create.mixing(
        [Item.of(`meds_and_herbs:material_agar`)],
        [`meds_and_herbs:powder_kelp`, "meds_and_herbs:bottled_water"]
    ).heated()
    event.recipes.create.mixing(
        [Item.of(`meds_and_herbs:material_agar`)],
        ["meds_and_herbs:powder_kelp", "meds_and_herbs:empty_bottle_clean", Fluid.of("minecraft:water", 1000)]
    ).heated()

    event.recipes.create.mixing(
        [Item.of(`meds_and_herbs:alcohol_methanol`)],
        [`meds_and_herbs:powder_wood`, "meds_and_herbs:bottled_water"]
    ).heated()
    event.recipes.create.mixing(
        [Item.of(`meds_and_herbs:alcohol_methanol`)],
        ["meds_and_herbs:powder_wood", "meds_and_herbs:empty_bottle_clean", Fluid.of("minecraft:water", 1000)]
    ).heated()

    event.recipes.create.mixing(
        [Item.of("meds_and_herbs:beveragebucket")],
        ["meds_and_herbs:raw_beverage_bucket"]
    ).superheated()

    event.recipes.create.mixing(
        [Item.of("meds_and_herbs:alcohol_ethanol"), Item.of("minecraft:bucket")],
        ["meds_and_herbs:beveragebucket", "meds_and_herbs:empty_bottle_clean"]
    ).superheated()

    event.recipes.create.mixing(
        [Item.of("meds_and_herbs:poison_hpp", 2)],
        ["meds_and_herbs:poison", "meds_and_herbs:belladonna_poison"]
    ).superheated()

    event.recipes.create.mixing(
        [Item.of("meds_and_herbs:medicine_morphine", 2)],
        ["meds_and_herbs:extract_opium", "meds_and_herbs:alcohol_ethanol"]
    ).superheated()

    event.recipes.create.mixing(
        [Item.of("meds_and_herbs:medicine_penicillin", 1)],
        ["meds_and_herbs:penicillium_coal_powder", "meds_and_herbs:alcohol_ethanol"]
    ).superheated()

    /* Automobility */
    /* Frames */
    // Motorcars

    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_frame", {frame: "automobility:wooden_motorcar"}),
        [
            " RSR ",
            "PPLPP",
            " BOB "
        ],
        {
            R: "minecraft:redstone",
            S: "#minecraft:stone_crafting_materials",
            L: "minecraft:leather",
            P: "#forge:stone",
            B: "#minecraft:logs",
            O: "minecraft:iron_ingot"
        }
    )

    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_frame", {frame: "automobility:copper_motorcar"}),
        [
            " RSR ",
            "PPLPP",
            " BOB "
        ],
        {
            R: "minecraft:redstone",
            S: "#forge:stone",
            L: "minecraft:leather",
            P: "#minecraft:planks",
            B: "minecraft:copper_block",
            O: "minecraft:copper_ingot"
        }
    )

    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_frame", {frame: "automobility:steel_motorcar"}),
        [
            " RSR ",
            "PPLPP",
            " BOB "
        ],
        {
            R: "minecraft:redstone",
            S: "#forge:stone",
            L: "minecraft:leather",
            P: "#minecraft:planks",
            B: "minecraft:iron_block",
            O: "minecraft:iron_ingot"
        }
    )

    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_frame", {frame: "automobility:golden_motorcar"}),
        [
            " RSR ",
            "PPLPP",
            " BOB "
        ],
        {
            R: "minecraft:redstone",
            S: "minecraft:nether_brick",
            L: "minecraft:leather",
            P: "#minecraft:planks",
            B: "minecraft:gold_block",
            O: "minecraft:gold_ingot"
        }
    )

    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_frame", {frame: "automobility:bejeweled_motorcar"}),
        [
            " RSR ",
            "PPLPP",
            " BOB "
        ],
        {
            R: "minecraft:redstone",
            S: "minecraft:obsidian",
            L: "minecraft:leather",
            P: "#minecraft:planks",
            B: "minecraft:iron_ingot",
            O: "minecraft:diamond_block"
        }
    )

    // Tractors

    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_frame", {frame: "automobility:red_tractor"}),
        [
            "RSR",
            " L ",
            "BOB"
        ],
        {
            R: "#forge:stone",
            S: "minecraft:red_dye",
            L: "minecraft:iron_bars",
            B: "minecraft:iron_ingot",
            O: "minecraft:copper_block"
        }
    )
    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_frame", {frame: "automobility:yellow_tractor"}),
        [
            "RSR",
            " L ",
            "BOB"
        ],
        {
            R: "#forge:stone",
            S: "minecraft:yellow_dye",
            L: "minecraft:iron_bars",
            B: "minecraft:iron_ingot",
            O: "minecraft:copper_block"
        }
    )
    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_frame", {frame: "automobility:green_tractor"}),
        [
            "RSR",
            " L ",
            "BOB"
        ],
        {
            R: "#forge:stone",
            S: "minecraft:green_dye",
            L: "minecraft:iron_bars",
            B: "minecraft:iron_ingot",
            O: "minecraft:copper_block"
        }
    )
    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_frame", {frame: "automobility:blue_tractor"}),
        [
            "RSR",
            " L ",
            "BOB"
        ],
        {
            R: "#forge:stone",
            S: "minecraft:blue_dye",
            L: "minecraft:iron_bars",
            B: "minecraft:iron_ingot",
            O: "minecraft:copper_block"
        }
    )

    // Standards

    standardAutoFrame(event, "white")
    standardAutoFrame(event, "orange")
    standardAutoFrame(event, "magenta")
    standardAutoFrame(event, "light_blue")
    standardAutoFrame(event, "yellow")
    standardAutoFrame(event, "lime")
    standardAutoFrame(event, "pink")
    standardAutoFrame(event, "gray")
    standardAutoFrame(event, "light_gray")
    standardAutoFrame(event, "cyan")
    standardAutoFrame(event, "purple")
    standardAutoFrame(event, "blue")
    standardAutoFrame(event, "brown")
    standardAutoFrame(event, "green")
    standardAutoFrame(event, "red")
    standardAutoFrame(event, "black")

    /* Engines */

    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_engine", {engine: "automobility:stone"}),
        [
            "MSFSM"
        ],
        {
            M: "#minecraft:logs",
            S: "#minecraft:stone_crafting_materials",
            F: "minecraft:furnace"
        }
    )

    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_engine", {engine: "automobility:copper"}),
        [
            "MSFSM"
        ],
        {
            M: "minecraft:copper_ingot",
            S: "minecraft:iron_nugget",
            F: "minecraft:furnace"
        }
    )

    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_engine", {engine: "automobility:iron"}),
        [
            "MSFSM"
        ],
        {
            M: "minecraft:iron_ingot",
            S: "#minecraft:stone_crafting_materials",
            F: "minecraft:furnace"
        }
    )

    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_engine", {engine: "automobility:gold"}),
        [
            "MSFSM"
        ],
        {
            M: "minecraft:gold_ingot",
            S: "#minecraft:stone_crafting_materials",
            F: "minecraft:furnace"
        }
    )

    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_engine", {engine: "automobility:diamond"}),
        [
            "MSFSM"
        ],
        {
            M: "minecraft:diamond",
            S: "minecraft:iron_ingot",
            F: "minecraft:furnace"
        }
    )

    event.recipes.create.mechanical_crafting(
        Item.of("automobility:automobile_engine", {engine: "automobility:creative"}),
        [
            "MSFSM"
        ],
        {
            M: "minecraft:netherite_ingot",
            S: "minecraft:obsidian",
            F: "minecraft:furnace"
        }
    )

    /* Wheels */
    autoWheel(event, "carriage", "#minecraft:planks", "minecraft:stick")
    autoWheel(event, "plated", "#minecraft:logs", "minecraft:copper_ingot")
    autoWheel(event, "street", "#minecraft:stone_crafting_materials", "minecraft:iron_ingot")
    autoWheel(event, "gilded", "minecraft:nether_brick", "minecraft:gold_ingot")
    autoWheel(event, "bejeweled", "minecraft:obsidian", "minecraft:diamond")
    autoWheel(event, "standard", "minecraft:black_wool", "minecraft:iron_nugget")
    autoWheel(event, "tractor", "minecraft:black_wool", "minecraft:gold_nugget")
    autoWheel(event, "off_road", "minecraft:black_wool", "minecraft:iron_block")
    autoWheel(event, "steel", "minecraft:black_wool", "minecraft:iron_ingot")

})
