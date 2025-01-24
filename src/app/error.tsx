"use client";
import { FC } from "react";

const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  return (
    <div>
      <h3 className="font-semibold text-red-500">{error.message}</h3>
    </div>
  );
};

export default ErrorPage;
