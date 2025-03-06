ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal("rathaus")
            .requires(source => source.hasPermission(2))
            .then(Commands.literal("ring")
                .executes(context => {
                    context.source.player.runCommandSilent("playsound minecraft:block.bell.use master @s[tag=!rpn.ring] ~ ~ ~ 1 1");
                    context.source.player.getServer().players.forEach(element => {
                        element.runCommandSilent("playsound minecraft:entity.experience_orb.pickup master @s[tag=rpn.ring] ~ ~ ~ 1 1");
                        element.runCommandSilent(`tellraw @s[tag=rpn.ring] {"text":"Im Rathaus wurde geklingelt!","color":"green","bold":true,"hoverEvent":{"action":"show_text","value":[{"text":"${context.source.player.getString()}"}]}}`);
                    });
                    return 1;
                })
            )
    );
});
