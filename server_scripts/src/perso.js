const playerInputs = {};
const copyx = -503;
const copyy = 74;
const copyz = 91;

function startPersonalausweisCreation(player) 
{
	if (player.getTags().contains("rpn.perso")){
		player.tell(Component.yellow("Du hast schon einen Personalausweis!"));
		return;
	}
	player.runCommandSilent("tag @s add rpn.perso");
    player.tell(Component.yellow('Willkommen im Rathaus! Bitte gib deine Daten ein.'));
    player.tell(Component.yellow('Das wird deine Identität für den Rest des Servers sein, also denk gut darüber nach.'));
    askForName(player);
}

function askForName(player) {
    player.tell('Vorname (max. 11 Buchstaben):');
    playerInputs[player.username] = { step: 0, data: ['', '', '', '', ''] };
}

function handleInput(player, input) {
    const playerData = playerInputs[player.username];
    
    switch (playerData.step) {
        case 0: // First name
            if (input.length > 11) {
                player.tell('Der Vorname ist zu lang!');
                return;
            }
            playerData.data[1] = input;
            player.tell('Nachname (max. 10 Buchstaben):');
            break;
        case 1: // Last name
            if (input.length > 10) {
                player.tell('Der Nachname ist zu lang!');
                return;
            }
            playerData.data[2] = input;
            player.tell('Bitte gib deinen Geburtstag ein (DD.MM.YYYY):');
            break;
        case 2: // Birthday
            if (!/^\d{2}\.\d{2}\.\d{4}$/.test(input)) {
                player.tell('Ungültiges Format für den Geburtstag!');
                return;
            }
            playerData.data[3] = input;
            player.tell('Hauptwohnsitz ([IC] eingeben): ');
            break;
        case 3: // Residence
            if (input !== '[IC]') {
                player.tell('Bitte lies die Anweisungen.');
                return;
            }
            playerData.data[4] = input;
            player.tell(Component.yellow('Personalausweis wird erstellt...'));
            givePersonalausweis(player, playerData.data);
            delete playerInputs[player.username];
            return;
    }
    
    playerData.step++;
}

function givePersonalausweis(player, data) {
    const book = Item.of('minecraft:written_book', {
        author: '[IC] Rathaus',
        title: 'Personalausweis',
        pages: [
            JSON.stringify({
                text: "-------------------\n" +
                      "Personalausweis\n" +
                      "-------------------\n" +
                      "Vorname: " + data[1] + "\n" +
                      "Nachname: " + data[2] + "\n" +
                      "Geburtstag: " + data[3] + "\n" +
                      "Hauptwohnsitz: " + data[4] + "\n" +
                      "-------------------\n" +
                      "Lizenzen:\n" +
                      "Waffenschein: ✖\n" +
                      "Flugschein: ✖\n" +
                      "Apothekerlizenz: ✖\n" +
                      "Brauerlizenz: ✖\n"
            })
        ]
    });

    player.give(book);
    // HACK: Just put the book into the barrel by command
    player.runCommandSilent(`item replace block ${copyx} ${copyy} ${copyz} container.0 with ${book.getId()}${book.getNbt()}`);

    if (player.getTags().contains("rpn.continuescene")){
        player.runCommandSilent("cutscene 1 @p");
        player.runCommandSilent("tag @s remove rpn.continuescene");
    }
}

PlayerEvents.chat(event => {
    const player = event.player;
    const input = event.message;

    if (playerInputs[player.username]) {
        handleInput(player, input);
        event.cancel();
    }
});

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('perso')
            .requires(source => source.hasPermission(2))
            .then(Commands.argument('player', Arguments.PLAYER.create(event))
                .executes(context => {
                    const player = Arguments.PLAYER.getResult(context, 'player');
                    startPersonalausweisCreation(player);
                    return 1;
                })
            )
    );
});
