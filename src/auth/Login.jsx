import Form from "../components/Form";

export default function Login() {
  return (
    <section>
      <div>
        <h1 className="secondary-button my-5">Login</h1>

        <Form isPage={"login"} />
      </div>
    </section>
  );
}
