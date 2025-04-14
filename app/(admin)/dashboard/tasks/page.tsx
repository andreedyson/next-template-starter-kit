import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Tasks",
};

function TasksPage() {
  const tasks = [
    { id: 1, title: "Fix login bug", done: true },
    { id: 2, title: "Design dashboard UI", done: false },
    { id: 3, title: "Write API documentation", done: false },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Tasks</CardTitle>
        <Button>Add Task</Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-3">
            <Checkbox id={`task-${task.id}`} defaultChecked={task.done} />
            <label htmlFor={`task-${task.id}`}>{task.title}</label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default TasksPage;
