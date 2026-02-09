const CATEGORIES = [
    {
        id: 'image-prompting',
        name: 'Image Prompting',
        icon: '🎨',
        color: '#a855f7',
        description: 'Master the art of writing AI image generation prompts for marketing visuals.'
    },
    {
        id: 'campaign-strategy',
        name: 'Campaign Strategy',
        icon: '🎯',
        color: '#3b82f6',
        description: 'Design end-to-end marketing campaign strategies for digital products.'
    },
    {
        id: 'content-planning',
        name: 'Content Planning',
        icon: '📅',
        color: '#2cbb5d',
        description: 'Plan content calendars, editorial strategies, and publishing workflows.'
    },
    {
        id: 'facebook-campaigns',
        name: 'Facebook Campaigns',
        icon: '📘',
        color: '#06b6d4',
        description: 'Build and optimize Facebook ad campaigns for digital products.'
    },
    {
        id: 'target-audience',
        name: 'Target Audience',
        icon: '👥',
        color: '#ffa116',
        description: 'Identify, segment, and profile target audiences for digital products.'
    }
];

const EXERCISES = [
    // ===== IMAGE PROMPTING (10) =====
    {
        id: 1,
        category: 'image-prompting',
        title: 'Product Hero Shot Prompt',
        difficulty: 'easy',
        points: 10,
        description: 'Write an AI image prompt that generates a compelling hero image for a SaaS product landing page.',
        prompt: 'You are launching a new project management SaaS tool called "FlowBoard". Write a detailed AI image generation prompt (for Midjourney or DALL-E) that creates a stunning hero banner image for the landing page. The image should convey productivity, collaboration, and modern design.',
        hints: [
            'Specify the style (photorealistic, 3D render, flat illustration, etc.)',
            'Include lighting and mood descriptors',
            'Mention composition and camera angle',
            'Add color palette guidance',
            'Include negative prompts or exclusions'
        ],
        criteria: [
            { keyword: 'style', label: 'Specifies visual style' },
            { keyword: 'light', label: 'Describes lighting/mood' },
            { keyword: 'color', label: 'Mentions color palette' },
            { keyword: 'composition|angle|perspective|view', label: 'Defines composition' },
            { keyword: 'product|saas|software|dashboard', label: 'References the product context' }
        ],
        sampleAnswer: 'A clean, modern 3D render of a floating laptop displaying a colorful project management dashboard, surrounded by abstract geometric shapes representing tasks and workflows, soft gradient background transitioning from deep purple to electric blue, warm studio lighting from top-left creating subtle shadows, isometric perspective, minimal and professional aesthetic, 8K resolution, no text or watermarks.'
    },
    {
        id: 2,
        category: 'image-prompting',
        title: 'Social Media Ad Visual',
        difficulty: 'easy',
        points: 10,
        description: 'Create an image prompt for an Instagram ad promoting a fitness app.',
        prompt: 'A fitness app called "PulseTrack" needs an eye-catching Instagram ad image. Write an AI image generation prompt that would create a scroll-stopping visual suitable for a square 1080x1080 format.',
        hints: [
            'Think about what stops people from scrolling',
            'Instagram favors vibrant, high-contrast images',
            'Include human elements for relatability',
            'Consider the square format constraints',
            'Brand colors and energy should be evident'
        ],
        criteria: [
            { keyword: 'vibrant|bright|bold|contrast', label: 'Uses attention-grabbing visual language' },
            { keyword: 'fitness|workout|exercise|athlete|sport', label: 'Relates to fitness context' },
            { keyword: 'square|1080|instagram|social', label: 'Considers format' },
            { keyword: 'person|human|athlete|model', label: 'Includes human element' },
            { keyword: 'phone|app|screen|device', label: 'Shows the product' }
        ],
        sampleAnswer: 'A dynamic photo of a fit young athlete mid-workout in a modern gym, smartphone strapped to forearm displaying the PulseTrack app interface with glowing heart rate data, vibrant teal and coral color accents, dramatic side lighting with lens flare, square composition with subject centered, high contrast, energetic and motivational mood, shallow depth of field, professional sports photography style.'
    },
    {
        id: 3,
        category: 'image-prompting',
        title: 'Email Banner Design',
        difficulty: 'medium',
        points: 20,
        description: 'Write a prompt for a seasonal promotional email header image.',
        prompt: 'An online course platform is running a "New Year, New Skills" January promotion with 40% off all courses. Write an AI image prompt for the email header banner (600x200px wide format) that feels festive yet professional.',
        hints: [
            'Wide horizontal format needs careful composition',
            'Balance festive elements without being too holiday-specific',
            'Leave negative space for text overlay',
            'Keep it professional — this is an education brand',
            'Seasonal colors that feel fresh and aspirational'
        ],
        criteria: [
            { keyword: 'wide|horizontal|banner|600|header', label: 'Addresses banner format' },
            { keyword: 'new year|january|season|winter|fresh', label: 'Captures seasonal theme' },
            { keyword: 'education|learn|course|skill|book|study', label: 'Relates to education' },
            { keyword: 'space|text|overlay|room|minimal', label: 'Considers text overlay space' },
            { keyword: 'professional|clean|modern|elegant', label: 'Maintains professional tone' }
        ],
        sampleAnswer: 'A wide horizontal banner illustration, clean modern flat design style, depicting an open laptop surrounded by floating icons of books, graduation caps, and lightbulbs, subtle confetti and sparkle elements suggesting New Year celebration, color palette of navy blue, white, and gold accents, large empty space on the right side for text overlay, soft gradient background, professional yet aspirational mood, minimal and uncluttered composition.'
    },
    {
        id: 4,
        category: 'image-prompting',
        title: 'Brand Lifestyle Photography',
        difficulty: 'medium',
        points: 20,
        description: 'Create a prompt for lifestyle imagery that represents a remote work tool brand.',
        prompt: 'A remote collaboration tool called "TeamSync" needs lifestyle photography for their website and social media. Write an AI image prompt that shows authentic remote work scenarios while maintaining brand appeal.',
        hints: [
            'Lifestyle photos should feel natural, not staged',
            'Show real work environments (home office, cafe, co-working)',
            'Include technology naturally in the scene',
            'Diverse representation matters',
            'Warm, inviting atmosphere over cold corporate'
        ],
        criteria: [
            { keyword: 'natural|authentic|candid|real|organic', label: 'Emphasizes authenticity' },
            { keyword: 'remote|home|cafe|coworking|anywhere', label: 'Shows remote work setting' },
            { keyword: 'laptop|screen|device|tech|computer', label: 'Includes technology' },
            { keyword: 'warm|cozy|inviting|comfort', label: 'Creates warm atmosphere' },
            { keyword: 'collaboration|team|together|connect|call', label: 'Shows collaboration' }
        ],
        sampleAnswer: 'A warm, candid lifestyle photograph of a smiling professional on a video call from a bright, cozy home office, natural morning light streaming through a window, laptop screen showing a team video grid, coffee cup and notebook on a wooden desk, potted plants in background, shallow depth of field, warm color temperature, authentic and relaxed mood, editorial photography style, soft natural shadows.'
    },
    {
        id: 5,
        category: 'image-prompting',
        title: 'App Store Screenshots',
        difficulty: 'medium',
        points: 20,
        description: 'Write a prompt for generating stylized app store screenshot backgrounds.',
        prompt: 'A meditation app called "Stillness" needs beautiful background visuals for their App Store screenshots. Write an AI image prompt that creates a serene, premium background that the UI mockups will be placed on top of.',
        hints: [
            'App Store screenshots need clean backgrounds for UI readability',
            'Meditation apps favor nature, calm, and tranquility',
            'Premium feel with subtle textures and gradients',
            'Consider multiple color variations',
            'The background should not compete with the UI overlay'
        ],
        criteria: [
            { keyword: 'calm|serene|peaceful|tranquil|zen', label: 'Evokes calmness' },
            { keyword: 'background|backdrop|behind|subtle', label: 'Designed as background' },
            { keyword: 'gradient|soft|blur|gentle|smooth', label: 'Uses soft visual elements' },
            { keyword: 'premium|luxury|elegant|high.end|polish', label: 'Feels premium' },
            { keyword: 'nature|sky|water|cloud|mountain|abstract', label: 'Uses calming imagery' }
        ],
        sampleAnswer: 'An ultra-soft abstract background for mobile app screenshots, gentle gradient flowing from deep indigo at the top to soft lavender at the bottom, subtle watercolor cloud textures overlaid with ethereal light rays, tiny floating particles of golden light suggesting a meditative atmosphere, extremely clean and minimal with large smooth areas, premium and serene aesthetic, no sharp elements or busy details, 4K resolution, portrait orientation.'
    },
    {
        id: 6,
        category: 'image-prompting',
        title: 'Infographic Hero Visual',
        difficulty: 'hard',
        points: 30,
        description: 'Create a prompt for the main visual of a data-driven marketing infographic.',
        prompt: 'A fintech startup needs a central visual element for an infographic titled "The State of Digital Payments 2025". Write an AI image prompt that creates an impactful, data-themed hero visual that will anchor the infographic design.',
        hints: [
            'Infographic visuals should be bold and iconic',
            'Data visualization elements (graphs, nodes, networks)',
            'Fintech requires trust and innovation simultaneously',
            'The visual needs to work at various sizes',
            'Isometric or 3D elements work well for infographics'
        ],
        criteria: [
            { keyword: 'data|graph|chart|visual|node|network', label: 'Includes data visualization elements' },
            { keyword: 'fintech|payment|finance|money|digital|transaction', label: 'References fintech theme' },
            { keyword: '3d|isometric|dimension|render', label: 'Uses dimensional style' },
            { keyword: 'bold|impactful|striking|eye.catch|hero', label: 'Creates visual impact' },
            { keyword: 'modern|future|innovat|tech|digital', label: 'Conveys innovation' }
        ],
        sampleAnswer: 'A striking 3D isometric illustration of a futuristic digital payment ecosystem, featuring a central glowing smartphone surrounded by interconnected nodes representing banks, wallets, and merchants, flowing data streams in neon blue and green, holographic currency symbols floating in space, dark navy background with subtle grid lines, clean vector-like rendering with metallic and glass material effects, bold and impactful composition suitable for an infographic centerpiece, modern tech aesthetic, 4K.'
    },
    {
        id: 7,
        category: 'image-prompting',
        title: 'YouTube Thumbnail',
        difficulty: 'easy',
        points: 10,
        description: 'Write a prompt for a clickable YouTube video thumbnail.',
        prompt: 'A marketing educator is publishing a video titled "5 Facebook Ad Mistakes Costing You Money". Write an AI image prompt for a YouTube thumbnail that maximizes click-through rate.',
        hints: [
            'YouTube thumbnails need to be readable at small sizes',
            'High contrast and bold colors perform best',
            'Emotional facial expressions drive clicks',
            'Keep composition simple and uncluttered',
            'Consider the 16:9 aspect ratio'
        ],
        criteria: [
            { keyword: 'face|expression|emotion|shock|surprise|person', label: 'Includes human expression' },
            { keyword: 'bold|bright|contrast|vivid|saturate', label: 'Uses bold visuals' },
            { keyword: 'simple|clean|unclutter|minimal|clear', label: 'Keeps composition simple' },
            { keyword: 'thumbnail|youtube|16.9|small|click', label: 'Considers thumbnail format' },
            { keyword: 'money|dollar|cost|loss|waste|facebook|ad', label: 'Relates to the topic' }
        ],
        sampleAnswer: 'A bold YouTube thumbnail, professional marketer with exaggerated shocked facial expression holding their head, bright red and yellow background split diagonally, large dollar bills flying away to one side, Facebook logo subtly visible, extremely high contrast and saturation, clean uncluttered composition, 16:9 landscape format, large clear shapes readable at small sizes, dramatic studio lighting on the face, professional photography.'
    },
    {
        id: 8,
        category: 'image-prompting',
        title: 'Product Mockup Scene',
        difficulty: 'hard',
        points: 30,
        description: 'Create a detailed prompt for a multi-device product mockup scene.',
        prompt: 'An e-commerce platform called "ShopVerse" needs a hero mockup showing their platform across multiple devices (desktop, tablet, mobile) in a professional lifestyle setting. Write a detailed AI image prompt.',
        hints: [
            'Multi-device scenes need careful spatial arrangement',
            'Consistent lighting across all devices is crucial',
            'The lifestyle context should match the e-commerce sector',
            'Each screen should feel active and realistic',
            'Premium materials and textures elevate the scene'
        ],
        criteria: [
            { keyword: 'desktop|laptop|monitor|computer', label: 'Includes desktop device' },
            { keyword: 'tablet|ipad', label: 'Includes tablet' },
            { keyword: 'mobile|phone|smartphone', label: 'Includes mobile' },
            { keyword: 'light|shadow|reflect|glow', label: 'Describes lighting setup' },
            { keyword: 'angle|perspective|composition|arrange|layout', label: 'Specifies spatial arrangement' },
            { keyword: 'e.commerce|shop|store|product|retail', label: 'Relates to e-commerce' }
        ],
        sampleAnswer: 'A premium product mockup scene featuring three Apple devices arranged on a sleek marble desk: a MacBook Pro centered showing a colorful e-commerce storefront, iPad tilted at 75 degrees to the left displaying a product category page, iPhone upright in the foreground showing a mobile checkout screen, warm ambient lighting from the left with soft desk lamp glow, subtle reflections on the marble surface, minimalist desk accessories including a small plant and coffee cup, shallow depth of field, photorealistic 3D render, clean editorial photography style, 8K ultra-detailed.'
    },
    {
        id: 9,
        category: 'image-prompting',
        title: 'Brand Pattern Design',
        difficulty: 'hard',
        points: 30,
        description: 'Write a prompt for a seamless brand pattern to use across marketing materials.',
        prompt: 'A health and wellness subscription box brand called "VitalBox" needs a signature seamless pattern for packaging, social media backgrounds, and website sections. Write an AI prompt that generates this pattern.',
        hints: [
            'Seamless/tileable patterns need specific instructions',
            'Health/wellness has specific visual language (organic, natural, fresh)',
            'The pattern must work at different scales',
            'Balance between decorative and not overwhelming',
            'Consider how it looks when repeated'
        ],
        criteria: [
            { keyword: 'seamless|tile|tileable|repeat|pattern', label: 'Specifies seamless pattern' },
            { keyword: 'health|wellness|organic|natural|vitality', label: 'Matches brand theme' },
            { keyword: 'scale|size|small|versatile|adapt', label: 'Considers scalability' },
            { keyword: 'color|palette|tone|hue', label: 'Defines color direction' },
            { keyword: 'element|icon|shape|leaf|fruit|botanical', label: 'Describes pattern elements' }
        ],
        sampleAnswer: 'A seamless tileable pattern design for a wellness brand, featuring delicate hand-drawn botanical illustrations of herbs, leaves, citrus slices, and small berries, interspersed with subtle geometric dots and thin flowing lines, soft muted color palette of sage green, dusty rose, warm cream, and touches of golden yellow on a white background, evenly distributed elements with balanced negative space, organic and fresh feeling, works at both small and large scale, flat illustration style with thin linework, vector-clean edges.'
    },
    {
        id: 10,
        category: 'image-prompting',
        title: 'Before/After Comparison',
        difficulty: 'medium',
        points: 20,
        description: 'Create a prompt for a before/after visual demonstrating a product transformation.',
        prompt: 'A website builder tool called "PageCraft" wants to show a dramatic before/after visual — "ugly website" vs "beautiful website built with PageCraft". Write an AI image prompt for this split-screen comparison.',
        hints: [
            'The contrast between before and after should be dramatic',
            'Split-screen or side-by-side composition',
            'The "before" should be recognizably bad but not offensive',
            'The "after" should showcase modern web design',
            'Consistent framing makes the comparison fair'
        ],
        criteria: [
            { keyword: 'before|after|comparison|split|versus|side.by.side', label: 'Establishes comparison format' },
            { keyword: 'ugly|bad|old|outdated|cluttered|poor', label: 'Describes the before state' },
            { keyword: 'beautiful|modern|clean|polished|stunning', label: 'Describes the after state' },
            { keyword: 'website|page|web|design|layout|site', label: 'References web design' },
            { keyword: 'contrast|dramatic|transform|difference', label: 'Emphasizes the transformation' }
        ],
        sampleAnswer: 'A side-by-side split-screen comparison image of two website mockups on browser windows: LEFT side shows an outdated, cluttered website from the early 2000s with mismatched fonts, garish colors, crowded layout, and pixelated images, slightly desaturated and dull lighting; RIGHT side shows the same content reimagined as a stunning modern website with clean typography, harmonious color scheme, elegant spacing, and crisp imagery, bright and vibrant lighting, a clear dividing line in the center with subtle before/after labels, consistent browser chrome framing on both sides, flat design illustration style.'
    },

    // ===== CAMPAIGN STRATEGY (10) =====
    {
        id: 11,
        category: 'campaign-strategy',
        title: 'SaaS Launch Campaign',
        difficulty: 'medium',
        points: 20,
        description: 'Design a go-to-market campaign strategy for a new SaaS product launch.',
        prompt: 'You are the marketing lead for "CloudDesk", a new cloud-based virtual office platform for remote teams (priced at $12/user/month). Design a 30-day launch campaign strategy that builds awareness and drives sign-ups for a free trial.',
        hints: [
            'Consider pre-launch, launch day, and post-launch phases',
            'Include multiple channels (social, email, content, paid)',
            'Set specific goals and KPIs for each phase',
            'Think about the target audience and messaging',
            'Include a budget allocation strategy'
        ],
        criteria: [
            { keyword: 'phase|week|day|timeline|schedule', label: 'Defines campaign phases/timeline' },
            { keyword: 'social|email|content|paid|channel|seo|blog', label: 'Uses multiple channels' },
            { keyword: 'kpi|goal|metric|target|conversion|sign.up', label: 'Sets measurable goals' },
            { keyword: 'audience|persona|user|customer|segment', label: 'Identifies target audience' },
            { keyword: 'budget|spend|allocat|invest|cost', label: 'Addresses budget' },
            { keyword: 'message|position|value|proposition|story', label: 'Defines messaging' }
        ],
        sampleAnswer: 'Phase 1 (Days 1-10) Pre-Launch: Build anticipation with teaser content on LinkedIn and Twitter, launch a "founding members" waitlist landing page, publish 3 blog posts on remote work challenges, partner with 5 remote work influencers. Budget: 30% on paid social teasers. KPI: 2,000 waitlist signups. Phase 2 (Days 11-15) Launch Week: Product Hunt launch, press outreach to TechCrunch/The Verge, email blast to waitlist with exclusive 60-day free trial, live demo webinar, employee advocacy push. Budget: 40% on launch PR and ads. KPI: 500 free trial signups. Phase 3 (Days 16-30) Post-Launch: Retargeting campaigns for website visitors, case study with beta users, email nurture sequence (5 emails), blog SEO content for "virtual office" keywords. Budget: 30% on retargeting and content. KPI: 15% trial-to-paid conversion.'
    },
    {
        id: 12,
        category: 'campaign-strategy',
        title: 'Seasonal Sale Campaign',
        difficulty: 'easy',
        points: 10,
        description: 'Plan a Black Friday campaign for a digital product.',
        prompt: 'You manage marketing for an online learning platform that sells individual courses ($49-$199). Plan a Black Friday/Cyber Monday campaign strategy that maximizes revenue over the 5-day sale period.',
        hints: [
            'Black Friday campaigns start weeks before the actual day',
            'Urgency and scarcity are key psychological drivers',
            'Email segmentation is crucial for personalization',
            'Consider tiered discounts or bundles',
            'Plan for the entire BFCM week, not just one day'
        ],
        criteria: [
            { keyword: 'email|list|segment|subscriber', label: 'Uses email marketing' },
            { keyword: 'discount|offer|deal|percent|price|bundle', label: 'Defines the offer' },
            { keyword: 'urgency|scarcity|limit|countdown|expire', label: 'Creates urgency' },
            { keyword: 'before|pre|tease|warm|early', label: 'Plans pre-event buildup' },
            { keyword: 'social|ad|paid|facebook|instagram', label: 'Includes promotional channels' }
        ],
        sampleAnswer: 'Week Before: Tease "biggest sale ever" on social media and email, send VIP early access to top 10% spenders. Black Friday: Launch 50% off all courses with 48-hour countdown timer, segment emails by interest (tech, business, creative), run Facebook/Instagram carousel ads showcasing top 5 courses. Saturday-Sunday: Bundle deal — buy 2 get 1 free, social proof emails showing how many have purchased. Cyber Monday: Final 60% flash sale on select courses, last chance email series (morning, afternoon, final hour), retarget all cart abandoners with extra 10% code. Post-BFCM: Thank you email with content recommendations, upsell annual subscription to new buyers.'
    },
    {
        id: 13,
        category: 'campaign-strategy',
        title: 'Referral Program Design',
        difficulty: 'medium',
        points: 20,
        description: 'Design a viral referral campaign for a mobile app.',
        prompt: 'A budgeting app "PennyWise" has 50,000 active users but growth has stalled. Design a referral campaign strategy that incentivizes existing users to invite friends and creates a viral loop.',
        hints: [
            'Both the referrer and referred should benefit',
            'Make sharing frictionless (one-tap, unique links)',
            'Gamification elements boost participation',
            'Track referral metrics carefully',
            'Consider tiered rewards for super-referrers'
        ],
        criteria: [
            { keyword: 'reward|incentive|benefit|bonus|credit|free', label: 'Defines incentive structure' },
            { keyword: 'share|invite|refer|link|code', label: 'Explains sharing mechanism' },
            { keyword: 'both|two.sided|referrer|referred|friend', label: 'Benefits both parties' },
            { keyword: 'tier|level|milestone|badge|gamif', label: 'Includes gamification' },
            { keyword: 'track|metric|measure|kpi|rate', label: 'Plans measurement' }
        ],
        sampleAnswer: 'Referral Structure: Give $5 credit to both referrer and new user when the friend completes their first budget. Sharing: In-app share button generating unique deep links for WhatsApp, SMS, email, and social media with personalized message. Gamification: Tiered rewards — 3 referrals unlocks premium features for 1 month, 10 referrals earns "Money Mentor" badge and lifetime premium, leaderboard showing top referrers each month. Campaign Launch: In-app notification + email blast announcing the program, push notifications reminding users after key actions (completing a savings goal). Tracking: Referral dashboard with conversion funnel (invited → installed → activated), target 15% participation rate, 25% referred conversion rate. Viral Loop: New users see referral prompt after their first positive experience (hitting a savings milestone).'
    },
    {
        id: 14,
        category: 'campaign-strategy',
        title: 'Product Repositioning',
        difficulty: 'hard',
        points: 30,
        description: 'Create a strategy to reposition a struggling digital product.',
        prompt: 'A generic "to-do list" app has been losing users to competitors. Market research shows users love the simplicity but see it as "too basic". Rebrand and reposition it as a productivity tool for creative professionals. Outline the campaign strategy.',
        hints: [
            'Repositioning requires changing perception, not just features',
            'Identify what creative professionals specifically need',
            'Influencer partnerships in the creative space are powerful',
            'Content marketing can establish authority in the niche',
            'The transition should feel authentic, not forced'
        ],
        criteria: [
            { keyword: 'rebrand|reposition|rename|identity|brand', label: 'Addresses rebranding' },
            { keyword: 'creative|designer|artist|writer|creator', label: 'Targets creative professionals' },
            { keyword: 'influencer|partner|ambassador|collab', label: 'Leverages influencers' },
            { keyword: 'content|blog|story|case.study|testimonial', label: 'Uses content marketing' },
            { keyword: 'message|position|narrative|story|perception', label: 'Defines new positioning' },
            { keyword: 'feature|workflow|template|integrat', label: 'Aligns product with audience' }
        ],
        sampleAnswer: 'Phase 1 — Rebrand: Rename to "MakeFlow", new visual identity with creative-focused aesthetics (hand-drawn UI elements, customizable themes). New positioning: "The task manager that thinks like a creative." Add creative-specific templates (content calendar, design sprint, creative brief). Phase 2 — Influencer Seeding: Partner with 20 YouTubers/Instagrammers in design, writing, and music production niches. Provide free premium access and custom creator profiles. Phase 3 — Content Authority: Launch "The Creative Process" blog and podcast interviewing successful creatives about their workflows (featuring MakeFlow). Publish case studies showing before/after productivity gains. Phase 4 — Community: Create a Slack/Discord community for creative professionals, host monthly virtual creative jams. Phase 5 — Paid Campaign: Targeted ads on Behance, Dribbble, and creative YouTube channels. Messaging: "Stop managing tasks. Start managing your creative flow."'
    },
    {
        id: 15,
        category: 'campaign-strategy',
        title: 'Freemium to Premium Upsell',
        difficulty: 'medium',
        points: 20,
        description: 'Design an upsell campaign to convert free users to paid subscribers.',
        prompt: 'A cloud storage service has 200,000 free users (5GB plan) but only 3% are paid subscribers ($9.99/month for 100GB). Design a campaign to increase the conversion rate to 8% within 90 days.',
        hints: [
            'Understand why free users have not converted',
            'Show value of paid features at the right moment',
            'In-app triggers are more effective than generic emails',
            'Limited-time offers can accelerate decisions',
            'Social proof from existing paid users helps'
        ],
        criteria: [
            { keyword: 'trigger|moment|action|behavior|usage', label: 'Uses behavioral triggers' },
            { keyword: 'email|notification|in.app|message|push', label: 'Defines communication channels' },
            { keyword: 'offer|discount|trial|incentive|promo', label: 'Includes conversion offer' },
            { keyword: 'social.proof|testimonial|review|case', label: 'Leverages social proof' },
            { keyword: 'segment|cohort|group|tier|persona', label: 'Segments user base' },
            { keyword: 'metric|kpi|goal|conversion|percent|rate', label: 'Sets measurable targets' }
        ],
        sampleAnswer: 'Segment users into 3 groups: Light users (<1GB), Active users (1-3GB), Power users (>3GB, hitting limits). Power Users (highest intent): In-app banner showing storage usage at 80% with one-click upgrade, personalized email with "You are running out of space" subject line, offer 50% off first 3 months. Active Users: Email series showcasing premium features (file versioning, sharing), in-app prompt when they try premium features, 14-day free premium trial. Light Users: Re-engagement campaign showing what they can do with more storage, social proof showing "50,000 creators trust us with their files." Cross-Cutting: Annual plan discount (save 40%), referral bonus giving both parties 1 month free premium. KPIs: Track upgrade rate by segment weekly, target 20% of power users, 8% active users, 2% light users converting.'
    },
    {
        id: 16,
        category: 'campaign-strategy',
        title: 'Influencer Marketing Plan',
        difficulty: 'easy',
        points: 10,
        description: 'Develop a micro-influencer campaign strategy for a niche digital product.',
        prompt: 'A language learning app wants to grow in the Spanish-learning market using micro-influencers (10K-50K followers). With a $5,000 monthly budget, outline the influencer marketing campaign strategy.',
        hints: [
            'Micro-influencers have higher engagement rates than macro',
            'Authenticity matters more than reach in this space',
            'Define clear deliverables for each influencer',
            'Track unique referral codes/links per influencer',
            'Consider long-term partnerships over one-offs'
        ],
        criteria: [
            { keyword: 'micro.influencer|creator|10k|small|niche', label: 'Targets micro-influencers' },
            { keyword: 'deliverable|post|story|reel|video|content', label: 'Defines deliverables' },
            { keyword: 'code|link|track|utm|referral', label: 'Tracks performance' },
            { keyword: 'budget|cost|pay|compensat|rate', label: 'Addresses budget allocation' },
            { keyword: 'authentic|genuine|real|honest|organic', label: 'Values authenticity' }
        ],
        sampleAnswer: 'Target: 8-10 micro-influencers in language learning, travel, and Hispanic culture niches on Instagram and TikTok. Criteria: 10K-50K followers, >4% engagement rate, authentic bilingual content. Compensation: $300-500 per influencer per month + free premium access. Deliverables: 2 feed posts + 4 stories per month showing real app usage (learning streak, lesson completion). Each influencer gets unique promo code for 20% off annual plan. Budget: $4,000 for influencers, $1,000 for boosting top-performing content as paid ads. Track: Installs and conversions per code, engagement rate on sponsored posts. Goal: 500 new installs/month from influencer content. Long-term: Convert top 3 performers into 6-month brand ambassadors.'
    },
    {
        id: 17,
        category: 'campaign-strategy',
        title: 'Product Hunt Launch',
        difficulty: 'hard',
        points: 30,
        description: 'Plan a comprehensive Product Hunt launch strategy for maximum impact.',
        prompt: 'Your AI writing assistant tool is ready for its Product Hunt launch. You want to finish in the top 3 products of the day. Plan the complete launch strategy including pre-launch, launch day, and post-launch actions.',
        hints: [
            'Product Hunt success depends heavily on first-hour momentum',
            'Build a hunter community weeks before launch',
            'The maker comment and first comment strategy matters',
            'Coordinate timezone with PH daily reset (12:01 AM PT)',
            'Have assets ready: video demo, screenshots, tagline'
        ],
        criteria: [
            { keyword: 'pre.launch|before|advance|prepare|week', label: 'Plans pre-launch preparation' },
            { keyword: 'hunter|community|supporter|upvote|vote', label: 'Builds supporter base' },
            { keyword: 'launch.day|first.hour|morning|12|midnight', label: 'Has launch day timeline' },
            { keyword: 'comment|maker|first|story|engage', label: 'Plans engagement strategy' },
            { keyword: 'video|demo|screenshot|asset|tagline', label: 'Prepares launch assets' },
            { keyword: 'post.launch|after|follow.up|convert', label: 'Has post-launch plan' }
        ],
        sampleAnswer: 'Pre-Launch (4 weeks before): Build relationships on PH by engaging with other launches, recruit a top hunter to post (reach out to top 50 hunters), collect 200+ email supporters who commit to upvote, prepare assets — 90-second demo video, 5 GIF screenshots, killer tagline. Pre-Launch (1 week): Teaser posts on Twitter and LinkedIn, send reminder emails to supporters with exact launch date and instructions. Launch Day: Go live at 12:01 AM PT, maker posts first comment with the story behind the product (personal, authentic), email all supporters immediately, coordinate team to engage with every comment within 10 minutes, share on all social channels with direct link, reach out to tech journalists. Hours 1-6: Respond to every comment personally, share live updates on Twitter, run a "launch day" AMA on Twitter Spaces. Post-Launch: Offer PH-exclusive deal for 48 hours, email all upvoters a thank-you with special offer, write a "lessons learned" blog post, nurture PH traffic into email funnel.'
    },
    {
        id: 18,
        category: 'campaign-strategy',
        title: 'Crisis Communication Plan',
        difficulty: 'hard',
        points: 30,
        description: 'Develop a crisis communication strategy for a data breach scenario.',
        prompt: 'Your SaaS platform has discovered a data breach affecting 10,000 users (email addresses and hashed passwords exposed). Design the complete crisis communication and marketing recovery strategy.',
        hints: [
            'Speed and transparency are critical in crisis communication',
            'Legal requirements may dictate notification timelines',
            'Have a clear chain of command for approvals',
            'Multiple stakeholder groups need different messages',
            'Recovery campaign should rebuild trust over time'
        ],
        criteria: [
            { keyword: 'immediate|first|hour|fast|quick|rapid', label: 'Acts quickly' },
            { keyword: 'transparent|honest|open|clear|direct', label: 'Prioritizes transparency' },
            { keyword: 'email|notification|blog|social|press', label: 'Uses multiple channels' },
            { keyword: 'user|customer|stakeholder|investor|team', label: 'Addresses multiple audiences' },
            { keyword: 'recover|rebuild|trust|restore|long.term', label: 'Plans recovery' },
            { keyword: 'secure|fix|prevent|measure|action|step', label: 'Outlines corrective actions' }
        ],
        sampleAnswer: 'Hour 0-4: Internal alert, assemble crisis team (CEO, CTO, Legal, Marketing), assess scope, begin fix. Hour 4-12: Direct email to all 10,000 affected users — transparent explanation of what happened, what data was exposed, immediate steps taken, forced password reset. Simultaneously: Public blog post with full disclosure, social media statement linking to blog, notify relevant regulatory bodies. Stakeholders: Internal all-hands brief, investor email with impact assessment, customer support team briefed with FAQ script. Week 1: Daily updates on blog and email, free credit monitoring for affected users, publish detailed technical post-mortem, CEO video message showing accountability. Weeks 2-4: Announce enhanced security measures (2FA mandatory, third-party security audit), publish security audit results, launch "Security First" content series. Months 2-3: Trust recovery campaign — customer testimonials about improved security, partner with security certification body, transparent security dashboard on website.'
    },
    {
        id: 19,
        category: 'campaign-strategy',
        title: 'Cross-Promotion Partnership',
        difficulty: 'easy',
        points: 10,
        description: 'Create a co-marketing campaign strategy with a complementary brand.',
        prompt: 'A project management tool and a time-tracking tool want to run a co-marketing campaign together. Both are B2B SaaS with similar sized audiences (~30K email subscribers each). Design the partnership campaign.',
        hints: [
            'Both brands should benefit equally',
            'Find the shared value proposition for their combined audience',
            'Joint content is more valuable than cross-promotion alone',
            'Exclusive bundle offers drive conversions',
            'Measure the value each partner brings'
        ],
        criteria: [
            { keyword: 'joint|together|co.market|partner|collab', label: 'Emphasizes collaboration' },
            { keyword: 'bundle|package|deal|offer|discount', label: 'Creates a joint offer' },
            { keyword: 'content|webinar|blog|guide|ebook', label: 'Plans joint content' },
            { keyword: 'email|audience|subscriber|list|cross', label: 'Leverages both audiences' },
            { keyword: 'equal|mutual|both|shared|balanced', label: 'Ensures balanced partnership' }
        ],
        sampleAnswer: 'Joint Value Proposition: "Track your time where you manage your tasks — the complete productivity stack." Exclusive Bundle: 30% off when subscribing to both tools, plus native integration between the two. Joint Content: Co-authored ebook "The Complete Guide to Remote Team Productivity" (gated, shared leads), joint webinar "Time Management for Project Managers" promoted to both email lists, 3 co-branded blog posts published on both blogs. Cross-Promotion: Email swap — each brand sends a dedicated email to their list recommending the partner, co-branded landing page with both logos, social media takeover day on each other Instagram/LinkedIn. Measurement: Track leads generated per partner, bundle conversion rate, email sign-ups from partner audience. Split costs 50/50 for paid promotion of joint content.'
    },
    {
        id: 20,
        category: 'campaign-strategy',
        title: 'Community-Led Growth',
        difficulty: 'medium',
        points: 20,
        description: 'Design a community-driven growth strategy for a developer tool.',
        prompt: 'A new open-source API testing tool wants to build a community-led growth engine. They have 500 GitHub stars and 200 Discord members. Design a 6-month strategy to reach 5,000 stars and 2,000 Discord members.',
        hints: [
            'Open-source growth relies on developer advocacy',
            'Content that solves real problems attracts developers',
            'Contributor programs create loyal advocates',
            'Developer events and hackathons drive awareness',
            'Documentation quality directly impacts adoption'
        ],
        criteria: [
            { keyword: 'community|discord|slack|forum|member', label: 'Builds community platform' },
            { keyword: 'content|tutorial|blog|video|doc', label: 'Creates developer content' },
            { keyword: 'contributor|open.source|pr|github', label: 'Encourages contributions' },
            { keyword: 'event|hackathon|meetup|conference|talk', label: 'Plans developer events' },
            { keyword: 'advocate|champion|ambassador|evangel', label: 'Builds advocacy program' },
            { keyword: 'milestone|goal|month|phase|timeline', label: 'Sets growth milestones' }
        ],
        sampleAnswer: 'Months 1-2 (Foundation): Polish documentation with interactive examples, launch "Good First Issue" program for new contributors, create weekly Discord office hours with maintainers, publish comparison guides (us vs Postman vs Insomnia). Goal: 1,500 stars, 500 Discord. Months 3-4 (Content Engine): Launch developer blog with weekly tutorials, YouTube series "API Testing in 5 Minutes", submit talks to 5 developer conferences, start contributor spotlight blog series. Goal: 3,000 stars, 1,000 Discord. Months 5-6 (Scale): Host first online hackathon with prizes, launch Developer Ambassador program (free swag + early access for top 20 advocates), sponsor 3 developer podcasts, create integration plugins for popular frameworks. Goal: 5,000 stars, 2,000 Discord. Ongoing: Monthly community newsletter, contributor recognition program, transparent public roadmap where community votes on features.'
    },

    // ===== CONTENT PLANNING (10) =====
    {
        id: 21,
        category: 'content-planning',
        title: 'Monthly Content Calendar',
        difficulty: 'easy',
        points: 10,
        description: 'Create a one-month content calendar for a B2B SaaS brand.',
        prompt: 'Plan a complete content calendar for January for a CRM software company. Include blog posts, social media content, email newsletters, and any seasonal hooks. The goal is to generate leads for a free trial.',
        hints: [
            'Balance educational, promotional, and engaging content',
            'New Year themes are perfect for January (goals, planning)',
            'Consistency matters — set a realistic publishing cadence',
            'Each piece should have a purpose in the funnel',
            'Include content formats (blog, video, carousel, etc.)'
        ],
        criteria: [
            { keyword: 'blog|article|post|write', label: 'Plans blog content' },
            { keyword: 'social|linkedin|twitter|instagram', label: 'Plans social content' },
            { keyword: 'email|newsletter|drip|sequence', label: 'Plans email content' },
            { keyword: 'january|new.year|q1|goal|resolution', label: 'Uses seasonal themes' },
            { keyword: 'lead|trial|funnel|convert|cta', label: 'Ties to lead generation' }
        ],
        sampleAnswer: 'Week 1 (New Year): Blog — "5 CRM Goals Every Sales Team Should Set in 2025", Social — carousel "2024 vs 2025 sales trends," daily LinkedIn tips on goal setting, Email — "Start Q1 strong" newsletter with free CRM audit template. Week 2: Blog — "How to Clean Your CRM Data for a Fresh Start", Social — before/after CRM cleanup reels, poll "What is your biggest CRM frustration?", Email — case study of customer who improved pipeline by 40%. Week 3: Blog — "Complete Guide to Sales Pipeline Management", Social — infographic on pipeline stages, live Q&A on LinkedIn, Email — "Mid-month check-in" with free pipeline template download. Week 4: Blog — "10 CRM Automations That Save 5 Hours/Week", Social — video demo of top 3 automations, customer testimonial post, Email — "Last chance" free trial CTA with end-of-month urgency. Cadence: 4 blogs, 20 social posts (5/week), 4 emails, 1 live event.'
    },
    {
        id: 22,
        category: 'content-planning',
        title: 'Pillar Content Strategy',
        difficulty: 'medium',
        points: 20,
        description: 'Design a pillar-cluster content strategy for SEO dominance.',
        prompt: 'An email marketing platform wants to rank #1 for "email marketing" and related terms. Design a pillar-cluster content strategy with one comprehensive pillar page and supporting cluster articles.',
        hints: [
            'Pillar pages are comprehensive (3,000-5,000+ words)',
            'Cluster content targets long-tail keywords',
            'Internal linking structure is crucial for SEO',
            'Each cluster should link to pillar and vice versa',
            'Cover every aspect of the topic thoroughly'
        ],
        criteria: [
            { keyword: 'pillar|comprehensive|main|hub|guide', label: 'Defines pillar page' },
            { keyword: 'cluster|supporting|long.tail|sub.topic', label: 'Plans cluster content' },
            { keyword: 'link|internal|connect|structure|seo', label: 'Addresses linking strategy' },
            { keyword: 'keyword|search|rank|serp|traffic', label: 'Targets specific keywords' },
            { keyword: 'topic|section|cover|aspect|angle', label: 'Covers topic breadth' }
        ],
        sampleAnswer: 'Pillar Page: "The Complete Guide to Email Marketing in 2025" (5,000 words) covering definition, strategy, tools, design, deliverability, analytics, automation, and compliance. Target: "email marketing guide." 10 Cluster Articles: 1) "Email Marketing Best Practices" (1,500w), 2) "How to Build an Email List from Scratch" (2,000w), 3) "Email Subject Line Guide: 100+ Examples" (2,500w), 4) "Email Marketing Automation Workflows" (2,000w), 5) "Email Deliverability: Complete Guide" (1,800w), 6) "Email Marketing Metrics & KPIs" (1,500w), 7) "Email Marketing vs Social Media Marketing" (1,200w), 8) "Email Segmentation Strategies" (1,800w), 9) "GDPR & Email Marketing Compliance" (1,500w), 10) "Email Marketing Templates & Examples" (2,000w). Linking: Each cluster links to pillar page in intro and CTA, pillar links to every cluster in relevant sections. Update pillar quarterly with fresh data.'
    },
    {
        id: 23,
        category: 'content-planning',
        title: 'Video Content Series',
        difficulty: 'medium',
        points: 20,
        description: 'Plan a YouTube video content series for a digital product brand.',
        prompt: 'A design tool (like Canva) wants to launch a YouTube channel. Plan the first 10 videos, content strategy, and publishing schedule that will build an audience of design beginners.',
        hints: [
            'First videos should address the most common beginner questions',
            'Series/playlists encourage binge-watching',
            'Search-driven titles help with discovery',
            'Mix tutorial and inspirational content',
            'Consistent publishing schedule builds audience habits'
        ],
        criteria: [
            { keyword: 'tutorial|how.to|guide|learn|teach|step', label: 'Plans educational content' },
            { keyword: 'series|playlist|episode|sequence|order', label: 'Creates series structure' },
            { keyword: 'schedule|weekly|cadence|publish|frequen', label: 'Sets publishing cadence' },
            { keyword: 'beginner|start|basic|easy|intro|first', label: 'Targets beginners' },
            { keyword: 'search|seo|title|discover|keyword', label: 'Optimizes for discovery' }
        ],
        sampleAnswer: 'Channel Strategy: "Design Made Simple" — weekly tutorials every Tuesday, targeting complete beginners. First 10 Videos: 1) "Design 101: The 5 Principles Every Beginner Needs" (intro/hook video), 2) "How to Choose Fonts That Actually Work Together", 3) "Color Theory in 10 Minutes — A Beginner Guide", 4) "Create a Professional Logo in 15 Minutes", 5) "Instagram Post Design — Step by Step Tutorial", 6) "5 Design Mistakes Beginners Always Make (And How to Fix Them)", 7) "How to Remove Backgrounds From Any Image", 8) "Create a Stunning Presentation in 20 Minutes", 9) "YouTube Thumbnail Design — Get More Clicks", 10) "Business Card Design From Scratch". Format: 8-15 minutes each, face-to-camera intro then screen recording tutorial, chapters for each step. Playlists: "Design Basics" (1-3), "Social Media Design" (5,9), "Business Design" (4,8,10). Promotion: Share clips on Instagram Reels and TikTok to drive YouTube subscribers.'
    },
    {
        id: 24,
        category: 'content-planning',
        title: 'Newsletter Growth Strategy',
        difficulty: 'easy',
        points: 10,
        description: 'Design a content strategy to grow an email newsletter from 0 to 5,000 subscribers.',
        prompt: 'You are launching a weekly newsletter about digital marketing trends called "The Marketing Minute". Plan the content strategy, growth tactics, and first 4 edition themes to go from 0 to 5,000 subscribers in 3 months.',
        hints: [
            'Newsletter growth requires both content quality and distribution',
            'Lead magnets drive email sign-ups',
            'Cross-promotion with other newsletters works',
            'Social proof accelerates growth (subscriber count, testimonials)',
            'The first editions set expectations for subscribers'
        ],
        criteria: [
            { keyword: 'lead.magnet|free|download|resource|ebook', label: 'Uses lead magnets' },
            { keyword: 'growth|tactic|strategy|promote|distribut', label: 'Plans growth tactics' },
            { keyword: 'edition|issue|theme|topic|week', label: 'Outlines newsletter editions' },
            { keyword: 'cross|partner|referral|collab|share', label: 'Leverages partnerships' },
            { keyword: 'subscriber|signup|list|email|opt.in', label: 'Focuses on subscriber growth' }
        ],
        sampleAnswer: 'Newsletter Format: Weekly 5-minute read every Wednesday — 3 trends, 2 tools, 1 hot take. Growth Tactics: Lead magnet — "2025 Digital Marketing Toolkit" (free PDF with 50 tools), cross-promote with 5 complementary newsletters, referral program (recommend 3 friends → get exclusive trend report), Twitter thread strategy (weekly threads linking to newsletter), LinkedIn articles repurposing top sections. First 4 Editions: #1 "AI in Marketing: What Actually Works in 2025", #2 "The Death of Third-Party Cookies: Your Action Plan", #3 "TikTok vs Reels vs Shorts: Where to Invest", #4 "Email Marketing is Not Dead: 5 Proof Points." Landing Page: Social proof (even early — "Join 100+ marketers"), clear value prop, sample edition preview. Milestone Goals: Month 1: 1,000 subs (friends, social, lead magnet), Month 2: 2,500 subs (cross-promos, referrals), Month 3: 5,000 subs (viral editions, paid promotion of best performing lead magnet).'
    },
    {
        id: 25,
        category: 'content-planning',
        title: 'Podcast Launch Plan',
        difficulty: 'hard',
        points: 30,
        description: 'Plan the complete launch strategy for a branded podcast.',
        prompt: 'A B2B cybersecurity company wants to launch a podcast called "Breach Brief" to build thought leadership. Plan the complete content strategy including format, first 8 episode topics, guest strategy, and promotion plan.',
        hints: [
            'B2B podcasts should balance education and entertainment',
            'Consistent format creates listener expectations',
            'Guest selection is a growth strategy (guests share episodes)',
            'Launch with multiple episodes so new listeners can binge',
            'Repurpose podcast content across multiple channels'
        ],
        criteria: [
            { keyword: 'format|structure|length|segment|section', label: 'Defines podcast format' },
            { keyword: 'episode|topic|title|season', label: 'Plans specific episodes' },
            { keyword: 'guest|interview|expert|speaker', label: 'Has guest strategy' },
            { keyword: 'launch|first|initial|premiere|debut', label: 'Plans launch approach' },
            { keyword: 'promot|distribut|market|share|social', label: 'Plans promotion' },
            { keyword: 'repurpose|clip|blog|social|video', label: 'Repurposes content' }
        ],
        sampleAnswer: 'Format: Bi-weekly, 30-40 minutes. Structure: 5-min news roundup of recent breaches, 20-min deep-dive interview with guest, 5-min "Quick Wins" segment with actionable security tips. Launch: Drop first 3 episodes simultaneously for binge-listening. First 8 Episodes: 1) "Why Every Company Will Be Breached" (CISO guest), 2) "Social Engineering: The Human Firewall" (pen-tester), 3) "Zero Trust Architecture Explained" (architect), 4) "Ransomware: To Pay or Not to Pay" (incident responder), 5) "Cloud Security Mistakes" (cloud engineer), 6) "The CISO Life: Balancing Risk and Innovation" (Fortune 500 CISO), 7) "AI in Cybersecurity: Hype vs Reality" (ML researcher), 8) "Building a Security Culture" (HR + Security). Guest Strategy: Target 50% customers, 30% industry experts, 20% adjacent fields. Promotion: Audiogram clips for LinkedIn (30-60 sec highlights), blog post summaries for SEO, email to customer base, guest cross-promotion to their networks. Repurpose: Each episode → 1 blog post, 3 social clips, 5 quote graphics, 1 newsletter section.'
    },
    {
        id: 26,
        category: 'content-planning',
        title: 'UGC Content Strategy',
        difficulty: 'medium',
        points: 20,
        description: 'Build a user-generated content strategy for a consumer brand.',
        prompt: 'A sustainable fashion brand wants to leverage user-generated content (UGC) as the foundation of their social media strategy. Design a UGC content plan that collects, curates, and features customer content across platforms.',
        hints: [
            'UGC requires clear incentives for participation',
            'Brand hashtags help organize and discover UGC',
            'Rights management and permissions are essential',
            'Mix UGC with branded content for quality balance',
            'Feature real customers to build community'
        ],
        criteria: [
            { keyword: 'hashtag|tag|mention|branded', label: 'Creates branded hashtag' },
            { keyword: 'incentive|reward|feature|spotlight|contest', label: 'Incentivizes participation' },
            { keyword: 'permission|rights|consent|legal|approve', label: 'Addresses content rights' },
            { keyword: 'curate|select|quality|moderate|review', label: 'Plans curation process' },
            { keyword: 'community|customer|advocate|real|authentic', label: 'Builds community' }
        ],
        sampleAnswer: 'Branded Hashtag: #WearConscious — all customers encouraged to share outfit photos with the tag. Incentive Structure: Monthly "Style Star" contest — best UGC photo wins $100 store credit and feature on main Instagram, all featured posts get a 15% discount code DM. Collection: Monitor hashtag daily, DM users requesting permission to repost (use standard template), save approved content to content library. Content Mix: 60% UGC, 25% branded product shots, 15% educational sustainability content. Curation: Select UGC that shows diverse body types, styles, and settings. Quality filter: good lighting, product visible, authentic styling. Platform Strategy: Instagram — UGC in feed and stories, weekly "Customer Closet" story series. TikTok — share customer styling videos, duet with best ones. Website — UGC gallery on product pages. Community Building: Create VIP customer group, send early access to new collections, invite to virtual styling events.'
    },
    {
        id: 27,
        category: 'content-planning',
        title: 'Content Repurposing Framework',
        difficulty: 'easy',
        points: 10,
        description: 'Create a system to repurpose one piece of content into 10+ assets.',
        prompt: 'You have a 2,000-word blog post about "Remote Work Productivity Tips". Design a repurposing framework that turns this single blog post into at least 10 different content pieces across multiple platforms.',
        hints: [
            'Think about different formats: text, visual, audio, video',
            'Each platform has its own native format preferences',
            'Not every repurposed piece needs all the original info',
            'Quotes, stats, and tips can stand alone',
            'Sequence the repurposing to maximize shelf life'
        ],
        criteria: [
            { keyword: 'video|reel|tiktok|youtube|short', label: 'Creates video content' },
            { keyword: 'infographic|carousel|visual|image|graphic', label: 'Creates visual content' },
            { keyword: 'social|linkedin|twitter|instagram|thread', label: 'Plans social posts' },
            { keyword: 'email|newsletter', label: 'Includes email content' },
            { keyword: '10|multiple|piece|asset|format|platform', label: 'Creates 10+ pieces' }
        ],
        sampleAnswer: 'From one blog post: 1) LinkedIn article (adapted version with personal angle), 2) Twitter/X thread — 10 tips as a thread, 3) Instagram carousel — "7 Remote Work Tips" with designed slides, 4) Infographic — visual summary of all tips, 5) 60-second TikTok/Reel — top 3 tips spoken to camera, 6) YouTube Short — animated tip of the day, 7) Email newsletter — curated version with subscriber-only bonus tip, 8) Pinterest pin — infographic optimized for vertical format, 9) LinkedIn poll — "Which tip do you use most?", 10) Quote graphics (x3) — pull best quotes for Instagram stories, 11) Podcast segment — discuss the tips for 10 minutes, 12) SlideShare presentation — tips as a slide deck. Timeline: Week 1 — blog + LinkedIn + Twitter thread, Week 2 — carousel + infographic + email, Week 3 — video content + Pinterest, Week 4 — poll + quote graphics + podcast mention.'
    },
    {
        id: 28,
        category: 'content-planning',
        title: 'Content Audit & Gap Analysis',
        difficulty: 'hard',
        points: 30,
        description: 'Design a content audit framework to identify content gaps and opportunities.',
        prompt: 'A B2B marketing automation platform has 150 blog posts published over 3 years but traffic has plateaued. Design a comprehensive content audit framework that identifies what to keep, update, consolidate, or delete, and reveals content gaps.',
        hints: [
            'Use data (traffic, rankings, conversions) to evaluate content',
            'Group content by topic clusters to find gaps',
            'Some content cannibalizes other content in search',
            'Outdated content can hurt domain authority',
            'The audit should lead to a clear action plan'
        ],
        criteria: [
            { keyword: 'metric|traffic|ranking|performance|data|analytic', label: 'Uses data-driven evaluation' },
            { keyword: 'keep|update|consolidat|delete|archive|action', label: 'Defines action categories' },
            { keyword: 'gap|missing|opportunity|compete|keyword', label: 'Identifies content gaps' },
            { keyword: 'cluster|topic|group|categor|theme', label: 'Groups by topic' },
            { keyword: 'audit|framework|process|step|system', label: 'Creates systematic process' },
            { keyword: 'cannibal|duplicate|overlap|similar|merge', label: 'Addresses content overlap' }
        ],
        sampleAnswer: 'Step 1 — Data Collection: Export all 150 URLs with metrics from Google Analytics (sessions, bounce rate, time on page, conversions) and Google Search Console (impressions, clicks, average position, keywords). Step 2 — Scoring: Rate each post on Traffic (high/medium/low), SEO Position (page 1/2/3+), Conversion Rate, and Content Freshness (current/outdated/evergreen). Step 3 — Action Categories: KEEP (high traffic + high conversion), UPDATE (good rankings but outdated content or declining traffic), CONSOLIDATE (multiple thin posts on same topic — merge into one comprehensive guide), DELETE/REDIRECT (zero traffic for 12+ months, irrelevant topics, thin content). Step 4 — Topic Clustering: Map all content into topic clusters, identify clusters with fewer than 3 pieces (gap), identify clusters with overlapping content (cannibalization). Step 5 — Competitive Gap Analysis: Compare topic coverage against top 3 competitors, list keywords they rank for that we do not. Step 6 — Action Plan: Priority queue — update top 20 posts with most potential first, merge 15 thin posts into 5 comprehensive guides, redirect and delete 30 low-value posts, create 10 new posts to fill identified gaps.'
    },
    {
        id: 29,
        category: 'content-planning',
        title: 'Thought Leadership Program',
        difficulty: 'hard',
        points: 30,
        description: 'Design a thought leadership content program for a CEO.',
        prompt: 'The CEO of an AI startup wants to become a recognized thought leader in the "AI for healthcare" space within 12 months. Design a complete content program including platforms, content types, frequency, and ghostwriting workflow.',
        hints: [
            'Thought leadership is about unique perspectives, not generic advice',
            'LinkedIn is the #1 platform for B2B thought leadership',
            'Speaking engagements amplify written content',
            'Ghostwriting workflow needs CEO input without taking too much time',
            'Consistency over perfection in publishing'
        ],
        criteria: [
            { keyword: 'linkedin|twitter|platform|social|medium', label: 'Selects platforms' },
            { keyword: 'unique|perspective|opinion|original|insight', label: 'Emphasizes unique voice' },
            { keyword: 'frequency|weekly|monthly|schedule|cadence', label: 'Sets publishing frequency' },
            { keyword: 'speak|conference|event|panel|keynote', label: 'Includes speaking' },
            { keyword: 'ghost|workflow|process|draft|review|edit', label: 'Defines creation workflow' },
            { keyword: 'measure|result|follower|engage|reach', label: 'Plans measurement' }
        ],
        sampleAnswer: 'Platforms: LinkedIn (primary), Twitter/X (secondary), Medium (long-form archive), industry podcast guest appearances. Content Cadence: LinkedIn — 3 posts/week (Mon insight, Wed story, Fri opinion), 1 long-form article/month. Twitter — daily presence, 2 threads/week. Medium — monthly deep-dive article. Speaking — 1 conference/quarter, 1 podcast guest/month. Content Pillars: 1) AI ethics in patient care, 2) Practical AI implementation in hospitals, 3) Future of personalized medicine, 4) CEO journey building in healthtech. Ghostwriting Workflow: Monthly 30-min CEO brain dump interview → writer creates monthly content batch → CEO reviews and edits (30 min) → approved content scheduled. Unique Angle: Share real product development stories, patient outcome data (anonymized), contrarian takes on AI hype. Measurement: Track LinkedIn followers (goal: 20K), post engagement rate (>3%), speaking invitation inflow, inbound press inquiries, website referral traffic from LinkedIn.'
    },
    {
        id: 30,
        category: 'content-planning',
        title: 'Interactive Content Strategy',
        difficulty: 'medium',
        points: 20,
        description: 'Plan a strategy using interactive content to boost engagement and capture leads.',
        prompt: 'A marketing analytics tool wants to use interactive content (quizzes, calculators, assessments) to generate leads. Design a strategy that includes 3 interactive content pieces, promotion plan, and lead nurture sequence.',
        hints: [
            'Interactive content has 2x engagement vs static content',
            'Results pages are the best place for soft CTAs',
            'Quizzes and assessments provide natural segmentation',
            'The value of results should justify the email gate',
            'Promote interactive content like a product, not a blog post'
        ],
        criteria: [
            { keyword: 'quiz|calculator|assessment|interactive|tool', label: 'Creates interactive content' },
            { keyword: 'lead|capture|gate|email|form', label: 'Captures leads' },
            { keyword: 'result|score|recommendation|personal', label: 'Delivers personalized results' },
            { keyword: 'promote|share|distribut|ad|social', label: 'Plans promotion' },
            { keyword: 'nurture|sequence|follow.up|email|drip', label: 'Plans lead nurture' }
        ],
        sampleAnswer: 'Interactive Piece 1: "Marketing Analytics Maturity Assessment" — 12-question quiz scoring the user on data collection, analysis, reporting, and optimization. Results: Beginner/Intermediate/Advanced with personalized recommendations. Gate: Email required for detailed PDF report. Interactive Piece 2: "Marketing ROI Calculator" — input ad spend, conversion rates, customer value → outputs ROI, CAC, and benchmarks against industry averages. Gate: Email for saved results and monthly benchmark updates. Interactive Piece 3: "Which Marketing Metrics Should You Track?" — decision-tree style quiz based on business type, goals, and team size → outputs a custom dashboard template. Gate: Email for the template. Promotion: Paid social ads (LinkedIn for B2B), embed in relevant blog posts, partner newsletters, Product Hunt for the calculator. Lead Nurture: Segment by assessment results — Beginners get educational 5-email series on analytics basics, Intermediate get case studies and advanced tips, Advanced get demo request and ROI-focused content. Follow-up at day 1 (results recap), day 3 (related resource), day 7 (case study), day 14 (product feature highlight), day 21 (demo offer).'
    },

    // ===== FACEBOOK CAMPAIGNS (10) =====
    {
        id: 31,
        category: 'facebook-campaigns',
        title: 'Campaign Objective Selection',
        difficulty: 'easy',
        points: 10,
        description: 'Choose the right Facebook campaign objective for a given business goal.',
        prompt: 'An online course creator has just launched a new $99 course on "Digital Photography for Beginners" and wants to run Facebook ads. They want to maximize course purchases directly from the ad. Which campaign objective should they use and why? Explain the full campaign structure (Campaign > Ad Set > Ad).',
        hints: [
            'Facebook has 6 main campaign objectives in the new Outcome-Driven Ads',
            'The objective tells Facebook algorithm what to optimize for',
            'Conversion campaigns need the Facebook Pixel properly installed',
            'Campaign structure follows a hierarchy',
            'Consider the customer journey stage'
        ],
        criteria: [
            { keyword: 'conversion|sales|purchase', label: 'Selects correct objective (Sales/Conversions)' },
            { keyword: 'pixel|tracking|event', label: 'Mentions pixel/tracking' },
            { keyword: 'campaign|ad.set|ad|structure|level', label: 'Explains campaign structure' },
            { keyword: 'optimize|algorithm|delivery', label: 'Understands optimization' },
            { keyword: 'audience|target|who', label: 'Addresses targeting' }
        ],
        sampleAnswer: 'Use the Sales (Conversions) objective, optimizing for the Purchase event. This tells Facebook algorithm to show ads to people most likely to complete a purchase, not just click. Campaign Structure: Campaign Level — Sales objective, set campaign budget optimization (CBO) at $50/day. Ad Set Level — Target photography enthusiasts, ages 25-55, interests in photography, DSLR cameras, Adobe Lightroom; use Advantage+ audience for broader reach; place the Facebook Pixel "Purchase" event as the conversion event; set attribution window to 7-day click, 1-day view. Ad Level — Create 3-4 ad variations (video testimonial, carousel showing course modules, single image with social proof). Pixel Setup: Must have Facebook Pixel installed on the course platform with Purchase event firing on the thank-you page, passing the $99 value.'
    },
    {
        id: 32,
        category: 'facebook-campaigns',
        title: 'Audience Targeting Strategy',
        difficulty: 'medium',
        points: 20,
        description: 'Build a layered Facebook audience targeting strategy.',
        prompt: 'A meal prep delivery service (healthy, pre-made meals, $12/meal) needs a Facebook targeting strategy. Build three audience layers: cold (prospecting), warm (retargeting), and hot (conversion). Define each audience with specific targeting parameters.',
        hints: [
            'Cold audiences are people who have never heard of you',
            'Warm audiences have interacted but not purchased',
            'Hot audiences have shown purchase intent',
            'Lookalike audiences are powerful for cold prospecting',
            'Exclusions are as important as inclusions'
        ],
        criteria: [
            { keyword: 'cold|prospect|top.funnel|awareness|new', label: 'Defines cold audience' },
            { keyword: 'warm|retarget|middle|engaged|visited', label: 'Defines warm audience' },
            { keyword: 'hot|convert|bottom|cart|intent|purchase', label: 'Defines hot audience' },
            { keyword: 'lookalike|similar|lal|percent', label: 'Uses lookalike audiences' },
            { keyword: 'exclude|exclusion|remove|suppress', label: 'Sets up exclusions' },
            { keyword: 'interest|behavior|demographic|age', label: 'Specifies targeting details' }
        ],
        sampleAnswer: 'COLD (Prospecting): 1) Lookalike audience — 1% lookalike of existing customers (best), 2) Interest-based — ages 25-45, interests in meal prep, healthy eating, fitness, gym membership, weight loss, keto/paleo diets. Behaviors: online food shoppers. Exclude all warm/hot audiences + existing customers. Budget: 60% of total. WARM (Retargeting): 1) Website visitors last 30 days who did not purchase, 2) Instagram/Facebook engagers last 60 days, 3) Video viewers (50%+ of ad video), 4) Add-to-cart abandoners last 14 days. Exclude existing customers. Budget: 25% of total. HOT (Conversion): 1) Add-to-cart last 3 days, 2) Checkout initiators who did not complete, 3) Past customers for repeat orders (last purchased 2+ weeks ago), 4) Email subscribers who clicked but did not purchase. Budget: 15% of total. Key Exclusions at every level: Exclude current active subscribers from acquisition campaigns, exclude purchasers from last 7 days from all campaigns.'
    },
    {
        id: 33,
        category: 'facebook-campaigns',
        title: 'Ad Creative Strategy',
        difficulty: 'easy',
        points: 10,
        description: 'Design Facebook ad creatives that drive conversions.',
        prompt: 'Write 3 different Facebook ad variations (primary text, headline, description, and creative concept) for a $29/month budgeting app targeting young professionals aged 22-30 who are struggling with saving money.',
        hints: [
            'Each ad should test a different angle/hook',
            'Primary text can be long or short — test both',
            'Headlines should be benefit-driven, not feature-driven',
            'Video ads typically outperform static on Facebook',
            'Social proof and numbers build credibility'
        ],
        criteria: [
            { keyword: 'primary.text|copy|body|text', label: 'Writes ad copy' },
            { keyword: 'headline|hook|title', label: 'Creates headlines' },
            { keyword: 'video|image|carousel|creative|visual', label: 'Describes creative concept' },
            { keyword: 'three|3|variation|version|different', label: 'Provides 3 variations' },
            { keyword: 'save|money|budget|finance|spend', label: 'Addresses the pain point' }
        ],
        sampleAnswer: 'Ad 1 — Pain Point Angle: Primary Text: "I used to check my bank account and just... hope for the best. Then I found an app that actually showed me where my money was going. In my first month, I saved $340 without changing my lifestyle." Headline: "Stop Guessing. Start Saving." Description: "Join 50K+ young professionals budgeting smarter." Creative: 15-sec video showing notification pops of savings milestones. Ad 2 — Social Proof Angle: Primary Text: "50,000 millennials are using this app to save an average of $4,200/year. The setup takes 3 minutes." Headline: "The Budgeting App Your Friends Are Using." Description: "$29/mo. Cancel anytime." Creative: Carousel — each card shows a real user testimonial with their savings amount. Ad 3 — Fear-of-Missing-Out: Primary Text: "Your rent is due in 5 days. Your friend just invited you to a $200 dinner. Your car insurance payment hit. Sound familiar? There is a way to handle it all — without the anxiety." Headline: "Financial Anxiety? There is an App for That." Description: "Free 14-day trial. No credit card required." Creative: UGC-style selfie video of someone showing their budgeting dashboard on phone.'
    },
    {
        id: 34,
        category: 'facebook-campaigns',
        title: 'Budget & Bidding Strategy',
        difficulty: 'medium',
        points: 20,
        description: 'Develop an optimal budget allocation and bidding strategy.',
        prompt: 'You have a $3,000/month Facebook ad budget for an e-commerce store selling premium headphones ($149-$299). Design the complete budget allocation across campaign types, bidding strategy, and scaling plan.',
        hints: [
            'Split budget between prospecting and retargeting',
            'CBO (Campaign Budget Optimization) vs Ad Set budgets',
            'Different bid strategies suit different goals',
            'Scaling should be gradual (20% increments)',
            'Allow for testing budget separate from scaling budget'
        ],
        criteria: [
            { keyword: 'budget|allocat|spend|dollar|percent', label: 'Allocates budget clearly' },
            { keyword: 'bid|cost.cap|roas|lowest.cost|target', label: 'Defines bidding strategy' },
            { keyword: 'scale|increase|grow|expand|ramp', label: 'Plans scaling approach' },
            { keyword: 'test|experiment|variation|creative', label: 'Allocates testing budget' },
            { keyword: 'retarget|prospect|funnel|cold|warm', label: 'Splits by funnel stage' }
        ],
        sampleAnswer: 'Monthly Budget Split: Prospecting (Cold): $1,500 (50%), Retargeting (Warm/Hot): $900 (30%), Creative Testing: $600 (20%). Prospecting ($1,500): CBO enabled, 3 ad sets (Lookalike 1% of purchasers, Interest-based audiophiles, Broad targeting with Advantage+). Bid Strategy: Lowest Cost for first 2 weeks, then switch to Cost Cap once you have baseline CPA data (target CPA $30). Retargeting ($900): Ad Set budgets (not CBO), $450 for website visitors 7-30 days, $300 for add-to-cart abandoners 1-7 days, $150 for past purchasers upsell. Bid Strategy: Lowest Cost (warm audiences convert well). Testing ($600): Test 4 new creatives per week, each with $150 spend over 3-4 days. Kill underperformers, graduate winners to prospecting campaigns. Scaling Plan: When a campaign achieves consistent ROAS >3x for 5+ days, increase budget by 20% every 3 days. If performance drops, revert and let it stabilize. Monthly Review: Reallocate budget from lowest ROAS campaigns to highest.'
    },
    {
        id: 35,
        category: 'facebook-campaigns',
        title: 'Retargeting Funnel',
        difficulty: 'medium',
        points: 20,
        description: 'Build a complete Facebook retargeting funnel with specific ad messaging.',
        prompt: 'An online furniture store gets 100,000 monthly website visitors but only a 1.2% conversion rate. Build a multi-stage retargeting funnel on Facebook with specific ad messaging for each stage to improve conversions.',
        hints: [
            'Different retargeting windows indicate different intent levels',
            'Match ad messaging to where the user dropped off',
            'Dynamic product ads show people what they actually viewed',
            'Frequency capping prevents ad fatigue',
            'Each stage should push users to the next stage'
        ],
        criteria: [
            { keyword: 'stage|level|funnel|step|sequence', label: 'Creates multi-stage funnel' },
            { keyword: 'day|window|timeframe|period|duration', label: 'Sets retargeting windows' },
            { keyword: 'message|copy|ad|creative|text', label: 'Tailors messaging per stage' },
            { keyword: 'dynamic|catalog|product|dpa|viewed', label: 'Uses dynamic product ads' },
            { keyword: 'frequency|cap|fatigue|limit', label: 'Manages ad frequency' }
        ],
        sampleAnswer: 'Stage 1 — Browsers (Viewed products, 1-7 days): Dynamic Product Ads showing exact items they viewed. Copy: "Still thinking about this? It is selling fast." Offer: Free shipping on first order. Frequency cap: 2x/day. Stage 2 — Engagers (Viewed 3+ products or spent 3+ min, 1-14 days): Carousel of best sellers + customer review quotes. Copy: "Join 10,000+ happy homes. See why customers rate us 4.8 stars." Offer: 10% off first order. Frequency cap: 1.5x/day. Stage 3 — Cart Abandoners (Added to cart, 1-7 days): Dynamic ads showing exact cart items with urgency. Copy: "Your cart is waiting! Complete your order before it sells out." Offer: Free shipping + 10% off expires in 48 hours. Frequency cap: 3x/day (high intent). Stage 4 — Checkout Abandoners (Initiated checkout, 1-3 days): Single product ad with strong CTA. Copy: "You were so close! Your [product] is reserved for 24 more hours." Offer: Extra 5% off to seal the deal. Stage 5 — Past Purchasers (Bought 30-90 days ago): Cross-sell complementary items. Copy: "Complete the look — handpicked pieces that go perfectly with your [previous purchase]." Exclusion: Exclude purchasers from last 30 days from all retargeting.'
    },
    {
        id: 36,
        category: 'facebook-campaigns',
        title: 'A/B Testing Framework',
        difficulty: 'easy',
        points: 10,
        description: 'Design a systematic A/B testing plan for Facebook ads.',
        prompt: 'A subscription box company is spending $2,000/month on Facebook ads but does not know what works. Design a 4-week A/B testing framework that systematically tests creative, copy, audience, and placement variables.',
        hints: [
            'Only test one variable at a time for clean results',
            'Statistical significance requires enough data',
            'Start with the highest-impact variable first',
            'Document everything in a testing log',
            'Apply learnings from each week to the next'
        ],
        criteria: [
            { keyword: 'week|phase|order|sequence|schedule', label: 'Creates testing timeline' },
            { keyword: 'one|single|variable|isolat|control', label: 'Tests one variable at a time' },
            { keyword: 'creative|image|video|visual', label: 'Tests creative elements' },
            { keyword: 'copy|headline|text|hook', label: 'Tests copy elements' },
            { keyword: 'audience|target|placement|platform', label: 'Tests targeting/placement' },
            { keyword: 'winner|result|significan|data|metric', label: 'Defines success criteria' }
        ],
        sampleAnswer: 'Week 1 — Creative Format Test: Test Video vs Carousel vs Static Image. Same copy, same audience (best-performing lookalike), same budget ($500, split equally). Success metric: CTR and CPA. Minimum 1,000 impressions per variation before judging. Week 2 — Copy/Hook Test: Use winning creative format from Week 1. Test 3 different hooks — A) Pain point ("Tired of boring snacks?"), B) Social proof ("Join 20K subscribers"), C) Curiosity ("What is inside this month box will surprise you"). Same audience, $500 split. Success metric: CTR and conversion rate. Week 3 — Audience Test: Use winning creative + copy. Test 3 audiences — A) Lookalike 1% of subscribers, B) Interest-based (snack lovers + subscription boxes), C) Advantage+ broad. $500 split. Success metric: CPA and ROAS. Week 4 — Placement Test: Use all winners. Test A) Automatic placements, B) Feed-only, C) Reels + Stories only. $500 split. Success metric: CPA by placement. Testing Rules: Run each test for full 7 days, minimum 50 conversions per variable for significance, document results in a testing spreadsheet. Month 2: Scale the winning combination with remaining learnings.'
    },
    {
        id: 37,
        category: 'facebook-campaigns',
        title: 'Lookalike Audience Strategy',
        difficulty: 'hard',
        points: 30,
        description: 'Create an advanced lookalike audience strategy using multiple seed sources.',
        prompt: 'A high-end skincare brand (average order $85) has customer data including purchase history, email lists, and website analytics. Design an advanced lookalike audience strategy with multiple seed audiences, percentage tiers, and testing methodology.',
        hints: [
            'Quality of seed audience directly impacts lookalike quality',
            'Different seed sources create different lookalike behaviors',
            'Smaller percentages (1%) are more precise, larger (5-10%) are broader',
            'Layer lookalikes with interest targeting for precision',
            'Value-based lookalikes optimize for high-value customers'
        ],
        criteria: [
            { keyword: 'seed|source|custom.audience|list|data', label: 'Defines seed audiences' },
            { keyword: 'percent|1%|2%|3%|5%|tier|size', label: 'Uses percentage tiers' },
            { keyword: 'value|ltv|high.value|purchase|revenue', label: 'Leverages value data' },
            { keyword: 'test|compare|measure|perform|layer', label: 'Plans testing approach' },
            { keyword: 'email|pixel|event|website|customer', label: 'Uses multiple data sources' },
            { keyword: 'exclude|overlap|separate|deduplicate', label: 'Manages audience overlap' }
        ],
        sampleAnswer: 'Seed Audiences (Custom Audiences): S1) Top 25% customers by LTV (highest value buyers), S2) All purchasers last 180 days, S3) Repeat purchasers (2+ orders), S4) Email subscribers with >30% open rate (engaged leads), S5) Website visitors who viewed 3+ products in last 30 days (high intent). Lookalike Tiers: From each seed create 1%, 2-3%, and 4-5% lookalikes. Priority LALs: LAL-1 (S1, 1%) — most valuable, highest priority, LAL-2 (S3, 1%) — repeat buyer behavior, LAL-3 (S2, 1%) — broad purchaser base. Value-Based: Upload customer list with purchase values, create value-based lookalike that optimizes for high-AOV customers. Testing: Week 1-2 test LAL-1 vs LAL-2 vs LAL-3 (1% each), Week 3-4 test winning seed at 1% vs 3% vs 5%. Layering: Combine best lookalike with interest overlay (skincare, luxury beauty) for hyper-targeted audience. Exclusions: Exclude all existing customers, exclude each LAL from other LAL ad sets to prevent overlap. Refresh seed audiences monthly as customer base grows.'
    },
    {
        id: 38,
        category: 'facebook-campaigns',
        title: 'Facebook Pixel Strategy',
        difficulty: 'hard',
        points: 30,
        description: 'Design a comprehensive Facebook Pixel and Conversions API implementation strategy.',
        prompt: 'A multi-product e-commerce store is setting up Facebook tracking for the first time. Design the complete pixel strategy including standard events, custom events, Conversions API setup, and how this data feeds into campaign optimization.',
        hints: [
            'Standard events have pre-defined names Facebook recognizes',
            'Custom events can track unique business actions',
            'Conversions API (server-side) complements browser pixel',
            'iOS 14+ privacy changes make CAPI essential',
            'Event parameters provide rich data for optimization'
        ],
        criteria: [
            { keyword: 'standard.event|pageview|viewcontent|addtocart|purchase', label: 'Implements standard events' },
            { keyword: 'custom.event|custom|specific|unique', label: 'Creates custom events' },
            { keyword: 'capi|server.side|conversion.api|api', label: 'Implements Conversions API' },
            { keyword: 'ios|privacy|cookie|tracking|opt', label: 'Addresses privacy changes' },
            { keyword: 'parameter|value|content|currency|data', label: 'Passes event parameters' },
            { keyword: 'optimize|campaign|audience|retarget|feed', label: 'Connects to campaign optimization' }
        ],
        sampleAnswer: 'Standard Events Implementation: PageView (all pages), ViewContent (product pages — pass content_id, content_name, value, currency), AddToCart (cart button — pass product data + value), InitiateCheckout (checkout page — pass cart value and num_items), Purchase (confirmation page — pass transaction value, currency, content_ids, order_id). Custom Events: ProductQuickView (when user opens quick-view modal), SizeSelected (for apparel sizing data), WishlistAdd (track wishlist behavior for retargeting), ReviewRead (when user scrolls to reviews section). Conversions API: Set up server-side CAPI via Shopify/WooCommerce native integration as primary, browser pixel as backup. Deduplicate events using event_id parameter. This ensures tracking persists despite iOS 14 App Tracking Transparency opt-outs and browser cookie blocking. Parameters: All events pass content_type, content_ids (matching product catalog), value, and currency for dynamic ads and value optimization. Campaign Optimization Use: Purchase event for Sales campaigns, ViewContent for Awareness, AddToCart for middle-funnel. Custom Audiences from events: ViewContent (7d) for warm retargeting, AddToCart (3d) for hot retargeting, Purchase (180d) for lookalikes and exclusions. Aggregated Events Measurement: Prioritize Purchase as #1 event in AEM for iOS optimization.'
    },
    {
        id: 39,
        category: 'facebook-campaigns',
        title: 'Lead Generation Campaign',
        difficulty: 'medium',
        points: 20,
        description: 'Design a Facebook lead generation campaign using Lead Forms.',
        prompt: 'A B2B software company selling HR management tools ($500/month) wants to use Facebook Lead Ads to generate demo requests. Design the complete lead generation campaign including form design, ad creative, follow-up sequence, and qualification criteria.',
        hints: [
            'B2B on Facebook works but requires careful targeting',
            'Lead form friction impacts both quantity and quality',
            'Instant follow-up dramatically improves conversion',
            'Pre-filled fields make completion easy but may lower quality',
            'CRM integration is essential for lead management'
        ],
        criteria: [
            { keyword: 'form|field|question|input|lead.form', label: 'Designs the lead form' },
            { keyword: 'follow.up|response|email|call|sequence|crm', label: 'Plans follow-up process' },
            { keyword: 'qualify|score|criteria|fit|mql|sql', label: 'Defines qualification' },
            { keyword: 'target|audience|b2b|job.title|industry', label: 'Targets B2B audience' },
            { keyword: 'creative|ad|copy|hook|offer', label: 'Creates ad content' }
        ],
        sampleAnswer: 'Targeting: Job titles — HR Director, HR Manager, VP of People, CHRO. Company size: 50-500 employees. Industries: Tech, Professional Services, Healthcare. Layer with interest in HR software, SHRM, HR conferences. Lead Form Design: Higher Intent form type (includes review screen). Fields: Name (pre-filled), Work Email (typed — not pre-filled, filters quality), Company Name, Company Size (dropdown: 10-50, 51-200, 201-500, 500+), Biggest HR Challenge (dropdown: Recruitment, Onboarding, Payroll, Performance Reviews). CTA: "Request Free Demo." Thank You Screen: Calendar link for instant booking. Ad Creative: Video ad — 60-sec demo highlight showing time saved on payroll. Copy: "HR teams using [tool] save 15 hours/week on admin. See how in a free 20-minute demo." Follow-Up: Instant automated email with demo booking link (within 1 minute via Zapier to CRM). If no booking in 2 hours, SDR calls directly. Email sequence: Day 1 (case study), Day 3 (ROI calculator), Day 7 (last chance for demo). Qualification: MQL = completed form with 50+ employees. SQL = booked demo. Disqualify: personal emails, under 10 employees.'
    },
    {
        id: 40,
        category: 'facebook-campaigns',
        title: 'Campaign Performance Diagnosis',
        difficulty: 'hard',
        points: 30,
        description: 'Diagnose and fix underperforming Facebook ad campaigns using metrics.',
        prompt: 'A Facebook campaign has these metrics after 14 days: $1,500 spent, 150,000 impressions, 1,200 clicks, 15 purchases, CTR 0.8%, CPC $1.25, CPM $10, CPA $100, ROAS 1.5x (product price $100). The target CPA is $40 and target ROAS is 3x. Diagnose the problems and provide a fix plan.',
        hints: [
            'Work through the funnel — impressions → clicks → landing page → conversion',
            'CTR benchmarks: 1-2% for cold, 3-5% for retargeting',
            'High CPC with low CTR = creative problem',
            'High CTR with low conversion = landing page problem',
            'CPA = CPM / (CTR × CVR) — optimize each lever'
        ],
        criteria: [
            { keyword: 'ctr|click.through|creative|ad|hook', label: 'Diagnoses CTR issue' },
            { keyword: 'landing|page|conversion.rate|website|cvr', label: 'Analyzes conversion rate' },
            { keyword: 'audience|target|reach|frequen|fatigue', label: 'Evaluates audience' },
            { keyword: 'fix|improve|optimize|action|recommend', label: 'Provides actionable fixes' },
            { keyword: 'metric|data|number|benchmark|calculate', label: 'Uses data analysis' },
            { keyword: 'funnel|leak|drop|stage|where', label: 'Identifies funnel leaks' }
        ],
        sampleAnswer: 'Diagnosis — Funnel Analysis: Click-through rate 0.8% is below the 1-2% benchmark for cold traffic, indicating weak ad creative. Landing page conversion rate: 15 purchases / 1,200 clicks = 1.25%, which is below the 2-3% e-commerce benchmark, indicating a landing page problem. Frequency: 150,000 impressions / estimated 50,000 reach = frequency of ~3, which is acceptable. The two problems are: 1) Underperforming creative and 2) Leaky landing page. Fix Plan — Creative (Goal: Improve CTR to 1.5%+): Replace current creative with 3 new variations — UGC-style video, product demo, and customer testimonial. Test different hooks in first 3 seconds. Rewrite headline to be more benefit-focused with urgency. Landing Page (Goal: Improve CVR to 3%+): Add social proof above the fold (reviews, customer count), simplify checkout process (reduce form fields), add trust badges and money-back guarantee, test price anchoring (show original price crossed out). Audience: Test narrowing to 1% lookalike of purchasers instead of broad targeting. Budget: Reduce daily spend to $50 while testing new creatives, scale back up once CPA hits $50. Expected Impact: CTR 0.8% → 1.5% and CVR 1.25% → 3% would yield CPA of ~$28 (below $40 target) and ROAS of ~3.6x.'
    },

    // ===== TARGET AUDIENCE (10) =====
    {
        id: 41,
        category: 'target-audience',
        title: 'Buyer Persona Creation',
        difficulty: 'easy',
        points: 10,
        description: 'Create a detailed buyer persona for a digital product.',
        prompt: 'Create a detailed buyer persona for a $49/month AI writing assistant tool designed for content marketers. Include demographics, psychographics, pain points, goals, and media consumption habits.',
        hints: [
            'A buyer persona should feel like a real person',
            'Include both demographic and psychographic details',
            'Pain points should connect directly to what the product solves',
            'Media habits inform where to reach them',
            'Include objections they might have about the product'
        ],
        criteria: [
            { keyword: 'demographic|age|gender|income|location|education', label: 'Includes demographics' },
            { keyword: 'psychographic|value|belief|motivation|lifestyle', label: 'Includes psychographics' },
            { keyword: 'pain|challenge|problem|struggle|frustrat', label: 'Identifies pain points' },
            { keyword: 'goal|aspir|want|achieve|objective', label: 'Defines goals' },
            { keyword: 'media|channel|platform|read|watch|listen', label: 'Maps media consumption' }
        ],
        sampleAnswer: 'Persona: "Marketing Maya" — Demographics: 28-35 years old, female, based in a mid-sized US city, Bachelor or Master in Marketing/Communications, earning $55K-$80K, works as Content Marketing Manager at a B2B SaaS company (50-200 employees). Psychographics: Ambitious and career-driven, values efficiency and quality, early adopter of productivity tools, feels pressure to produce more content with limited resources, believes in data-driven marketing. Pain Points: Expected to produce 15+ blog posts/month but only has time for 8, struggles with writer\'s block, spends too much time on first drafts, worries about content quality at scale, overwhelmed by SEO requirements. Goals: Get promoted to Head of Content within 2 years, build a content engine that drives measurable leads, maintain quality while increasing output, become a thought leader in her industry. Media: LinkedIn daily, subscribes to Content Marketing Institute and HubSpot blogs, listens to "Marketing Over Coffee" and "Everyone Hates Marketers" podcasts, active in Superpath and Demand Curve Slack communities. Objections: "Will AI content sound generic?", "My boss might think I am not doing the work", "Is $49/month worth it on my team budget?"'
    },
    {
        id: 42,
        category: 'target-audience',
        title: 'Market Segmentation',
        difficulty: 'medium',
        points: 20,
        description: 'Segment the market for a digital product into distinct audience groups.',
        prompt: 'A new all-in-one social media scheduling and analytics tool is entering the market at $29/month. Identify and define 4 distinct market segments, rank them by priority, and explain why one should be the primary target.',
        hints: [
            'Segments should be meaningfully different from each other',
            'Consider: size, accessibility, willingness to pay, competition',
            'The best segment is not always the biggest',
            'Think about both B2B and B2C use cases',
            'Each segment has different messaging needs'
        ],
        criteria: [
            { keyword: 'segment|group|category|market|type', label: 'Defines distinct segments' },
            { keyword: 'four|4|multiple', label: 'Identifies 4 segments' },
            { keyword: 'priority|rank|primary|first|focus', label: 'Ranks segments' },
            { keyword: 'size|potential|revenue|tam|market', label: 'Evaluates segment potential' },
            { keyword: 'why|reason|because|rationale|justif', label: 'Justifies primary choice' },
            { keyword: 'message|position|value|speak|appeal', label: 'Tailors messaging' }
        ],
        sampleAnswer: 'Segment 1 — Freelance Social Media Managers (PRIMARY): Managing 3-8 client accounts, earning $3K-8K/month, needs multi-account management and client reporting. Size: ~500K in US. Why Primary: Highest willingness to pay ($29 is a business expense they can invoice clients for), most frequent daily use, strong word-of-mouth in freelancer communities, underserved by enterprise tools that are too expensive. Segment 2 — Small Business Owners (SECONDARY): 1-10 employees, managing own social media, needs simplicity over features. Size: 2M+ in US. Price sensitive at $29 but convertible with ROI messaging. Segment 3 — Marketing Teams at Mid-Size Companies: 2-5 person marketing teams, need collaboration features, have budget but face competition from Hootsuite, Buffer, Sprout Social. Size: 200K companies. Harder to win due to established competitors. Segment 4 — Content Creators & Influencers: Personal brand builders, 10K-100K followers, need analytics to prove value to sponsors. Size: 300K+ serious creators. Price-sensitive, high churn risk. Priority Ranking: 1) Freelancers (best fit + willingness to pay), 2) Small Businesses (large market, simpler needs), 3) Creators (growth potential), 4) Marketing Teams (competitive landscape too tough initially).'
    },
    {
        id: 43,
        category: 'target-audience',
        title: 'Customer Journey Mapping',
        difficulty: 'medium',
        points: 20,
        description: 'Map the complete customer journey for a digital product purchase.',
        prompt: 'Map the complete customer journey from awareness to purchase and beyond for someone buying a $199/year premium productivity app. Include all touchpoints, emotions, and actions at each stage.',
        hints: [
            'The journey has stages: Awareness, Consideration, Decision, Onboarding, Retention, Advocacy',
            'Each stage has different emotions and needs',
            'Identify the touchpoints at each stage',
            'Note the "moments of truth" where customers decide to continue or leave',
            'Include post-purchase stages — the journey does not end at purchase'
        ],
        criteria: [
            { keyword: 'aware|discover|find|first|learn', label: 'Maps awareness stage' },
            { keyword: 'consider|compare|evaluate|research|review', label: 'Maps consideration stage' },
            { keyword: 'decide|purchase|buy|convert|pay', label: 'Maps decision stage' },
            { keyword: 'onboard|start|setup|first.use|welcome', label: 'Maps onboarding stage' },
            { keyword: 'retain|renew|loyal|repeat|advocate', label: 'Maps retention/advocacy' },
            { keyword: 'emotion|feel|think|pain|delight|frustrat', label: 'Captures emotions' }
        ],
        sampleAnswer: 'AWARENESS: Trigger — User feels overwhelmed managing multiple apps for tasks, notes, and calendar. Touchpoints: Sees YouTube review, friend mentions the app, Google search for "best productivity app." Emotion: Frustrated, hopeful. Action: Clicks on a blog comparison article. CONSIDERATION: Touchpoints: Visits product website, reads features page, watches demo video, checks G2/Capterra reviews, reads vs-competitor comparisons, joins free trial. Emotion: Curious, cautiously optimistic, slightly overwhelmed by options. Action: Signs up for 14-day free trial. Moment of Truth: First 10 minutes in the app. DECISION: Touchpoints: Trial experience, email nurture sequence (day 1: welcome, day 3: tips, day 7: case study, day 12: trial ending), in-app upgrade prompt, pricing page. Emotion: Evaluating ROI — "Is this worth $199/year?" Action: Enters payment info. Moment of Truth: Trial expiration email with social proof. ONBOARDING: Touchpoints: Welcome email series, in-app tutorial, template library, first workflow creation. Emotion: Excited but slightly anxious about setup. Action: Imports tasks from old tool, customizes workspace. Moment of Truth: Completing first productive week. RETENTION (Month 2-12): Touchpoints: Monthly feature update emails, in-app tips for unused features, annual review showing time saved, community forum. Emotion: Satisfied, forming habits. Moment of Truth: Renewal notification at month 11. ADVOCACY: Touchpoints: NPS survey, referral program prompt, review request email. Emotion: Proud, wants to share. Action: Refers 2 friends, writes G2 review, shares workflow template publicly.'
    },
    {
        id: 44,
        category: 'target-audience',
        title: 'Competitive Audience Analysis',
        difficulty: 'hard',
        points: 30,
        description: 'Analyze competitor audiences to find underserved segments.',
        prompt: 'You are launching a new project management tool. Your main competitors are Asana (enterprise), Trello (simple/visual), and Monday.com (mid-market). Analyze each competitor\'s primary audience and identify an underserved segment you can win.',
        hints: [
            'Study competitor messaging to understand who they target',
            'Look for gaps between competitor audiences',
            'Underserved does not mean non-existent — it means poorly served',
            'Consider audience frustrations with current solutions',
            'Your positioning should directly address the underserved need'
        ],
        criteria: [
            { keyword: 'asana|trello|monday|competitor', label: 'Analyzes specific competitors' },
            { keyword: 'audience|user|customer|segment|who', label: 'Identifies competitor audiences' },
            { keyword: 'gap|underserved|missing|unmet|overlook', label: 'Finds underserved segment' },
            { keyword: 'position|differenti|unique|niche|angle', label: 'Defines positioning' },
            { keyword: 'frustrat|pain|problem|complain|limit', label: 'Identifies audience frustrations' },
            { keyword: 'win|capture|target|focus|strategy', label: 'Plans how to win segment' }
        ],
        sampleAnswer: 'Competitor Audience Analysis — Asana: Primary audience is enterprise teams (100+ employees), project managers in tech and professional services. Strength: Complex workflow management, advanced reporting. Audience Frustration: Steep learning curve, overwhelming for small teams, expensive per-seat pricing. Trello: Primary audience is individuals and small teams wanting visual simplicity, freelancers, startups. Strength: Kanban boards, ease of use. Audience Frustration: Lacks depth for serious project management, no good reporting, feels like "digital sticky notes" not a real PM tool. Monday.com: Primary audience is mid-market companies (20-500 employees), operations and marketing teams. Strength: Flexibility, colorful UI, marketing-heavy growth. Audience Frustration: Gets expensive fast with add-ons, feature bloat, jack-of-all-trades feeling. UNDERSERVED SEGMENT: Creative agencies and studios (5-30 people). Why Underserved: Asana is too complex and corporate, Trello too simple for client projects with deadlines and budgets, Monday.com too expensive and generic. What they need: Client-facing project views, time tracking built-in, visual/intuitive interface, creative brief templates, file proofing and approval workflows, affordable flat pricing. Our Positioning: "Project management designed for creative teams. Beautiful, powerful, affordable." Win Strategy: Partner with design communities (Dribbble, Behance), sponsor creative conferences, create agency-specific templates, offer flat pricing (not per-seat) to appeal to cost-conscious agencies.'
    },
    {
        id: 45,
        category: 'target-audience',
        title: 'Audience Research Methods',
        difficulty: 'easy',
        points: 10,
        description: 'Design an audience research plan using free and low-cost methods.',
        prompt: 'You are launching a new digital product (an online course platform for cooking enthusiasts) and have zero customer data. Design a research plan using free or low-cost methods to understand your target audience within 2 weeks.',
        hints: [
            'Social listening is free and rich with insights',
            'Reddit, Facebook Groups, and forums are goldmines',
            'Surveys need distribution strategy to get responses',
            'Competitor reviews reveal what customers love and hate',
            'Google Trends and keyword tools show demand'
        ],
        criteria: [
            { keyword: 'survey|questionnaire|poll|ask|interview', label: 'Plans primary research' },
            { keyword: 'reddit|facebook.group|forum|communit|social', label: 'Uses social listening' },
            { keyword: 'review|competitor|amazon|g2|app.store', label: 'Analyzes competitor reviews' },
            { keyword: 'google|trend|keyword|search|seo', label: 'Uses search data' },
            { keyword: 'free|low.cost|budget|cheap|no.cost', label: 'Keeps methods affordable' }
        ],
        sampleAnswer: 'Week 1 — Discovery Research: Day 1-2: Social Listening — Join 10 Facebook Groups for home cooks and cooking hobbyists, read the last 50 posts in each, note common questions, frustrations, and desires. Browse r/cooking, r/cookingforbeginners, r/MealPrepSunday — search for "online cooking class" and "learn to cook" and document themes. Day 3-4: Competitor Review Mining — Read 100+ reviews of MasterClass (cooking courses), Skillshare cooking classes, and popular Udemy cooking courses on Trustpilot and app stores. Create spreadsheet of top praised features and top complaints. Day 5: Google Trends + Keyword Research — Search Google Trends for "cooking class online," "learn to cook," "cooking course" to understand demand trends. Use Ubersuggest (free) to find related keywords and search volumes. Week 2 — Validation Research: Day 6-7: Create Google Forms survey (10 questions) — share in cooking Facebook Groups and Reddit with moderator permission. Questions: How do you learn cooking now? What frustrates you? Would you pay for online courses? How much? Day 8-10: Conduct 5 phone interviews with survey respondents who volunteered (offer a $10 Amazon gift card). Deep dive into their cooking journey, learning preferences, and price sensitivity. Day 11-14: Synthesize all data into audience profile, top 5 pain points, feature wishlist, and pricing sweet spot. Total Cost: $50 for interview incentives.'
    },
    {
        id: 46,
        category: 'target-audience',
        title: 'Audience Messaging Matrix',
        difficulty: 'medium',
        points: 20,
        description: 'Create a messaging matrix that maps different messages to different audience segments.',
        prompt: 'A cloud-based accounting software is marketed to three segments: freelancers, small business owners, and accountants/bookkeepers. Create a messaging matrix with unique value propositions, pain points addressed, key messages, and CTAs for each segment.',
        hints: [
            'Same product, different angles for different people',
            'Pain points vary dramatically between segments',
            'The language/jargon each segment uses is different',
            'CTAs should match the decision-making style of each segment',
            'Benefits matter more than features'
        ],
        criteria: [
            { keyword: 'freelancer|solo|independent|self.employ', label: 'Messages for freelancers' },
            { keyword: 'small.business|owner|smb|company|employ', label: 'Messages for small businesses' },
            { keyword: 'accountant|bookkeeper|cpa|financial', label: 'Messages for accountants' },
            { keyword: 'value.prop|benefit|promise|solve', label: 'Defines value props per segment' },
            { keyword: 'cta|action|next.step|sign.up|demo|try', label: 'Creates tailored CTAs' },
            { keyword: 'pain|problem|challenge|need|frustrat', label: 'Maps pain points' }
        ],
        sampleAnswer: 'FREELANCERS — Pain Points: Taxes are confusing and scary, too much time on invoicing instead of client work, no idea if they are actually profitable. Value Proposition: "Spend 15 minutes a month on your books, not 15 hours." Key Messages: "Automatic expense tracking — snap receipt photos on the go", "One-click invoicing that gets you paid faster", "Tax-ready reports so April is not terrifying." Tone: Friendly, simple, no jargon. CTA: "Start Free — No Credit Card Needed." SMALL BUSINESS OWNERS — Pain Points: Growing beyond spreadsheets, need to manage payroll and multiple expenses, want financial visibility without hiring a full-time accountant. Value Proposition: "See your business finances clearly so you can grow confidently." Key Messages: "Real-time dashboard showing cash flow, profit, and expenses", "Automated payroll for your team in 3 clicks", "Scale from solo to 50 employees without switching tools." Tone: Professional but approachable, growth-focused. CTA: "Book a Free Demo." ACCOUNTANTS/BOOKKEEPERS — Pain Points: Managing multiple client books is chaotic, data entry is tedious, clients send disorganized receipts. Value Proposition: "Manage all your clients in one place and eliminate manual data entry." Key Messages: "Multi-client dashboard with one-click switching", "Bank feed auto-categorization with 95% accuracy", "Client portal where they upload docs directly." Tone: Technical, efficiency-focused, peer-to-peer. CTA: "Start Your Partner Account — Manage 3 Clients Free."'
    },
    {
        id: 47,
        category: 'target-audience',
        title: 'TAM SAM SOM Analysis',
        difficulty: 'hard',
        points: 30,
        description: 'Calculate Total Addressable Market, Serviceable Market, and Obtainable Market for a digital product.',
        prompt: 'A new AI-powered resume builder targeting job seekers is launching at $15/month. Calculate and explain the TAM, SAM, and SOM with reasoning and data assumptions. Then explain how this analysis informs the marketing strategy.',
        hints: [
            'TAM = total market demand if you had 100% market share',
            'SAM = portion of TAM your product can actually serve',
            'SOM = realistic share you can capture in 1-2 years',
            'Use both top-down and bottom-up approaches',
            'This analysis directly shapes budget and channel decisions'
        ],
        criteria: [
            { keyword: 'tam|total.addressable|total.market', label: 'Calculates TAM' },
            { keyword: 'sam|serviceable|addressable|available', label: 'Calculates SAM' },
            { keyword: 'som|obtainable|share|realistic|capture', label: 'Calculates SOM' },
            { keyword: 'number|million|billion|calculate|estimate', label: 'Provides specific numbers' },
            { keyword: 'assumption|data|source|estimate|based', label: 'States assumptions' },
            { keyword: 'strategy|inform|market|implication|budget', label: 'Connects to marketing strategy' }
        ],
        sampleAnswer: 'TAM (Total Addressable Market): ~160M people actively job seeking globally in any given year. At $15/month average spend on job search tools, TAM = 160M × $180/year = $28.8B. Assumption: includes all employed and unemployed people actively looking. SAM (Serviceable Addressable Market): English-speaking job seekers in US, UK, Canada, Australia who are comfortable with AI tools, aged 22-55, white-collar jobs. Estimated at ~25M people. SAM = 25M × $180/year = $4.5B. Assumptions: filtered by language, digital comfort, job type. SOM (Serviceable Obtainable Market — Year 1-2): Realistically capture 0.1-0.3% of SAM in first 2 years. With strong marketing: 25,000-75,000 paying subscribers. SOM = 50,000 × $180 = $9M ARR (midpoint). Assumptions: based on comparable SaaS growth rates, marketing budget of $500K-1M. Marketing Strategy Implications: TAM shows massive opportunity — investors and team should be confident. SAM focus on English-speaking markets means marketing should be US/UK-first, with Google Ads and LinkedIn as primary channels. SOM of 50K subscribers means we need ~500K free trial signups (assuming 10% conversion), which requires reaching ~5M job seekers through content SEO (target "resume tips" keywords with 2M+ monthly searches), LinkedIn ads targeting job title "seeking opportunities," partnerships with job boards, and university career center partnerships.'
    },
    {
        id: 48,
        category: 'target-audience',
        title: 'Behavioral Targeting Strategy',
        difficulty: 'medium',
        points: 20,
        description: 'Design a behavioral targeting strategy based on user actions and intent signals.',
        prompt: 'A project management SaaS has identified these user behaviors in their free trial: A) Users who create 3+ projects in first week, B) Users who invite team members, C) Users who only view the dashboard but do not create anything, D) Users who use integrations. Design a targeted marketing strategy for each behavioral segment.',
        hints: [
            'User behavior reveals intent and readiness to buy',
            'High-activity users need less convincing, more guidance',
            'Low-activity users need re-engagement before sales',
            'Each behavior segment needs different messaging',
            'Timing of messages matters as much as content'
        ],
        criteria: [
            { keyword: 'behavio|action|activity|signal|trigger', label: 'Uses behavioral data' },
            { keyword: 'segment|group|cohort|type|cluster', label: 'Creates distinct segments' },
            { keyword: 'message|email|notification|content|copy', label: 'Tailors messaging per segment' },
            { keyword: 'convert|upgrade|pay|subscribe|purchase', label: 'Drives conversion' },
            { keyword: 'timing|when|day|trigger|automat', label: 'Plans message timing' }
        ],
        sampleAnswer: 'Segment A — Power Users (3+ projects in Week 1): These users see value and are building habits. Strategy: Fast-track to upgrade. Day 3: Email showcasing premium features they have not tried (Gantt charts, advanced reporting). Day 5: In-app message — "You have created X projects! Teams like yours get 40% more done with Pro features." Day 10: Personal email from CS offering a walkthrough of Pro. Message Tone: "You are already a power user — unlock your full potential." Segment B — Team Champions (Invited members): These users are advocates bringing others in. Strategy: Leverage the network effect. Day 2: Email — "Great choice inviting your team! Here is how to set up your first team workflow." Day 7: Show collaborative features (comments, assignments, shared views). Day 10: "Your team has been active! Upgrade to Pro so everyone gets full access." Offer: Team discount (15% off for 5+ seats). Segment C — Window Shoppers (Dashboard only): High risk of churn — never experienced core value. Strategy: Activate them. Day 1: Welcome email with 3-minute quickstart video. Day 3: "Need help getting started? Here is a pre-built template for [their industry]." Day 5: In-app guided tour triggering on login. Day 7: Personal email — "Most people feel overwhelmed at first. Want a 10-minute setup call?" If no action by Day 10: Survey asking what is blocking them. Segment D — Integration Users: Tech-savvy, embedding into existing workflow. Strategy: Show depth. Day 3: "You connected [tool] — here are 5 automation recipes." Day 7: Highlight API access and advanced integrations (Pro-only). Day 10: "Your workflow is getting powerful. Upgrade to unlock unlimited integrations and Zapier premium."'
    },
    {
        id: 49,
        category: 'target-audience',
        title: 'Lookalike Audience Modeling',
        difficulty: 'hard',
        points: 30,
        description: 'Design a data-driven strategy to find and reach your best potential customers.',
        prompt: 'An e-learning platform has data on their best customers: 85% are 28-42, predominantly in tech and marketing roles, 70% found the platform via Google search, average LTV is $450, and they typically enroll in 3+ courses. Design a strategy to find and reach more people like them across all digital channels.',
        hints: [
            'Existing customer data is the foundation for finding more like them',
            'Different channels have different audience building tools',
            'Intent signals (search behavior) are powerful indicators',
            'Combine demographic, behavioral, and contextual targeting',
            'Test and refine based on which signals predict conversion'
        ],
        criteria: [
            { keyword: 'data|analytic|customer|insight|pattern', label: 'Leverages customer data' },
            { keyword: 'lookalike|similar|model|match|clone', label: 'Creates lookalike strategy' },
            { keyword: 'google|search|seo|sem|intent', label: 'Uses search channels' },
            { keyword: 'facebook|linkedin|social|display', label: 'Uses social/display channels' },
            { keyword: 'multi.channel|cross.channel|omni|integrated', label: 'Spans multiple channels' },
            { keyword: 'test|measure|optimize|refine|iterate', label: 'Plans testing and optimization' }
        ],
        sampleAnswer: 'Data Foundation: Export top 20% customers by LTV into a seed list (email, phone). Create customer profile: tech/marketing professionals, 28-42, high search intent, serial learners. Channel Strategy — Google Ads: Target exact and broad match keywords that drove 70% of best customers (e.g., "learn data analytics," "marketing course online"). Create Similar Audiences from Google Analytics converter list. Bid higher on demographics matching the 28-42 tech/marketing profile. SEO: Create content targeting the exact search queries that brought best customers. Facebook/Instagram: Upload seed list to create 1% Lookalike Audience. Layer with interest targeting (technology, digital marketing, e-learning). Create Value-Based Lookalike using LTV data. LinkedIn: Target by job title (Marketing Manager, Data Analyst, Product Manager, Software Developer) + seniority (mid-level) + company size (50+). Use Matched Audiences with email list. Programmatic Display: Use DMP to build audience segments matching customer profile. Target sites best customers visit: TechCrunch, HBR, Medium tech publications. YouTube: In-market audience for "Education" + affinity for "Technology." Target channels reviewing online courses. Testing Plan: Month 1 — launch all channels with equal budget ($500 each). Month 2 — double budget on top 2 performing channels. Month 3 — optimize creative and targeting based on which customer signals (search terms, interests, demographics) correlate most with 3+ course enrollments. Target: Acquire customers with projected LTV >$300 at CAC <$60.'
    },
    {
        id: 50,
        category: 'target-audience',
        title: 'Audience Expansion Strategy',
        difficulty: 'easy',
        points: 10,
        description: 'Plan how to expand into a new audience segment for an existing product.',
        prompt: 'A personal finance app originally built for college students has saturated that market. They want to expand to young professionals (23-30) entering their first jobs. Outline the audience expansion strategy including messaging changes, channel shifts, and feature considerations.',
        hints: [
            'The new audience has different financial needs and maturity',
            'Brand perception from the college market may help or hinder',
            'Channel strategy changes as the audience ages out of college',
            'The product may need feature additions or emphasis shifts',
            'Messaging should evolve without alienating existing users'
        ],
        criteria: [
            { keyword: 'message|position|rebrand|evolve|tone', label: 'Adapts messaging' },
            { keyword: 'channel|platform|media|where|reach', label: 'Shifts channels' },
            { keyword: 'feature|product|function|add|adapt', label: 'Considers product changes' },
            { keyword: 'young.professional|first.job|career|salary', label: 'Targets new segment' },
            { keyword: 'exist|current|student|college|retain|both', label: 'Balances old and new audiences' }
        ],
        sampleAnswer: 'Messaging Evolution: From "Manage your student budget" to "Master your money from day one of your career." New themes: First salary management, student loan repayment strategy, building an emergency fund, starting investing early. Keep the approachable, non-judgmental tone but drop college-specific language. Channel Shifts: Reduce campus ambassador program, increase LinkedIn presence (young professionals are on LinkedIn for career content, add money tips), shift from campus events to virtual financial wellness webinars, partner with career platforms like LinkedIn and Glassdoor instead of university career centers, invest in SEO for "how to budget first job" and "manage student loans after college." Feature Considerations: Add student loan tracking and payoff calculator, add 401(k) and investment tracking basics, add salary negotiation tools, create "First Paycheck Setup Guide" onboarding flow for new users. Retention Strategy for Current Users: The expansion naturally retains college users as they graduate — if they see the app growing with them, churn at graduation decreases. Send graduating users a "Level Up" email repositioning the app for their next chapter. Gradual Rollout: Month 1-2: New landing page and messaging for young professionals. Month 3-4: New features ship. Month 5-6: Full campaign launch on professional channels.'
    }
];
