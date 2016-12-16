function timeUpdate() {
    $("#date").text(moment().format('MMMM DD'));
    $("#time").text(moment().format('hh:mm A'));
}

function refresh() {
    location.reload();
}

function colorUpdate() {
    var text = $("#status").text();

    if (text === "In") {
	$("#SW").css("background-color", "#4dd843");
	$("#SW").css("color", "#000000");
    }
    else if (text === "Out") {
	$("#SW").css("background-color", "#d84343");
	$("#SW").css("color", "#000000");
    }
    else if (text === "In Simmons") {
	$("#SW").css("background-color", "#edea3b");
	$("#SW").css("color", "#000000");
    }
    else if (text === "Sleeping") {
	$("#SW").css("background-color", "#3a3a3a");
	$("#SW").css("color", "#ffffff");
    }
}

function dbUpdate(text) {
    $.post("update", { status: text });
}

$(document).ready(function () {
    colorUpdate();
    
    $("#SW").click(function() {
	$("#SNW, #SNE, #SSW, #SSE").show();
	$("#SW").hide();
	console.log("hi");
    });

    $("#SNW, #SNE, #SSW, #SSE").click(function () {
	$("#status").text($(this).text());
	colorUpdate();

	$("#SNW, #SNE, #SSW, #SSE").hide();
	$("#SW").show();

	dbUpdate($(this).text());
    });
    
    setInterval(timeUpdate, 1000);
    setInterval(refresh, 301 * 1000);
});
