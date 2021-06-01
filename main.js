let load = setTimeout(function () {
    let buttonStart = document.createElement('a');
    buttonStart.id = "extStart";
    buttonStart.append('Start');
    buttonStart.href = '#';
    let buttonStop = document.createElement('a');
    buttonStop.id = "extStop";
    buttonStop.append('Stop');
    buttonStop.href = '#';

    let buttonPosition = document.getElementsByClassName("css-7y16gy");
    buttonPosition[0].prepend(buttonStop);
    buttonPosition[0].prepend(buttonStart);

    document.getElementById("extStart").addEventListener("click", function (e) {
        e.preventDefault();
        alert('Start action');
    });

    document.getElementById("extStop").addEventListener("click", function (e) {
        e.preventDefault();
        alert('Stop action');
    });

}, 7000);