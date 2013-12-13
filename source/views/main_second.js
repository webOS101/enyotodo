enyo.kind({
    name: "Todo.View",
    components: [
        {kind: "enyo.Button", content: "New Todo", ontap: "newTodo"},
        {
            name: "repeater",
            kind: "DataRepeater",
            collection: ".app.$.todosCollection",
            components: [
                {
                    components: [
                        {name: "description", kind: "enyo.Input"},
                        {name: "done", kind: "enyo.Checkbox"}
                    ],
                    bindings: [
                        {from: ".model.description", to: ".$.description.value", oneWay: false},
                        {from: ".model.done", to: ".$.done.checked", oneWay: false}
                    ]
                }
            ]
        }
    ],
    newTodo: function() {
        var col = this.app.$.todosCollection;
        col.add({description: "New Todo " + col.length});
        return true;
    }
});

