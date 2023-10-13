"use client";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import { Input, Listbox, Checkbox, Button } from "@/components";
import { gradeData, sectionData, teamData } from "@/constants";
import { validationHandler } from "@/utils/handler";

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    grade: gradeData[0],
    section: sectionData[0],
    team: teamData[0],
    male: false,
    female: false,
  });

  // confetti state
  const [confetti, setConfetti] = useState(false);

  // input validation states
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    grade: true,
    section: true,
    team: true,
    gender: true,
  });

  // error message
  const isMessage =
    error.firstName ||
    error.lastName ||
    error.phoneNumber ||
    error.grade ||
    error.section ||
    error.team ||
    error.gender;

  // use effec________________
  useEffect(() => {
    validationHandler(userData, setError);
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    validationHandler(userData, setError, name, value);
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // {checkbox handler}
  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setUserData((pre) => ({ ...pre, [name]: checked }));
  };

  // {confetti handler}
  const showConfetti = () => {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 6000);
    toast.success("You have successfully registered");
  };

  // {submit handler}
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      error.firstName ||
      error.lastName ||
      error.phoneNumber ||
      error.grade ||
      error.section ||
      error.team ||
      error.gender
    )
      return;

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: `${userData.firstName} ${userData.lastName}`,
          phoneNumber: userData.phoneNumber,
          classAndSection: `${userData.grade.name} ${userData.section.name}`,
          team: userData.team.name,
          gender: `Male:${userData.male} female:${userData.female}`,
        }),
      });

      if (res.ok) {
        showConfetti();
      }
      if (res.status === 409) {
        toast.error("You have already registered");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-9">
      <Toaster />
      {confetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
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

      {/* ERROR MESSAGE __________________ */}
      {isMessage && (
        <div className=" mb-5 mt-2 max-w-2xl rounded-lg bg-light-white px-3 py-5 transition-all">
          <p className=" text-center text-xl font-medium text-gray-600 sm:text-left  sm:text-2xl">
            Please fill in all the below form correctly to register
          </p>
        </div>
      )}

      <form
        className="flex flex-col gap-6 py-6 sm:gap-10 "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-1 flex-col gap-6 sm:flex-row sm:gap-6">
          <Input
            placeholderName="Your first name"
            inputType={"text"}
            handleChange={handleChange}
            name="firstName"
            value={userData.firstName}
            label="First name"
            error={error.firstName}
          />
          <Input
            placeholderName="Your last name"
            inputType={"text"}
            handleChange={handleChange}
            name="lastName"
            value={userData.lastName}
            label="Last name"
            error={error.lastName}
          />
        </div>
        {/* Phone number */}
        <div>
          <Input
            placeholderName="ex. 0923552943"
            inputType="tel"
            longInput="max-w-xl max-sm:max-w-md"
            handleChange={handleChange}
            name="phoneNumber"
            value={userData.phoneNumber}
            label="Phone number "
            error={error.phoneNumber}
          />
          {error.phoneNumber && (
            <p className=" font-inter text-sm text-red-700">
              Please enter a valid phone number. (ex: 0912345678)
            </p>
          )}
        </div>

        {/* List boxes */}
        <div className="flex gap-7">
          <Listbox
            options={gradeData}
            data={userData.grade}
            setData={setUserData}
            error={error.grade}
          />
          <Listbox
            options={sectionData}
            data={userData.section}
            setData={setUserData}
            error={error.section}
          />
        </div>
        <div className="flex flex-wrap items-center gap-7 sm:gap-10">
          <Listbox
            options={teamData}
            data={userData.team}
            setData={setUserData}
            error={error.team}
          />

          {/* checkbox */}
          <div className="flex gap-5">
            <Checkbox
              gender="male"
              name="male"
              checkbox={userData.male}
              handleChange={handleCheckbox}
            />
            <Checkbox
              gender="female"
              name="female"
              checkbox={userData.female}
              handleChange={handleCheckbox}
            />
          </div>
        </div>
        {/* submit button */}
        <Button
          type="submit"
          text={"Submit"}
          styles="w-[150px] sm:w-[200px] focus:ring-2"
          err={isMessage}
        />
      </form>
    </section>
  );
};

export default Register;
