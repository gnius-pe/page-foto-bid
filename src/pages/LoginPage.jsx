import { useForm } from "react-hook-form"
import { useAuth } from "../context/authContext"
import { Link } from "react-router-dom";


export default function LoginPage() {

  const {register,handleSubmit, formState:{
    errors
  },} = useForm()

  const {singnIn, errors:loginError} = useAuth();

  const onSubmitLogin = handleSubmit((data) =>{
    singnIn(data)
  })
  
  const detailsError = loginError.map((error,i) =>(
    <div className="bg-red-500 p-2 text-white my-2" key={i}>{error}</div>
    ));


  return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Iniciar Sesion
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {detailsError}
          <form className="space-y-6" onSubmit={onSubmitLogin} >
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Correo electronico
                </label>
                <div className="mt-2">
                  <input
                     {...register('email',{required: true})}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  
                </div>
                {errors.email && (<p className="text-red-500">Email is requered</p>)}
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                  </label>
                </div>
                <div className="mt-2">
                  <input
                     {...register('password',{required: true})} 
                    type="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  
                </div>
                {errors.password &&( <p className="text-red-500">Password is requered</p>)}
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ingresar
                </button>
              </div>
              <p className="mt-10 text-center text-sm text-gray-500">
                ¿No tienes una cuenta?{' '}
                <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Crear cuenta
                </Link>
              </p>
            </form>
          </div>
        </div>
      </>
    )
  }