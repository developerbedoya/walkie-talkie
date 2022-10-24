window.onload = () => {
    let btnConnect = document.getElementById('btnConnect');
    btnConnect.onclick = () => {
        // TODO: Make the program function
    }

    requestPermission();
    


    let btnTalk = document.getElementById('btnTalk');
    btnTalk.onclick = () => {
        // TODO: transmit audio
    }
}

const errorCallback = (e) => {
    window.alert('Error getting permissions');
}

const requestPermission = async () => {
    let stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    });

    let video = document.querySelector('video');
    video.srcObject = stream;
}