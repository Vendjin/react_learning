import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import translitToRus from "../../utils/helpers/translitToRus";
import { TextField } from "@mui/material";

interface FormData {
  firstName: string;
  lastName: string;
  login: string
}

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  login: yup.mixed()
});

const AnythingPage2 = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [isChecked, setIsChecked] = useState(false)
  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
    if (isChecked) {
      const login = data.login
      const submitData = { ...data, login: login }
      console.log(submitData)
      // console.log(login)
    } else {
      const login = `${data.lastName}.${data.firstName.charAt(0)}`;
      const submitData = { ...data, login: login }
      console.log(submitData)
      // console.log(login)
    }

  };


  const generateLogin = (surname: string, givename: string) => {
    const russianPattern = /^[а-яА-ЯёЁ\s]+$/;
    if (surname || givename) {
      if (russianPattern.test(surname) || russianPattern.test(givename)) {
        let login = `${translitToRus(surname.toLocaleLowerCase())}.${translitToRus(givename.toLocaleLowerCase()).slice(0, 1)}`
        if (isName(login)) {
          const maxLenght = surname.length + givename.length + 1;
          let counter = 1

          while (isName(login) && login.length < maxLenght) {
            login = `${translitToRus(surname.toLocaleLowerCase())}.${translitToRus(givename.toLocaleLowerCase()).slice(0, counter + 1)}`
            counter++
          }
        }
        return login

      } else {
        let login = `${surname?.toLocaleLowerCase()}.${givename?.toLocaleLowerCase().slice(0, 1)}`
        if (isName(login)) {
          const maxLenght = surname.length + givename.length + 1;
          let counter = 1

          while (isName(login) && login.length < maxLenght) {
            login = `${surname?.toLocaleLowerCase()}.${givename?.toLocaleLowerCase().slice(0, counter + 1)}`
            counter++
          }
        }
        return login
      }
    } else {
      return ''
    }
  }

  let isName = (login: string) => names.includes(login)
  const names = ['test.t', 'test.te', 'test.tes', 'and.a', 'obr.t', 'and.an'];
  // const isNameInList = names.includes(generateLogin(watch("lastName"), watch("firstName")));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="lastName">Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && <span>This field is required</span>}

        <label htmlFor="firstName">First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && <span>This field is required</span>}

        <label htmlFor="login">Login</label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
        <input
          defaultValue={generateLogin(watch("lastName"), watch("firstName"))}
          // value={generateLogin}
          readOnly={!isChecked}
          {...register("login")}
        />
        {isName(generateLogin(watch("lastName"), watch("firstName"))) && <span>Имя уже существует в списке!</span>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AnythingPage2



