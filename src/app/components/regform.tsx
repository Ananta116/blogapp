"use client";
import axios from "axios";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as yup from "yup";


const registerScheme = yup.object().shape({
  name: yup.string().required("Harus diisi").min(6, "Minimal 6 Character"),
  email: yup.string().required("Harus diisi").email("Input Valid Email"),
  password: yup
    .string()
    .required("Fill the Password!")
    .min(6, "Minimal 6 Character"),
});

interface IRegForm {
  name: string;
  email: string;
  password: string;
}
interface IProps {
  onReload: () => void;
}

export default function RegForm({ onReload }: IProps) {
  const initialValues: IRegForm = { name: "", email: "", password: "" };
  const router = useRouter();
  const regUser = async (
    values: IRegForm,
    actions: FormikHelpers<IRegForm>
  ) => {
    try {
      await axios.post(
        "https://pilotcake-us.backendless.app/api/users/register",
        values
      );
      actions.resetForm();
      onReload();
      router.push("/");
      toast.success("Register Success !");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Register Failed");
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerScheme}
        onSubmit={regUser}
      >
        {(props: FormikProps<IRegForm>) => {
          const { errors, touched, isSubmitting } = props;
          return (
            <Form>
              <div className="bg-black w-[500px] h-[500px] rounded-md text-white">
                <h1 className="ml-5 mt-5 text-[25px] font-medium">
                  Sign up now
                </h1>
                <p className="ml-5 mt-8">Username</p>
                <Field
                  name="name"
                  className="ml-5 mt-2 drop-shadow border w-[450px] "
                />
                {touched.name && errors.name ? (
                  <div className="ml-5 text-red-600">{errors.name}</div>
                ) : null}
                <p className="ml-5 mt-2">Email</p>
                <Field
                  name="email"
                  className="ml-5 mt-2 drop-shadow border w-[450px] "
                />
                {touched.email && errors.email ? (
                  <div className="ml-5 text-red-600">{errors.email}</div>
                ) : null}
                <p className="ml-5 mt-2">Password</p>
                <Field
                  name="password"
                  className="ml-5 mt-2 drop-shadow border w-[450px] text-white "
                  type="password"
                />
                {touched.password && errors.password ? (
                  <div className="ml-5 text-red-600">{errors.password}</div>
                ) : null}
                <button
                  type="submit"
                  className="mt-[50px] ml-5 bg-lime-400 text-black w-[150px] rounded-md drop-shadow"
                >
                  {isSubmitting ? "loading" : "REGISTER"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
