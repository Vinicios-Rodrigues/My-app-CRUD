import React, { useEffect, useState } from "react";

export default function Form(props) {
  const valorDosInput = {
    NomeCompleto: "",
    Email: "",
    Telefone: "",
  };

  // const [people, setPeople] = useState("");
  let [values, setValues] = useState(valorDosInput);
  useEffect(() => {
    if (props.idAtual == "") {
      setValues({ ...valorDosInput });
    } else {
      setValues({
        ...props.People[props.idAtual],
      });
    }
  },[props.id]);

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  //enviar dados
  const enviardados = (e) => {
    e.preventDefault();
    props.addEdit(values);
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={enviardados}>
        <div className="row">
          <div className="form-group input-group col-md-6">
            <input
              className="form-control"
              type="text"
              onChange={handleOnChange}
              placeholder="Insira seu nome"
              name="NomeCompleto"
              value={values.NomeCompleto}
            />
          </div>

          <div className="form-group input-group col-md-6">
            <input
              className="form-control"
              type="text"
              onChange={handleOnChange}
              placeholder="Insira seu Email"
              name="Email"
              value={values.Email}
            />
          </div>
        </div>

        <input type="submit" value={props.idAtual == ''?'Salvar':'Atualizar'} className="btn btn-primary" />
      </form>
    </div>
  );
}
