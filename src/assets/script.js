window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});


setInterval(function () {
    checkMuteVolume(volumeSliderElement);

    if (screen.width < 1436) {
        document.getElementById("security").style.visibility = 'hidden';
        document.getElementById("security_window").hidden = true;
    } else if (screen.width > 1436) {
        document.getElementById("security").style.visibility = 'visible';
    }

    if (screen.width < 1125) {
        document.getElementById("volume").style.visibility = 'hidden';
        document.getElementById("volume_slider").hidden = true;
    } else if (screen.width > 1125) {
        document.getElementById("volume").style.visibility = 'visible';
    }

    if (screen.width < 672) {
        document.getElementById("time").style.visibility = 'hidden';
        document.getElementById("taskbar_end").style.visibility = 'hidden';
    } else if (screen.width > 672) {
        document.getElementById("time").style.visibility = 'visible';
        document.getElementById("taskbar_end").style.visibility = 'visible';
    }

    if (screen.height < 373 || screen.width < 893) {
        document.getElementById("contact_title").style.visibility = 'hidden';
    } else {
        document.getElementById("contact_title").style.visibility = 'visible';
    }

}, 100);

function toggleSecurityWindow() {
    var securityWindow = document.getElementById("security_window");
    if (securityWindow.hidden) {
        document.getElementById("volume_slider").hidden = true;
        securityWindow.hidden = false;
    } else {
        securityWindow.hidden = true;
    }
}

function enableDragging(elements) {
    elements.forEach(function (el) {
        dragElement(el);
    });

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}

var projectsWindow = document.getElementById("projects_window");
var contactInfo = document.getElementById("contact_info");
var dsk = document.getElementById("dsk_icon");


enableDragging([projectsWindow, contactInfo, dsk]);
