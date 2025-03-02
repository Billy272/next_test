import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <Button variant="default" size="default" asChild>
        <ArrowLeft />
      </Button>
      <Button variant="default" size="default" asChild>
        <ArrowRight />
      </Button>
      <Button variant="default" size="default" asChild>
        <Calendar />
      </Button>
      <Button variant="default" size="default" asChild>
        <Clock />
      </Button>
      <Button variant="default" size="default" asChild>
        <MapPin />
      </Button>
      <Button variant="default" size="default" asChild>
        <Users />
      </Button>
      <Button variant="default" size="default" asChild>
        <Plus />
      </Button>
    </div>
  );
}