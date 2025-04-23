ItemEvents.foodEaten(event => {
    if (event.getItem().id == "kubejs:hemp_joint") {
        event.getPlayer().give(Item.of("minecraft:paper"))
    }
})