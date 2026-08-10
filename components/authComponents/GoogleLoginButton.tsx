"use client";

import { googleLoginAction } from "@/app/(authGroup)/_authActions/googleLoginAction";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

declare global {
  interface Window {
    google?: {
      accounts: {
        oauth2: {
          initCodeClient: (config: {
            client_id: string;
            scope: string;
            ux_mode: "popup";
            callback: (response: {
              code?: string;
              scope?: string;
              error?: string;
              error_description?: string;
            }) => void;
            error_callback?: (error: { type: string }) => void;
          }) => {
            requestCode: () => void;
          };
        };
      };
    };
  }
}

export default function GoogleLoginButton() {
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirectTo") || "";

  const [loading, setLoading] = useState(false);

  const googleClient = useRef<{
    requestCode: () => void;
  } | null>(null);

  const googleInitialized = useRef(false);

  /**
   * Handle authorization code
   */
  const handleGoogleLogin = useCallback(
    async (code: string) => {
      try {
        setLoading(true);

        const result = await googleLoginAction(redirectTo, code);

        if (!result.success) {
          toast.error(result.message || "Google login failed");

          return;
        }

        toast.success(result.message || "Google login successful!");

        /**
         * Server Action handles
         * the redirect.
         */
      } finally {
        setLoading(false);
      }
    },
    [redirectTo],
  );

  /**
   * Initialize Google OAuth
   */
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    if (!clientId) {
      console.error("NEXT_PUBLIC_GOOGLE_CLIENT_ID is missing");

      return;
    }

    const initializeGoogle = () => {
      if (!window.google || googleInitialized.current) {
        return;
      }

      googleInitialized.current = true;

      /**
       * Google Authorization Code Client
       */
      googleClient.current = window.google.accounts.oauth2.initCodeClient({
        client_id: clientId,

        /**
         * Authentication scopes only
         */
        scope: "openid email profile",

        /**
         * Popup flow
         */
        ux_mode: "popup",

        /**
         * Google returns
         * authorization code here
         */
        callback: (response) => {
          if (response.error) {
            toast.error(
              response.error_description || "Google authentication failed",
            );

            return;
          }

          if (!response.code) {
            toast.error("Google authorization code not found");

            return;
          }

          handleGoogleLogin(response.code);
        },

        /**
         * Popup errors
         */
        error_callback: (error) => {
          console.error("Google Popup Error:", error);

          if (error.type === "popup_closed") {
            toast.error("Google login popup was closed.");
          } else {
            toast.error("Unable to open Google login.");
          }

          setLoading(false);
        },
      });
    };

    /**
     * Check existing script
     */
    const existingScript = document.querySelector(
      'script[src="https://accounts.google.com/gsi/client"]',
    );

    if (existingScript) {
      if (window.google) {
        initializeGoogle();
      } else {
        existingScript.addEventListener("load", initializeGoogle);
      }

      return () => {
        existingScript.removeEventListener("load", initializeGoogle);
      };
    }

    /**
     * Load Google GIS
     */
    const script = document.createElement("script");

    script.src = "https://accounts.google.com/gsi/client";

    script.async = true;
    script.defer = true;

    script.onload = initializeGoogle;

    document.head.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, [handleGoogleLogin]);

  /**
   * Open Google Popup
   */
  const handleGoogleButtonClick = () => {
    if (loading) {
      return;
    }

    if (!googleClient.current) {
      toast.error("Google login is not ready yet. Please try again.");

      return;
    }

    setLoading(true);

    googleClient.current.requestCode();
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="h-11 w-full gap-3"
      onClick={handleGoogleButtonClick}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="size-4 animate-spin" />

          <span>Signing in with Google...</span>
        </>
      ) : (
        <>
          {/* Google Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-5"
            aria-hidden="true"
          >
            <path
              fill="#4285F4"
              d="M21.35 12.27c0-.71-.06-1.4-.18-2.06H12v3.9h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.23Z"
            />

            <path
              fill="#34A853"
              d="M12 21.5c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.5Z"
            />

            <path
              fill="#FBBC05"
              d="M6.54 13.58A5.85 5.85 0 0 1 6.23 12c0-.55.1-1.08.31-1.58V7.89H3.3A9.5 9.5 0 0 0 2.25 12c0 1.53.37 2.97 1.05 4.11l3.24-2.53Z"
            />

            <path
              fill="#EA4335"
              d="M12 6.39c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 3.48 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.7 5.39l3.24 2.53C7.31 8.11 9.46 6.39 12 6.39Z"
            />
          </svg>

          <span>Continue with Google as TENANT</span>
        </>
      )}
    </Button>
  );
}
