import cultureLab from "../assets/images/programmes/Cultural Lab.jpg";
import keepOurLanguages from "../assets/images/programmes/Keep our languages.jpg";
import kidsCulturalExplorers from "../assets/images/programmes/Kids Cultural Explorers.jpg";
import beneathTheChitenge from "../assets/images/programmes/Beneath the Chitenge.jpg";
const programmes = [
    {
        id: "culture-lab",
        title: "Culture Lab",
        tagline: "Creativity • Innovation • Culture • Future Thinking",
        image: cultureLab,
        description:
            "A future-focused cultural innovation experience exploring how culture evolves, adapts and remains relevant in a changing world.",
        details: {
            about:
                "Culture Lab is a future-focused cultural innovation experience that explores how culture evolves, adapts, and remains relevant in a changing world. Through collaborative challenges, creative experimentation, technology, design thinking, and interactive discussions, participants are invited to explore new ways of experiencing, preserving, and reimagining culture while remaining connected to its roots.",
            duration: "2–3 Hours",
            audience: "Youth, Students, Creatives",
            expect: [
                "Creative cultural challenges and innovation activities",
                "Interactive discussions and collaborative learning",
                "Design thinking and problem-solving exercises",
                "Exploration of culture, technology and creativity",
                "Hands-on ideation and concept development",
                "Collaborative projects that reimagine culture for the future",
            ],
        },
    },
    {
        id: "keep-our-languages-alive",
        title: "Keep Our Languages Alive",
        tagline: "Language • Heritage • Storytelling • Community",
        image: keepOurLanguages,
        description:
            "An interactive cultural experience encouraging children, families and communities to celebrate, use and preserve Zambia’s rich linguistic heritage.",
        details: {
            about:
                "Keep Our Languages Alive is an interactive cultural experience that encourages children, families, and communities to celebrate, use, and preserve Zambia's rich linguistic heritage. Through games, storytelling, music, conversation, and creative activities, participants discover the joy of speaking, learning, and sharing local languages in engaging and meaningful ways.",
            duration: "2–3 Hours",
            audience:
                "Children, Families, Schools, Youth Groups & Community Organisations",
            expect: [
                "Interactive language games and challenges",
                "Storytelling and traditional folktales",
                "Songs, proverbs, riddles and tongue twisters",
                "Vocabulary and conversational activities",
                "Cultural crafts and creative expression",
                "Fun activities that celebrate Zambia's languages and traditions",
            ],
        },
    },
    {
        id: "kids-cultural-explorers",
        title: "Kids Cultural Explorers",
        tagline: "Play • Storytelling • Language • Discovery",
        image: kidsCulturalExplorers,
        description:
            "An interactive cultural experience inviting children to discover Zambia through play, storytelling, language, music, creativity and hands-on exploration.",
        details: {
            about:
                "Kids Cultural Explorers is an interactive cultural experience that invites children to discover Zambia through play, storytelling, language, music, creativity, and hands-on exploration. Each adventure introduces young explorers to the richness of Zambia's cultures, traditions, heritage, and everyday life through engaging activities designed to spark curiosity, confidence, and connection.",
            duration:
                "6 Weeks\nOne 90-minute guided storytelling circle each week",
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
    {
        id: "beneath-the-chitenge-circle",
        title: "Beneath the Chitenge Circle",
        tagline: "Storytelling • Interactive Activities • Creativity • Shared Experiences",
        image: beneathTheChitenge,
        description:
            "A six-week cultural experience where women connect through storytelling, creativity and shared experiences to discover, preserve, reimagine and create culture together.",
        details: {
            about:
                "Beneath the Chitenge Circle is a six week cultural experience for women that explores identity, belonging and culture through creativity, curiosity and participation. The programme invites women to move beyond simply talking about culture to actively discovering, experiencing, preserving, reimagining and creating it. Through interactive challenges, creative expression and shared experiences, participants are encouraged to see culture differently while exploring how it shapes their lives and how they, in turn, can shape its future. Whether through storytelling, cultural discovery, art, games or collaborative experiences, each session offers a welcoming space to connect, reflect and celebrate culture in contemporary and meaningful ways.",
            duration:
                "6 Weeks\n 1 Hour 30 Minutes",
            audience:
                "Women",
            expect: [
                "Interactive cultural experiences and creative challenges",
                "Storytelling, art and collaborative activities",
                "Opportunities to discover culture through people, places and everyday life",
                "Hands on experiences that encourage participation rather than observation",
                "Creative sessions exploring how culture can be preserved and reimagined",
                "Space to reflect, create and celebrate culture together",
            ],
        },
    },
];
export default programmes;