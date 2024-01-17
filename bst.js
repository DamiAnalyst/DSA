class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
         var newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        } else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            } else{
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null){
                node.right = newNode;
            } else{
                this.insertNode(node.right, newNode)
            }
        
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
    getRootNode(){
        return this.root;
    }

    // performs inorder traversal of a tree;
    inorder(node){
        if(node !== null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node){
        if(node !== null){
            console.log(node.data)
            this.preorder(node.left)
            this.preorder(node.right);
        }
    }

    postorder(node){
        if(node !== null){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data)
        }
        
    }
}


const bst = new BST();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

var root = bst.getRootNode();
bst.inorder(root);
bst.preorder(root);
bst.postorder(root);