function random(a, b){
    if(a == null){a=0;}
    if(b == null){b=5;}
    var c = Math.random(a, b) * 100;
    return Math.ceil(c);
}

var timer = random(1000, 100000);
var images = [
    "https://cdn.discordapp.com/attachments/864187257468616755/912080416742199346/Sans_titre_1_20211121154138.jpg",
    "https://cdn.discordapp.com/attachments/864187257468616755/912081276066988042/Sans_titre_356_20211025205811.jpg"
];
var onOFF = true;

$('.class').draggable();
$('.manger').draggable();

$( ".class" ).on( "drag", function( event, ui ) {
    onOFF = false;
});
$( ".class" ).on( "dragstop", function( event, ui ) {
    onOFF = true;
});

setInterval(()=>{
    timer = random(5000, 100000) * 100;
    console.log(onOFF);
    setTimeout(() => {
        if(onOFF == true){
            move();
        }
    }, timer);
    $('.class img').attr('src', images[0]);
}, 1000);

function move(){
    $('.class').attr('style', `transform: translate(${random(0, 100)}%, ${random(0, 100)}%)`);
    $('.class img').attr('src', images[1]);
}