const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const d = new Date();
const month_name = monthNames[d.getMonth()]
const day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

$('.month_name').text(month_name)
$('.month_number').text((d.getDate() < 10 ? '0' : '') + d.getDate())
$('.day').text(day[d.getDay()-1])


var hourse_minute = document.getElementById('hourse_minute');
var second = document.getElementById('second');

function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    if (m < 10){
        m = '0'+m;
    }if (h < 10){
        h = '0'+h;
    }if (s < 10){
        s = '0'+s
    }
    hourse_minute.textContent = h + ":" + m;
    second.textContent = s
}

setInterval(time, 1000);


