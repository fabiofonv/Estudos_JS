function Dictionary() {
    var items = {}

    this.set = function(key,value) {
        //adiciona item ao dic
        items[key] = value
    }

    this.delete = function(key) {
        //remove valor do dic usando chave
        if(this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }

    this.has = function(key) {
        //verifica se chave existe
        return items.hasOwnProperty(key)
    }

    this.get = function(key) {
        //devolve valor especifico
        return this.has(key)? items[key]: undefined
    }

    this.clear = function() {
        //remove itens do dic
        items = {}
    }

    this.size = function() {
        //retorna tamanho
        return Object.keys(items).length
    }

    this.keys = function() {
        //devolve array com chaves
        return Object.keys(items)
    }

    this.values = function() {
        //deveolve aarra com valores
        var values = [],
        keys = Object.keys(items)

        for( var i=0;i<keys.length;i++) {
            values.push(items[keys[i]])
        }
        return values
    }

    this.getItems = function() {
        return items
    }
}

// var dic = new Dictionary()

// dic.set('Gandalf','gandalf@email.com')
// dic.set('John','john@email.com')
// dic.set('Tyrion','tyrion@email.com')

// var obj = {
//     'Gandalf':'gandalf@email.com',
//     'John':'john@email.com',
//     'Tyrion':'tyrion@email.com'
// }

// console.log(obj['Tyrion'])