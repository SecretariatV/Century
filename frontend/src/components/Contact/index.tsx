import { useState } from "react";
import { buttonList } from "../../utils/contact";

const Contact = () => {
  const [selectOffice, setSelectOffice] = useState<string>("first");

  return (
    <div className="absolute top-100 left-1/2 -translate-x-1/2 w-300 bg-contact-primary rounded-[10px] flex flex-col gap-10 pt-19 pb-20.5 z-10 font-medium leading-[130%] uppercase">
      <div className="px-17.5 flex flex-col items-center justify-center">
        <h1 className="text-contact-secondary text-lg">century 21 cyprus</h1>
        <h1 className="text-white text-5xl">contact us</h1>
      </div>
      <div className="grid grid-cols-2 gap-18 px-17.5">
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-lg">
            find us in one of three offices in cyprus:
          </h1>
          <div className="flex flex-col gap-[33px]">
            <div className="flex flex-col gap-9">
              <div className="map rounded-md bg-white h-[245px] w-[492px]">
                a
              </div>
              <div className="grid grid-cols-3 gap-[13px]">
                {buttonList.map((item) => (
                  <div
                    className={`cursor-pointer rounded-[5px] py-[11px] flex items-center justify-center hover:shadow-[0_0_16px_-3px_#BEB185,inset_0_0_9px_-3px_#b3a123bd] active:shadow-[0_0_10px_-3px_#BEB185,inset_0_0_15px_-3px_#b3a123bd] ${
                      selectOffice === item.type
                        ? "bg-contact-secondary text-white"
                        : "bg-transparent text-contact-secondary border border-contact-secondary"
                    }`}
                    onClick={() => setSelectOffice(item.type)}
                    key={item.type}
                  >
                    <h1 className="text-xs leading-[14px]">paphos office</h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8 relative">
              <div className="grid grid-cols-2 gap-5.5">
                <div className="flex flex-col gap-1">
                  <h1 className="text-contact-secondary text-xs">address</h1>
                  <h2 className="text-white">
                    Taskalof 15, Kolonaki, Limassol, Cypruss, 22033
                  </h2>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-contact-secondary text-xs">phone</h1>
                  <h2 className="text-white">
                    {`+30 210 3635 457 +30 210 3635 457`}
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5.5">
                <div className="flex flex-col gap-1">
                  <h1 className="text-contact-secondary text-xs">
                    business hours
                  </h1>
                  <h2 className="text-white">Mon to Fri: 9:00 am - 6:00 pm</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-contact-secondary text-xs">email</h1>
                  <h2 className="text-white">info@century21.com</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-lg">
            have any questions? fell free to drop us a line
          </h1>
          <form className="flex flex-col gap-[47px]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="pl-5.5 text-white text-xs leading-[14px] font-medium"
                >
                  name <b className="text-contact-secondary">*</b>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="px-5.5 py-4 rounded-md bg-[#bbbbbb0f] text-[#E5E7EB]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="pl-5.5 text-white text-xs leading-[14px] font-medium"
                >
                  email <b className="text-contact-secondary">*</b>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="px-5.5 py-4 rounded-md bg-[#bbbbbb0f] text-[#E5E7EB]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="pl-5.5 text-white text-xs leading-[14px] font-medium"
                >
                  phone number <b className="text-contact-secondary">*</b>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 456 4567843"
                  className="px-5.5 py-4 rounded-md bg-[#bbbbbb0f] text-[#E5E7EB]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="pl-5.5 text-white text-xs leading-[14px] font-medium"
                >
                  message
                </label>
                <textarea
                  id="message"
                  cols="30"
                  rows="6"
                  placeholder="How we can help you?"
                  className="px-5.5 py-4 rounded-md bg-[#bbbbbb0f] text-[#E5E7EB]"
                />
              </div>
            </div>
            <div className="flex items-center justify-start">
              <button
                type="submit"
                className="bg-contact-secondary flex items-center justify-center uppercase rounded-md px-8.5 py-5 text-white text-sm leading-[14px] font-medium hover:shadow-[0_0_16px_-3px_#BEB185,inset_0_0_9px_-3px_#b3a123bd]"
              >
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
