ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('isa_tell')
            .then(Commands.argument('player', Arguments.PLAYER.create(event))
            .then(Commands.argument('message', Arguments.STRING.create(event))
                .executes(context => {
                    if (!context.source.player.getTags().contains("rpn.isa")) {
                        context.source.player.tell("You do not have permission to use this command.");
                        return 0;
                    }
                    const player = Arguments.PLAYER.getResult(context, 'player');
                    const message = Arguments.STRING.getResult(context, 'message');
                    player.getServer().runCommandSilent(`tellraw ${player.name.string} [{"text":"<ISA Agent> ","color":"red"},{"text":"${message}", "color":"white"}]`)
                    player.getServer().runCommandSilent(`tellraw @a[tag=rpn.isa,name=!${player.name.string}] [{"text":"<ISA Agent> ","color":"red"},{"text":"${message}", "color":"white"}]`)
                    return 1;
                })
            )
    ));
});
