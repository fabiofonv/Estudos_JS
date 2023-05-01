function InvSeq() {
    var items = []

    this.push = function(element) {
        items.push(element)
    }

    this.invert = function() {
        for(var i=0;i<items.length;i++) {
            var aux = items.shift()
            items.splice(items.length-i,0,aux)
        }
    }

    this.print = function() {
        console.log(items.toString())
    }
}

var seq = new InvSeq

seq.push(8)
seq.push(22)
seq.push(78)
seq.push(10)
seq.push(36)
seq.print()

seq.invert()
seq.print()