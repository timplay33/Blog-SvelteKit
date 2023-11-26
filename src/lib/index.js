// place files you want to import through the `$lib` alias in this folder.



export const FormatDate = function(date){
    var options = {year: 'numeric', month: 'short', day: 'numeric' };
    date = new Date(date);
    date = date.toLocaleDateString("en-US", options);
    return date;
}

export const CreateUrl = function(post){
    var d = new Date(post.published_at),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return "blog/"+[year, month, day, post.slug].join('-');
}

export const GetSlugFromURl = function(URL){
    let URLArr = URL.split('-');
    let date = URLArr.shift();
    date = URLArr.shift();
    date = URLArr.shift();
    URL = URLArr.join('-');
    return URL;
}
