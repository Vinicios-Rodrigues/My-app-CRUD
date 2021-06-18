import React, { useState, useEffect } from "react";
import FireDb from "../../database/firebase";
import Pessoas from "../Pessoas/Pessoas";

const List = () => {
  const [List, setList] = useState();

  useEffect(() => {
    FireDb.child("Adicionar-pessoas").push(people, (error) => {
      if (error) console.log(error);
    });

    FireDb.on("value", (snapshot) => {
      const ListaValue = snapshot.val();
      const Lista = [];
      for (let id in ListaValue) {
        Lista.push({ id, ...ListaValue[id] });
      }
      setList(Lista);
    });
  }, []);

  return (
    <div>
      {List.map((pessoas, index) => (
        <Pessoas pessoas={pessoas} key={index} />
      ))}
    </div>
  );
};
export default List;
