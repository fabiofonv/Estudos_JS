function Queue() {
    var items = []

    this.enqueue = function(element) {
        items.push(element)
    }

    this.dequeue = function() {
        return items.shift()
    }

    this.front = function() {
        return items[0]
    }

    this.clear = function() {
        items = []
    }

    this.isEmpty = function() {
        return items.length === 0
    }

    this.print = function() {
        console.log(items.toString())
    }

}

var fila = new Queue()


fila.enqueue(1)
fila.enqueue(2)
fila.enqueue(3)
fila.enqueue(4)
fila.enqueue(5)
fila.print()

console.log(fila.dequeue())
fila.print()

console.log(fila.front())

console.log(fila.isEmpty())

fila.clear()
fila.print()
console.log(fila.isEmpty())
