import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { buttonList } from "../../utils/contact";
import Success from "../../../public/img/success.png";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { officeInfo } from "../../utils/map";
import active from "../../../public/img/active.png";
import dark from "../../../public/img/default.png";

const Offices: Array<officeInfo> = [
  {
    address: "",
    phone: ["+31 423 3323", "+31 423 1912"],
    hour: "Mon to Fri:  9:00 AM - 6:00 PM",
    email: "info@century21.com",
  },
  {
    address: "",
    phone: ["+31 223 0923", "+31 223 1752"],
    hour: "Tue to Sun:  6:00 AM - 6:00 PM",
    email: "help@century21.com",
  },
  {
    address: "",
    phone: ["+31 483 5231", "+31 463 14152"],
    hour: "Fri to Wen:  6:00 AM - 6:00 AM",
    email: "support@century21.com",
  },
];

interface info {
  address: string;
  lat: number;
  lng: number;
  phone: Array<string>;
  hour: string;
  email: string;
}

const Contact = () => {
  const [selectOffice, setSelectOffice] = useState<string>("first");
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);
  const [officeInfo, setOfficeInfo] = useState<info>({
    address: "",
    lat: 37.9422741,
    lng: 23.6915615,
    phone: [],
    hour: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowForm(false);
    setLoading(true);
    const result = await axios.post("http://localhost:4000/api/v1/contact", {
      name: name,
      mail: mail,
      phone: phone,
      message: message,
    });
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
      setResult(result.data.status);
    }, 2000);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDzwyGnWwge77qFtkOYHBQ0D76JIrLRic8",
  });

  const markers = [
    {
      address: "Tsakalof 15, Kolonaki, Limassol, Cypruss, 22033",
      lat: 37.9422741,
      lng: 23.6915615,
      type: "first",
    },
    { address: "aaaa", lat: 37.9722741, lng: 23.7315615, type: "second" },
    { address: "aaaa", lat: 37.9482741, lng: 23.6515615, type: "third" },
  ];

  const handleMarkerClick = (
    lat: number,
    lng: number,
    address: string,
    type: string,
    id: number
  ) => {
    setSelectOffice(type);
    setOfficeInfo({
      address: address,
      lat: lat,
      lng: lng,
      phone: Offices[id].phone,
      hour: Offices[id].hour,
      email: Offices[id].email,
    });
  };

  return (
    <div className="absolute 2xl:top-100 top-80 left-1/2 -translate-x-1/2 bg-contact-primary rounded-[10px] grid gap-10 pt-19 pb-20.5 2xl:px-17.5 px-8 z-10 font-medium leading-[130%] uppercase">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-contact-secondary text-lg">century 21 cyprus</h1>
        <h1 className="text-white text-5xl">contact us</h1>
      </div>
      <div className="grid lg:grid-cols-primary 2xl:gap-18 xl:gap-9 gap-5">
        <div className="grid gap-5">
          <h1 className="text-white text-lg">
            find us in one of three offices in cyprus:
          </h1>
          <div className="grid gap-[33px]">
            <div className="flex flex-col gap-9">
              <div className="rounded-md bg-white h-[245px] xl:w-[492px] lg:w-[400px] w-[500px]">
                {!isLoaded ? (
                  <></>
                ) : (
                  <GoogleMap
                    mapContainerClassName="h-full w-full"
                    center={{ lat: officeInfo.lat, lng: officeInfo.lng }}
                    zoom={12}
                  >
                    {markers.map(({ address, lat, lng, type }, id) => (
                      <MarkerF
                        key={type}
                        position={{ lat, lng }}
                        icon={type === selectOffice ? active : dark}
                        onClick={() => {
                          handleMarkerClick(lat, lng, address, type, id);
                        }}
                      />
                    ))}
                  </GoogleMap>
                )}
              </div>
              <div className="grid grid-cols-3 gap-[13px]">
                {buttonList.map((item, id) => (
                  <div
                    className={`cursor-pointer rounded-[5px] py-[11px] flex items-center justify-center hover:shadow-[0_0_16px_-3px_#BEB185,inset_0_0_9px_-3px_#b3a123bd] active:shadow-[0_0_10px_-3px_#BEB185,inset_0_0_15px_-3px_#b3a123bd] ${
                      selectOffice === item.type
                        ? "bg-contact-secondary text-white"
                        : "bg-transparent text-contact-secondary border border-contact-secondary"
                    }`}
                    onClick={() => {
                      setSelectOffice(item.type);
                      setOfficeInfo({
                        address: markers[id].address,
                        lat: markers[id].lat,
                        lng: markers[id].lng,
                        phone: Offices[id].phone,
                        hour: Offices[id].hour,
                        email: Offices[id].email,
                      });
                    }}
                    key={item.type}
                  >
                    <h1 className="text-xs leading-[14px]">paphos office</h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-5.5 xl:w-[492px] lg:w-[400px] w-[500px]">
              <div className="grid gap-8">
                <div className="flex flex-col gap-1">
                  <h1 className="text-contact-secondary text-xs">address</h1>
                  <h2 className="text-white">{officeInfo.address}</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-contact-secondary text-xs">
                    business hours
                  </h1>
                  <h2 className="text-white">{officeInfo.hour}</h2>
                </div>
              </div>
              <div className="grid gap-8">
                <div className="flex flex-col gap-1">
                  <h1 className="text-contact-secondary text-xs">phone</h1>
                  {officeInfo.phone.map((phone) => (
                    <h2 className="text-white" key={phone}>
                      {phone}
                    </h2>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-contact-secondary text-xs">email</h1>
                  <h2 className="text-white">{officeInfo.email}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`gap-5 ${showForm ? "grid" : "flex flex-col"}`}>
          <h1 className="text-white text-lg">
            have any questions? fell free to drop us a line
          </h1>
          <>
            <div className={`flex gap-3 ${showResult ? "block" : "hidden"}`}>
              {result ? (
                <>
                  <img src={Success} alt="success" />
                  <h1 className="tex-contact-secondary text-xs uppercase">
                    THANK YOU! PLEASE CHECK YOUR INBOX
                  </h1>
                </>
              ) : (
                <h1 className=" text-red-700 text-xs">Faild</h1>
              )}
            </div>
            <form
              className={`grid gap-[47px] ${showForm ? "block" : "hidden"}`}
              onSubmit={handleSubmit}
            >
              <div className="grid gap-5">
                <div className="grid gap-2">
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
                    onChange={(e: any) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
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
                    onChange={(e: any) => setMail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
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
                    onChange={(e: any) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
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
                    onChange={(e: any) => setMessage(e.target.value)}
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
            <div
              className={`flex items-center justify-center relative ${
                loading ? "block" : "hidden"
              }`}
            >
              <div className="absolute top-0 left-1/2 -mt-10 -ml-10 w-20 h-20">
                <div className="w-20 h-20 rounded-full shadow-[0_4px_0_#00abf2_inset] animate-rotate"></div>
                <div className="absolute top-0 left-0 w-20 h-20 rounded-full shadow-sm[0_0_10px_4px_rgba(0,0,0,0.3)_inset]"></div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Contact;
