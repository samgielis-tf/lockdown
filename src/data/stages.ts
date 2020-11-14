import { Stage } from "../model/Stage";

const Stage1 = {
    startDate: new Date("Nov 15, 2020 19:30:00"),
    question: "V2hvIGlzIHlvdXIgbW9t",
    answer: "",
    clue: "TG9jYXRpZQ=="
};

const Stage2 = {
    startDate: new Date("Nov 16, 2020 19:30:00"),
    question: "",
    answer: "",
    clue: "aXM="
};

const Stage3 = {
    startDate: new Date("Nov 17, 2020 19:30:00"),
    question: "V2hvIGlzIHlvdXIgZGFk",
    answer: "",
    clue: "V2hpdGU="
};

const Stage4 = {
    startDate: new Date("Nov 18, 2020 19:30:00"),
    question: "",
    answer: "",
    clue: "SG91c2U="
};

export const encryptedStages: Stage[] = [Stage1, Stage2, Stage3, Stage4];
