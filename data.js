function getData(kw,control)
{
    var doc = new XMLHttpRequest();
    doc.onreadystatechange = function() {
        if (doc.readyState == XMLHttpRequest.HEADERS_RECEIVED) {

                        } else if (doc.readyState == XMLHttpRequest.DONE) {
                            var a = doc.responseText;
                            console.log(a);
                        }
                    }

                    doc.open("GET", "http://sphinx.icenowy.tk/dosdet.php?search=" + kw);
                    doc.send();
}
