import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";;

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        let self = this;
        this.itemsToReveal.each(function() {
            let currentElement = this;
            console.log(currentElement);
            new Waypoint({
                element: currentElement,
                handler: () => {
                    $(currentElement).addClass("reveal-item--is-visible");
                },
                offset: self.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll;