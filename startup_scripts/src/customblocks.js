// const { $BlockEntityJS } = require("packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityJS");
// const { $ItemStack } = require("packages/net/minecraft/world/item/$ItemStack");

function checkWoodsawRecipe(inventory) {
    // ONLY FOR INTELLISENSE, REMOVE LATER
    // const entity = new $BlockEntityJS();
    // const inventory = entity.inventory;
    // UNTIL HERE
    
    inventory.getAllItems().forEach(item => { // AGAIN HERE
        // const item = new $ItemStack(); // UNTIL HERE
        if (item.getId() === "minecraft:oak_log") {
            if (item.getCount() >= 10) {
                inventory.extractItem(inventory.find(item), 10);
                inventory.insertItem("4x minecraft:oak_planks", false);
            }
        }
    })

}

StartupEvents.registry("block", event => {
    event.create("woodsaw")
        .soundType(SoundType.STONE)
        .blockEntity(entityInfo => {
            entityInfo.inventory(3, 3);
            entityInfo.rightClickOpensInventory();
            entityInfo.serverTick(20, 0, entity => {
                checkWoodsawRecipe(entity.inventory);
            });
        });
})