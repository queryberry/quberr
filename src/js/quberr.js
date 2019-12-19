/*
    Главный файл где собирается весь проект
    тоесть ипортируются все константы и тд и 
    сделать это надо если функций будет больше чем 10
*/


function thowBlow(OffSet){
    
    function displayStatus(ScrollPosition){

        var header = document.getElementsByClassName('qb__header');
        var i;

        if (ScrollPosition <= 200) {

            for (i = 0; i < header.length; i++) {
                header[i].style.display = 'block ';
            }
    
        }
    
        if (ScrollPosition >= 200){
        
            for (i = 0; i < header.length; i++) {
                header[i].style.display = 'none';
            }
    
        }
    }

    displayStatus(OffSet);
    
}

window.addEventListener('scroll', function() {
    var pageOffSet = pageYOffset;
    thowBlow(pageOffSet);
  });