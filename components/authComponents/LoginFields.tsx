"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface loginFieldsProps {
  fieldErrors: Record<string, string>;
  email?: string;
}

const LoginFields = ({
  fieldErrors,
  email,
}: loginFieldsProps) => {
  
  return (
    <>
    
      {/* Email */}

      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>

        <Input
          id="email"
          name="email"
          type="email"
          defaultValue={email ?? ""}
          placeholder="user@example.com"
        />

        {fieldErrors.email && (
          <p className="text-sm text-destructive">{fieldErrors.email}</p>
        )}
      </Field>

      {/* Password */}

      <Field>
        <FieldLabel htmlFor="password">Password</FieldLabel>

        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Minimum 8 characters"
        />

        {fieldErrors.password && (
          <p className="text-sm text-destructive">{fieldErrors.password}</p>
        )}
      </Field>

    </>
  );
};

export default LoginFields;
