import Form from "../components/Form";

export default function Register() {
  return (
    <section>
      <div className="pt-5">
        <h1 className="secondary-button">Register</h1>

        <Form isPage={"register"} />
      </div>
    </section>
  );
}
