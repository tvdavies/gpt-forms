export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      prompts: {
        Row: {
          created_at: string
          data: Json
          id: string
          prompt: string
          prompt_name: string
          url: string
        }
        Insert: {
          created_at?: string
          data: Json
          id?: string
          prompt: string
          prompt_name: string
          url: string
        }
        Update: {
          created_at?: string
          data?: Json
          id?: string
          prompt?: string
          prompt_name?: string
          url?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

