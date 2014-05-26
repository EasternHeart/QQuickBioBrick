function getData(kw,control)
{
    control.clear();
    var con2 = control;
    var ret;
    var doc = new XMLHttpRequest();
    doc.onreadystatechange = function() {
        if (doc.readyState == XMLHttpRequest.DONE) {
                            var a = doc.responseText;
                            //console.log(a);
                            var obj = eval ("(" + a + ")");
                            if(obj.status == 200)
                            {
                                var n = obj.total_found-1;
                                for(var i = 0;i<=n;i+=20)
                                {
                                    if(i+20 <= n)
                                        get2(kw,con2,i,i+20);
                                    else
                                        get2(kw,con2,i,n);
                                }
                            }
                            else
                            {
                                control.append({"title":"Error"});
                            }
                        }
                    }

                    doc.open("GET", "http://sphinx.icenowy.tk/dosdet.php?search=" + kw);
                    doc.send();
    return ret;
};

function get2(kw,control,st,fin)
{
    var doc = new XMLHttpRequest();
    doc.onreadystatechange = function() {
        if (doc.readyState == XMLHttpRequest.DONE) {
                            var a = doc.responseText;
                            //console.log(a);
                            var obj = eval ("(" + a + ")");
                            if(obj.status != 200)
                                control.append({"title" : ( "Error " + obj.status )});
                            else
                            {

                            for(var i = 0;i<obj.result_length;i++)
                            control.append({"title" : ( "\nName: " + obj.details[i].part_name +
                                                       "\nShort Name: " + obj.details[i].part_short_name +
                                                       "\nDescription: " + obj.details[i].part_short_desc +
                                                       "\nRelease Status: " + obj.details[i].release_status +
                                                       "\nSample Status: " + obj.details[i].sample_status +
                                                       "\nResults: " + obj.details[i].part_results)})
                            }
                        }
                    }
                    doc.open("GET", "http://sphinx.icenowy.tk/dosdet.php?search=" + kw + "&begin=" + st + "&end=" + (fin));
                    doc.send();
}

