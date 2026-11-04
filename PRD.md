# EchoForge Web

EchoForge is an independent software studio founded by Fabio Jonathan Arifin. Its website presents its products, introduces the founder, and directs visitors to product websites, support, and legal policies. EchoForge remains the public brand and domain. Pelagos Hill is a planned company name whose formation is in progress; the website makes no LLC or incorporation claims.

## Public experience
- The homepage uses near-black surfaces, warm ivory typography, the Flow mark, and fine flowing lines. It leads with "Independent software studio."
- The product gallery leads with Oaktally, Airlophone, ReadersGuild, and Protos, in that order, using their actual screenshots and recordings.
- The remaining products follow in a compact directory, with Kume last. `/apps` includes the full collection.
- `/studio` introduces the studio and founder with a short factual biography and the supplied dark portrait. Its caption reads "Fabio Jonathan, founder". The portrait starts in black and white, fades into color on hover, and its frame grows gently. Touch and keyboard users can toggle color.
- Flowing lines recur as an animated hero, a wide fading About motif, and a subtle footer signature. Product showcases stay clear.
- `/legal` organizes existing privacy and terms links by product. Product legal documents retain their existing identities.
- Contact and Get in touch open email addressed to support@echoforge.to.
- Almanack stays hidden from the catalog and legal navigation. Existing redirects to its independent website remain active.

## Motion and accessibility
- Hero lines react to the pointer and scroll. Product captures move at different depths, with staggered entrances and hover/press feedback.
- Reduced motion disables parallax, entrance movement, portrait growth, and video autoplay.
- Product demos autoplay muted at most five times and then hold the last frame. They pause outside the viewport or in background tabs. Playback buttons are omitted.
- The portrait color transition lasts 800ms and frame growth lasts 1100ms. The frame expands by 3% without reflowing the caption.
- Layouts support desktop and mobile with visible Contact navigation, pointer cursors, keyboard focus, a skip link, and matching overscroll background.

## Operations
- Product links lead to their existing destinations. Individual products manage their own pricing and subscriptions.
- Authorized admins retain the Protos promo-code and Aksara tools. API and individual product routes are preserved.
- Railway hosts the website and deploys from `main`.
- `/prototype` and `/brand-preview` review links redirect to their corresponding public pages. The retired icon comparison redirects to the homepage.
- Flow is used for the header, favicon, device icons, and social previews. Uploaded media belongs in Cloudflare R2.
