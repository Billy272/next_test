import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center" >
          <div className="flex flex-col items-center space-x-4">
            <h1 className="font-semibold tracking-tight">AdGroup Limited</h1>
            <h2 className="font-regular opacity-90">Meeting Room Booking System</h2>
          </div>
          <div className="flex items-center gap-4" >
            <Button variant="ghost" className="text-white hover:bg-blue-500 hover:text-white" >Help</Button>
            <Button className="bg-white text-blue-600 hover:bg-blue-50" >Login</Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 container mx-auto px-6 py-8" >
        {/* Date Navigation */}
        <Card className="mb-8 border-none shadow-sm bg-white/80 backdrop-blur-sm" >
          <CardContent className="p-4" >
            <div className="flex justify-between items-center">
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-slate-800">Monday, March 3, 2025</h2>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}