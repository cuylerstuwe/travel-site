import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";;
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {

    constructor() {
        this.lazyImages = $(".lazyload");
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero__title");
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints() {
        this.lazyImages.on("load", () => {
            Waypoint.refreshAll();
        });
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        let self = this;
        new Waypoint({
            element: self.headerTriggerElement[0],
            handler: (direction) => {
                if(direction === "down") {
                   self.siteHeader.addClass("site-header--dark");
                }
                else {
                    self.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }

    createPageSectionWaypoints() {
        let self = this;
        this.pageSections.each(function() {
            let currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: (direction) => {
                    if(direction !== "down") {return;}
                    let matchingHeaderLink = currentPageSection.dataset.matchingLink;
                    self.headerLinks.removeClass("is-current-link");
                    $(matchingHeaderLink).addClass("is-current-link");
                },
                offset: "18%"
            });
            new Waypoint({
                element: currentPageSection,
                handler: (direction) => {
                    if(direction !== "up") {return;}
                    let matchingHeaderLink = currentPageSection.dataset.matchingLink;
                    self.headerLinks.removeClass("is-current-link");
                    $(matchingHeaderLink).addClass("is-current-link");
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader;