let player = "x";
let mode = 0;// режим не выбран
let map = ["", "", "", "", "", "", "", "", ""];
let counterX = 0;
let counterO = 0;
//Навешиваем обработчики кликов
$(".map div").click(function () {
    //toDo проверка на game over
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
        player = "o";
        if (mode == 1 && !isMapFull()) {
            // ход делает компьютер
            let randomCell = Math.floor(Math.random() * 9);

            while (map[randomCell] != "") {
                randomCell = Math.floor(Math.random() * 9);
            }
            map[randomCell] = player;
            $("#cell" + randomCell).text(player);
            player = "x";
        }
    } else if (player == "o" && mode == 2) {
        map[cellId] = "o";
        $(this).text("o");
        player = "x";
    }

    if (checkWin() == true) {
        let plr = (player == "x") ? "o" : "x";
        //alert("End Game " + plr);
        $("#result").text("End Game " + plr);
        //обновляем счет игры
        if (plr == "x") {
            counterX += 1;
            $("#counterX").text(counterX);
        } else {
            counterO += 1;
            $("#counterO").text(counterO);
        }
    }
});



// очищает поле (от крестиков и ноликов)
$("#btnClear").click(function () {

    // вставляем во все клетки пустую строку
    $(".map div").text("");

    for (let i = 0; i < map.length; i++) {
        map[i] = "";
    }
    player = "x";
});
//$("#btncounterX").
$("#mode1").click(function () {
    mode = 1;
});
$("#mode2").click(function () {
    mode = 2;
});
function checkWin() {
    let plr = (player == "x") ? "o" : "x";
    if ((map[0] == plr && map[1] == plr && map[2] == plr) ||
        (map[3] == plr && map[4] == plr && map[5] == plr) ||
        (map[6] == plr && map[7] == plr && map[8] == plr)
    ) {
        return true;
    }
    if (map[0] == plr && map[3] == plr && map[6] == plr) {
        $("#cell0, #cell3, #cell6").css("color", "red");
        return true;
    }
    return false;
}
//возвращает true если карта заполнена иначе false
//toDo переделать на for
function isMapFull() {
    if(map[0] != "" && map[1] != "" && map[2] != "" &&
        map[3] != "" && map[4] != "" && map[5] != "" &&
        map[6] != "" && map[7] != "" && map[8] != "") {
        return true;
    }
    return false;
}