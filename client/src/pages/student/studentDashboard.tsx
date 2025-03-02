"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarNav } from "@/components/sidebar-nav"
import { AssignmentsTable } from "@/components/assignments-table"
import { GradesTable } from "@/components/grades-table"
import { MobileNav } from "@/components/mobile-nav"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="md:hidden">
            <MobileNav />
          </div>
          <h2 className="text-lg font-semibold ml-2 md:ml-0">Student Dashboard</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
        <aside className="hidden md:block border-r bg-muted/40">
          <SidebarNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="md:hidden mb-6">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="grades">Grades</TabsTrigger>
            </TabsList>
          </Tabs>

          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold">Welcome back, Student!</h1>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h3 className="font-semibold">Upcoming Deadlines</h3>
                  <p className="text-3xl font-bold mt-2">3</p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h3 className="font-semibold">Pending Submissions</h3>
                  <p className="text-3xl font-bold mt-2">2</p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h3 className="font-semibold">Average Grade</h3>
                  <p className="text-3xl font-bold mt-2">85%</p>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Active Assignments</h2>
                <AssignmentsTable limit={3} />
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Recent Grades</h2>
                <GradesTable limit={3} />
              </div>
            </div>
          )}

          {activeTab === "assignments" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">My Assignments</h1>
              </div>
              <AssignmentsTable />
            </div>
          )}

          {activeTab === "grades" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Grades & Feedback</h1>
              </div>
              <GradesTable />
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

