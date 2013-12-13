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
    model: "Todo.Model",
    filters: { done: "filterDone"},
    filterDone: function() {
        return this.reset().filter(function(record) {
            return !record.get("done");
        });
    }
});


