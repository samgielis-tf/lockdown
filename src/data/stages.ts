import { Stage } from "../model/Stage";

const Stage1 = {
    startDate: new Date("Nov 14, 2020 21:49:00"),
    question: "V2hvIGlzIHlvdXIgbW9t",
    answer: "R3JldGE=",
    clue: "TG9jYXRpZQ=="
};

const Stage2 = {
    startDate: new Date("Nov 13, 2020 19:30:00"),
    question: "V2hvIGlzIHlvdXIgc2lz",
    answer: "U3V6YW5uZQ==",
    clue: "aXM="
};

const Stage3 = {
    startDate: new Date("Nov 17, 2020 19:30:00"),
    question: "V2hvIGlzIHlvdXIgZGFk",
    answer: "Sm9z",
    clue: "V2hpdGU="
};

const Stage4 = {
    startDate: new Date("Nov 18, 2020 19:30:00"),
    question: "V2hvIGlzIHlvdXIgZ2lybA==",
    answer: "U2hhbm5h",
    clue: "SG91c2U="
};

export const encryptedStages: Stage[] = [Stage1, Stage2, Stage3, Stage4];
