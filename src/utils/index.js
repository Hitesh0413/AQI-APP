const webSocket = new WebSocket('wss://city-ws.herokuapp.com');


webSocket.onopen = () => {
}

webSocket.onerror = () =>{
}

export default webSocket;