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

    this.size = function() {
        return items.length
    }

    this.print = function() {
        console.log(items.toString())
    }

}

function HotPotato(nameList,num) {
    var queue = new Queue() //cria instancia
    
    for(var i=0;i<nameList.length;i++) {
        queue.enqueue(nameList[i]) //adiciona a entrada a instancia
    }

    var eliminated = ''

    while(queue.size()>1) { //enquanto não tiver ganhador
        for(var i=0;i<num;i++) { //os primeiros vão pro fim
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue() //o último é eliminado
        console.log(eliminated+' was eliminated from the Hot Potato game!')
    }
    return queue.dequeue() //retorna o último a ficar
}

var names = ['João','José','Maria','Ana','Lucas']
var winner = HotPotato(names,7)

console.log('The winner is: '+winner)