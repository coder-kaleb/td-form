"use client";
import { Fragment } from "react";
import { Transition, Listbox } from "@headlessui/react";
import { FiCheck } from "react-icons/fi";
import { LuChevronsUpDown } from "react-icons/lu";

const ListboxComponent = ({ options, data, setData }) => {
  return (
    <div className="w-44 sm:w-64">
      <Listbox
        value={data}
        onChange={(e) => {
          setData((pre) => ({ ...pre, [e.fName]: e }));
        }}
      >
        <div className="relative mt-1 bg-white">
          <Listbox.Button className="relative w-full cursor-default rounded-lg border-2 border-zinc-800 bg-white py-3 pl-3 pr-10 text-left sm:py-4 sm:text-sm ">
            <span className="block truncate pl-2 font-roboto text-xl text-primaryBlack sm:text-2xl">
              {data.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-1 flex items-center pr-2">
              <LuChevronsUpDown
                className="pointer-events-none h-7 w-7 text-primaryBlack"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, index) => (
                <Listbox.Option
                  disabled={option.unavailable}
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-4 ${
                      active
                        ? " bg-[#E8E9EA] text-primaryBlack"
                        : "text-primaryBlack"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-xl font-medium ${
                          selected ? "font-semibold" : "font-normal"
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-1 text-zinc-900">
                          <FiCheck className="h-6 w-6" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default ListboxComponent;
