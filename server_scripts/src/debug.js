ServerEvents.commandRegistry(event => {

    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal("debug")
        .requires(source => source.hasPermission(2))
        .then(Commands.literal("perso")
            .executes(context => {
                const player = context.source.player;
                player.runCommandSilent("tag @s remove rpn.perso");
                player.runCommandSilent("perso @s");
                return 1;
            })
    ));

});