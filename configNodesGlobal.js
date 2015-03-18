var DropOptions = {
    tolerance: "touch",
    hoverClass: "dropHover",
    activeClass: "dragActive"
};

var EndpointOptions = {
    endpoint: ["Image", {src: "endpoint.png"}],
    paintStyle: {fillStyle: "white", outlineColor: "black"},
    isSource: true,
    scope: "blue",
    connectorStyle: {strokeStyle: "DarkGrey", lineWidth: 5},
    connector: ["Flowchart", {stub: [40, 40], gap: 10, cornerRadius: 10, alwaysRespectStubs: true}],
    ConnectionOverlays: [
        ["Arrow", {location: 1}]
    ],
    maxConnections: 1,
    isTarget: true,
    dropOptions: DropOptions
};