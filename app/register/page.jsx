"use client";

import { useState } from "react";
import Image from "next/image";
import { Input, Listbox, Checkbox } from "@/components";
import { gradeData, sectionData, teamData } from "@/constants";

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    check: false,
  });

  // {input change and state handler}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-9">
      <h1 className="relative text-center text-3xl font-semibold text-primaryBlack">
        <Image
          src="/arrow.png"
          alt="arrow"
          width={100}
          height={100}
          className=" absolute -top-14 left-[33%]"
        />
        Welcome to register
      </h1>
      <form className="flex flex-col gap-6 py-6 sm:gap-10 ">
        <div className="flex flex-1 flex-col  gap-10 sm:flex-row">
          <Input
            placeholderName="Your first name"
            inputType={"text"}
            handleChange={handleChange}
            name="firstName"
            value={userData.firstName}
            label="First name"
          />
          <Input
            placeholderName="Your last name"
            inputType={"text"}
            handleChange={handleChange}
            name="lastName"
            value={userData.lastName}
            label="Last name"
          />
        </div>
        <Input
          placeholderName="ex. 0923552943"
          inputType={"tel"}
          longInput="max-w-xl max-sm:max-w-md"
          handleChange={handleChange}
          name="phoneNumber"
          value={userData.phoneNumber}
          label="Phone number "
        />

        {/* List boxes */}
        <div className="flex gap-10">
          <Listbox options={gradeData} />
          <Listbox options={sectionData} />
        </div>
        <div className="flex items-center gap-5 sm:gap-10">
          <Listbox options={teamData} />
          <div className="flex gap-2">
            <Checkbox
              gender="male"
              name="male"
              check={userData.check}
              setUserData={setUserData}
            />
            <Checkbox
              gender="female"
              name="female"
              check={userData.check}
              handleChange={handleChange}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
