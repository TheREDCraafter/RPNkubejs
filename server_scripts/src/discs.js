ItemEvents.rightClicked(event => {
    if (event.item.id == "disccord:custom_record" && event.item.nbt.get("disccord:url")) {
        event.cancel();
    }
})