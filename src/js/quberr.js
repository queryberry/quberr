/*
    Главный файл где собирается весь проект
    тоесть ипортируются все константы и тд и 
    сделать это надо если функций будет больше чем 10
*/


function thowBlow(OffSet){

    
    function displayStatus(ScrollPosition){
        // h__50, h__75, h__100, h__125, h__150 
        var header = document.getElementsByClassName('qb__header h__50');
        var i;

        if (header.length > 0) {
        

            if (ScrollPosition == true) {

                for (i = 0; i < header.length; i++) {
                    header[i].setAttribute("style","height:50px");
                    header[i].classList.remove("roll-out-action-50");
                    header[i].classList.add("roll-in-action-50");

                }
        
            }
        
            if (ScrollPosition == false){
            
                for (i = 0; i < header.length; i++) {
                    header[i].setAttribute("style","height:0px");
                    header[i].classList.remove("roll-in-action-50");
                    header[i].classList.add("roll-out-action-50");
                    
                    
                }
                
        
            }
            
        }

        var header = document.getElementsByClassName('qb__header h__75');
        var i;

        if (header.length > 0) {
        

            if (ScrollPosition == true) {

                for (i = 0; i < header.length; i++) {
                    header[i].setAttribute("style","height:75px");
                    header[i].classList.remove("roll-out-action-75");
                    header[i].classList.add("roll-in-action-75");

                }
        
            }
        
            if (ScrollPosition == false){
            
                for (i = 0; i < header.length; i++) {
                    header[i].setAttribute("style","height:0px");
                    header[i].classList.remove("roll-in-action-75");
                    header[i].classList.add("roll-out-action-75");
                    
                    
                }
                
        
            }
            
        }

        var header = document.getElementsByClassName('qb__header h__100');
        var i;

        if (header.length > 0) {
        

            if (ScrollPosition == true) {

                for (i = 0; i < header.length; i++) {
                    header[i].setAttribute("style","height:100px");
                    header[i].classList.remove("roll-out-action-100");
                    header[i].classList.add("roll-in-action-100");

                }
        
            }
        
            if (ScrollPosition == false){
            
                for (i = 0; i < header.length; i++) {
                    header[i].setAttribute("style","height:0px");
                    header[i].classList.remove("roll-in-action-100");
                    header[i].classList.add("roll-out-action-100");
                    
                    
                }
                
        
            }
            
        }

        var header = document.getElementsByClassName('qb__header h__125');
        var i;

        if (header.length > 0) {
        

            if (ScrollPosition == true) {

                for (i = 0; i < header.length; i++) {
                    header[i].setAttribute("style","height:125px");
                    header[i].classList.remove("roll-out-action-125");
                    header[i].classList.add("roll-in-action-125");

                }
        
            }
        
            if (ScrollPosition == false){
            
                for (i = 0; i < header.length; i++) {
                    header[i].setAttribute("style","height:0px");
                    header[i].classList.remove("roll-in-action-125");
                    header[i].classList.add("roll-out-action-125");
                    
                    
                }
                
        
            }
            
        }

        var header = document.getElementsByClassName('qb__header h__150');
        var i;

        if (header.length > 0) {
        

            if (ScrollPosition == true) {

                for (i = 0; i < header.length; i++) {
                    header[i].setAttribute("style","height:150px");
                    header[i].classList.remove("roll-out-action-150");
                    header[i].classList.add("roll-in-action-150");

                }
        
            }
        
            if (ScrollPosition == false){
            
                for (i = 0; i < header.length; i++) {
                    header[i].setAttribute("style","height:0px");
                    header[i].classList.remove("roll-in-action-150");
                    header[i].classList.add("roll-out-action-150");
                    
                    
                }
                
        
            }
            
        }

    }

    displayStatus(OffSet);
    
}


window.onscroll = function(e) {
    
    // Получение позиции скролла 
    
    thowBlow(this.oldScroll > this.scrollY);
    this.oldScroll = this.scrollY;
}