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


var ll = new LinkedList()

ll.append('João')
ll.append('José')
ll.append('Maria')
ll.insert(1,'Lucas')

ll.print()
console.log(ll.indexOf('José'))

ll.removeAt(2)
ll.print()

ll.remove('Lucas')
ll.print()

console.log(ll.size())

console.log(ll.isEmpty())
ll.remove('Maria')
ll.removeAt(0)
console.log(ll.isEmpty())