function give_pferd(player) {
    let pferd = Item.of('minecraft:writable_book', "{RepairCost:0,display:{Name:'{\"text\":\"Antrag auf Pferdezulassung\"}'},pages:[\"Antrag auf\n\
Pferdezulassung\n\
===================\n\
Name:\n\
Vorname:\n\
\n\
Pferdename:\n\
(Name) [IC-XX]\n\
\n\
Geschwindigkeit:\n\
Sprunghöhe:\n\
\"]}")
    player.give(pferd)
}

function give_steuer(player) {
    let steuer = Item.of('minecraft:writable_book', "{RepairCost:0,display:{Name:'{\"text\":\"Steuererklärung\"}'},pages:[\"--Steuererklärung--\n\
\n\
Name: Mustermann\n\
\n\
Vorname: Max\n\
\n\
Geburtstag:01.01.1800\n\
\n\
Geschlecht: m/w/d\n\
\n\
Hauptwohnsitz: Infinity\",\"----  Immobilien  ----\n\
\n\
-- Immobilie 1 --\n\
Art: Wohnung / Haus\n\
Adresse: Straße 1\n\
Größe (m2): 100\n\
\n\
-- Immobilie 2 --\n\
Art: Wohnung / Haus\n\
Adresse: Straße 2\n\
Größe (m2): 100 \",\"---- Einkommen ----\n\
\n\
-- Beruf 1 --\n\
Gehalt: 100$\n\
Firma: Musterfirma\n\
Tätigkeit: Müllmann\n\
\n\
-- Beruf 2 --\n\
Gehalt: 100$\n\
Firma: Musterfirma 2\n\
Tätigkeit: Müllfrau\",\"---- Umsatz ----\n\
\n\
-- Firma 1 --\n\
Name: Musterfirma\n\
Sektor: Bauarbeiten\n\
Umsatz: 300$\n\
Anzahl Mitarbeiter: 2 \n\
\n\
-- Firma 2 --\n\
Name: Musterfirma 2\n\
Sektor: Finanzen\n\
Umsatz: 1000$\n\
Anzahl Mitarbeiter: 4\",\"-- Firmenausgaben --\n\
\n\
-- Ausgabe 1 --\n\
Höhe: 10$\n\
Firma: Musterfirma\n\
Grund: Auftrag / Büro\n\
\n\
-- Ausgabe 2 --\n\
Höhe: 20$\n\
Firma: Musterfirma 2\n\
Grund: Bürokosten\",\"---- Regeln ----\n\
\n\
Sie sind verpflichtet ein mal im Monat eine Steuererklärung an das Büro des Finanzministeriums zu senden. Alle Angaben müssen wahrheitsgemäß sein. Steuerhinterziehung wird mit Haftstrafen geahndet. Das Finanzministerium\",\"kann gelegentlich auch Kontrollen durchführen, ob alle Steuern korrekt abgerechnet werden. Dafür können Firmen überwacht und durchleuchtet werden. Auch die Größe von Wohnungen und Häusern werden überprüft.\"]}")

    player.give(steuer)
}

function giveWaffen(player) {
    let waffen = Item.of('minecraft:writable_book', `{RepairCost:0,display:{Name:'{\"text\":\"Antrag auf Waffenschein\"}'},pages:[\"-------------------\n\
Antrag auf Waffenschein\n\
-------------------\n\
Name:\n\
\n\
Vorname:\n\
\n\
Geboren:\n\
\n\
Grund:\n\
\n\
\n\
\n\
\"]}`);

    player.give(waffen)
}

function giveImport(player) {
    let importantrag = Item.of('minecraft:writable_book', `{RepairCost:0,display:{Name:'{\"text\":\"Importantrag\"}'},pages:[\"-------------------
Importantrag
-------------------
Name:

Vorname:

Geboren:

Lieferadresse:

--> Nächste Seite\",\"-------------------
Importantrag
-------------------
Waren:\",\"-------------------
Importantrag
-------------------
Waren:







*wenn notwendig weitere Seiten erstellen*\"]}`);

    player.give(importantrag)
}

function giveFirma(player) {
    let firma = Item.of('minecraft:writable_book', `{RepairCost:0,display:{Name:'{\"text\":\"Antrag auf Firmenlizenz\"}'},pages:[\"-------------------
Firmenantrag
Angaben zum Besitzer
-------------------
Name:

Vorname:

Geboren:

Adresse:\",\"-------------------
Firmenantrag
Angaben zur Firma
-------------------
Firmenname:

Firmenart:

Unfallhaftung:

\",\"-------------------
Firmenantrag
Angaben zur Firma
-------------------
Firmenadresse(n):\"]}`);

    player.give(firma)

}

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('doc')
            .requires(source => source.hasPermission(2))
            .then(Commands.literal("steuer")
                .executes(context => {
                    const player = context.source.player;
                    give_steuer(player);
                    return 1;
                })
            )
            .then(Commands.literal("pferd")
                .executes(context => {
                    const player = context.source.player;
                    give_pferd(player);
                    return 1;
                })
            )
            .then(Commands.literal("waffen")
                .executes(context => {
                    const player = context.source.player;
                    giveWaffen(player);
                    return 1;
                })
            )
            .then(Commands.literal("import")
                .executes(context => {
                    const player = context.source.player;
                    giveImport(player);
                    return 1;
                })
            )
            .then(Commands.literal("firma")
                .executes(context => {
                    const player = context.source.player;
                    giveFirma(player);
                    return 1;
                })
            )
    );

    event.register(
        Commands.literal("sign")
            .requires(source => source.hasPermission(2))
            .then(Commands.argument("stamp", Arguments.STRING.create(event))
                .then(Commands.argument("name", Arguments.STRING.create(event))
                    .executes(context => {
                        const stamp = Arguments.STRING.getResult(context, "stamp");
                        const name = Arguments.STRING.getResult(context, "name");

                        const player = context.source.player;
                        const item = player.getMainHandItem();

                        if (item.getId() !== "minecraft:writable_book") {
                            player.tell(Component.red("Du musst ein Buch in der Hand halten!"));
                            return 0;
                        }

                        const pages = item.nbt.pages;

                        player.tell(pages);

                        let signedBook = Item.of("minecraft:written_book", 1, {
                            title: `[${stamp}] ${name}`,
                            author: `Rathaus [IC]`,
                            display:{Lore:[`{"text":"[${stamp}] | Infinity City","color":"dark_purple","italic":false}`]}
                        })

                        console.log("New NBT: \n\n" + JSON.stringify(signedBook.nbt));

                        signedBook.nbt.pages = pages;

                        console.log("Newer NBT: \n\n" + JSON.stringify(signedBook.nbt));

                        player.give(signedBook);
                        console.log("Gave signed book to player");
                        player.getMainHandItem().setCount(0);

                        return 1;
                    })
                )
            )
    );

});
