import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertQuoteRequest } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateQuote() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertQuoteRequest) => {
      const res = await fetch(api.quotes.create.path, {
        method: api.quotes.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit quote request");
      }
      
      return api.quotes.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Received",
        description: "We'll get back to you shortly with more information.",
        className: "bg-primary text-primary-foreground border-none",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
