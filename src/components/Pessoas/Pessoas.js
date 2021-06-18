import React, { useEffect, useState } from "react";
import firebase from "../util/firebase";

export default function Pessoas({ pessoas }) {
  const deleteTodo = () => {
    const pessoaRef = firebase
      .database()
      .ref("Adicionar-pessoas")
      .child(pessoas.id);
    pessoaRef.remove();
  };
  const completeTodo = () => {
    const pessoaRef = firebase
      .database()
      .ref("Adicionar-pessoas")
      .child(pessoas.id);
    pessoaRef.update({
      complete: !pessoas.complete,
    });
  };

  //Listar pessoas
  const [listaPeople, setListaPeople] = useState("");

  useEffect(() => {
    firedb.child("tarefa").on("value", (dado) => {
      if (dado.val() != null) {
        setListaPeople({ ...dado.val() });
      }
    });
  });

  return (
    <div>
      <h1 className={pessoas.complete ? "complete" : ""}>{pessoas.title}</h1>
      <ul>
        {Object.keys(listaPeople).map((dado) => (
          <li>{dado[id]}</li>
        ))}
      </ul>
      ;<button onClick={deleteTodo}>Delete</button>
      <button onClick={completeTodo}>Complete</button>
      <button onClick={}>Mostrar Pessoa Cadastrada </button>

    </div>
  );
}
