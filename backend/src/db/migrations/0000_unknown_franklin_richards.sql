CREATE TYPE "public"."status" AS ENUM('Ativo', 'Inativo', 'Desativado', 'Aguardando ativação');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customers" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"cpf" varchar(11) NOT NULL,
	"cellphone" varchar(11) NOT NULL,
	"status" "status" NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
