import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../src/context/SocketProvider";

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const socket = useSocket();

  console.log(socket);

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback((data) => {
    const { email, room } = data
    console.log(email, room)
  }, [])

  useEffect(() => {
    socket.on('room:join',handleJoinRoom )
    return () => {
      socket.off("room:join", handleJoinRoom)
    }
  }, [socket, handleJoinRoom])

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="room">Room</label>
        <input
          type="number"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />{" "}
        <br />
        <button>Join</button>
      </form>
    </div>
  );
};

export default Lobby;
