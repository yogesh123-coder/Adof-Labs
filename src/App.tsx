// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScheduleCall from "./pages/ScheduleCall";

import NotFound from "./pages/NotFound";
import SmoothScrolling from "./components/SmoothScrolling";
import { NavbarMenu } from "./components/NavbarMenu";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SmoothScrolling>
        {/* <Toaster /> */}
        {/* <div className="md:mt-16" > */}

        <Toaster
          position="top-right"
          containerStyle={{
            marginTop: window.innerWidth >= 768 ? "72px" : "62px",
          }}
        />
        {/* </div> */}

        {/* <Sonner /> */}
        <BrowserRouter>
          <div className="fixed top-0 z-[9999] mx-auto max-w-[1450px] left-0 right-0 bg-background shadow-md rounded-full mt-2">
            <NavbarMenu />
          </div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/schedule-call" element={<ScheduleCall />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SmoothScrolling>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
