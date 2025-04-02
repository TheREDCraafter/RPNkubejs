const logList = [
    // VANILLA
    "minecraft:oak_log",
    "minecraft:stripped_oak_log",
    "minecraft:spruce_log",
    "minecraft:stripped_spruce_log",
    "minecraft:birch_log",
    "minecraft:stripped_birch_log",
    "minecraft:jungle_log",
    "minecraft:stripped_jungle_log",
    "minecraft:acacia_log",
    "minecraft:stripped_acacia_log",
    "minecraft:dark_oak_log",
    "minecraft:stripped_dark_oak_log",
    "minecraft:mangrove_log",
    "minecraft:stripped_mangrove_log",
    "minecraft:cherry_log",
    "minecraft:stripped_cherry_log",
    "minecraft:crimson_stem",
    "minecraft:stripped_crimson_stem",
    "minecraft:warped_stem",
    "minecraft:stripped_warped_stem",
    // MODDED
    "quark:ancient_log",
    "quark:stripped_ancient_log",
    "quark:azalea_log",
    "quark:stripped_azalea_log",
    // TODO: ...
]

function getPlankFromLog(logId) {
    const logToPlankMap = {
        "minecraft:oak_log": "minecraft:oak_planks",
        "minecraft:spruce_log": "minecraft:spruce_planks",
        "minecraft:birch_log": "minecraft:birch_planks",
        "minecraft:jungle_log": "minecraft:jungle_planks",
        "minecraft:acacia_log": "minecraft:acacia_planks",
        "minecraft:dark_oak_log": "minecraft:dark_oak_planks",
        "minecraft:mangrove_log": "minecraft:mangrove_planks",
        "minecraft:cherry_log": "minecraft:cherry_planks",
        "minecraft:crimson_stem": "minecraft:crimson_planks",
        "minecraft:warped_stem": "minecraft:warped_planks",
    }
  
    if (logToPlankMap.hasOwnProperty(logId)) {
        return logToPlankMap[logId]
    }
  
    const parts = logId.split(":")
    const modId = parts[0]
    let woodType = parts[1].replace("stripped_", "").replace("_log", "").replace("_stem", "")
    
    if (modId === "minecraft") {
        return `minecraft:${woodType}_planks`
    }

    return `${modId}:${woodType}_planks`
}
