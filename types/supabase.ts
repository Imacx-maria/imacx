export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      calculo_materiais: {
        Row: {
          calculation_id: string | null
          custo_liquido_total: number | null
          custo_total_maquina: number | null
          custo_total_materiais: number | null
          diferenca_percentual: number | null
          id: string
          maquina_id: number | null
          maquina_nome: string | null
          maquina_uuid: string | null
          maquina_valor_m2: number | null
          margem: number | null
          material1_caracteristica: string | null
          material1_cor: string | null
          material1_id: number | null
          material1_material: string | null
          material1_tipo: string | null
          material1_valor_m2: number | null
          material2_caracteristica: string | null
          material2_cor: string | null
          material2_id: number | null
          material2_material: string | null
          material2_tipo: string | null
          material2_valor_m2: number | null
          material3_caracteristica: string | null
          material3_cor: string | null
          material3_id: number | null
          material3_material: string | null
          material3_tipo: string | null
          material3_valor_m2: number | null
          metros_quadrados: number | null
          notas: string | null
          preco_atual: number | null
          preco_final: number | null
        }
        Insert: {
          calculation_id?: string | null
          custo_liquido_total?: number | null
          custo_total_maquina?: number | null
          custo_total_materiais?: number | null
          diferenca_percentual?: number | null
          id?: string
          maquina_id?: number | null
          maquina_nome?: string | null
          maquina_uuid?: string | null
          maquina_valor_m2?: number | null
          margem?: number | null
          material1_caracteristica?: string | null
          material1_cor?: string | null
          material1_id?: number | null
          material1_material?: string | null
          material1_tipo?: string | null
          material1_valor_m2?: number | null
          material2_caracteristica?: string | null
          material2_cor?: string | null
          material2_id?: number | null
          material2_material?: string | null
          material2_tipo?: string | null
          material2_valor_m2?: number | null
          material3_caracteristica?: string | null
          material3_cor?: string | null
          material3_id?: number | null
          material3_material?: string | null
          material3_tipo?: string | null
          material3_valor_m2?: number | null
          metros_quadrados?: number | null
          notas?: string | null
          preco_atual?: number | null
          preco_final?: number | null
        }
        Update: {
          calculation_id?: string | null
          custo_liquido_total?: number | null
          custo_total_maquina?: number | null
          custo_total_materiais?: number | null
          diferenca_percentual?: number | null
          id?: string
          maquina_id?: number | null
          maquina_nome?: string | null
          maquina_uuid?: string | null
          maquina_valor_m2?: number | null
          margem?: number | null
          material1_caracteristica?: string | null
          material1_cor?: string | null
          material1_id?: number | null
          material1_material?: string | null
          material1_tipo?: string | null
          material1_valor_m2?: number | null
          material2_caracteristica?: string | null
          material2_cor?: string | null
          material2_id?: number | null
          material2_material?: string | null
          material2_tipo?: string | null
          material2_valor_m2?: number | null
          material3_caracteristica?: string | null
          material3_cor?: string | null
          material3_id?: number | null
          material3_material?: string | null
          material3_tipo?: string | null
          material3_valor_m2?: number | null
          metros_quadrados?: number | null
          notas?: string | null
          preco_atual?: number | null
          preco_final?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "calculo_materiais_maquina_uuid_fkey"
            columns: ["maquina_uuid"]
            isOneToOne: false
            referencedRelation: "maquinas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calculo_materiais_material1_id_fkey"
            columns: ["material1_id"]
            isOneToOne: false
            referencedRelation: "materiais_impressao"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calculo_materiais_material2_id_fkey"
            columns: ["material2_id"]
            isOneToOne: false
            referencedRelation: "materiais_impressao"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calculo_materiais_material3_id_fkey"
            columns: ["material3_id"]
            isOneToOne: false
            referencedRelation: "materiais_impressao"
            referencedColumns: ["id"]
          },
        ]
      }
      colas: {
        Row: {
          id: string
          material: string | null
          percentual_variacao_quantidade: number | null
          percentual_variacao_valor: number | null
          quantidade_2023: number | null
          quantidade_2024: number | null
          tipo: string | null
          valor_2023: number | null
          valor_2024: number | null
        }
        Insert: {
          id?: string
          material?: string | null
          percentual_variacao_quantidade?: number | null
          percentual_variacao_valor?: number | null
          quantidade_2023?: number | null
          quantidade_2024?: number | null
          tipo?: string | null
          valor_2023?: number | null
          valor_2024?: number | null
        }
        Update: {
          id?: string
          material?: string | null
          percentual_variacao_quantidade?: number | null
          percentual_variacao_valor?: number | null
          quantidade_2023?: number | null
          quantidade_2024?: number | null
          tipo?: string | null
          valor_2023?: number | null
          valor_2024?: number | null
        }
        Relationships: []
      }
      designers: {
        Row: {
          ativo: boolean | null
          created_at: string | null
          email: string | null
          id: string
          nome: string
          updated_at: string | null
        }
        Insert: {
          ativo?: boolean | null
          created_at?: string | null
          email?: string | null
          id?: string
          nome: string
          updated_at?: string | null
        }
        Update: {
          ativo?: boolean | null
          created_at?: string | null
          email?: string | null
          id?: string
          nome?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      embalamento: {
        Row: {
          caracteristica: string | null
          id: string
          material: string | null
          media_vl_unit_2024: number | null
          quantidade_2024: number | null
          tipo: string | null
          valor_2024: number | null
        }
        Insert: {
          caracteristica?: string | null
          id?: string
          material?: string | null
          media_vl_unit_2024?: number | null
          quantidade_2024?: number | null
          tipo?: string | null
          valor_2024?: number | null
        }
        Update: {
          caracteristica?: string | null
          id?: string
          material?: string | null
          media_vl_unit_2024?: number | null
          quantidade_2024?: number | null
          tipo?: string | null
          valor_2024?: number | null
        }
        Relationships: []
      }
      fitas_adesivas: {
        Row: {
          caracteristica: string | null
          cor: string | null
          id: string
          material: string | null
          media_ml_2023: number | null
          media_ml_2024: number | null
          percentual_variacao_media_ml: number | null
          percentual_variacao_quantidade: number | null
          percentual_variacao_valor: number | null
          quantidade_2023: number | null
          quantidade_2024: number | null
          tipo: string | null
          valor_2023: number | null
          valor_2024: number | null
        }
        Insert: {
          caracteristica?: string | null
          cor?: string | null
          id?: string
          material?: string | null
          media_ml_2023?: number | null
          media_ml_2024?: number | null
          percentual_variacao_media_ml?: number | null
          percentual_variacao_quantidade?: number | null
          percentual_variacao_valor?: number | null
          quantidade_2023?: number | null
          quantidade_2024?: number | null
          tipo?: string | null
          valor_2023?: number | null
          valor_2024?: number | null
        }
        Update: {
          caracteristica?: string | null
          cor?: string | null
          id?: string
          material?: string | null
          media_ml_2023?: number | null
          media_ml_2024?: number | null
          percentual_variacao_media_ml?: number | null
          percentual_variacao_quantidade?: number | null
          percentual_variacao_valor?: number | null
          quantidade_2023?: number | null
          quantidade_2024?: number | null
          tipo?: string | null
          valor_2023?: number | null
          valor_2024?: number | null
        }
        Relationships: []
      }
      folhas_obra: {
        Row: {
          created_at: string | null
          data_duvidas: string | null
          data_envio: string | null
          data_in: string | null
          data_saida: string | null
          designer_id: string | null
          duvidas: boolean | null
          em_curso: boolean | null
          id: string
          item: string | null
          maquete_enviada: boolean | null
          numero_fo: number
          paginacao: boolean | null
          path_trabalho: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          data_duvidas?: string | null
          data_envio?: string | null
          data_in?: string | null
          data_saida?: string | null
          designer_id?: string | null
          duvidas?: boolean | null
          em_curso?: boolean | null
          id?: string
          item?: string | null
          maquete_enviada?: boolean | null
          numero_fo: number
          paginacao?: boolean | null
          path_trabalho?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          data_duvidas?: string | null
          data_envio?: string | null
          data_in?: string | null
          data_saida?: string | null
          designer_id?: string | null
          duvidas?: boolean | null
          em_curso?: boolean | null
          id?: string
          item?: string | null
          maquete_enviada?: boolean | null
          numero_fo?: number
          paginacao?: boolean | null
          path_trabalho?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "folhas_obra_designer_id_fkey"
            columns: ["designer_id"]
            isOneToOne: false
            referencedRelation: "designers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "folhas_obra_designer_id_fkey"
            columns: ["designer_id"]
            isOneToOne: false
            referencedRelation: "folhas_obra_com_designers"
            referencedColumns: ["designer_id"]
          },
        ]
      }
      folhas_obras: {
        Row: {
          created_at: string | null
          data_in: string | null
          data_saida: string | null
          id: string
          nome_campanha: string
          notas: string | null
          numero_fo: number
          prioridade: boolean | null
          profile_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          data_in?: string | null
          data_saida?: string | null
          id?: string
          nome_campanha: string
          notas?: string | null
          numero_fo: number
          prioridade?: boolean | null
          profile_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          data_in?: string | null
          data_saida?: string | null
          id?: string
          nome_campanha?: string
          notas?: string | null
          numero_fo?: number
          prioridade?: boolean | null
          profile_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "folhas_obras_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "folhas_obras_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "users_with_profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      items: {
        Row: {
          codigo: string | null
          created_at: string | null
          data_duvidas: string | null
          data_envio: string | null
          data_in: string | null
          data_saida: string | null
          descricao: string
          duvidas: boolean | null
          em_curso: boolean | null
          folha_obra_id: string
          id: string
          maquete_enviada: boolean | null
          paginacao: boolean | null
          path_trabalho: string | null
          updated_at: string | null
        }
        Insert: {
          codigo?: string | null
          created_at?: string | null
          data_duvidas?: string | null
          data_envio?: string | null
          data_in?: string | null
          data_saida?: string | null
          descricao: string
          duvidas?: boolean | null
          em_curso?: boolean | null
          folha_obra_id: string
          id?: string
          maquete_enviada?: boolean | null
          paginacao?: boolean | null
          path_trabalho?: string | null
          updated_at?: string | null
        }
        Update: {
          codigo?: string | null
          created_at?: string | null
          data_duvidas?: string | null
          data_envio?: string | null
          data_in?: string | null
          data_saida?: string | null
          descricao?: string
          duvidas?: boolean | null
          em_curso?: boolean | null
          folha_obra_id?: string
          id?: string
          maquete_enviada?: boolean | null
          paginacao?: boolean | null
          path_trabalho?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "items_folha_obra_id_fkey"
            columns: ["folha_obra_id"]
            isOneToOne: false
            referencedRelation: "folhas_obras"
            referencedColumns: ["id"]
          },
        ]
      }
      maquinas: {
        Row: {
          id: string
          integer_id: number
          maquina: string | null
          valor_m2: number | null
        }
        Insert: {
          id?: string
          integer_id?: number
          maquina?: string | null
          valor_m2?: number | null
        }
        Update: {
          id?: string
          integer_id?: number
          maquina?: string | null
          valor_m2?: number | null
        }
        Relationships: []
      }
      maquinas_id_mapping: {
        Row: {
          integer_id: number | null
          uuid_id: string
        }
        Insert: {
          integer_id?: number | null
          uuid_id: string
        }
        Update: {
          integer_id?: number | null
          uuid_id?: string
        }
        Relationships: []
      }
      materiais_impressao: {
        Row: {
          caracteristica: string | null
          cor: string | null
          id: number
          material: string | null
          media_m2_2023: number | null
          media_m2_2024: number | null
          percentual_media_m2: number | null
          percentual_quantidade: number | null
          percentual_valor: number | null
          percentual_variacao_media_m2: number | null
          percentual_variacao_quantidade: number | null
          percentual_variacao_valor: number | null
          quantidade_2023: number | null
          quantidade_2024: number | null
          tipo: string | null
          valor_2023: number | null
          valor_2024: number | null
        }
        Insert: {
          caracteristica?: string | null
          cor?: string | null
          id?: number
          material?: string | null
          media_m2_2023?: number | null
          media_m2_2024?: number | null
          percentual_media_m2?: number | null
          percentual_quantidade?: number | null
          percentual_valor?: number | null
          percentual_variacao_media_m2?: number | null
          percentual_variacao_quantidade?: number | null
          percentual_variacao_valor?: number | null
          quantidade_2023?: number | null
          quantidade_2024?: number | null
          tipo?: string | null
          valor_2023?: number | null
          valor_2024?: number | null
        }
        Update: {
          caracteristica?: string | null
          cor?: string | null
          id?: number
          material?: string | null
          media_m2_2023?: number | null
          media_m2_2024?: number | null
          percentual_media_m2?: number | null
          percentual_quantidade?: number | null
          percentual_valor?: number | null
          percentual_variacao_media_m2?: number | null
          percentual_variacao_quantidade?: number | null
          percentual_variacao_valor?: number | null
          quantidade_2023?: number | null
          quantidade_2024?: number | null
          tipo?: string | null
          valor_2023?: number | null
          valor_2024?: number | null
        }
        Relationships: []
      }
      materiais_impressao_id_mapping: {
        Row: {
          new_id: number | null
          old_uuid: string
        }
        Insert: {
          new_id?: number | null
          old_uuid: string
        }
        Update: {
          new_id?: number | null
          old_uuid?: string
        }
        Relationships: []
      }
      outros: {
        Row: {
          caracteristica: string | null
          id: string
          material: string | null
          media_vl_unit_2023: number | null
          media_vl_unit_2024: number | null
          quantidade_2023: number | null
          quantidade_2024: number | null
          tipo: string | null
          valor_2023: number | null
          valor_2024: number | null
        }
        Insert: {
          caracteristica?: string | null
          id?: string
          material?: string | null
          media_vl_unit_2023?: number | null
          media_vl_unit_2024?: number | null
          quantidade_2023?: number | null
          quantidade_2024?: number | null
          tipo?: string | null
          valor_2023?: number | null
          valor_2024?: number | null
        }
        Update: {
          caracteristica?: string | null
          id?: string
          material?: string | null
          media_vl_unit_2023?: number | null
          media_vl_unit_2024?: number | null
          quantidade_2023?: number | null
          quantidade_2024?: number | null
          tipo?: string | null
          valor_2023?: number | null
          valor_2024?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          first_name: string
          id: string
          last_name: string
          role_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          first_name: string
          id?: string
          last_name: string
          role_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          first_name?: string
          id?: string
          last_name?: string
          role_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      folhas_obra_com_designers: {
        Row: {
          created_at: string | null
          data_duvidas: string | null
          data_envio: string | null
          data_in: string | null
          data_saida: string | null
          designer_email: string | null
          designer_id: string | null
          designer_nome: string | null
          duvidas: boolean | null
          em_curso: boolean | null
          id: string | null
          item: string | null
          maquete_enviada: boolean | null
          numero_fo: number | null
          paginacao: boolean | null
          path_trabalho: string | null
          updated_at: string | null
        }
        Relationships: []
      }
      users_with_profiles: {
        Row: {
          email: string | null
          first_name: string | null
          last_name: string | null
          last_sign_in_at: string | null
          profile_created_at: string | null
          profile_id: string | null
          profile_updated_at: string | null
          role_id: string | null
          role_name: string | null
          user_created_at: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
