$(document).ready(function () {
    refresh();
    //add todo
    $('#add-todo').on('click', async () => {
        let todoName = $('#input').val();
        if (todoName) {
            //send data
            await axios.post('http://localhost:8080/todo', {
                    todoName
                })
                .then(res => console.log(res.data));
            //clear input
            $('#input').val("");
            // console.log($('i').attr('isComplete'));
            refresh();
        } else {
            alert('Please insert your todo');
        }
    });
});
//check complete
async function comp(th) {
    let id = th.parentNode.id;
    await axios.put(`http://localhost:8080/todo/${id}`);
    refresh();
}

//delete todo
async function trash(th) {
    let id = th.parentNode.id;
    await axios.delete(`http://localhost:8080/todo/${id}`);
    refresh();
}

//refresh list
async function refresh() {
    let temp = [];
    let todotxt = '';
    let check = 'fa-check-circle',
        uncheck = 'fa-circle-thin';
    await axios.get('http://localhost:8080/todo')
        .then(res => res.data)
        .then(data => {
            console.log(data);
            temp = data;
        });
    for (let data of temp) {
        let ic = data.isComplete === true ? check : uncheck;
        todotxt += `<li class="item" id="${data.id}">
                        <i class="fa ${ic} co" onclick="comp(this)" isComplete="${data.isComplete}"></i>
                        <p class="text">${data.todoName}</p>
                        <i class="fa fa-trash-o de" onclick="trash(this)"></i>
                    </li>`;
    }
    $('.list').html(todotxt);
}
/*****
 * todo have {id, todo-name, isComplete, trash}
 * create a todo in input sec (input.value) -post-> store in array and send data to font
 *onclick="trash(${data.isTrash})"
 */
// let d = {
//     id: 0,
//     todoName: "drink",
//     isComplete: false,
//     isTrash: false
// };
