# YouTube: The Global Video Ecosystem
[![YouTube Status](https://img.shields.io/badge/Status-Operational-brightgreen.svg?logo=youtube)](#)
[![Active Users](https://img.shields.io/badge/Active_Users-2.5B%2B-red.svg)](#)
YouTube is the world's largest video-sharing platform and the second most-visited website globally. Launched in 2005, it has evolved from a simple video-hosting site into a complex ecosystem driving global culture, media consumption, and digital economics.
## 📑 Table of Contents
- [History & Evolution](#history--evolution)
- [Core Technical Infrastructure](#core-technical-infrastructure)
  - [Video Ingestion](#video-ingestion-and-transcoding)
  - [Recommendation Engine](#the-recommendation-engine)
- [Monetization Architecture](#monetization-architecture)
- [Content Moderation & Copyright](#content-moderation--copyright)
- [YouTube Data API (v3) Example](#youtube-data-api-v3-example)
---
## 🏛️ History & Evolution
YouTube's journey from a garage startup to a global media powerhouse is defined by key milestones that reshaped the internet.
- **2005:** Founded by Chad Hurley, Steve Chen, and Jawed Karim. The first video, *"Me at the zoo,"* is uploaded.
- **2006:** Acquired by Google for $1.65 billion.
- **2007:** Launched the Partner Program, enabling creators to earn money.
- **2012:** Reached 1 billion monthly active users; *"Gangnam Style"* breaks the view counter, forcing a 64-bit integer upgrade.
- **2015:** Introduced YouTube Red (now Premium) and YouTube Kids.
- **2020:** Launched YouTube Shorts to compete with the rise of short-form vertical video.
- **2024+:** Deep integration of generative AI tools for creators, including Dream Screen and multivoice dubbing.
---
## ⚙️ Core Technical Infrastructure
Handling over **500 hours of video uploaded every minute** requires one of the most sophisticated cloud architectures in existence.
### Video Ingestion and Transcoding
When a creator uploads a file, YouTube processes the video into dozens of different formats, resolutions, and codecs to optimize for different network conditions and devices.
* **Codecs Used:** 
  * `H.264 (AVC)`: For maximum legacy device compatibility.
  * `VP9`: For high efficiency and standard HD delivery.
  * `AV1`: For next-generation, ultra-compressed 4K/8K streaming.
* **Dynamic Adaptive Streaming over HTTP (DASH):** YouTube slices videos into small chunks. The player continuously fetches the next chunk, automatically switching resolutions if the user's signal drops.
### The Recommendation Engine
The heart of YouTube is its recommendation algorithm, driven by deep neural networks split into two core phases:
1. **Candidate Generation:** Filters millions of videos down to hundreds based on user watch history, collaborative filtering, and demographics.
2. **Ranking:** Uses deep learning to assign a score to each candidate video by predicting the probability of the user watching and enjoying it (measured primarily by expected watch time and engagement metrics).
---
## 💰 Monetization Architecture
YouTube created the modern creator economy through its decentralized ad-revenue sharing model.

| Revenue Stream | Mechanics | Revenue Split | Target Audience |
| :--- | :--- | :--- | :--- |
| **AdSense (CPM)** | Contextual/behavioral video ads | 55% Creator / 45% YouTube | General Viewers |
| **YouTube Premium** | Distributed based on watch time | Pro-rata share of sub fee | Ad-free subscribers |
| **Channel Memberships** | Monthly recurring tier payments | 70% Creator / 30% YouTube | Core Community |
| **Super Chat / Stickers** | Highlighted live chat messages | 70% Creator / 30% YouTube | Livestream Viewers |
| **Shorts Revenue Pool** | Shared revenue from loop ads | 45% Creator / 55% YouTube | Short-form Viewers |

> [!NOTE]
> **YPP Eligibility:** To join the YouTube Partner Program, creators typically need 1,000 subscribers and either 4,000 public watch hours in the last 12 months OR 10 million valid public Shorts views in the last 90 days.
---
## 📜 Content Moderation & Copyright
Operating a global public square means navigating complex copyright and safety laws.
### Content ID System
YouTube spent over $100 million developing **Content ID**, an automated matching system. Rights holders upload reference files to a database, and YouTube scans every upload against it.
When a match is found, the rights holder can:
- [x] **Block** the video globally or in specific territories.
- [x] **Monetize** the video by running ads against it (claiming the revenue).
- [x] **Track** the video's viewership statistics.
### Strike System
> [!WARNING]
> YouTube operates on a strict three-strike policy for Community Guidelines violations.
1. **First Strike:** The user is banned from uploading or streaming for 1 week.
2. **Second Strike:** The user is banned from uploading for 2 weeks (if within a 90-day window).
3. **Third Strike:** Permanent account termination.
---
## 💻 YouTube Video Media
can programmatically interact with YouTube using its a specific video.

```https://github.com/VideoTube-web/Videos/issues/1```
