import React, { useState, useEffect } from "react";

export function UserName(props) {
  const [windowName, setName] = useState(props.match.params.id);

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    document.title = windowName;
  });

  return (
    <div>
      <button onClick={() => setName(windowName + " Dev")}>Clique aqui</button>
      <h1>User Name: {windowName}</h1>
    </div>
  );
}
