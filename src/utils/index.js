const webSocket = new WebSocket('ws://city-ws.herokuapp.com');


webSocket.onopen = () => {
}

webSocket.onerror = () =>{
}

export default webSocket;