const axios = require('axios');

let data = [];

const getTodoList = (req, res) => {
    res.status(200).send(data);
};

const createList = (req, res) => {
    let todoName = req.body.todoName;
    let id = data.length === 0 ? 1 : data[data.length-1].id + 1;
    let objTodo = {
        id,
        todoName,
        isComplete: false,
        isTrash: false
    };
    data.push(objTodo);
    res.status(201).send(data);
    console.log('data', data);
};

const deleteList = (req, res) => {
    let delId = parseInt(req.params.id);
    let fill = data.filter(ele => {
        console.log('ele.id', ele.id, ele.id !== delId);
        return ele.id !== delId;
    });
    console.log('fill', fill);
    data = fill;
    reList();
    res.send(data);
};

const changeList = (req, res) => {
    let id = parseInt(req.params.id);
    for(ele of data){
        if(ele.id === id) {
            ele.isComplete = ele.isComplete ? (!true) : (!false);
            break;
        }
    }
    res.send(data);

};

function reList() {
    let temp = data.map((ele, index) => {
        return {
            id: index+1,
            todoName: ele.todoName,
            isComplete: ele.isComplete,
            isTrash: ele.isTrash
        };
    });
    data = temp;
}

/**
 * {
        "id": 1,
        "todoName": "drink",
        "isComplete": false,
        "isTrash": false
    }
 *
 */











module.exports = {
    getTodoList,
    createList,
    deleteList,
    changeList
};
