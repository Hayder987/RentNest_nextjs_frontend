import { getMyProfile } from "@/services/getMyProfile";
import ProfileCard from "./ProfileCard";


export default async function ProfileList() {
  const profile = await getMyProfile();

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="text-muted-foreground">
          View your account information and profile details.
        </p>
      </div>

      <ProfileCard profile={profile?.data} />
    </section>
  );
}