ServerEvents.commandRegistry(event => {
    const {commands: Commands, arguments: Arguments} = event;

    // .executes marks first possible execution point, will continue to the next .then if argument is provided
    // Each .then needs to be internally closed with a .executes
    event.register(Commands.literal('fly')
        .requires(s => s.hasPermission(2))
        .executes(c => fly(c.source.player)) // Comment this line to make target mandatory
        .then(Commands.argument('target', Arguments.PLAYER.create(event))
            .executes(c => fly(Arguments.PLAYER.getResult(c, 'target')))
        )
    );

    let fly = (player) => {
        if (player.abilities.mayfly) {
            player.abilities.mayfly = false
            player.abilities.flying = false
            player.displayClientMessage(Component.gold('Flying: ').append(Component.red('disabled')), true)
        } else {
            player.abilities.mayfly = true
            player.displayClientMessage(Component.gold('Flying: ').append(Component.green('enabled')), true)
        }
        player.onUpdateAbilities()
    
        player.tell("Hello!");
    
        // Correct way to schedule a delayed task in KubeJS
        player.server.scheduleInTicks(60, () => {
            player.tell("Bye!");
        })
        return 1;
    }
    

});