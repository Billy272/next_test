import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Room Meetings */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Today's Meetings
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white" >
              <div className="h-2 bg-emerald-400"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-slate-800">Faiba 4G Meeting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-slate-600 mb-2">
                  <Clock className="h-4 w-4 mr-2 text-emerald-500" />
                  <span>8:00 AM - 10:00 AM</span>
                </div>
                <div className="flex items-center text-sm text-slate-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2 text-emerald-500" />
                  <span>4th Floor - B/R 1</span>
                </div>
                <div className="flex items-center text-sm text-slate-600 mb-2">
                  <Users className="h-4 w-4 mr-2 text-emerald-500" />
                  <span>5 Attendees</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}