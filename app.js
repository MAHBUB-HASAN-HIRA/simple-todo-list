const note_btn = document.getElementById('note_btn');

let first_letter_upper_case = string =>{return string.charAt(0).toUpperCase() + string.slice(1);};

note_btn.addEventListener('click', () => {
    const get_input = document.getElementById('get_input').value;
    if(get_input.length == 0){
        alert('Please write What you want to do!');
    }
    else{
        const ul_list = document.getElementById('ul_list');

        const input_check = document.createElement('input');
            input_check.setAttribute('type', 'checkbox');

            const delete_icon = document.createElement('img');
                delete_icon.setAttribute('src','img/icons8-cross-mark-48.png');
    
            const br = document.createElement('br');

            const li = document.createElement('li');
             li.append(input_check,first_letter_upper_case(get_input), delete_icon);

                ul_list.append(li,br);
    
        delete_icon.addEventListener('click', () => {li.parentNode.removeChild(li);});

        document.getElementById('first_li').style.display ='block';

//checkbox click event listener
            input_check.addEventListener('click', () => {
                if(input_check.checked == true){
                    li.style.textDecoration = 'line-through';
                }
                else if(input_check.checked == false){
                    li.style.textDecoration = 'none';
                }
            });
         document.getElementById('get_input').value = '';
    }
});
