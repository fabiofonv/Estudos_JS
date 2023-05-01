function DoublyLinkedList() {
    var Node = function(element) {
        this.element = element //node1(João,node2), node2(José,node3), node3(Maria,null)
        this.next = null
        this.prev = null
    }

    var length = 0
    var head = null
    var tail = null

    this.append = function(element) {
        //adiciona elemento no final da lista
        var node = new Node(element), //José,null
        current

        if(head===null) { //s,n
            head = node //João,null
            tail = node
        } else { //n,s
            current = head //João,null

            while(current.next) { //n
                current = current.next
            }
            current.next = node //João,José,null
            tail = node
        }
        length++ //1,2
    }

    this.insert = function(position,element) {
        //adiciona elemento em pos específica
        if(position>=0 && position<=length) {
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if(position===0) {
                if(!head) {
                    head = node
                    tail = node
                } else {
                    node.next = current
                    current.prev = node
                    head = node
                }
            } else if(position===length) {
                current = tail
                current.next = node
                node.prev = current
                tail = node
            } else {
                while(index++ <position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
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
                if(length==1) {
                    tail = null
                } else {
                    head.prev = null
                }
            } else if(position===length-1) {
                current = tail
                tail = current.prev
                tail.next = null
            } else {
                while(index++ <position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
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


