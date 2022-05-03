import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUpUser(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <Form onSubmit={signUpUser}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          type="password"
          placeholder="Confirme a senha"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Submit type="submit">Cadastrar</Submit>
      </Form>
      <Link to="/">
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8c11be;
  width: 100vw;
  height: 100vh;

  h1 {
    font-family: "Saira Stencil One", sans-serif;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
    margin-bottom: 20px;
  }
  p {
    margin-top: 36px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
`;

const Input = styled.input`
  width: 326px;
  height: 58px;
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  color: #000000;
  line-height: 23px;
  font-weight: 400;
`;

const Submit = styled.button`
  width: 326px;
  height: 46px;
  background-color: #a328d6;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;
