// show n hide the nav links by ham menu click

const HAM = document.getElementById('ham');
let isOddClick = true;

HAM.addEventListener('click', () => {
    if(isOddClick){
        document.getElementById('headerLinkes').style.transform = 'translateY(5em)';
        isOddClick = false;
        return;
    }
    else
    document.getElementById('headerLinkes').style.transform = '';
    isOddClick = true;
});