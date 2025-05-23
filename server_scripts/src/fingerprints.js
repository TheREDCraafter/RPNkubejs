function obfuscate(input) {
  let str = String(input);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.codePointAt ? str.codePointAt(i) : null;
    if (typeof code !== "number" || isNaN(code)) {
      let ch = str.charAt(i);
      code = (typeof ch === "string" && ch.length > 0) ? ch.charCodeAt(0) : 63;
    }
    if (typeof code !== "number" || isNaN(code)) {
      code = 63;
    }
    result += (code + i).toString();
  }
  return result;
}

function blockPosToString(blockPos) {
  return `(${blockPos.getX()} | ${blockPos.getY()} | ${blockPos.getZ()})`;
}

function escapeForLore(text) {
  return String(text)
    .replace(/\\/g, "\\\\")  // escape backslashes
    .replace(/"/g, '\\\\"');   // escape quotes
}

ServerEvents.tick(event => {
  if (!event.server.persistentData.fingerprint) {
    event.server.persistentData.fingerprint = {};
  }

  event.server.players.forEach(player => {
    if (!player.persistentData.fingerprint) {
      player.persistentData.fingerprint = obfuscate(player.name.string);
    }
  });
});

BlockEvents.rightClicked(event => {
  const fingerprintMap = event.server.persistentData.fingerprint;
  if (!fingerprintMap) {
    event.player.tell("Fingerprint storage not initialized yet.");
    return;
  }

  if (event.player.getMainHandItem().getId() === "kubejs:fingerprint_kit") {
    const posStr = blockPosToString(event.getBlock().getPos());
    let fingerprintData = fingerprintMap[posStr];
    if (fingerprintData == null) fingerprintData = "none";
    fingerprintData = escapeForLore(fingerprintData);

    event.player.setMainHandItem("minecraft:air");

    event.server.runCommandSilent(`/give ${event.player.name.string} kubejs:used_fingerprint_kit{display:{Lore:['{"text":"${posStr} :: ${fingerprintData}"}']}}`);
  } else {
    const posStr = blockPosToString(event.getBlock().getPos());
    const playerFingerprint = event.player.persistentData.fingerprint;
    fingerprintMap[posStr] = playerFingerprint;
  }
});
