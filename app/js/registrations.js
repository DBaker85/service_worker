function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}


if('serviceWorker' in navigator) {
    navigator.serviceWorker
            .register('/sw.js')
            .then(
                function(registration) {                    
                    if ('PushManager' in window) {
                        
                        Notification.requestPermission(function(result) {
                            console.log(`request permission: ${result}`);
                        });

                        // https://web-push-codelab.glitch.me/

                        registration.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: urlB64ToUint8Array('BNIOdB-bJVl_1i_ggLeFKkxX3XDv3akHkm-0pc5baOR-TDhV8gVgddebZKTAtrolT3-vy0h9PISErr2SIqPE56A')
                        }).then(subscription => {
                            console.log(
                                JSON.stringify(subscription)
                            )
                        })
                        
                    }

                }
            )
}