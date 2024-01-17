// // const arr = [];
// // arr.push(1);
// // arr.push(2);
// // arr.push(3);

// // console.log(arr);
// // console.log(arr.pop());
// // console.log(arr);


// var Stack = function(){
//     storage = [];

//     this.push = (data) => {
//         return storage.push(data);
//     }

//     this.pop = () => {
//         return storage.pop()
//     }

//     this.peek = () =>{
//         return storage.length;
//     }

//     this.print = () =>{
//         console.log(storage);
//     }
// }

// var myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.print();
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());


// var Queue = function(){
//     storage = [];

//     this.enqueue = (data) => {
//         return storage.unshift(data)
//     }

//     this.dequeue = () => {
//         return storage.pop();
//     }

//     this.print = () => {
//         console.log(storage);
//     }
// }

// var q = new Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');

// q.print();
// q.dequeue();
// q.print();

var priorityQueue = function(){
    storage = [];

    this.enqueue = (data) => {
        if(storage.length === 0){
            storage.push(data);
        } else {
            var added = false;
            for(let i = 0; i < storage.length; i++){
                if(data[1] <  storage[i][1]){ // checking for priorities
                    storage.splice(i,0,data);
                    added = true;
                    break;
                }
            }
            if(!added){
                storage.push(data)
            }
        }   
    }

    this.dequeue = () => {
        return storage.pop();
    }

    this.printCollection = () => {
        console.log(storage);
    }
}


var pq = new priorityQueue();
pq.enqueue(["Beau Carnes", 3])
pq.enqueue(["Quincy Larson", 2])
pq.enqueue(["Damilola Olatayo", 1])
pq.printCollection()
pq.dequeue();
pq.printCollection();