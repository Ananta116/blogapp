"use client";
// import { login } from "@/redux/userSlice";
import axios from "axios";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";

const loginScheme = yup.object().shape({
  login: yup.string().required("Harus diisi"),
  password: yup.string().required("Fill the Password!"),
});

interface ILogForm {
  login: string;
  password: string;
}
interface IProps {
  onReload: () => void;
}

export default function LoginForm({ onReload }: IProps) {
  const initialValues: ILogForm = { login: "", password: "" };
  const router = useRouter();
  //   const dispatch = useDispatch();
  const logUser = async (
    values: ILogForm,
    actions: FormikHelpers<ILogForm>
  ) => {
    try {
      const res = await axios.post(
        "https://pilotcake-us.backendless.app/api/users/login",
        values
      );
      if (res.data?.length == 0) throw "Incorrect Email or Password";
      actions.resetForm();
      console.log(res.data);
      onReload();
      toast.success("Login Successfull!");
      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Incorrect Email or Password"
      );
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginScheme}
        onSubmit={logUser}
      >
        {(props: FormikProps<ILogForm>) => {
          const { errors, touched, isSubmitting } = props;
          return (
            <Form>
              <div className="bg-white w-[500px] h-[500px] rounded-md text-black">
                <h1 className="ml-5 mt-5 text-[25px] font-medium">
                  Sign In now
                </h1>
                <p className="ml-5 mt-2">Name</p>
                <Field
                  name="login"
                  className="ml-5 mt-2 drop-shadow border w-[450px] "
                />
                {touched.login && errors.login ? (
                    <div className="ml-5 text-red-600">{errors.login}</div>
                ): null}
                <p className="ml-5 mt-2">Password</p>
                <Field
                  name="password"
                  className="ml-5 mt-2 drop-shadow border w-[450px] "
                  type="password"
                />
                {touched.password && errors.password ? (
                  <div className="ml-5 text-red-600">{errors.password}</div>
                ) : null}
                <button
                  type="submit"
                  className="mt-[50px] ml-5 bg-blue-900 text-white w-[150px] rounded-md drop-shadow"
                >
                  {isSubmitting ? "loading" : "Sign in"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
