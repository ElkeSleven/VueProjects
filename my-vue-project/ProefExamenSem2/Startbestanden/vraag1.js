let input = inPut('number','inpNum')
let button = Btn('inpNum','Controleer')

window.onload = function()
{
    createNumberInput();
}

function createNumberInput()
{
    let inputbox = document.createElement('div')
    inputbox.style.display ='block'

    inputbox.appendChild(input);
    inputbox.appendChild(button);
    document.body.appendChild(inputbox);
}

function inPut(type,name)
{
    let e = document.createElement('input');
    e.name = name;
    e.style.width = '120px';
    e.style.margin ='10px';

    return e;
}

function Btn(HTMLfor,content)
{
    let e = document.createElement('button')
    e.htmlFor = HTMLfor;
    e.textContent = content;
    e.addEventListener
    ('click',function() {validateNumber(input.value)})

    return e;
}

function validateNumber(value)
{
    let number = parseFloat(value);
    let thumb = checkForThumb()

    thumb.src = (number%2 === 0)?
        'assets/thumbsup.png' : 'assets/thumbsdown.png'

    document.body.appendChild(thumb);
}

function checkForThumb()
{
    let thumb = document.createElement('img')
        thumb.id = 'thumb';

    if(document.getElementById('thumb') != null)
        thumb = document.getElementById('thumb')

    return thumb;
}