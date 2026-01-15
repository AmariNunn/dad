import { z } from "zod";
import { insertQuoteRequestSchema, quoteRequests } from "./schema";

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  quotes: {
    create: {
      method: "POST" as const,
      path: "/api/quotes",
      input: insertQuoteRequestSchema,
      responses: {
        201: z.custom<typeof quoteRequests.$inferSelect>(),
        400: errorSchemas.validation,
        500: errorSchemas.internal,
      },
    },
  },
};

export type InsertQuoteRequest = z.infer<typeof api.quotes.create.input>;
