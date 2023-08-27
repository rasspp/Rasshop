import Form from "../components/Form";

export default function Login() {
  return (
    <section>
      <div className="pt-5">
        <h1 className="secondary-button">Login</h1>

        <Form isPage={"login"} />
      </div>
    </section>
  );
}
