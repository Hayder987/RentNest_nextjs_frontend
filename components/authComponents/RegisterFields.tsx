"use client";

import ImageUploader from "@/components/shared/ImageUploader";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RegisterFieldsProps {
  profilePhoto: string;
  setProfilePhoto: React.Dispatch<React.SetStateAction<string>>;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  fieldErrors: Record<string, string>;
}

const RegisterFields = ({
  profilePhoto,
  setProfilePhoto,
  setUploading,
  fieldErrors,
}: RegisterFieldsProps) => {
  return (
    <>
      {/* Name */}

      <Field>
        <FieldLabel htmlFor="name">Full Name</FieldLabel>

        <Input id="name" name="name" placeholder="John Doe" />

        {fieldErrors.name && (
          <p className="text-sm text-destructive">{fieldErrors.name}</p>
        )}
      </Field>

      {/* Email */}

      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>

        <Input
          id="email"
          name="email"
          type="email"
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

      {/* Role */}

      <Field>
        <FieldLabel htmlFor="role">Account Type</FieldLabel>

        <Select name="role" defaultValue="TENANT">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="TENANT">Tenant</SelectItem>

            <SelectItem value="LANDLORD">Landlord</SelectItem>
          </SelectContent>
        </Select>

        {fieldErrors.role && (
          <p className="text-sm text-destructive">{fieldErrors.role}</p>
        )}
      </Field>

      {/* Profile Photo */}

      <Field>
        <FieldLabel htmlFor="profilePhoto">Profile Photo</FieldLabel>

        <ImageUploader
          value={profilePhoto}
          onChange={setProfilePhoto}
          onUploading={setUploading}
        />

        <input type="hidden" name="profilePhoto" value={profilePhoto} />

        {fieldErrors.profilePhoto && (
          <p className="text-sm text-destructive">{fieldErrors.profilePhoto}</p>
        )}
      </Field>
    </>
  );
};

export default RegisterFields;
