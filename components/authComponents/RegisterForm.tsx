"use client";

import { useActionState, useMemo, useState } from "react";
import Link from "next/link";

import { registerUserAction } from "@/app/(authGroup)/_authActions/registerUserAction";

import { RegisterState, ValidationError } from "@/lib/auth.types";

import RegisterFields from "./RegisterFields";
import RegisterBanner from "./RegisterBanner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";

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

  const fieldErrors = useMemo(() => {
    const errors: Record<string, string> = {};

    if (
      Array.isArray(state.error) &&
      state.error.length > 0 &&
      typeof state.error[0] !== "string"
    ) {
      (state.error as ValidationError[]).forEach((err) => {
        errors[err.field] = err.message;
      });
    }

    return errors;
  }, [state.error]);

  const generalError =
    Array.isArray(state.error) &&
    state.error.length > 0 &&
    typeof state.error[0] === "string"
      ? state.error[0]
      : "";

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form action={action} className="p-6 md:p-8">
            <FieldGroup>
              {/* Header */}

              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">Create your account</h1>

                <p className="text-sm text-muted-foreground">
                  Join RentNest and start your journey
                </p>
              </div>

              {/* Form Fields */}

              <RegisterFields
                profilePhoto={profilePhoto}
                setProfilePhoto={setProfilePhoto}
                setUploading={setUploading}
                fieldErrors={fieldErrors}
              />

              {/* General Error */}

              {generalError && (
                <p className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
                  {generalError}
                </p>
              )}

              {/* Success */}

              {state.success && (
                <p className="rounded-md border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-600">
                  {state.message}
                </p>
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

                      {uploading ? "Uploading Image..." : "Creating Account..."}
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </Field>

              <FieldSeparator>Already have an account?</FieldSeparator>

              <FieldDescription className="text-center">
                <Link
                  href="/login"
                  className="font-medium text-primary hover:underline"
                >
                  Sign in
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>

          <RegisterBanner />
        </CardContent>
      </Card>

      <FieldDescription className="text-center text-xs text-muted-foreground">
        By creating an account, you agree to our{" "}
        <Link href="/terms" className="text-primary hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        .
      </FieldDescription>
    </div>
  );
};

export default RegisterForm;
