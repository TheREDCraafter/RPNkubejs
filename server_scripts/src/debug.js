ServerEvents.commandRegistry(event => {

    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal("rpndbg")
        .requires(source => source.hasPermission(2))
        .then(Commands.literal("forceperso")
            .executes(context => {
                const player = context.source.player;
                player.runCommandSilent("tag @s remove rpn.perso");
                player.runCommandSilent("perso @s");
                return 1;
            })
        )
        .then(Commands.literal("unperso")
            .executes(context => {
                const player = context.source.player;
                player.runCommandSilent("tag @s remove rpn.perso");
                return 1;
            })
            .then(Commands.argument("player", Arguments.PLAYER.create(event))
                .executes(context => {
                    const player = Arguments.PLAYER.getResult(context, "player");
                    player.runCommandSilent("tag @s remove rpn.perso");
                    return 1;
                })
            )
        )
    );
});
