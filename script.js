const tools = [
    { name: "ChatGPT", link: "https://chat.openai.com", category: "text", type: "Free", description: "Conversational AI chatbot by OpenAI." },
    { name: "Google Bard", link: "https://bard.google.com", category: "text", type: "Free", description: "AI-powered chatbot by Google." },
    { name: "Claude AI", link: "https://www.anthropic.com", category: "text", type: "Free & Paid", description: "Anthropic’s AI-powered chatbot." },
    { name: "Jasper AI", link: "https://www.jasper.ai", category: "text", type: "Paid", description: "AI-powered copywriting assistant." },
    { name: "DeepL Translator", link: "https://www.deepl.com", category: "research", type: "Free & Paid", description: "AI-powered translation tool." },
    { name: "Synthesia", link: "https://www.synthesia.io", category: "video", type: "Paid", description: "AI-powered video creation with avatars." },
    { name: "Runway ML", link: "https://runwayml.com", category: "video", type: "Free & Paid", description: "AI-powered video editing & effects." },
    { name: "GitHub Copilot", link: "https://github.com/features/copilot", category: "coding", type: "Paid", description: "AI-powered code auto-completion." },
    { name: "Deepsick AI", link: "https://deepsick.ai", category: "coding", type: "Free & Paid", description: "AI-driven deep learning automation." },
    { name: "Tabnine", link: "https://www.tabnine.com", category: "coding", type: "Free & Paid", description: "AI-based coding assistant." },
    { name: "AIVA", link: "https://www.aiva.ai", category: "music", type: "Free & Paid", description: "AI music composition tool." },
    { name: "Boomy", link: "https://boomy.com", category: "music", type: "Free & Paid", description: "AI for generating music automatically." },
    { name: "Surfer SEO", link: "https://surferseo.com", category: "seo", type: "Paid", description: "AI-driven SEO content optimization." },
    { name: "MarketMuse", link: "https://www.marketmuse.com", category: "seo", type: "Paid", description: "AI-powered content research for SEO." },
    { name: "DALL·E", link: "https://openai.com/dall-e", category: "image", type: "Free & Paid", description: "AI-generated images by OpenAI." },
    { name: "MidJourney", link: "https://www.midjourney.com", category: "image", type: "Paid", description: "AI-powered image generation tool." },
    { name: "Deep Dream Generator", link: "https://deepdreamgenerator.com", category: "image", type: "Free & Paid", description: "AI-based deep learning image creation." },
    { name: "Artbreeder", link: "https://www.artbreeder.com", category: "image", type: "Free", description: "AI-generated artwork blending tool." },
    { name: "DeepAI Image Generator", link: "https://deepai.org/machine-learning-model/text2img", category: "image", type: "Free & Paid", description: "AI-powered text-to-image generation." }
];

// Function to generate 500+ AI tools dynamically
function generateMoreTools() {
    const categories = ["text", "image", "video", "research", "productivity", "coding", "music", "seo"];
    const types = ["Free", "Paid", "Free & Paid"];
    const sampleTools = ["AI Helper", "SmartAI", "AI Writer", "DeepVision", "AutoCode", "MusicGen", "SEO Boost", "VisionAI", "DataMind", "NeuroNet", "PromptCraft", "SynthX", "CodePro"];

    for (let i = 1; i <= 480; i++) {
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomType = types[Math.floor(Math.random() * types.length)];
        const randomTool = sampleTools[Math.floor(Math.random() * sampleTools.length)] + " " + i;
        tools.push({
            name: randomTool,
            link: "#",
            category: randomCategory,
            type: randomType,
            description: `An AI tool for ${randomCategory} tasks with smart automation.`
        });
    }
}

// Function to display tools by category
function displayTools(filter = "") {
    document.querySelectorAll(".tools").forEach(section => section.innerHTML = "");

    tools
        .filter(tool => tool.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(tool => {
            const toolCard = `
                <div class="tool-card">
                    <span class="badge ${tool.type.includes("Paid") ? "paid" : "free"}">${tool.type}</span>
                    <h3>${tool.name}</h3>
                    <p>${tool.description}</p>
                    <a href="${tool.link !== '#' ? tool.link : 'https://google.com'}" target="_blank" rel="noopener noreferrer">Visit</a>
                </div>`;
            document.querySelector(`.tools[data-category="${tool.category}"]`).innerHTML += toolCard;
        });
}


// Generate tools and display
generateMoreTools();
displayTools();

// Search functionality
document.getElementById("search").addEventListener("input", () => displayTools(event.target.value));
