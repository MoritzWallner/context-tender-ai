import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import TenderMatchLanding from "./pages/TenderMatchLanding";
import TenderMatchProduct from "./pages/TenderMatchProduct";
import CompanyMatchLanding from "./pages/CompanyMatchLanding";
import CompanyMatchProduct from "./pages/CompanyMatchProduct";
import About from "./pages/About";
import Waitlist from "./pages/Waitlist";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import WhyAlpX from "./pages/WhyAlpX";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tender-match" element={<TenderMatchLanding />} />
          <Route path="/tender-match/product" element={<TenderMatchProduct />} />
          <Route path="/company-match" element={<CompanyMatchLanding />} />
          <Route path="/company-match/product" element={<CompanyMatchProduct />} />
          <Route path="/product" element={<Navigate to="/tender-match/product" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/why-alpx" element={<WhyAlpX />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
