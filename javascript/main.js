var AnimateBar = function(){
    var progressbar = document.getElementsByClassName('bar')[0],
        max = progressbar.dataset.max,
        time = (1000/max)*2,
        value = progressbar.style.width,
        text = document.getElementsByClassName('text')[0];

    var loading = function() {
        value  = parseInt(value,10) +  1;
        progressbar.style.width = (value + '%');

        text.innerHTML = (value + '%');

        if (value == max) {
            clearInterval(animate);
        }
    };

    var animate = setInterval(function() {
        loading();
    }, time);
}();