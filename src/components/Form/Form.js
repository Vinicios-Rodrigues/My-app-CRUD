import React, { useEffect, useState } from "react";
import FireDb from "../../database/firebase";

export default function Form() {
  const [people, setPeople] = useState("");

  const handleOnChange = (e) => {
    setPeople(e.target.value);
  };
  // add dados ao BD
  const createPeople = (e) => {
    e.preventDefault();
    FireDb.child("Adicionar-pessoas").push(people, (error) => {
      if (error) console.log(error);
    });
    const Pessoas = {
      people,
      complete: false,
    };
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={people} />
      <button onClick={createPeople}>Cadastrar Pessoa </button>
    </div>
  );
}
