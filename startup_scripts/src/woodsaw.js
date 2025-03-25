function woodsawRecipe(inventory, input, inAmount, fuel, fuelAmount, output, noFuel) {
    let foundFuel;
    let foundItem;

    if (!noFuel) {
        inventory.getAllItems().forEach(item => {
            if (Ingredient.of(fuel).test(item.getId())) {
                if (item.getCount() >= fuelAmount) {
                    foundFuel = item;
                }
            }
        })
    
        if (!foundFuel) return;
    }

    inventory.getAllItems().forEach(item => {
        if (Ingredient.of(input).test(item.getId())) {
            if (item.getCount() >= inAmount) {
                foundItem = item;
            }
        }
    })

    if (!foundItem) return;

    if (!noFuel) inventory.extractItem(inventory.find(foundFuel), fuelAmount, false);
    inventory.extractItem(inventory.find(foundItem), inAmount, false);
    inventory.insertItem(output, false);
}

function woodsawRecipe(inventory, input, inAmount, output) {
    woodsawRecipe(inventory, input, inAmount, "minecraft:coal", 1, output, false);
}

function woodsawRecipe(inventory, input, inAmount, fuel, fuelAmount, output) {
    woodsawRecipe(inventory, input, inAmount, fuel, fuelAmount, output, false);
}

function checkWoodsawRecipe(inventory) {
    for (log in logList) {
        woodsawRecipe(inventory, log, 10, "minecraft:coal", 1, `4x ${getPlankFromLog(log)}`);
    }
}

StartupEvents.registry("block", event => {
    event.create("woodsaw")
        .soundType(SoundType.STONE)
        .blockEntity(entityInfo => {
            entityInfo.inventory(9, 1);
            entityInfo.rightClickOpensInventory();
            entityInfo.serverTick(20, 0, entity => {
                checkWoodsawRecipe(entity.inventory);
            });
        });
})
