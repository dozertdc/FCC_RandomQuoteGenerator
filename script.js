function getFortune(){
        var xhr = new XMLHttpRequest();
        var url = "https://helloacm.com/api/fortune/";
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               var fortune = xhr.responseText;
               console.log(fortune);
               var changed = fortune.replace(/\n/g,'<br/>');
               fortune = JSON.parse(fortune);
               document.getElementById("quote").innerHTML = fortune;
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }
    getFortune();