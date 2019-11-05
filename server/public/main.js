
$(document).ready(function() {
    refresh();
    //refresh list
    async function refresh() {
        let temp = [];
        let todotxt = '';
        await axios.get('http://localhost:8080/todo')
            .then(res => res.data)
            .then(data => {
                console.log(data);
                temp = data;
            });
        for(let data of temp){
            todotxt += `<li class="item" id="${data.id}">
                            <i class="fa fa-circle-thin co" isComplete="${data.isComplete}"></i>
                            <p class="text">${data.todoName}</p>
                            <i class="fa fa-trash-o de" isTrash="${data.isTrash}"></i>
                        </li>`;
        }
        $('.list').html(todotxt);
    }

    //todo status
    $('#add-todo').on('click', async () =>{
        let todoName = $('#input').val();
        //send data
        await axios.post('http://localhost:8080/todo', {
            todoName
        })
            .then(res => console.log(res.data));
        //clear input
        $('#input').val("");
        // console.log($('i').attr('isComplete'));
        refresh();
    });

    //delete todo
    $('i[isTrash="false"]').on('click', () => {
        // let txt = $(this).attr('isTrash');
        // alert(txt);
        alert('debug');
    });

});
function trash(bool) {
    console.log($(this).attr('isTrash'));
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
