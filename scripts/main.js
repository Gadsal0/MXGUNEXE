
const mxgunexe = Vars.mods.locateMod("mxegun").meta;
mxgunexe.displayName = Core.bundle.get("mod.name");
mxgunexe.author = Core.bundle.get("mod.author");
mxgunexe.description = Core.bundle.get("mod.description");
const newmusic = Vars.tree.loadMusic("CTTW");
Events.on(ClientLoadEvent, e => {
    Vars.control.sound.ambientMusic.add(newmusic);
});
