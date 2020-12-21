const qBank = [
    {
        question:
            "Are you experiencing any feelings of restlessness or insecurity?",
        answers: ["yes", "no"],
        questionId: "01",
        type: "Root"
    },
    {
        question:
            "Are your legs feeling weak?",
        answers: ["yes", "no"],
        questionId: "02",
        type: "Root"
    },
    {
        question:
            "Are you having issues with your Bladder or Kidneys?",
        answers: ["yes", "no"],
        questionId: "03",
        type: "Root"
    },
    {
        question:
            "Are you experiencing pain or weakness in your lower back?",
        answers: ["yes", "no"],
        questionId: "04",
        type: "Root"
    },
    {
        question:
            "Is constipation a recent or ongoing issue?",
        answers: ["yes", "no"],
        questionId: "05",
        type: "Root"
    },
    {
        question:
            "Are you having feelings of anger or aggression?",
        answers: ["yes", "no"],
        questionId: "06",
        type: "Root"
    },
    {
        question:
            "Are you experiencing any strong feelings towards material things or experiencing sensations of greediness?",
        answers: ["yes", "no"],
        questionId: "07",
        type: "Root"
    },
    {
        question:
            "Are you experiencing reproductive issues or any changes in your sex drive?",
        answers: ["yes", "no"],
        questionId: "08",
        type: "Sacral"
    },
    {
        question:
            "Do you feel like you cannot commit to a relationship?",
        answers: ["yes", "no"],
        questionId: "09",
        type: "Sacral"
    },
    {
        question:
            "Do you have feelings of impotence or feel like you are being secretly betrayed?",
        answers: ["yes", "no"],
        questionId: "10",
        type: "Sacral"
    },
    {
        question:
            "Are you having trouble expressing your emotions?",
        answers: ["yes", "no"],
        questionId: "11",
        type: "Sacral"
    },
    {
        question:
            "Are you having trouble with your kidneys or your urinary system",
        answers: ["yes", "no"],
        questionId: "12",
        type: "Sacral"
    },
    {
        question:
            " Have you been experiencing pelvic issues?",
        answers: ["yes", "no"],
        questionId: "13",
        type: "Sacral"
    },
    {
        question:
            "Are you having issues with your creativity or problems experiencing pleasure in your everyday life?",
        answers: ["yes", "no"],
        questionId: "14",
        type: "Sacral"
    },
    {
        question:
            "Have you had issues with digestion or stomach ulcers?",
        answers: ["yes", "no"],
        questionId: "15",
        type: "SolarPlexus"
    },
    {
        question:
            " Have you had any liver problems, whether with alcohol or not?",
        answers: ["yes", "no"],
        questionId: "16",
        type: "SolarPlexus"
    },
    {
        question:
            " Do you experience chronic fatigue or issues with your energy levels?",
        answers: ["yes", "no"],
        questionId: "17",
        type: "SolarPlexus"
    },
    {
        question:
            " Do you feel strong in your feelings of personal power/self-esteem?",
        answers: ["yes", "no"],
        questionId: "18",
        type: "SolarPlexus"
    },
    {
        question:
            "Are you feeling extremely self-critical?",
        answers: ["yes", "no"],
        questionId: "19",
        type: "SolarPlexus"
    },
    {
        question:
            "Are you feeling extremely sensitive to criticism?",
        answers: ["yes", "no"],
        questionId: "20",
        type: "SolarPlexus"
    },
    {
        question:
            " Have you been overly concerned with your physical appearance?",
        answers: ["yes", "no"],
        questionId: "21",
        type: "SolarPlexus"
    },
    {
        question:
            "Do you have troubles with asthma or lung disease?",
        answers: ["yes", "no"],
        questionId: "22",
        type: "Heart"
    },
    {
        question:
            "Have you been experiencing pain in your upper back or shoulders?",
        answers: ["yes", "no"],
        questionId: "23",
        type: "Heart"
    },
    {
        question:
            "Have other expressed that they feel smothered by your attentions or affections?",
        answers: ["yes", "no"],
        questionId: "24",
        type: "Heart"
    },
    {
        question:
            "Are feelings of jealousy coming up a lot lately, whether it be in love, or work, or just jealousy of others in general??",
        answers: ["yes", "no"],
        questionId: "25",
        type: "Heart"
    },
    {
        question:
            "Have you been experiencing a lot of anger lately, or fear of abandonment?",
        answers: ["yes", "no"],
        questionId: "26",
        type: "Heart"
    },
    {
        question:
            "Are you having trouble with your arms or wrists?",
        answers: ["yes", "no"],
        questionId: "27",
        type: "Heart"
    },
    {
        question:
            "Are you scared to be single/alone?",
        answers: ["yes", "no"],
        questionId: "28",
        type: "Heart"
    },
    {
        question:
            "Have you been having issues with your thyroid?",
        answers: ["yes", "no"],
        questionId: "29",
        type: "Throat"
    },
    {
        question:
            "Do you feel like you have been communicating well with others?",
        answers: ["yes", "no"],
        questionId: "30",
        type: "Throat"
    },
    {
        question:
            "Are you having any pain in your neck or cervical spine issues?",
        answers: ["yes", "no"],
        questionId: "31",
        type: "Throat"
    },
    {
        question:
            "Do you feel like you have been having trouble with your willpower?",
        answers: ["yes", "no"],
        questionId: "32",
        type: "Throat"
    },
    {
        question:
            "Are you scared of losing your personal power or feel limited in your personal choices?",
        answers: ["yes", "no"],
        questionId: "33",
        type: "Throat"
    },
    {
        question:
            "Are you feeling strong in your ability to express yourself?",
        answers: ["yes", "no"],
        questionId: "34",
        type: "Throat"
    },
    {
        question:
            "Have you had any recent bouts of laryngitis or a sore throat?",
        answers: ["yes", "no"],
        questionId: "35",
        type: "Throat"
    },
    {
        question:
            "Have you had any issues with blurred vision or eyestrain?",
        answers: ["yes", "no"],
        questionId: "36",
        type: "ThirdEye"
    },
    {
        question:
            "Have you been having frequent headaches?",
        answers: ["yes", "no"],
        questionId: "37",
        type: "ThirdEye"
    },
    {
        question:
            "Do you find yourself frequently drifting off or daydreaming lately?",
        answers: ["yes", "no"],
        questionId: "38",
        type: "ThirdEye"
    },
    {
        question:
            "Are you experiencing frequent mood swings?",
        answers: ["yes", "no"],
        questionId: "39",
        type: "ThirdEye"
    },
    {
        question:
            " Are you having trouble with your sinuses or nasal passages?",
        answers: ["yes", "no"],
        questionId: "40",
        type: "ThirdEye"
    },
    {
        question:
            "Do you feel you have been having trouble facing your fears?",
        answers: ["yes", "no"],
        questionId: "41",
        type: "ThirdEye"
    },
    {
        question:
            "Are you quick to anger/volitility?",
        answers: ["yes", "no"],
        questionId: "42",
        type: "ThirdEye"
    },
    {
        question:
            "Have you been experiencing issues with depression or a sense of loss?",
        answers: ["yes", "no"],
        questionId: "43",
        type: "Crown"
    },
    {
        question:
            "Are you having trouble focusing or trouble learning new concepts?",
        answers: ["yes", "no"],
        questionId: "44",
        type: "Crown"
    },
    {
        question:
            "Are you very set in your thinking on religion or spirituality?",
        answers: ["yes", "no"],
        questionId: "45",
        type: "Crown"
    },
    {
        question:
            "Are you frequently experiencing feelings of confusion?",
        answers: ["yes", "no"],
        questionId: "46",
        type: "Crown"
    },
    {
        question:
            "Have you been unusually sensitive to light, sound and your general environment?",
        answers: ["yes", "no"],
        questionId: "47",
        type: "Crown"
    },
    {
        question:
            "Are you feeling or scared you will begin to feel alienated from your friends or family?",
        answers: ["yes", "no"],
        questionId: "48",
        type: "Crown"
    },
    {
        question:
            "Are you having issues with your sense of self-knowing or greater power?",
        answers: ["yes", "no"],
        questionId: "49",
        type: "Crown"
    },

];

// n = 5 to export 5 question
export default (n = 49) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));