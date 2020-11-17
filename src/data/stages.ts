import { Stage } from "../model/Stage";

const Stage1 = {
    startDate: new Date("Nov 15, 2020 19:30:00"),
    question: "V2F0IGlzIGhldCB2ZXJzY2hpbCBpbiBJU0JOIG51bW1lciB0dXNzZW4gaGV0IGVlcnN0ZSBib2VrIGVuIGRlIGx1aXN0ZXJib2VrIHZlcnNpZSB2YW4gaGV0IGxhYXRzdGUgYm9layB2YW4gbWlqbiBmYXZvcmlldGUgc2NocmlqdmVyPw==",
    answer: "Nzc4NDUyODI2NA==",
    clue: "V2hpdGU="
};

const Stage2 = {
    startDate: new Date("Nov 16, 2020 19:30:00"),
    question: "SWsgemF0IHZhbmRhYWcgaW4gZWVuIGtsZWluIHBhcmtqZSwgZW4gaWsgd291IG5hYXIgZGUgc3RlcnJlbiBnYWFuIGtpamtlbi4gSWsgbmFtIGRlIHNuZWxzdGUgd2VnIG5hYXIgbWlqbiB2ZXJ2b2Vyc21pZGRlbCwgZW4gc3Bvb3JkZSBlcm5hYXJ0b2UuIEhvZXZlZWwgbW9tZW50amVzIGR1dXJkZSBtaWpuIHJlaXMsIGFscyBqZSB3ZWV0IGRhdCBpayBvbSAxNy40OSBuYWFyIGRlIHN0ZXJyZW4ga2Vlaz8=",
    answer: "MzEuMzM=",
    clue: "aXM=",
    tips: ["Alle berekeningen werden gedaan met Google Maps.", "Antwoord tot op 2 cijfers na de komma."]
};

const Stage3 = {
    startDate: new Date("Nov 17, 2020 19:30:00"),
    question: "SWsgc3RhIG9wIGVlbiBkdWl2ZWxzZSBicnVnIG1ldCBkcmFrZW5ob29mZC4gSWsgYmVuIGdvZWQgdm9vcmJlcmVpZCBlbiByZWlzIG1ldCBtaWpuIHNjb290ZXIgb20gdGUgZ2FhbiBiaWRkZW4gYmlqIG1pam4gem9vbi4gRGFuIGdhIGlrIGxhbmdzIGJpaiBtaWpuIHZyb3V3ZW4sIGVuIGJpZGRlbiB3ZSBzYW1lbi4gSWsgZWluZGlnIG1pam4gZGFnIG1ldCAyMDAgZ2xpbWxhY2hlbi4gSG9ldmVlbCBrZWVyIG1vZXQgaWsgZGllIGRhZyB0YW5rZW4sIGFscyBqZSB3ZWV0IGRhdCBpayAxIGxpdGVyIGJlbnppbmUgb3AgMzUga2lsb21ldGVyIHZlcmJydWlrLiBJbiBtaWpuIHRhbmsga2FuIDYsNSBsaXRlci4=",
    answer: "Mi43MA==",
    clue: "TG9jYXRpZQ==",
    tips: ["Alle berekeningen werden gedaan met Google Maps.", "Antwoord tot op 2 cijfers na de komma."]
};

const Stage4 = {
    startDate: new Date("Nov 18, 2020 19:30:00"),
    question: "V2F0IGlzIGhldCBiZXN0ZSBiaWVyPw==",
    answer: "U3RlbGxh",
    clue: "SG91c2U="
};

export const encryptedStages: Stage[] = [Stage1, Stage2, Stage3, Stage4];
