import React, { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-info d-flex justify-content-between align-items-center">
      {children}
    </div>
  );
};

export default Alert;
