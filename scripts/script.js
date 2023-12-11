window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});

var clock = document.getElementById("time");

function updateTime(clockElement) {
    clockElement.innerHTML = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}

setInterval(function () {
    updateTime(clock);
}, 1000);

function sliderToggle() {
    var menu = document.getElementById("volume_slider");
    if (menu.hidden) {
        document.getElementById("security_window").hidden = true;
        menu.hidden = false;
    } else {
        menu.hidden = true;
    }
}

var volumeSlider = document.getElementsByClassName("slider").item(0);
var value = 0;
var slideInitial = 100;

function muteToggle() {
    var checkmark = document.getElementById("volume_checkbox");
    if (value === 0) {
        checkmark.style.backgroundImage = "url('assets/images/checkmark_enabled.png')";
        value = 1;
        document.getElementById("volume").src = "assets/images/volume_muted.png";
        slideInitial = volumeSlider.value;
        volumeSlider.value = 0;
    } else {
        checkmark.style.backgroundImage = "url('assets/images/checkmark_disabled.png')";
        value = 0;
        document.getElementById("volume").src = "assets/images/volume_full.png";
        volumeSlider.value = slideInitial;
    }
}

var sliderImage = document.createElement('img');
sliderImage.setAttribute('src', 'assets/images/volume_slider2.png');
sliderImage.setAttribute('id', 'sliderImage');
sliderImage.style.zIndex = '5';
sliderImage.style.height = "100%";
sliderImage.style.width = "100%";

var volumeSliderElement = document.getElementsByClassName("slider").item(0);

function checkMuteVolume(volumeSliderElement) {
    if (volumeSliderElement.value < 2) {
        document.getElementById("volume").src = "assets/images/volume_muted.png";
        document.getElementById("volume_checkbox").style.backgroundImage = "url('assets/images/checkmark_enabled.png')";
    }
    if (volumeSliderElement.value > 1) {
        document.getElementById("volume").src = "assets/images/volume_full.png";
        document.getElementById("volume_checkbox").style.backgroundImage = "url('assets/images/checkmark_disabled.png')";
    }
}

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

function hideSecurityWindow() {
    document.getElementById("security_window").hidden = true;
}

function toggleMenu() {
    var menu = document.getElementsByClassName("menu").item(0);
    if (menu.hidden) {
        menu.hidden = false;
    } else {
        menu.hidden = true;
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

function openSite(url) {
    window.open(url);
}

function showAboutInfo() {
    var aboutScreen = document.getElementById("contact_info");
    aboutScreen.hidden = false;
}

function hideAboutInfo() {
    var aboutScreen = document.getElementById("contact_info");
    aboutScreen.hidden = true;
}

function showProjectsWindow() {
    var projectsScreen = document.getElementById("projects_window");
    projectsScreen.hidden = false;
}

function hideProjectsWindow() {
    var projectsScreen = document.getElementById("projects_window");
    projectsScreen.hidden = true;
}
