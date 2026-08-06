
import zedTable from "../assets/images/experiences/Zed Table.jpg";
import cultureButDifferent from "../assets/images/experiences/Culture but different.jpg";
import kidsCulturalExplorers from "../assets/images/experiences/Kids Cultural Explorers.jpg"
import cookAndConnect from "../assets/images/experiences/Cook & Connect.jpg";
const experiences = [
    {
        id: "zed-table",
        type: "experience",
        title: "The Zed Table",
        tagline: "Conversation • Games • Food • Connection",
        image: zedTable,
        description:
            "Zed Speak’s flagship cultural experience series, bringing people together to experience culture in contemporary, engaging and meaningful ways.",
        details: {
            about:
                "The Zed Table is Zed Speak's flagship cultural experience series, bringing people together to experience culture in contemporary, engaging, and meaningful ways. Each edition explores a different theme through conversation, storytelling, interactive games, food, creativity, and connection—creating memorable experiences that celebrate, preserve, and reimagine Zambian culture.",
            duration: "2–3 Hours",
            audience:
                "Friends, Families, Community Groups, Teams & Organisations",
            expect: [
                "Interactive cultural games and challenges",
                "Guided conversations and storytelling",
                "Food, music and shared cultural experiences",
                "Creative activities and friendly competition",
                "Meaningful connections and new perspectives",
            ],
            formats: [
                "Conversations – Thought-provoking discussions exploring culture, identity and contemporary issues.",
                "Game Night – Fast-paced cultural games, quizzes and friendly competition.",
                "Food & Stories – Shared meals inspired by the stories, traditions and memories behind Zambian cuisine.",
                "Special Editions – Themed gatherings, collaborations and unique cultural experiences.",
            ],
        },
    },
    {
        id: "culture-but-different",
        type: "experience",
        title: "Culture, But Different: The Experience",
        tagline: "Discover • Experience • Preserve • Reimagine",
        image: cultureButDifferent,
        description:
            "A five-week interactive cultural journey that helps participants discover, experience, preserve and reimagine culture through immersive activities, storytelling and creative challenges.",
        details: {
            about:
                "Culture, But Different: The Experience is a five-week interactive cultural journey designed to help participants experience culture in fresh, unexpected and meaningful ways. Rather than learning about culture through lectures or observation, participants actively discover, experience, preserve and reimagine culture through interactive challenges, creative activities, collaborative games and shared experiences. From solving cultural quests and decoding traditions through the five senses to preserving culture through art and reimagining traditions for future generations, each week offers a different way of engaging with culture. Whether you arrive knowing a lot about culture or very little, the experience invites you to see familiar traditions, stories and everyday life through a completely different lens.",
            duration:
                "5 Weeks\nOne two-hour interactive cultural experience each week.",
            audience:
                "Young Adults, Adults, Individuals Curious About Culture, Community Groups, Corporate Teams, Schools & Universities, Creative Communities & Organisations Seeking Meaningful Team Experiences",
            expect: [
                "Interactive cultural games and challenges",
                "Storytelling with unexpected twists",
                "A live cultural discovery quest",
                "The Five Senses Challenge",
                "Collaborative art experiences",
                "Future-focused cultural design challenges",
                "Opportunities to connect with others through shared experiences",
            ],
        },
    },
    {
        id: "kids-cultural-explorers",
        type: "experience",
        title: "Kids Cultural Explorers",
        tagline: "Play • Storytelling • Language • Discovery",
        image: kidsCulturalExplorers,
        description:
            "An interactive cultural experience inviting children to discover Zambia through play, storytelling, language, music, creativity and hands- on exploration.",
        details: {
            about:
                "Kids Cultural Explorers is an interactive cultural experience that invites children to discover Zambia through play, storytelling, language, music, creativity, and hands-on exploration. Each adventure introduces young explorers to the richness of Zambia's cultures, traditions, heritage, and everyday life through engaging activities designed to spark curiosity, confidence, and connection.",
            duration: "6 Weeks\nOne 90-minute guided storytelling circle each week",
            audience: "Children between the ages of 6–15",
            expect: [
                "Play and cultural games",
                "Stories and imagination",
                "Music and movement",
                "Arts and creativity",
                "Language and discovery",
                "Team adventures",
            ],
        },
    },
];
export default experiences;