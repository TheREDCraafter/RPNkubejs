
//  Goal {
//   location: [x, y, z],
//   pre: [String],
//   after: [String],
//   next: Boolean
//   after_action?: (player) => void
//   pre_action?: (player) => void
// }
//
// Actions happen after their corresponding messages.

const goals = [
    {
        location: [-431, 72.5, 80.5],
        pre: [
            "Bitte verlasse den Server nicht, während du im Tutorial bist.",
            "Willkommen auf Roleplay.net!",
            "Deine erste Aufgabe ist es, zum Rathaus zu gehen.",
            "Folge einfach der grünen Linie."
        ],
        after: [
            "Befolge jetzt die Anweisungen im Chat, um deinen Personalausweis zu bekommen."
        ],
        next: false, // Pause for the ID card
        after_action: (player) => { id_card(player); }
    },
    {
        location: [-440.5, 67.5, 37.5],
        pre: [
            "Gut gemacht!",
            "Dir werden jetzt die wichtigsten Teile des Staats gezeigt.",
            "Denk dran, an wichtigen Orten mit 'B' Waypoints zu setzen."
        ],
        after: [],
        next: true
    },
    {
        location: [-494.5, 69.5, -33.5],
        pre: [],
        after: [],
        next: true
    },
    {
        location: [-493.5, 68.5, -127.5],
        pre: [],
        after: [],
        next: true
    },
    {
        location: [-599.5, 68.5, -126.5],
        pre: [
            "Das ist das Industriegebiet. Hier können Firmen Fabrikgrundstücke kaufen."
        ],
        after: [],
        next: true
    },
    {
        location: [-600.5, 68.5, -171],
        pre: [],
        after: [],
        next: true
    },
    {
        location: [-691.5, 66.5, -156.5],
        pre: [
            "Hier ist die Arztpraxis, gegenüber der Billigladen.",
            "Er ist ziemlich günstig, hat dafür nicht immer Vorrat."
        ],
        after: [],
        next: true
    },
    {
        location: [-385.5, 65.5, -132],
        pre: [
            "Jetzt sind wir in Funkenbruch.",
            "Hier gibt es günstige Wohnungen und einen Autohandel."
        ],
        after: [],
        next: true
    },
    {
        location: [-237.5, 64.5, -131.5],
        pre: [
            "Hier ist die Polizeistation.",
            "Hier kannst du Anzeigen erstatten und deinen Führerschein machen.",
            "Außerdem ist am Ende der Straße das Casino."
        ],
        after: [],
        next: true
    },
    {
        location: [-202, 70.5, -56],
        pre: [],
        after: [],
        next: true
    },
    {
        location: [-198, 68.5, 14],
        pre: [
            "Willkommen in der Altstadt, dem Herzen von Infinity City.",
            "Gerade befindest du dich vor der Bank."
        ],
        after: [],
        next: true
    },
    {
        location: [-203.5, 67.5, 34.5],
        pre: [
            "Das hier ist der Bioladen.",
            "Hier bekommst du Essen und manche anderen hilfreichen Sachen."
        ],
        after: [],
        next: true
    },
    {
        location: [-155, 70.5, -3.5],
        pre: [
            "Hier ist die Schmiede.",
            "Hier bekommst du Werkzeuge und Rüstung."
        ],
        after: [],
        next: true
    },
    {
        location: [-141.5, 70.5, -55.5],
        pre: [
            "Das ist die Baufirma.",
            "Hier kannst du sowohl Materialien kaufen als auch Bauaufträge stellen oder annehmen.",
            "Rechts siehst du verfügbare Jobs."
        ],
        after: [
            "Schließlich ist hier der Hafen mit einem schwarzen Brett für noch mehr Jobangebote.",
            "Das war's mit der Stadttour. Viel Spaß auf dem Server!"
        ],
        next: false // No further quests after this one.
    }
];

function id_card(player) {
    player.runCommandSilent("tag @s add rpn.continuescene");
    player.runCommandSilent("perso @s");
}

function distanceBetween(pos1, pos2) {
    return Math.sqrt(
        Math.pow(pos1.x() - pos2[0], 2) +
        Math.pow(pos1.y() - pos2[1], 2) +
        Math.pow(pos1.z() - pos2[2], 2)
    );
}

function startCutscene(player, index) {
    if (index >= goals.length) {
        player.data.cutsceneIndex = undefined;
        return;
    }

    let goal = goals[index];
    goal.pre.forEach(message => player.tell(Component.gold(message)));
    if (goal.pre_action) { goal.pre_action(player); }
    player.data.cutsceneIndex = index;
}

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('cutscene')
            .requires(source => source.hasPermission(2))
            .then(Commands.argument('index', Arguments.INTEGER.create(event))
                .then(Commands.argument('player', Arguments.PLAYER.create(event))
                .executes(context => {
                    const index = Arguments.INTEGER.getResult(context, 'index');
                    const player = Arguments.PLAYER.getResult(context, 'player');
                    
                        if (index < 0 || index >= goals.length) {
                            player.tell("Invalid cutscene index, stopping quests.");
                            player.data.cutsceneIndex = undefined;
                            return 0;
                        }

                        startCutscene(player, index);
                        return 1;
                    })
                )
            )
    );
});


ServerEvents.tick(event => {
    event.server.players.forEach(player => {
        if (player.data.cutsceneIndex !== undefined) {
            let pCutsceneIndex = Number(player.data.cutsceneIndex);
            
            if (pCutsceneIndex < 0 || pCutsceneIndex >= goals.length) {
                pCutsceneIndex = undefined;
                return;
            }

            let goal = goals[pCutsceneIndex];

            if (goal === undefined) {
                return;
            }

            let playerPos = player.position();
            let distance = distanceBetween(playerPos, goal.location);

            if (distance <= 3) {
                
                goal.after.forEach(message => player.tell(Component.green(message)));

                if (goal.after_action) { goal.after_action(player); }

                if (goal.next){
                    startCutscene(player, pCutsceneIndex + 1);
                }
                else {
                    player.data.cutsceneIndex = undefined;
                    return;
                }
            } else {
                let minParticles = 20;
                let maxParticles = 200;
                let maxDistance = 200;
                let particleCount = Math.min(
                    Math.max(
                        Math.floor(distance / maxDistance * maxParticles),
                        minParticles
                    ),
                    maxParticles
                );

                let dx = goal.location[0] - playerPos.x();
                let dy = goal.location[1] - playerPos.y();
                let dz = goal.location[2] - playerPos.z();
                
                for (let i = 0; i < particleCount; i++) {
                    let t = i / (particleCount - 1);
                    let x = playerPos.x() + dx * t;
                    let y = playerPos.y() + dy * t + 0.3;
                    let z = playerPos.z() + dz * t;
                    
                    player.runCommandSilent(`particle minecraft:dust 0 1 0 0.7 ${x} ${y} ${z} 0 0 0 0.01 1 force @s`);
                }
            }
        }
    });
});
