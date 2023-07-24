import React, { useCallback, useState } from "react";

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log({
      email,
      room
    })
  }, [email, room]);

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
