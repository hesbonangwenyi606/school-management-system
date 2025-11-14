import React, { useState } from "react";
import { Student } from "@/components/AddStudent";
import AddStudentPage from "./pages/AddStudentPage";
import StudentDirectoryPage from "./pages/StudentDirectoryPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

const App = () => {
  const [students, setStudents] = useState<Student[]>([]);

  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index students={students} setStudents={setStudents} />} />
              <Route path="/students/add" element={<AddStudentPage students={students} setStudents={setStudents} />} />
              <Route path="/students" element={<StudentDirectoryPage students={students} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
