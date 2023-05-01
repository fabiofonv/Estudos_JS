function Stack() {
    var items = []

    this.push= function(element) {
        items.push(element)
    }

    this.pop = function() {
        return items.pop()
    }

    this.peek = function() {
        return items[items.length-1]
    }

    this.isEmpty = function() {
        return items.length === 0
    }

    this.clear = function() {
        items = []
    }
    
    this.size = function() {
        return items.length
    }

    this.print = function() {
        console.log(items.toString())
    }
}



var pilha = new Stack()

pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
pilha.push(5)

pilha.print()

console.log(pilha.isEmpty())

console.log(pilha.peek())

console.log(pilha.size())

pilha.clear()
console.log(pilha.isEmpty())
pilha.print()
