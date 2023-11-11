const videoElement = document.getElementById("video");
const btn = document.getElementById("btn");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => videoElement.play();
    } catch (err) {
        // Catch Error here
    }
};

btn.addEventListener("click", async () => {
    // Disable Button
    btn.disabled = true;

    // Start Picture in Picture
    await videoElement.requestPictureInPicture();

    // Reset Button
    btn.disabled = false;
});

// On Load
selectMediaStream();