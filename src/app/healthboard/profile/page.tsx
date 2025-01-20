import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import ProfileForm from "@/components/forms/profile";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  if(!session) {
    redirect('/sign-in')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="">Your Profile</h1>
      <ProfileForm />
    </div>
  );
};

export default Profile;
