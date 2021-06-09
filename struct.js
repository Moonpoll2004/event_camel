function ValidateMembers(name){
    
}

class CamelEvent{
    constructor(event,handler){
        this.event = event
        this.handler = handler
    }
}

class Struct{
    constructor(){
        this.values = {}
        this.nodes = []
    }

    linkNode(node){
        this.nodes.push(node)
    }

    addValue(name,value){
        this.values[name] = value
    }

    search(key){
        return this.values[key]
    }

    serachNodes(key){
        var res = this.search(key)
        if(res === undefined){
            for(var i=0; i < this.nodes.length;++i){
                const node = this.nodes[i]
                res = node.serachNodes(key)
                if(res != undefined){
                    break;
                }
            }

        }
        return res;
    }
}

const node1 = new Struct()
const node2 = new Struct()
const node3 = new Struct()

//add data to the nodes
node1.addValue("1",12)
node2.addValue("khattab",2)
node2.addValue("sultan",15)

node3.addValue("ali",14)
node3.addValue("saeed",18)

//linking nodes to node one
//so they are becoming like a tree

node1.linkNode(node2)
node1.linkNode(node3)

//searching in each node

console.log(node1.search("1"))
console.log(node2.search("sultan"))

//searchin across all nodes

var sum = node1.serachNodes("sultan") + node1.serachNodes("ali")
console.log(sum)
