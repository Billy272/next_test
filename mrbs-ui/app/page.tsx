"use client";

import {  useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Users, CheckCircle, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, isBefore, isWithinInterval } from "date-fns";

const colors = ["bg-emerald-400", "bg-yellow-400", "bg-red-400", "bg-blue-400", "bg-indigo-400", "bg-purple-400", "bg-pink-400"];
const colorMap = ["emerald", "yellow", "red", "blue", "indigo", "purple", "pink"];

export default function Page() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  interface Meeting {
    id: string;
    name: string;
    status: 'completed' | 'inprogress' | 'upcoming';
    start_time: string;
    end_time: string;
    area_id: string;
    room_id: string;
    capacity: number;
  }

  const [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      const response = await fetch(`http://localhost:5000/api/meetings?date=${format(selectedDate, "yyyy-MM-dd")}`);
      const data = await response.json();
      console.log('API Response:', data); // Log the response data
      if (Array.isArray(data)) {
        const sortedData = data.sort((a: Meeting, b: Meeting) => Number(a.start_time) - Number(b.start_time));
        setMeetings(sortedData);
      } else {
        console.log('Expected an array but got:', data);
      }
    };
  
    fetchMeetings();
  }, [selectedDate]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date ?? new Date());
  }

  const handlePrevDay = () => {
    setSelectedDate((prevDate) => {
      return new Date(prevDate.setDate(prevDate.getDate() - 1));
    });
  }

  const handleNextDay = () => {
    setSelectedDate((prevDate) => {
      return new Date(prevDate.setDate(prevDate.getDate() + 1));
    });
  }

  const getStatus = (startTime: number, endTime: number) => {
    const now = new Date();
    const start = new Date(startTime * 1000);
    const end = new Date(endTime * 1000);

    if (isBefore(end, now)) {
      return 'completed';
    } else if (isWithinInterval(now, { start, end })) {
      return 'inprogress';
    } else {
      return 'upcoming';
    }
  }

  const statusColorMap = {
    completed: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-700',
      icon: 'text-emerald-500',
      hover: 'hover:bg-emerald-200'
    },
    inprogress: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-700',
      icon: 'text-yellow-500',
      hover: 'hover:bg-yellow-200'
    },
    upcoming: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      icon: 'text-blue-500',
      hover: 'hover:bg-blue-200'
    }
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center" >
          <div className="flex flex-col items-center space-x-4">
            <h1 className="font-semibold tracking-tight">AdGroup Limited</h1>
            <h2 className="font-regular opacity-90">Meeting Room Booking System</h2>
          </div>
          <div className="flex items-center gap-4" >
            <Button variant="ghost" className="text-white hover:bg-blue-600 hover:text-white" onClick={() => window.location.href = "https://rooms.adtel.co.ke/help.php"}>Help</Button>
            <Button className="bg-white text-blue-600 hover:bg-blue-50" onClick={() => window.location.href = "https://rooms.adtel.co.ke/admin.php"} >Login</Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 container mx-auto px-6 py-8" >
        {/* Date Navigation */}
        <Card className="mb-8 border-none shadow-sm bg-white/80 backdrop-blur-sm" >
          <CardContent className="p-4" >
            <div className="flex justify-between items-center">
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700" onClick={handlePrevDay}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-600" />
                <DatePicker 
                  selected={selectedDate}
                  onChange={handleDateChange}
                  customInput={<h2 className="text-xl font-semibold text-slate-800 cursor-pointer">{format(selectedDate, "EEEE, MMMM d, yyyy")}</h2> }
                />
              </div>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700" onClick={handleNextDay}>
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
              Today&apos;s Meetings
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetings.map((meeting, index) => {
              const status = getStatus(Number(meeting.start_time), Number(meeting.end_time));
              return (
                <Card key={meeting.id} className={`overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white`} >
                  <div className={`h-2 ${colors[index % colors.length]}`}></div>
                  <CardHeader className="pb-2 flex-row justify-between">
                    <CardTitle className="text-lg font-semibold text-slate-800">{meeting.name}</CardTitle>
                    <Badge variant='secondary' className={`${statusColorMap[status].bg} ${statusColorMap[status].text} ${statusColorMap[status].hover}`} >
                      {status === 'completed' && <CheckCircle className={`h-4 w-4 mr-2 text-${statusColorMap[status].icon}-500`} />}
                      {status === 'inprogress' && <Loader className={`h-4 w-4 mr-2 text-${statusColorMap[status].icon}-500`} />}
                      {status === 'upcoming' && <Clock className={`h-4 w-4 mr-2 text-${statusColorMap[status].icon}-500`} />}
                      <span className={`text-${statusColorMap[status]}-700`}>{status}</span>
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-slate-600 mb-2">
                      <Clock className={`h-4 w-4 mr-2 text-${colorMap[index % colorMap.length]}-500`} />
                      <span>{format(new Date(Number(meeting.start_time) * 1000), "p")} - {format(new Date(Number(meeting.end_time) * 1000), "p")}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 mb-2">
                      <MapPin className={`h-4 w-4 mr-2 text-${colorMap[index % colorMap.length]}-500`} />
                      <span>{meeting.area_id}th Floor - {meeting.room_id}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 mb-2">
                      <Users className={`h-4 w-4 mr-2 text-${colorMap[index % colorMap.length]}-500`} />
                      <span>{meeting.capacity} Participants</span>
                    </div>
                  </CardContent>
                </Card>
              )}
            )}
          </div>
        </div>
        {/* Quick Actions */}
        <Card className="border-none shadow-sm bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3" >
            <Button variant='outline' className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
              View All Rooms
            </Button>
            <Button variant='outline' className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
              Room Availability
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
