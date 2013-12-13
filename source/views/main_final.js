enyo.kind({
    name: "Todo.View",
    components: [
        {kind: "onyx.Button", content: "New Todo", ontap: "newTodo"},
        {tag: "span", content: "Filter done items:"},
        {kind: "onyx.Checkbox", onclick: "filter"},
        {
            name: "repeater",
            kind: "DataRepeater",
            collection: ".app.$.todosCollection",
            components: [
                {
                    classes: "todo-item",
                    components: [
                        {
                            kind: "onyx.InputDecorator",
                            components: [
                                {name: "description", kind: "onyx.Input"}
                            ]
                        },
                        {name: "done", kind: "onyx.Checkbox"}
                    ],
                    bindings: [
                        {from: ".model.description", to: ".$.description.value", oneWay: false},
                        {from: ".model.done", to: ".$.done.checked", oneWay: false}
                    ]
                }
            ]
        },
    ],
    newTodo: function() {
        var col = this.app.$.todosCollection;
        col.add({description: "New Todo " + col.length});
        this.$.repeater.reset();
        this.filter();
        return true;
    },
    filter: function() {
        if(this.$.checkbox.getChecked()) {
            this.app.$.todosCollection.set("activeFilter", "done", true);
        } else {
            this.app.$.todosCollection.set("activeFilter", null);
        }
        return true;
    }
});

