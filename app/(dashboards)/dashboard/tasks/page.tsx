/**
 * ⚠️ Tasks Page Template
 * This page demonstrates a dummy task list and a server action usage.
 * Replace this logic with your preferred state management and backend integration.
 */

"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { getWelcomeMessage } from "@/server/actions/example";

function TasksPage() {
  const [welcome, setWelcome] = useState("");
  const tasks = [
    { id: 1, title: "Fix login bug", done: true },
    { id: 2, title: "Design dashboard UI", done: false },
    { id: 3, title: "Write API documentation", done: false },
  ];

  const handleWelcome = async () => {
    // ⚠️ Call to dummy server action
    const msg = await getWelcomeMessage("Dev");
    setWelcome(msg);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Tasks</CardTitle>
        <Button onClick={handleWelcome}>Say Hello</Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-3">
            <Checkbox id={`task-${task.id}`} defaultChecked={task.done} />
            <label htmlFor={`task-${task.id}`}>{task.title}</label>
          </div>
        ))}
        {welcome && (
          <p className="text-muted-foreground text-sm">
            Server says: {welcome}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default TasksPage;
