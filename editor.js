window.addEventListener('load', function(){
    document.querySelector('.text-zone').setAttribute('contenteditable', 'true');
});


function format(command, value){

    document.execCommand(command, false, value);

};

function link(){
    let url = window.prompt("Digite a URL");
    let selectedText = document.getSelection();

    document.execCommand('createLink', false, url);
};

function quote(){
    let selectedText = document.getSelection();

    document.execCommand('insertText', false, '"' + selectedText + '"');
};