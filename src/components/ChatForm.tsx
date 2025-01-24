"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import DecryptedText from "./DecryptedText";
import { LoadingIcon } from "./icon";
const ChatForm = () => {
  const [response, setResponse] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return alert("Please enter a question");
    try {
      setLoading(true);
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: value }),
      });
      if (response.status !== 200) {
        alert("Something went wrong");
      }
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setValue("");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[700px] w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        className="py-4 my-5 flex items-center md:justify-between justify-center md:flex-nowrap flex-wrap gap-6"
      >
        <input
          type="text"
          onChange={(e) => onChange(e)}
          value={value}
          placeholder="Enter your question ..."
          className="outline-none py-2 border border-black/20 rounded-lg px-3 w-full text-black placeholder:font-light"
        />
        <button
          disabled={loading}
          type="submit"
          className="block max-w-[120px] w-full rounded border border-blue-600 bg-blue-600 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 transition ease-in duration-200 disabled:opacity-40 disabled:hover:bg-blue-600 disabled:hover:text-white disabled:cursor-not-allowed"
        >
          {loading ? <LoadingIcon /> : "Generate"}
        </button>
      </form>
      {!loading && response && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="my-5 bg-slate-50 px-4 py-3 rounded-2xl">
            <span className="block text-lg mb-2 text-blue-500 font-semibold underline underline-offset-4 text-center decoration-2">
              Result :{" "}
            </span>
            <DecryptedText
              text={response}
              speed={70}
              maxIterations={22}
              animateOn="view"
              className="revealed text-black"
              parentClassName="all-letters text-black"
              encryptedClassName="encrypted text-black"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ChatForm;
