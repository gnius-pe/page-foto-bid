import "./RegistroPage.css"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage(){

    const {register, handleSubmit, formState:{errors},} = useForm  ();
    const {singnUp, isAuthenticated, errors:registerError} = useAuth();
    const natigate = useNavigate();
    
    useEffect(()=>{
        if(isAuthenticated){
            natigate("/fotos");
        } 
    },[isAuthenticated]);

    const onSubmitRegistro = handleSubmit(async (values) =>  {
        singnUp(values)
    });
    
    const detailsError = registerError.map((error,i) =>(
      <div className="bg-red-500 p-2 text-white my-2" key={i}>{error}</div>
      ));

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://i.postimg.cc/9QsmRYgc/Imagen1.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Registra tu nueva cuenta
            </h2>
          </div>

          

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {detailsError}
            <form className="space-y-6" onSubmit={onSubmitRegistro} >
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Nombre de usuario
                </label>
                <div className="mt-2">
                  <input
                    {...register('username',{required: true})}
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  
                </div>
                {errors.username && (<p className="text-red-500">Username is requered</p>)}
              </div>

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
                  className="flex w-full justify-center rounded-md bg-violet-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Crear cuenta
                </button>
              </div>
              <p className="mt-10 text-center text-sm text-gray-500">
                ¿Ya tienes una cuenta?{' '}
                <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Ingresar con mi cuenta
                </Link>
              </p>
            </form>
          </div>
        </div>
    )
}