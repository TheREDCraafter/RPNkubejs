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

function checkWoodsawRecipe(inventory) {
    for (let log of logList) {
        woodsawRecipe(inventory, log, 10, "minecraft:coal", 1, `4x ${getPlankFromLog(log)}`, false);
    }
}

StartupEvents.registry("block", event => {
    event.create("woodsaw")
        .soundType(SoundType.STONE)
        .renderType("cutout_mipped")
        .property(BlockProperties.HORIZONTAL_FACING)
        .opaque(false)
        .notSolid()
        .defaultState(state => {
            state.setValue(BlockProperties.HORIZONTAL_FACING, Direction.WEST);
        })
        .placementState(state => {
            state.setValue(BlockProperties.HORIZONTAL_FACING, state.horizontalDirection.opposite);
        })
        .blockEntity(entityInfo => {
            entityInfo.inventory(9, 1);
            entityInfo.rightClickOpensInventory();
            entityInfo.serverTick(20, 0, entity => {
                checkWoodsawRecipe(entity.inventory);
            });
        });
})
