class _LinkedList{
    head : _Node;

    public insert(list : _LinkedList, data : number) : _LinkedList{
        var new_node : _Node = new _Node(data);
        if(list.head == null){
            list.head = new_node;
            return list;
        }

        var last : _Node = list.head;
        while(last.next != null){
            last = last.next;
        }
        last.next = new_node;

        return list;
    }

    public static printList(list : _LinkedList){
         var current_node : _Node = list.head;
         console.log("LinkedList: ");
         while(current_node != null){
             console.log(`${current_node.data} `);
             current_node = current_node.next;
         }

    }


}
class _Node {
    data: number;
    next: _Node;

    constructor(data: number) {
        this.data = data;
    }


}


const list = new _LinkedList();
list.insert(list, 1);
list.insert(list, 2);
list.insert(list, 3);
list.insert(list, 4);
list.insert(list, 5);
list.insert(list, 6);
list.insert(list, 7);
list.insert(list, 8);
_LinkedList.printList(list);