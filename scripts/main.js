
const modMindExp = Vars.mods.locateMod("mxegun").meta;

modMindExp.displayName = Core.bundle.get("mod.name");
modMindExp.author = Core.bundle.get("mod.author");
modMindExp.description = Core.bundle.get("mod.description");

const ambimusic1 = Vars.tree.loadMusic("CTTW");

Events.on(ClientLoadEvent, e => {
    Vars.control.sound.ambientMusic.add(ambimusic1);
});