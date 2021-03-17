menu_list = ["Chicken Tandoori Pizza", 
             "Veg Supreme Pizza",
             "Panner Tikka Pizza",
             "Double Cheese Margherita Pizza", 
             "Mushroom and Corn Pizza",
             "Farmhouse Pizza"];

    function getmenu(){
        var htmldata;
        htmldata="<ol class='menulist'>"
        menu_list.sort();
        for(var i=0;i<menu_list.length;i++){
            htmldata=htmldata+'<li>' + menu_list[i] + '</li>'
        }
        htmldata=htmldata+ "</ol>"
        document.getElementById("display_menu").innerHTML = htmldata;
    }
    function add_item(){
        var htmldata;
        
        
        if (document.getElementById("toppiz").value == "") {   
            alert('Please enter/recommend a new pizza');
        }
        else{
            menu_list.push(document.getElementById("toppiz").value);
            menu_list.sort();
            htmldata = "<section class = 'cards'>"
            for(var i=0;i<menu_list.length;i++){
                htmldata=htmldata+'<div class="card">' +'<img src ="images/pizzaImg.png"/>'+menu_list[i] + '</div>'
            }
            htmldata=htmldata+"</section>"
            document.getElementById("display_addedmenu").innerHTML = htmldata;
        }
        
    }

  