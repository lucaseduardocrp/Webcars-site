import { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo_Image from '../../assets/Logo.svg';
import { Container } from '../../components/Container';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../components/Input';
import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../services/firebase';

import { AuthContext } from '../../context/AuthContext';

const schema = z.object({
  name: z.string().nonempty('O campo nome é obrigatório'),
  email: z.string().email('Insira um email válido').nonempty('O campo email é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres').nonempty('O campo senha é obrigatório')
});

type FormData = z.infer<typeof schema>;

export const Register = () => {
  const { handleInfoUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  });
  function onSubmit(data: FormData) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (user) => {
        await updateProfile(user.user, {
          displayName: data.name
        });

        handleInfoUser({
          uid: user.user.uid,
          name: data.name,
          email: data.email
        });

        console.log('CADASTRADO COM SUCESSO!');
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.log('ERRO AO CADASTRAR ESTE USUÁRIO');
        console.log(error);
      });
  }

  useEffect(() => {
    async function handleLogout() {
      await signOut(auth);
    }

    handleLogout();
  }, []);

  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link to="/" className="mb-6 max-2-sm w-full flex justify-center">
          <img src={Logo_Image} alt="Logo image" className="w-full max-w-lg" />
        </Link>

        <form className="bg-white max-w-xl w-full rounded-lg p-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <Input
              type="text"
              name="name"
              placeholder="Digite o seu nome"
              error={errors.name?.message}
              register={register}
            />
          </div>

          <div className="mb-2">
            <Input
              type="email"
              name="email"
              placeholder="Digite o seu email"
              error={errors.email?.message}
              register={register}
            />
          </div>

          <div className="mb-2">
            <Input
              type="password"
              name="password"
              placeholder="Digite a sua senha"
              error={errors.password?.message}
              register={register}
            />
          </div>

          <button type="submit" className="bg-zinc-900 w-full rounded-lg text-white h-10 font-medium">
            Cadastrar
          </button>
        </form>

        <Link to="/login" className="underline">
          Já possui uma conta? Faça o login!
        </Link>
      </div>
    </Container>
  );
};
