import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import FireDb from "../../database/firebase";
import Conteudo from "../Conteudo/Conteudo";
import Form from "../Form/Form";

const Cadastro = () => {
  let [People, setPeople] = useState({});
  let [idAtual, setIdAtual] = useState("");

  useEffect(() => {
    FireDb.child("Adicionar-pessoas").on("value", (dados) => {
      if (dados.val() != null) {
        setPeople({
          ...dados.val(),
        });
      } else {
        setPeople({});
      }
    });
  }, []);

  //Edita os dados
  const addEdit = (obj) => {
    if (idAtual == "") {
      FireDb.child("Adicionar-pessoas").push(obj, (error) => {
        if (error) {
          console.log(error);
        } else {
          setIdAtual("");
        }
      });
    } else {
      FireDb.child(`Adicionar-pessoas/${idAtual}`).set(obj, (erro) => {
        if (erro) {
          console.log(erro);
        }
      });
    }
  };

  //Deletar cadastro
  const deletePeople = (key) => {
    if (window.confirm("deseja apagar cadastro?")) {
      FireDb.child(`Adicionar-pessoas/${key}`).remove((error) => {
        if (error) {
          console.log(error);
        }
      });
    }
  };

  return (
    <>
      <Header />
      <Conteudo>
        <div className="row">
          <div className="col-md-5">Formulario de cadastro</div>
          <Form {...{ addEdit, idAtual, People }} />
          <div className="col-md-7">
            <table className="table table-boderless table-stripped">
              <thead className="thead-light">
                <tr>
                  <td>Nome cadastrado</td>
                  <td>Email</td>
                </tr>
              </thead>
              <tbody>
                {/* pega os dados do BD e lista-los como tabela */}
                {Object.keys(People).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{People[id].NomeCompleto}</td>
                      <td>{People[id].Email}</td>
                      <td>
                        <a
                          className="btn btn-primary"
                          onClick={() => {
                            setIdAtual(id);
                          }}
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a
                          className="btn btn-danger"
                          onClick={() => deletePeople(id)}
                        >
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Conteudo>
    </>
  );
};

export default Cadastro;
