import { db } from "./db";
import { insertQuoteRequestSchema, quoteRequests, type InsertQuoteRequest, type QuoteRequest } from "@shared/schema";

export interface IStorage {
  createQuoteRequest(quote: InsertQuoteRequest): Promise<QuoteRequest>;
}

export class DatabaseStorage implements IStorage {
  async createQuoteRequest(quote: InsertQuoteRequest): Promise<QuoteRequest> {
    const [result] = await db.insert(quoteRequests).values(quote).returning();
    return result;
  }
}

export const storage = new DatabaseStorage();
