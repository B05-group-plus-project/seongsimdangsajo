export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      bakery: {
        Row: {
          address: string | null;
          bakery_id: string;
          comment_count: number | null;
          image: string | null;
          name: string | null;
          phone: string | null;
          sort_id: number | null;
          x: number | null;
          y: number | null;
        };
        Insert: {
          address?: string | null;
          bakery_id?: string;
          comment_count?: number | null;
          image?: string | null;
          name?: string | null;
          phone?: string | null;
          sort_id?: number | null;
          x?: number | null;
          y?: number | null;
        };
        Update: {
          address?: string | null;
          bakery_id?: string;
          comment_count?: number | null;
          image?: string | null;
          name?: string | null;
          phone?: string | null;
          sort_id?: number | null;
          x?: number | null;
          y?: number | null;
        };
        Relationships: [];
      };
      comment: {
        Row: {
          bakery_id: string;
          comment_id: number;
          content: string;
          created_at: string;
          user_id: string;
        };
        Insert: {
          bakery_id: string;
          comment_id?: number;
          content?: string;
          created_at?: string;
          user_id: string;
        };
        Update: {
          bakery_id?: string;
          comment_id?: number;
          content?: string;
          created_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "comment_bakery_id_fkey";
            columns: ["bakery_id"];
            isOneToOne: false;
            referencedRelation: "bakery";
            referencedColumns: ["bakery_id"];
          },
          {
            foreignKeyName: "comment_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          },
        ];
      };
      commentt: {
        Row: {
          bakery_id: string;
          content: string;
          created_at: string;
          id: number;
          user_id: string;
        };
        Insert: {
          bakery_id?: string | null;
          content?: string | null;
          created_at?: string;
          id?: number;
          user_id?: string | null;
        };
        Update: {
          bakery_id?: string | null;
          content?: string | null;
          created_at?: string;
          id?: number;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "commentt_bakery_id_fkey";
            columns: ["bakery_id"];
            isOneToOne: false;
            referencedRelation: "bakery";
            referencedColumns: ["bakery_id"];
          },
          {
            foreignKeyName: "commentt_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          },
        ];
      };
      like: {
        Row: {
          bakery_id: string;
          id: number;
          user_id: string;
        };
        Insert: {
          bakery_id: string;
          id?: number;
          user_id: string;
        };
        Update: {
          bakery_id?: string;
          id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "like_bakery_id_fkey";
            columns: ["bakery_id"];
            isOneToOne: false;
            referencedRelation: "bakery";
            referencedColumns: ["bakery_id"];
          },
          {
            foreignKeyName: "like_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          },
        ];
      };
      user: {
        Row: {
          description: string | null;
          email: string;
          nickname: string | null;
          profile: string | null;
          user_id: string;
        };
        Insert: {
          description?: string | null;
          email: string;
          nickname?: string | null;
          profile?: string | null;
          user_id: string;
        };
        Update: {
          description?: string | null;
          email?: string;
          nickname?: string | null;
          profile?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"]) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
