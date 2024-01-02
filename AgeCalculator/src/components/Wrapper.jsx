import React, { useState } from "react";
import TextField from "./TextField";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import Separator from "./Separator";
import styled from "styled-components";

const InputsContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const WrapperContainer = styled.div`
  background-color: var(--white);
  width: 40%;
  padding: 2.2rem;
  border-radius: 15px 12px 130px 15px;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
/* 
meses que tienen 31 dias: Enero, Marzo, Mayo, Julio, Agosto, Octubre, y Dic
meses de 30 dias : abril, junio, septiembre, noviembre
ultimos años bisiesto 2012,2016,2020,2024 == febrero tiene 29 dias

*/

function Wrapper() {
  const [entries, setEntries] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setEntries({ ...entries, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(entries);
  };

  function getUserYear(year, month, date) {
    let userAge = {};
    const actualDate = new Date();
    let currenteDate = actualDate.getDate();
    let currentMonth = actualDate.getMonth() + 1;
    let currentYear = actualDate.getFullYear();
    let userYear = currentYear - year;
    if (currentMonth >= month && currenteDate >= date) {
      userAge.year = userYear;
      userAge.month = currentMonth;
    } else {
      userAge.year = userYear - 1;
      userAge.month = currentMonth - 1;
    }
    return userAge;
  }
  console.log(getUserYear(1991, 12, 11));
  return (
    <WrapperContainer>
      <form onSubmit={handleSubmit}>
        <InputsContainer>
          <InputField
            name="day"
            labelText={"DAY"}
            placeholder="DD"
            handleChange={handleChange}
            entries={entries}
          />
          <InputField
            name="month"
            labelText={"MONTH"}
            placeholder="MM"
            handleChange={handleChange}
            entries={entries}
          />
          <InputField
            name={"year"}
            labelText={"YEAR"}
            placeholder="YYYY"
            handleChange={handleChange}
            entries={entries}
          />
        </InputsContainer>
        <SubmitButtonContainer>
          <Separator />
          <SubmitButton handleSubmit={handleSubmit} />
        </SubmitButtonContainer>
      </form>
      <TextFieldContainer>
        <TextField date={"years"} />
        <TextField date={"months"} />
        <TextField date={"days"} />
      </TextFieldContainer>
    </WrapperContainer>
  );
}

export default Wrapper;
