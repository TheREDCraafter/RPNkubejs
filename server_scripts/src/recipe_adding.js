ServerEvents.recipes(event => {
    event.recipes.create.milling(Item.of("minecraft:clay_ball"), Item.of("minecraft:cobblestone")).id("create:milling/clay_ball_from_cobblestone")
})
