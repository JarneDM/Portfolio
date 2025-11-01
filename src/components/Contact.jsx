import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwpnddpb");
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (state.succeeded) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  if (visible) {
    return <p className="text-white">Thanks for Submitting!</p>;
  }
  return (
    <div className="flex justify-center items-center lg:w-lg sm:w-sm md:w-md min-h-screen bg-transparent text-white px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6 border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>

        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <input className="hidden" type="text" name="_subject" value="New contact from website"></input>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 transition-colors duration-300 py-2 rounded-md font-semibold"
        >
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
