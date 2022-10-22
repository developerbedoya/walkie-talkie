window.onload = () => {
    let btnConnect = document.getElementById('btnConnect');
    btnConnect.onclick = () => {
        // TODO: Make the program function
    }

    requestPermission();
    


    let btnTalk = document.getElementById('btnTalk');
    btnTalk.onclick(() => {
        // TODO: transmit audio
    })
}

const errorCallback = (e) => {
    window.alert('Error getting permissions');
}

const requestPermission = () => {
    navigator.getUserMedia({
        video: true,
        audio: true
    }, (localMediaStream) => {
        let video = document.querySelector('video');
        video.srcObject = localMediaStream;
    }, errorCallback);
}