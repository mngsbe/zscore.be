let deferredPrompt; // Allows to show the install prompt
let installLink;

window.addEventListener('beforeinstallprompt', event => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = event;
    // console.log("beforeinstallprompt fired");
    if (installLink == undefined) {
        installLink = document.getElementById("install_link");
    }
    // Show the setup link
    installLink.style.display = "inline";
});

function install_pwa() {
    // Show the prompt
    deferredPrompt.prompt();
//    installLink.style.display = "none";
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("z-sore setup accepted");
                // hide the link
                installLink.style.display = "none";
            } else {
                console.log("z-score setup rejected");
                installLink.style.display = "inline";
            }
            deferredPrompt = null;
        });
}