document.addEventListener("keydown", function(event) {
    if (event.altKey && event.code === "KeyX")
    {
        alert('Alt + X pressed!');
        event.preventDefault();
    }
});

hotkeys('ctrl+a,ctrl+b,r,f', function (event, handler) {
    switch (handler.key) {
        case 'ctrl+a':
            alert('you pressed ctrl+a!');
            break;
        case 'ctrl+b':
            alert('you pressed ctrl+b!');
            break;
        case 'r':
            alert('you pressed r!');
            break;
        case 'f':
            alert('you pressed f!');
            break;
        default:
            alert(event);
    }
});