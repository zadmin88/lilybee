"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
  >("idle");
  const [responseMsg, setResponseMsg] = useState<string>();
  const [statusCode, setStatusCode] = useState<number>();

  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await axios.post("/api/subscribe", { email });
      setStatus("success");
      setStatusCode(response.status);
      setEmail("");
      setResponseMsg(response.data);
      setTimeout(() => {
        setResponseMsg("");
      }, 3000);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setStatus("error");
        setStatusCode(err.response?.status);
        setResponseMsg(err.response?.data);
        setTimeout(() => {
          setResponseMsg("");
        }, 3000);
      }
    }
  }

  return (
    <div className="flex w-full  items-center justify-center ">
      <form className="rounded px-8 " onSubmit={handleSubscribe}>
        <div className="flex gap-4 md:flex-row flex-col ">
          <input
            className={`grow w-64 h-10   transition ease-out delay-75 focus-within:border-2 focus-within:border-mainText items-center  pr-0.5 rounded caret-purple-700 outline-none px-4 disabled:border-slate-400 border ${
              statusCode == 400 ? "border-orange-500" : ""
            } `}
            type="email"
            placeholder="What is your email address?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status == "loading"}
          />
          <Button
            variant="default"
            type="submit"
            disabled={status == "loading"}
          >
            Subscribe
          </Button>
        </div>
        <div className="server-message pt-4 text-mainText ">
          {status === "success" ? (
            <p className="text-mainText font-semibold text-base">
              {responseMsg}
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-orange-600">{responseMsg}</p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
