"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface loginFieldsProps {
  fieldErrors: Record<string, string>;
  email?: string;
  role: string;
}

const LoginFields = ({ fieldErrors, email, role }: loginFieldsProps) => {
  const [eye, setEye] = useState(false);

  return (
    <>
      {/* Email */}

      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>

        <Input
          id="email"
          name="email"
          type="email"
          defaultValue={
            email
              ? email
              : role === "admin"
                ? "admin@gmail.com"
                : role === "landlord"
                  ? "landloard@gmail.com"
                  : role === "tenant"
                    ? "tenant@gmail.com"
                    : ""
          }
          placeholder="user@example.com"
        />

        {fieldErrors.email && (
          <p className="text-sm text-destructive">{fieldErrors.email}</p>
        )}
      </Field>

      {/* Password */}

      <Field className="">
        <FieldLabel htmlFor="password">Password</FieldLabel>

        <span className="relative">
          <Input
            defaultValue={
              role === "admin" || role === "landlord" || role === "tenant"
                ? "123456"
                : ""
            }
            id="password"
            name="password"
            type={eye ? "text" : "password"}
            placeholder="Minimum 8 characters"
          />
          <span className="absolute top-1 right-4 text-gray-500 cursor-pointer">
            {eye ? (
              <Eye onClick={() => setEye(!eye)} width={18} height={18} />
            ) : (
              <EyeOff onClick={() => setEye(!eye)} width={18} height={18} />
            )}
          </span>
        </span>
        {fieldErrors.password && (
          <p className="text-sm text-destructive">{fieldErrors.password}</p>
        )}
      </Field>
    </>
  );
};

export default LoginFields;
