ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('isa_tell')
            .requires(source => source.getTags().contains("rpn.isa"))
            .then(Commands.argument('player', Arguments.PLAYER.create(event))
            .then(Commands.argument('message', Arguments.STRING.create(event))
                .executes(context => {
                    const player = Arguments.PLAYER.getResult(context, 'player');
                    const message = Arguments.STRING.getResult(context, 'message');
                    player.tell("[ISA Agent] " + message);
                    context.server.getPlayers().forEach(p => {
                        if (p.getTags().contains("rpn.isa")) {
                            p.tell("[ISA Agent] " + message);
                        }
                    })
                    return 1;
                })
            )
    ));
});
