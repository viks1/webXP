import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragService {
  constructor() {
      function enableDragging(elements: HTMLElement[]) {
        elements.forEach(function (el: HTMLElement | null) {
          if (el) {
            dragElement(el);
          }
        });

        function dragElement(elmnt: HTMLElement) {
          let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
          const elmntHeader = document.getElementById(elmnt.id + "header") as HTMLElement | null;
          if (elmntHeader) {
            elmntHeader.onmousedown = dragMouseDown;
          } else {
            elmnt.onmousedown = dragMouseDown;
          }

          function dragMouseDown(e: MouseEvent) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
          }

          function elementDrag(e: MouseEvent) {
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

      const projectsWindow = document.getElementById("projects_window");
      const contactInfo = document.getElementById("contact_info");
      const dsk = document.getElementById("dsk_icon");

      if (projectsWindow && contactInfo && dsk) {
        enableDragging([projectsWindow, contactInfo, dsk] as HTMLElement[]);
      }
    };
  }