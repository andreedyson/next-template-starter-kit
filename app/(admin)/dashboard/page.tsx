/**
 * ⚠️ This page is a dummy template.
 * Feel free to customize the layout, content, and logic
 * according to your actual project needs.
 *
 * Remove the use client and other client side stuff to make this a server component
 */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

function DashboardPage() {
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    // ⚠️ Call to dummy protected API
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setApiMessage(data.message || "Unauthorized"))
      .catch(() => setApiMessage("Error fetching data"));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Welcome back, Developer 👋</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">1,024</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tasks Completed</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">87%</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Sessions</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">312</CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>API Test</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Response from <code className="font-mono">/api/hello</code>:{" "}
            {apiMessage}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashboardPage;
