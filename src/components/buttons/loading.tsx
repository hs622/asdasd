import { Loader2 } from "lucide-react";
import { Button } from "../ui/button"; 

interface ButtonParams {
  bodyText: string
  isLoading: boolean
};

export function LoadingButton({ isLoading, bodyText}: ButtonParams) {
  return (
    <Button type={"submit"} disabled={isLoading} className="w-full">
      <Loader2 className="animate-spin" />
      {bodyText}
    </Button>
  );
}
