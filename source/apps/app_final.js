enyo.kind({
    name: "Bootplate.Application",
    kind: "enyo.Application",
    view: "Todo.View",
    components: [{name: "todosCollection", kind: "Todo.Collection"}]
});
