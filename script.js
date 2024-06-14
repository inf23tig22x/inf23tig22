function loadData() {
    var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    function reportStatus() {
        if (oXHR.readyState == 4)               // REQUEST COMPLETED.
            createNews(this.responseXML);      // ALL SET. NOW SHOW XML DATA.
    }

    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "xml/inventario.xml", true);        // true = ASYNCHRONOUS REQUEST (DESIRABLE), false = SYNCHRONOUS REQUEST.
    oXHR.send();
}


function createNews(xml) { //código feio
    var newsSection = document.getElementById('newsSection');        // THE PARENT DIV.
    var newsList = xml.getElementsByTagName('news');       // THE XML TAG NAME.
    
    for (var i = 0; i < newsList.length; i++) {
        var news = document.createElement('article');

        var overlay = document.createElement('div');
        overlay.className = "card-img-overlay";

        var linkref = document.createElement('a');
        var linkxml = newsList[i].getElementsByTagName("redirect_link")[0].getAttribute("href");    //edit data
        linkref.href = linkxml;

        var img = document.createElement("img");
        img.src = newsList[i].getElementsByTagName("image")[0].getAttribute("src");    //edit data
        img.alt = newsList[i].getElementsByTagName("image")[0].getAttribute("alt");    //edit data
        linkref.appendChild(img);
        linkref.appendChild(overlay);

        var cardImg = document.createElement("div");
        cardImg.className = "card-img";
        cardImg.appendChild(linkref);

        var text = document.createTextNode(newsList[i].getElementsByTagName("text")[0].childNodes[0].nodeValue); //edit data
        var para = document.createElement("p");
        para.appendChild(text);
        var cardMessage = document.createElement('div');
        cardMessage.className = "card-message";
        cardMessage.appendChild(para);

        var linkref2 = document.createElement("a");
        linkref2.href = linkxml; //edit data


        var texth3 = document.createElement("h3");
        texth3.innerHTML = newsList[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;    //edit data
        linkref2.appendChild(texth3);
        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBody.appendChild(linkref2);
        cardBody.appendChild(cardMessage);

        news.appendChild(cardImg);
        news.appendChild(cardBody);
        newsSection.appendChild(news);
    }

}

function hideImage() {

    var x = document.getElementById("figImage");
    var btn = document.getElementById("btnHideImage");

    if (x.style.visibility !== "hidden") {
        x.style.visibility = "hidden";
        btn.innerText = "Show Element (visibility)";
    } else {
        x.style.visibility = "visible";
        btn.innerText = "Hide Element (visibility)";
    }
}

function hideElement() {

    var x = document.getElementById("figImage");
    var btn = document.getElementById("btnHideElement");

    if (x.style.display !== "none") {
        x.style.display = "none";
        btn.innerText = "Show Element (display)";
    } else {
        x.style.display = "inline";
        btn.innerText = "Hide Element (display)";
    }
}
