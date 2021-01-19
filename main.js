// Implementation of Trie

function TrieDS() {
    function Node(val, endVal) {
        this.key = val;
        this.children = [];
        this.endOfWord = endVal;
    }
    let rootNode = new Node(null, false);
    function add(input) {
        let matchChild = null;
        let newNode = null;
        function addChar(input, endValue, parNode, match) {
            if (!match) {
                let currChar = input.slice(0,1);
                newNode = new Node(currChar, endValue);
                parNode.children.push(newNode);
            }
            if (!endValue) {
                let inputVal = input.slice(1);
                if (match && match.children) {
                    matchChild = match.children.find((elem) => {
                        return (elem.key === inputVal[0]);
                    });
                }
                if (match) {
                    newNode = match;
                }
                if (inputVal.length === 1) {
                    addChar(inputVal, true, newNode, matchChild);
                } else {
                    addChar(inputVal, false, newNode, matchChild); 
                }
            } else {
                console.log(rootNode);
            }
            return;
        }
        if (rootNode.children) {
            matchChild = rootNode.children.find((elem) => {
                return (elem.key === input[0]);
            });
        }
        if (input.length === 1) {
            addChar(input, true, rootNode, matchChild);
        } else {
            addChar(input, false, rootNode, matchChild);
        }
    }
    function search(input) {
        function searchValue(node) {
            const foundElem = node.children.find(elem => {
                return (elem.key === input[0]);
            });
            if (foundElem) {
                input = input.slice(1);
                    if (input.length) {
                        return searchValue(foundElem);
                    } else {
                        if (foundElem.endOfWord) {
                            return 'Match Found';
                        }
                    }
                } else {
                    return 'Match Not Found';
                }
            }
            console.log(searchValue(rootNode));
        }
    return {
        add, 
        search
    }
}
const {add, search} = TrieDS();
add('hello');
add('hi');
add('ji');
search('ji');
search('jii');
