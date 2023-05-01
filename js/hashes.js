function LinkedList() {
    var Node = function(element) {
        this.element = element //node1(João,node2), node2(José,node3), node3(Maria,null)
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function(element) {
        //adiciona elemento no final da lista
        var node = new Node(element), //José,null
        current

        if(head===null) { //s,n
            head = node //João,null
        } else { //n,s
            current = head //João,null

            while(current.next) { //n
                current = current.next
            }

            current.next = node //João,José,null
        }
        length++ //1,2
    }

    this.insert = function(position,element) {
        //adiciona elemento em pos específica
        var node = new Node(element)
        if(position>=0 && position<=length) {
            var current = head,
            previous,
            index=0

            if(position===0) {
                node.next = current
                head = node
            } else {
                while(index++ <position) {//0,1
                    previous = current//previous = João,node2
                    current = current.next//current = José,node3
                }
                node.next = current
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }

    this.removeAt = function(position) {
        //remove elem em pos esp
        if(position>-1 && position<length) {
            var current = head,
            previous,
            index=0

            if(position===0) {
                head = current.next
            } else {
                while(index++ <position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    this.remove = function(element) {
        //remove elem element
        // var current = head,
        // found = false

        // while(current) {
        //     if(element===current.element) {
        //         previous.next = current.next
        //         found = true
        //     }
        //     previous = current
        //     current = current.next
        // }
        // return found
        var index = this.indexOf(element)
        return this.removeAt(index)     
    }

    this.indexOf = function(element) {
        //retorna a posição do elemento
        var current = head,
        index = 0 

        while(current) {
            if(element===current.element) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    this.isEmpty = function() {
        //retorna true se vazio
        return length===0
    }

    this.size = function() {
        //retorna tamanho
        return length
    }

    this.getHead = function() {
        return head
    }

    this.toString = function() {
        //converte em string
        var current = head
        string = ''

        while(current) {
            string += current.element+' '
            current = current.next
        }
        return string
    }

    this.print = function() {
        //printa
        console.log(this.toString())
    }
}

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

function HashTable() {
    var table = []

    var ValuePair = function(key,value) {
        this.key = key
        this.value = value
        this.toString = function() {
            return '['+this.key+' - '+this.value+']'
        }
    }

    this.put = function(key,value) {
        //insere elemento - anticolisão
        var position = loseloseHashCode(key)
        
        if(table[position]===undefined) {
            table[position] = new LinkedList()
        }
        table[position].append(new ValuePair(key,value))
    }

    // this.put = function(key,value) {
    //     //insere elemento  
    //     var position = loseloseHashCode(key)
    //     console.log(position+' '+key)
    //     table[position] = value
    // }

    this.remove = function(key) {
        //remove elemento - anticolisão
        var position = loseloseHashCode(key)

        if(table[position]!==undefined) {
            var current = table[position].getHead()

            while(current.next) {
                if(current.element.key===key) {
                    table[position].remove(current.element)
                    if(table[position].isEmpty()) {
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }
            if(current.element.key===key) {
                table[position].remove(current.element)
                if(table[position].isEmpty()) {
                    table[position] = undefined
                }
                return true
            }
        }
        return false
    }

    // this.remove = function(key) {
    //     //remove elemento
    //     table[loseloseHashCode(key)] = undefined
    // }

    this.get = function(key) {
        //retorna um valor - anticolisaos
        var position = loseloseHashCode(key)

        if(table[position]!==undefined) {
            var current = table[position].getHead()

            while(current.next) {
                if(current.element.key===key) {
                    return current.element.value
                }
                current = current.next
            }
            if(current.element.key===key) {
                return current.element.value
            }
        }
        return undefined
    }

    // this.get = function(key) {
    //     //retorna um valor
    //     return table[loseloseHashCode(key)]
    // }

    var loseloseHashCode = function(key) {
        //retorna hash (num)
        var hash = 0
        for(var i=0;i<key.length;i++) {
            hash += key.charCodeAt(i)
        }
        return hash%37
    }

    this.print = function() {
        for(var i=0;i<table.length;i++) {
            if(table[i]!==undefined) {
                console.log(i+':'+table[i])
            }
        }
    }
}

var hash = new HashTable()

hash.put('Gandalf','gandalf@email.com')
hash.put('John','johnsnow@email.com')
hash.put('Tyrion','tyrion@email.com')
hash.put('Aaron','aaron@email.com')
hash.put('Donnie','donnie@email.com')
hash.put('Ana','ana@email.com')
hash.put('Jonathan','jonathan@email.com')
hash.put('Jamie','jamie@email.com')
hash.put('Sue','sue@email.com')
hash.put('Mindy','mindy@email.com')
hash.put('Paul','paul@email.com')
hash.put('Nathan','nathan@email.com')

hash.print()

console.log(hash.get('Marcos'))
console.log(hash.get('Paul'))