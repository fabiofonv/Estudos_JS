function Set() {
    var items = {}

    this.add = function(value) {
        //adiciona novo item ao conjunto
        if(!this.has(value)) {
            items[value] = value
            return true
        }
        return false
    }

    this.delete = function(value) {
        //remove valor do conj
        if(this.has(value)) {
            delete items[value]
            return true
        }
        return false
    }

    this.has = function(value) {
        //devolve se valor existe
        return items.hasOwnProperty(value)
    }

    this.clear = function() {
        //remove todos items
        items = {}
    }

    this.size = function() {
        //retorna tamanho do conj
        return Object.keys(items).length
    }

    this.values = function() {
        //retorna array com valore do conj
        var values = [],
        keys = Object.keys(items)
        for(var i=0;i<keys.length;i++) {
            values.push(items[keys[i]])
        }
        return values
    }

    this.union = function(otherSet) {
        var unionSet = new Set(),
        values = this.values()

        for(var i=0;i<values.length;i++) {
            unionSet.add(values[i])
        }

        values = otherSet.values()

        for(var i=0;i<values.length;i++) {
            unionSet.add(values[i])
        }

        return unionSet
    }

    this.intersection = function(otherSet) {
        var interctionSet = new Set(),
        values = this.values()

        for(var i=0;i<values.length;i++) {
            if(otherSet.has(values[i])) {
                this.intersectionSet.add(values[i])
            }
        }
        return interctionSet
    }

    this.difference = function(otherSet) {
        var differenceSet = new Set(),
        values = this.values

        for(var i=0;i<values.length;i++) {
            if(!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }
        return differenceSet
    }

    this.isSubset = function(otherSet) {
        if(this.size()>otherSet.size()) {
            return false
        } else {
            var values = this.values()

            for(var i=0;i<values.length;i++) {
                if(!otherSet.has(values[i])) {
                    return false
                }
            }
            return true
        }
    }
}

var set = new Set()

set.add(1)
set.add(2)
set.add(3)
set.add(4)

console.log(set.size())