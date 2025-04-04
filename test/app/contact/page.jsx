import { Form } from "@/components/contacts/Form";
import { Info } from "@/components/contacts/Info";
import { Title } from "@/components/contacts/Title";

export default function Page() {
  return (
    <section className="bg-white h-[135vh] lg:h-[100vh]">
      <Title />

      <div className="grid lg:grid-cols-2 container gap-10 mx-auto lg:px-10 px-5">
        <Info />
        <Form />
      </div>
    </section>
  );
}
