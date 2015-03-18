jsPlumb.ready(function () {



    var PlumbObject = jsPlumb;
    

    // single click on any endpoint
    PlumbObject.bind("endpointClick", function (endpoint, originalEvent) {
        alert("click on endpoint on element " + endpoint.elementId);
    });
});


