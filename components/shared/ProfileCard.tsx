import Image from "next/image";

import { Calendar, Mail, ShieldCheck, User } from "lucide-react";

import { Profile } from "@/lib/profile.type";

import ProfileInfoItem from "./ProfileInfoItem";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl">
      <CardContent className="p-0">
        <div className="bg-primary/10 p-8">
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <Image
              src={profile.profilePhoto}
              alt={profile.name}
              width={120}
              height={120}
              className="h-28 w-28 rounded-full border-4 border-background object-cover shadow"
            />

            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-3xl font-bold">{profile.name}</h2>

              <p className="flex items-center justify-center gap-2 text-muted-foreground md:justify-start">
                <Mail className="h-4 w-4" />
                {profile.email}
              </p>

              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                <Badge>{profile.role}</Badge>

                <Badge
                  variant={
                    profile.status === "ACTIVE" ? "default" : "destructive"
                  }
                >
                  {profile.status}
                </Badge>
              </div>
            </div>

            <div className="md:ml-auto">
              <Button disabled>Edit Profile</Button>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2">
          <ProfileInfoItem label="Full Name" value={profile.name} />

          <ProfileInfoItem label="Email Address" value={profile.email} />

          <ProfileInfoItem label="Role" value={profile.role} />

          <ProfileInfoItem label="Status" value={profile.status} />

          <ProfileInfoItem
            label="Member Since"
            value={new Date(profile.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          />

          <ProfileInfoItem
            label="Last Updated"
            value={new Date(profile.updatedAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          />
        </div>

        <div className="border-t p-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              Profile Information
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4" />
              Verified Account
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              RentNest Member
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
