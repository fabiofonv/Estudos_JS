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

function PriorityQueue(element,priority) {
    var items = []

    function QueueElement(element,priority) {
        this.element = element
        this.priority = priority
    }

    this.enqueue = function(element,priority) {
        var queueElement = new QueueElement(element,priority)
        var added = false

        for(var i=0;i<items.length;i++) {
            if(queueElement.priority<items[i].priority) {
                items.splice(i,0,queueElement)
                added = true
                break
            }
        }
        if(!added) {
            items.push(queueElement)
        }
    }

    this.dequeue = function() {
        return items.shift()
    }

    this.print = function() {
        for(var i=0;i<items.length;i++) [
            console.log(items[i].element+' '+items[i].priority)
        ]
    }

}

var filaPrioridade = new PriorityQueue()

filaPrioridade.enqueue("Carlos",2)
filaPrioridade.enqueue("Ana",1)
filaPrioridade.enqueue("Lucas",1)

filaPrioridade.print()