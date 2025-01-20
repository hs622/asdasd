import { FormInput } from "@/components/forms/input";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="px-4">
      <form className="max-w-2xl space-y-8">
        <FormInput
          label="Username"
          defaultValue="shadcn"
          description="This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days."
        />

        <div className="space-y-2">
          <label className="block">
            <span className="text-sm font-medium">Email</span>
            <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-400 focus:outline-none">
              <option>Select a verified email to display</option>
            </select>
          </label>
          <p className="text-sm text-gray-500">
            You can manage verified email addresses in your email settings.
          </p>
        </div>

        <FormInput
          label="Bio"
          defaultValue="I own a computer."
          description="You can @mention other users and organizations to link to them."
        />

        <div className="space-y-2">
          <span className="block text-sm font-medium">URLs</span>
          <p className="text-sm text-gray-500">
            Add links to your website, blog, or social media profiles.
          </p>
          <div className="space-y-2">
            <FormInput defaultValue="https://shadcn.com" />
            <FormInput defaultValue="http://twitter.com/shadcn" />
            <Button variant="outline" className="text-sm">
              Add URL
            </Button>
          </div>
        </div>

        <Button type="submit">Update profile</Button>
      </form>
    </div>
  );
}
