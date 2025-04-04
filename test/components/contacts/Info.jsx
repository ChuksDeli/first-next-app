import { FiPhone } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

export function Info() {
  return (
    <section className="grid gap-y-10 text-gray-800">
      <div>
        <h2 className="font-bold lg:text-2xl text-xl">Call us</h2>
        <p>Call our team Mon-Fri 9am to 5pm.</p>
        <p className="flex gap-2 items-center">
          <FiPhone /> +234 811 459 8234
        </p>
      </div>

      <div>
        <h2 className="font-bold lg:text-2xl text-xl">Chat with us</h2>
        <p>Speak to our friendly team via live chat.</p>
        <p className="flex gap-2 items-center">
          <TiMessages /> Start a live chat
        </p>
        <p className="flex gap-2 items-center">
          <BsTwitterX /> Message us on Xffv
        </p>
      </div>

      <div>
        <h2 className="font-bold lg:text-2xl text-xl">Vist us</h2>
        <p>Call to us in person at our HQ.</p>
        <p className="flex gap-2 items-center">
          <IoLocationOutline /> 22 Adeniyi-Oke street ikoyi Lagos
        </p>
      </div>
    </section>
  );
}
