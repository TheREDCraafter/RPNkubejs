ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal("rathaus")
            .requires(source => source.hasPermission(2))
            .then(Commands.literal("ring")
                .executes(context => {
                    context.source.player.getServer().players.forEach(element => {
                        event.server.runCommandSilent(`playsound minecraft:entity.experience_orb.pickup master ${element.name.string}[tag=rpn.ring] ~ ~ ~ 1 1`);
                        event.server.runCommandSilent(`tellraw ${element.name.string}[tag=rpn.ring] {"text":"Im Rathaus wurde geklingelt!","color":"green","bold":true,"hoverEvent":{"action":"show_text","value":[{"text":"${context.source.player.getName().getString()}"}]}}`);
                    });
                    return 1;
                })
            )
    );
});
