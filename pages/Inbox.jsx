// src/pages/Inbox.jsx
import { ArrowUpLeft } from "lucide-react";

// Simulated course data (normally from a JSON or props)
const courses = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "John Doe",
    startDate: "2025-08-10",
    assignments: [
      { name: "Assignment 1", due: "May 10", status: "Closed" },
      { name: "Assignment 2", due: "May 15", status: "Closed" },
      { name: "Assignment 3", due: "May 20", status: "Open" },
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    instructor: "Jane Smith",
    startDate: "2025-08-12",
    assignments: [
      { name: "Scope & Closure", due: "Jun 5", status: "Closed" },
      { name: "Async JS", due: "Jun 10", status: "Open" },
    ],
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    instructor: "Emily Davis",
    startDate: "2025-08-14",
    assignments: [
      { name: "Color Theory", due: "Jun 1", status: "Closed" },
      { name: "Wireframing", due: "Jun 8", status: "Closed" },
      { name: "Prototyping", due: "Jun 15", status: "Open" },
    ],
  },
];

// Map each course into a "message" for Inbox display
const messages = courses.map((course, index) => {
  const openAssignment = course.assignments.find((a) => a.status === "Open");
  return {
    id: index + 1,
    sender: course.instructor,
    subject: `New Assignment in ${course.title}`,
    date: course.startDate,
    unread: true,
    content: openAssignment
      ? `${openAssignment.name} pending. Submit now?`
      : null,
  };
});

const Inbox = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Inbox</h1>

        <div className="bg-white shadow rounded-md divide-y border border-gray-200">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="p-4 hover:bg-gray-50 transition space-y-2 group"
            >
              {/* Subject */}
              <p className="font-medium text-gray-900">{msg.subject}</p>

              {/* Red message line with arrow (only if open assignment) */}
              {msg.content && (
                <div className="flex items-start text-sm text-red-600 font-semibold gap-1">
                  <ArrowUpLeft size={16} className="mt-0.5" />
                  <span>{msg.content}</span>
                </div>
              )}

              {/* Footer line */}
              <div className="text-xs text-gray-500 flex justify-between items-center pt-1">
                <span>
                  {msg.sender} • {msg.date}
                </span>
                <span
                  className={
                    msg.unread
                      ? "text-blue-500 font-medium cursor-pointer"
                      : "text-gray-400"
                  }
                  onClick={() =>
                    msg.unread && alert(`Replying to ${msg.sender}`)
                  }
                >
                  {msg.unread ? "Reply?" : "Message read"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Inbox;
