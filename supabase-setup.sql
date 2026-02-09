-- =============================================================
-- MarketCode: Supabase Setup SQL
-- Generated on 2026-02-09T08:39:53.824Z
-- Categories: 5 | Exercises: 50
-- =============================================================

-- NOTE: Exercises and categories are stored as static TypeScript
-- data in the app (src/lib/exercises.ts), NOT in Supabase.
-- This keeps the app simpler and faster. Only user progress is
-- stored in the database.

-- =============================================================
-- Part 1: Table Creation
-- =============================================================

-- User progress table
CREATE TABLE IF NOT EXISTS public.user_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    solved JSONB NOT NULL DEFAULT '{}'::jsonb,
    activity JSONB NOT NULL DEFAULT '[]'::jsonb,
    streak INTEGER NOT NULL DEFAULT 0,
    last_active_date TEXT,
    total_points INTEGER NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT unique_user UNIQUE (user_id)
);

-- RLS policies
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own progress"
    ON public.user_progress FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users insert own progress"
    ON public.user_progress FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own progress"
    ON public.user_progress FOR UPDATE
    USING (auth.uid() = user_id);

-- =============================================================
-- Part 2: Data Reference (informational only)
-- =============================================================
-- The following categories and exercises are defined in the app
-- TypeScript code and are listed here for reference.

-- Categories:
--   image-prompting: Image Prompting (🎨)
--   campaign-strategy: Campaign Strategy (🎯)
--   content-planning: Content Planning (📅)
--   facebook-campaigns: Facebook Campaigns (📘)
--   target-audience: Target Audience (👥)

-- Exercises:
--   #1 [image-prompting] Product Hero Shot Prompt (Easy, 10pts)
--   #2 [image-prompting] Social Media Ad Visual (Easy, 10pts)
--   #3 [image-prompting] Email Banner Design (Medium, 20pts)
--   #4 [image-prompting] Brand Lifestyle Photography (Medium, 20pts)
--   #5 [image-prompting] App Store Screenshots (Medium, 20pts)
--   #6 [image-prompting] Infographic Hero Visual (Hard, 30pts)
--   #7 [image-prompting] YouTube Thumbnail (Easy, 10pts)
--   #8 [image-prompting] Product Mockup Scene (Hard, 30pts)
--   #9 [image-prompting] Brand Pattern Design (Hard, 30pts)
--   #10 [image-prompting] Before/After Comparison (Medium, 20pts)
--   #11 [campaign-strategy] SaaS Launch Campaign (Medium, 20pts)
--   #12 [campaign-strategy] Seasonal Sale Campaign (Easy, 10pts)
--   #13 [campaign-strategy] Referral Program Design (Medium, 20pts)
--   #14 [campaign-strategy] Product Repositioning (Hard, 30pts)
--   #15 [campaign-strategy] Freemium to Premium Upsell (Medium, 20pts)
--   #16 [campaign-strategy] Influencer Marketing Plan (Easy, 10pts)
--   #17 [campaign-strategy] Product Hunt Launch (Hard, 30pts)
--   #18 [campaign-strategy] Crisis Communication Plan (Hard, 30pts)
--   #19 [campaign-strategy] Cross-Promotion Partnership (Easy, 10pts)
--   #20 [campaign-strategy] Community-Led Growth (Medium, 20pts)
--   #21 [content-planning] Monthly Content Calendar (Easy, 10pts)
--   #22 [content-planning] Pillar Content Strategy (Medium, 20pts)
--   #23 [content-planning] Video Content Series (Medium, 20pts)
--   #24 [content-planning] Newsletter Growth Strategy (Easy, 10pts)
--   #25 [content-planning] Podcast Launch Plan (Hard, 30pts)
--   #26 [content-planning] UGC Content Strategy (Medium, 20pts)
--   #27 [content-planning] Content Repurposing Framework (Easy, 10pts)
--   #28 [content-planning] Content Audit & Gap Analysis (Hard, 30pts)
--   #29 [content-planning] Thought Leadership Program (Hard, 30pts)
--   #30 [content-planning] Interactive Content Strategy (Medium, 20pts)
--   #31 [facebook-campaigns] Campaign Objective Selection (Easy, 10pts)
--   #32 [facebook-campaigns] Audience Targeting Strategy (Medium, 20pts)
--   #33 [facebook-campaigns] Ad Creative Strategy (Easy, 10pts)
--   #34 [facebook-campaigns] Budget & Bidding Strategy (Medium, 20pts)
--   #35 [facebook-campaigns] Retargeting Funnel (Medium, 20pts)
--   #36 [facebook-campaigns] A/B Testing Framework (Easy, 10pts)
--   #37 [facebook-campaigns] Lookalike Audience Strategy (Hard, 30pts)
--   #38 [facebook-campaigns] Facebook Pixel Strategy (Hard, 30pts)
--   #39 [facebook-campaigns] Lead Generation Campaign (Medium, 20pts)
--   #40 [facebook-campaigns] Campaign Performance Diagnosis (Hard, 30pts)
--   #41 [target-audience] Buyer Persona Creation (Easy, 10pts)
--   #42 [target-audience] Market Segmentation (Medium, 20pts)
--   #43 [target-audience] Customer Journey Mapping (Medium, 20pts)
--   #44 [target-audience] Competitive Audience Analysis (Hard, 30pts)
--   #45 [target-audience] Audience Research Methods (Easy, 10pts)
--   #46 [target-audience] Audience Messaging Matrix (Medium, 20pts)
--   #47 [target-audience] TAM SAM SOM Analysis (Hard, 30pts)
--   #48 [target-audience] Behavioral Targeting Strategy (Medium, 20pts)
--   #49 [target-audience] Lookalike Audience Modeling (Hard, 30pts)
--   #50 [target-audience] Audience Expansion Strategy (Easy, 10pts)

-- Exercise counts by category:
--   Image Prompting: 10 exercises
--   Campaign Strategy: 10 exercises
--   Content Planning: 10 exercises
--   Facebook Campaigns: 10 exercises
--   Target Audience: 10 exercises

-- Exercise counts by difficulty:
--   easy: 15
--   hard: 15
--   medium: 20

-- Total points available: 1000
