function getFortune(){
        var xhr = new XMLHttpRequest();
        var url = "https://helloacm.com/api/fortune/";
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               var fortune = xhr.responseText;
               fortune = JSON.parse(fortune);
               document.getElementById("quote").innerHTML = fortune;
               return fortune;
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }
   getFortune();
    
    function tweet(){
        window.open("https://twitter.com/intent/tweet?text=" + document.getElementById("quote").innerText);
    }