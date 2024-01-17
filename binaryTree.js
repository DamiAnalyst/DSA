class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree{
    constructor(){
        // the root of a binary search tree
        this.root = null;
    }

    insert(data){
        var newNode = new Node(data);

        if(this.root === null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node,newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            } else {
                this.insertNode(node.left,newNode)
            }
        } else {
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    remove(data){
        this.root = this.removeNode(this.root,data);
    }

    removeNode(node,key){
        if(node === null){
            return null;
        }

        else if(key < node.data){
            node.left = this.removeNode(node.left,key)
            return node;
        } 
        else if(key > node.data){
            node.right = this.removeNode(node.right,key)
            return node;
        }
        else {
            // deleting node with no children 
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }

            //deleting node with one child
            if(node.left === null){
                node = node.right;
                return node;
            } 

            else if(node.right === null){
                node = node.left;
                return node;
            }

            //deleting node with two children 
            // minimum node of the right subtree is stored in aux;

            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }

    }

    findMinNode(node) {
        if(node.left === null){
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    findMaxNode(node){
        if(node.right === null){
            return node;
        } else {
            return this.findMaxNode(node.right);
        }
    }

    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    findMax(){
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }

    isPresent(data){
        let current = this.root;
        while(current){
            if(current.data === data){
                return true;
            } else if (data < current.data){
                current = current.left;
            } else if(data > current.data){
                current = current.next;
            }
        }
        return false;
    }

}


const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7)
console.log(bst.findMin())
console.log(bst.findMax());
console.log(bst.isPresent(4))

