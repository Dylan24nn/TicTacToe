let player = "x";
let map = ["", "", "", "", "", "", "", "", ""];
let counterX = 0;
let counterO = 0;
//Навешиваем обработчики кликов
$(".map div").click(function () {
    //обновляем массив(карту)
    let cellId = $(this).attr("id");
    cellId = parseInt(cellId[4]);
    // проверяем что клетка пустая
    if (map[cellId] != "") {
        return;
    }
    // аналог InnerHTML
    if (player == "x") {
        map[cellId] = "x";
        $(this).text("x");
        player = "o"
    } else {
        map[cellId] = "o";
        $(this).text("o");
        player = "x"
    }

    if (checkWin() == true) {
        let plr = (player == "x") ? "o" : "x";
        //alert("End Game " + plr);
        $("#result").text("End Game " + plr);
        //обновляем счет игры
        if(plr == "x") {
            counterX += 1;
            $("#counterX").text(counterX);
        } else {
            counterO += 1;
            $("#counterO").text(counterO);
        }
    }


});
$("#chooseXO").click(function () {
    if (player == "x") {
        map[cellId] = "x";
        $(this).text("x");
        player = "o"
    } else {
        map[cellId] = "o";
        $(this).text("o");
        player = "x"
    }


});

// очищает поле (от крестиков и ноликов)
$("#btnClear").click(function () {

    // вставляем во все клетки пустую строку
    $(".map div").text("");

    for(let i = 0; i < map.length; i++) {
        map[i] = "";
    }
    player = "x";
});
//$("#btncounterX").

function checkWin() {
    let plr = (player == "x") ? "o" : "x";
    if ((map[0] == plr && map[1] == plr && map[2] == plr) ||
        (map[3] == plr && map[4] == plr && map[5] == plr) ||
        (map[6] == plr && map[7] == plr && map[8] == plr)
    ) {
        return true;
    }
    if (map[0] == plr && map[3] == plr && map[6] == plr){
        $("#cell0, #cell3, #cell6").css("color", "red");
        return true;
    }
    return false;
}