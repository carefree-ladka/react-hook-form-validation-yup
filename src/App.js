import "./styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function App() {
  const schema = yup.object().shape({
    name: yup.string().min(5).max(15).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(8)
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="name" {...register("name")} />
          {errors.name && <p className="error">{errors.name?.message}</p>}
        </div>
        <div>
          <input type="email" placeholder="email" {...register("email")} />
          {errors.email && <p className="error">{errors.email?.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    </div>
  );
}
