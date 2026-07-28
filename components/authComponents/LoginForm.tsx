"use client";

import { useActionState, useMemo } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { LoginState, ValidationError } from "@/lib/auth.types";
import { LoginUserAction } from "@/app/(authGroup)/_authActions/loginUserAction";
import LoginFields from "./LoginFields";
import LoginBanner from "./LoginBanner";
import { useSearchParams } from "next/navigation";

const initialState: LoginState = {
  success: false,
  message: "",
};

const LoginForm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  const [state, action, pending] = useActionState(
    LoginUserAction,
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
    <div className="flex max-w-250 mx-auto flex-col gap-6">
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

              <LoginFields fieldErrors={fieldErrors} email={email} />

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
                  className="w-full text-lg py-4"
                  disabled={pending}
                >
                  {pending ? (
                    <>
                      <Spinner data-icon="inline-start" />

                      {"Creating Account..."}
                    </>
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </Field>

              <FieldSeparator>{"Don't"} Have an account?</FieldSeparator>

              <FieldDescription className="text-center">
                <Link
                  href="/register"
                  className="font-medium text-primary hover:underline"
                >
                  Register Now
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>

          <LoginBanner />
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

export default LoginForm;
