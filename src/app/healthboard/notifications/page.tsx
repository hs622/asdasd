"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  CheckCircle,
  Info,
} from "lucide-react";
import { useState } from "react";

type Notification = {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  isRead: boolean;
  createdAt: string;
};

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "New message",
    message: "You have a new message from Dr. Smith",
    type: "info",
    isRead: false,
    createdAt: "2023-06-15T10:30:00Z",
  },
  {
    id: "2",
    title: "Appointment reminder",
    message: "Your appointment with Dr. Johnson is tomorrow at 2:00 PM",
    type: "warning",
    isRead: false,
    createdAt: "2023-06-14T15:45:00Z",
  },
  {
    id: "3",
    title: "Lab results ready",
    message: "Your recent lab results are now available",
    type: "success",
    isRead: true,
    createdAt: "2023-06-13T09:15:00Z",
  },
  {
    id: "4",
    title: "Prescription refill",
    message: "Your prescription for Lisinopril needs to be refilled",
    type: "error",
    isRead: false,
    createdAt: "2023-06-12T14:20:00Z",
  },
  {
    id: "5",
    title: "Health tip",
    message:
      "Remember to stay hydrated and drink plenty of water throughout the day",
    type: "info",
    isRead: true,
    createdAt: "2023-06-11T11:00:00Z",
  },
];

const Notification = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(mockNotifications);
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const filteredNotifications = showOnlyUnread
    ? notifications.filter((notif) => !notif.isRead)
    : notifications;

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="container mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Bell className="h-6 w-6" />
          Notifications
        </CardTitle>
        <CardDescription>
          Stay updated with your latest notifications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="show-unread"
              checked={showOnlyUnread}
              onCheckedChange={setShowOnlyUnread}
            />
            <label htmlFor="show-unread">Show only unread</label>
          </div>
          <Badge variant="secondary">
            {notifications.filter((n) => !n.isRead).length} unread
          </Badge>
        </div>
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <Card key={notification.id}>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                {getIcon(notification.type)}
                <CardTitle className="text-base font-semibold">
                  {notification.title}
                </CardTitle>
                {!notification.isRead && (
                  <Badge variant="destructive" className="ml-auto">
                    New
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <p>{notification.message}</p>
                <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
                  <span>
                    {new Date(notification.createdAt).toLocaleString()}
                  </span>
                  {!notification.isRead && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => markAsRead(notification.id)}
                    >
                      Mark as read
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </div>
  );
};

export default Notification;
