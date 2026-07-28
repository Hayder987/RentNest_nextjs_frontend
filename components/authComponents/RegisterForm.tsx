"use client";

import { useActionState, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";


import ImageUploader from "@/components/shared/ImageUploader";

import { RegisterState, ValidationError } from "@/lib/auth.types";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { registerUserAction } from "@/app/(authGroup)/_authActions/registerUserAction";

const initialState: RegisterState = {
  success: false,
  message: "",
};

const RegisterForm = () => {
  const [profilePhoto, setProfilePhoto] = useState("");
  const [uploading, setUploading] = useState(false);

  const [state, action, pending] = useActionState(
    registerUserAction,
    initialState,
  );

  // Zod field errors -> Map
  const fieldErrors = useMemo(() => {
    const map: Record<string, string> = {};

    if (
      state.error &&
      Array.isArray(state.error) &&
      state.error.length > 0 &&
      typeof state.error[0] !== "string"
    ) {
      (state.error as ValidationError[]).forEach((err) => {
        map[err.field] = err.message;
      });
    }

    return map;
  }, [state.error]);

  // Duplicate email / general backend error
  const generalError =
    state.error &&
    Array.isArray(state.error) &&
    state.error.length > 0 &&
    typeof state.error[0] === "string"
      ? state.error[0]
      : null;

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form action={action} className="p-6 md:p-8">
            <FieldGroup>

              {/* Header */}

              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">
                  Create your account
                </h1>

                <p className="text-sm text-muted-foreground">
                  Join RentNest and start your journey
                </p>
              </div>

              {/* Name */}

              <Field>
                <FieldLabel htmlFor="name">
                  Full Name
                </FieldLabel>

                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                />

                {fieldErrors.name && (
                  <p className="text-sm text-destructive">
                    {fieldErrors.name}
                  </p>
                )}
              </Field>

              {/* Email */}

              <Field>
                <FieldLabel htmlFor="email">
                  Email
                </FieldLabel>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="user@example.com"
                />

                {fieldErrors.email && (
                  <p className="text-sm text-destructive">
                    {fieldErrors.email}
                  </p>
                )}
              </Field>

              {/* Password */}

              <Field>
                <FieldLabel htmlFor="password">
                  Password
                </FieldLabel>

                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Minimum 8 characters"
                />

                {fieldErrors.password && (
                  <p className="text-sm text-destructive">
                    {fieldErrors.password}
                  </p>
                )}
              </Field>

              

                            {/* Profile Photo */}

              <Field>
                <FieldLabel htmlFor="profilePhoto">
                  Profile Photo
                </FieldLabel>

                <ImageUploader
                  value={profilePhoto}
                  onChange={setProfilePhoto}
                  onUploading={setUploading}
                />

                {/* Hidden input for Server Action */}

                <input
                  type="hidden"
                  name="profilePhoto"
                  value={profilePhoto}
                />

                {fieldErrors.profilePhoto && (
                  <p className="text-sm text-destructive">
                    {fieldErrors.profilePhoto}
                  </p>
                )}
              </Field>

              {/* General Backend Error */}

              {generalError && (
                <div className="rounded-md border border-destructive/20 bg-destructive/10 p-3">
                  <p className="text-sm font-medium text-destructive">
                    {generalError}
                  </p>
                </div>
              )}

              {/* Success Message */}

              {state.success && (
                <div className="rounded-md border border-green-500/20 bg-green-500/10 p-3">
                  <p className="text-sm font-medium text-green-600">
                    {state.message}
                  </p>
                </div>
              )}

              {/* Submit */}

              <Field>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={pending || uploading}
                >
                  {pending || uploading ? (
                    <>
                      <Spinner data-icon="inline-start" />

                      {uploading
                        ? "Uploading Image..."
                        : "Creating Account..."}
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </Field>

              <FieldSeparator>
                Already have an account?
              </FieldSeparator>

              <FieldDescription className="text-center">
                <Link
                  href="/login"
                  className="font-medium text-primary hover:underline"
                >
                  Sign in to your account
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>

          {/* Right Side Image */}

          <div className="relative hidden bg-muted md:block">
            <Image
              src="/login-pic.jpg"
              alt="Register"
              fill
              priority
              className="object-cover dark:brightness-75"
            />
          </div>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center text-xs text-muted-foreground">
        By creating an account, you agree to our{" "}
        <Link
          href="/terms"
          className="font-medium text-primary hover:underline"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="font-medium text-primary hover:underline"
        >
          Privacy Policy
        </Link>
        .
      </FieldDescription>
    </div>
  );
};

export default RegisterForm;