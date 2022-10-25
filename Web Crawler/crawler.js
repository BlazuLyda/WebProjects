const http = require('http');
const fs = require('fs');

var options = {
    host: 'buz.info.pl',
    path: '/',
    port: 80,
    agent: false
}

class Graph {
    constructor() {
        this.nodes = { '/': Node('/') };
    }

    nodeExists(link) {
        return this.nodes.link != undefined;
    }

    DFS(currentNode) {
        if (currentNode.visited) {
            console.log(`Already was in: ${currentNode.path}`);
            break;
        }
        console.log(`Finding connections for: ${currentNode.path}`);
        currentNode.visited = true;

        options.path = self.path;

        //http request
        http.get(options, (res) => {
            let data = "";
        
            //collecting data from request
            res.on('data', (chunk) => {
                data += chunk;
            })
        
            //data collected
            res.on('end', () => {
                let idx = 0, parsedLink;
        
                while(true) {
                    idx = data.indexOf('href=', idx);
                    if (idx === -1) break;
        
                    parsedLink = '';
                    idx += 6;
                    while (data[idx] != `"`) {
                        parsedLink += data[idx];
                        idx += 1;
                    }
        
                    console.log(`Link found: ${parsedLink}`);
                    
                    if (!self.nodeExists(parsedLink)) {
                        this.nodes.push(Node(parsedLink, Boolean(parsedLink[0] == '/')) )
                        this.links.push(parsedLink);
                        self.DFS(this.nodes[-1]);
                    }

                    if (!currentNode.connectsTo(parsedLink)) {
                        this.connections.push(parsedLink);
                    }
                }
            })
        });
    }
}

class Node {
    constructor(path) {
        this.path = path;
        this.connections = [];

        if (this.path[0] == '/') {
            this.internal = true;
            this.visited = false;
        }
        else {
            this.internal = false;
            this.visited = true;
        }
    }

    connectsTo(link) {
        return this.connections.indexOf(link) !== -1;
    }
};

let graph = new Graph(Node('/'));

graph[0].findConnections();