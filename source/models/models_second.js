enyo.kind({
    name: "Todo.Model",
    kind: "enyo.Model",
    attributes: {
        description: "",
        done: false
    }
});

enyo.kind({
    name: "Todo.Collection",
    kind: "enyo.Collection",
    model: "Todo.Model"
});


