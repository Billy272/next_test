import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-500 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center" >
          <div className="flex flex-col items-center space-x-4">
            <h1 className="text-2xl font-semibold tracking-tight">AdGroup Limited</h1>
            <h2 className="text-xl font-regular opacity-90">Meeting Room Booking System</h2>
          </div>
          <div className="flex items-center gap-4" >
            <Button variant="ghost" className="text-white hover:bg-blue-700 hover:text-white" >Help</Button>
            <Button className="bg-white text-blue-600 hover:bg-blue-50" >Login</Button>
          </div>
        </div>
      </header>
    </div>
  );
}