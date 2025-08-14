import { Github, Mail, Linkedin, Phone } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "azhagukarthikeyanb@gmail.com",
      href: "mailto:azhagukarthikeyanb@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 7708908763",
      href: "tel:+917708908763",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/azhagu-akk",
      href: "https://github.com/azhagu-akk",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/azhagu-karthikeyan-b-",
      href: "https://www.linkedin.com/in/azhagu-karthikeyan-b-/",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get In{" "}
          <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="rounded-lg border bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-sm"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-white">{contact.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">
                      {contact.label}
                    </h3>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex  items-center justify-center text-gray-300 hover:text-white underline-offset-4 hover:underline transition-colors  h-auto text-sm lg:text-base"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            href="mailto:john.developer@email.com"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-8 py-3 h-11"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Message
          </a>
        </div> */}
      </div>
    </section>
  );
}
