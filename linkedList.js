class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    unshift(data){
        const newHead = new Node(data, this.head);
        this.length++;
        this.head = newHead;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        currentNode = this.head()
        while( currentNode && currentNode.next){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    clear(){
        this.head = null;
        this.length = 0;
    }

    shift(){
        if(!this.head){
            return;
        }
        const oldHead = this.head
        this.head = this.head.next;
        this.length--;
        return oldHead
    }

    pop(){
        if(!this.length){
            return;
        }
        if(this.length === 1){
            return this.shift();
        }
        const last = this.getLast();
        current = this.head;
        while(current !== last){
            current = current.next;
        }
        current.next = null;
        this.length--;
        return last
    }

    push(data){

        if(!this.head){
            return this.unshift();
        }
        node = new Node(data, null);
        last = this.getLast();
        this.last.next = node;
        this.length--;
    }

    get(index){

        if(index >= this.length || index < 0){
            return null;
        }
       counter = 0;
       current = this.head;
       while(counter < index){
            current = current.index;
            counter++
       } 
       return current;
    }

    set(index,data){
        // if(index >= this.length || index < 0){
        //     return false;
        // }
        if(!this.get(index)){
            return false;
        }
        current = get(index);
        current.data = data;
        return true;
    }

    remove(index){
        if(!this.get(index)){
            return false;
        }

        if(index === 0){
            return this.shift();
        }

        const prevNode = get(index - 1);
        const nodetoRemove = get(index);
        // next = get(index + 1);

        // pre.next = next;
        prevNode.next = pre.next.next;
        nodetoRemove.next = null;
        this.length--;

        return nodetoRemove;
    }

    insert(index,data){

        if(index >= this.length  || index < 0){
            return false;
        }

        if(index === 0){
            return this.unshift();
        }
        nextNode = get(index);
        prevNode = get(index-1);
        
        const newNode = newNode(data, nextNode);
        prevNode.next = newNode;
        this.length++;

        return true;
    }








}