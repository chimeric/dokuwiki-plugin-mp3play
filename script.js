/**
 * Javascript for DokuWiki Plugin Mp3play
 *
 * Slightly modified for DokuWiki
 *
 * Michael Klier <chi@chimeric.de>
 */

var ap_instances = new Array();

function ap_stopAll(playerID) {
    for(var i = 0; i<ap_instances.length; i++) {
        try {
            if(ap_instances[i] != playerID) { 
                $("audioplayer" + ap_instances[i].toString()).SetVariable("closePlayer", 1);
            } else {
                $("audioplayer" + ap_instances[i].toString()).SetVariable("closePlayer", 0);
            }
        } catch( errorObject ) {
            // stop any errors
        }
    }
}

addInitEvent(function() {
    var objectID;
    var objectTags = document.getElementsByTagName("object");
    for(var i=0; i<objectTags.length; i++) {
        objectID = objectTags[i].id;
        if(objectID.indexOf("audioplayer") == 0) {
            ap_instances[i] = objectID.substring(11, objectID.length);
        }
    }
});

// vim:ts=4:sw=4:et:enc=utf-8:
