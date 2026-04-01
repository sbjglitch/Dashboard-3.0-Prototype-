
import { StatCard } from "../components/StatCard";

export interface TableRow {
  id: string;
  name: string;
  level: number;
  parentId?: string;
  totalFiles: number;
  disposed: number;
  inProcess: number;
  rejected: number;
  returned: number;
  // Derived fields added by enrichRow
  delayed?: number;
  parkedFiles?: number;
  permanentDisposed?: number;
  disposedWithinSLI?: number;
  disposed1to30?: number;
  disposed30to100?: number;
  disposedAfter100?: number;
  withinSLI?: number;
  delayedInProcess?: number;
  delayedBy10?: number;
  delayedBy11to30?: number;
  delayedBy31to100?: number;
  delayedBy101to365?: number;
  delayedAfter365?: number;
  isSeat?: boolean;
  designation?: string;
}

export interface PaginationRow {
  isPagination: true;
  id: string;
  parentId: string;
  level: number;
  currentPage: number;
  totalPages: number;
}

export type TableItem = TableRow | PaginationRow;

export interface FileRecord {
  slNo: number;
  fileNo: string;
  fileDate: string;
  inwardNo: string;
}

// Standard correct order for Kerala Districts
export const DISTRICTS = [
  "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha",
  "Kottayam", "Idukki", "Ernakulam", "Thrissur", "Palakkad",
  "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod"
];

export interface DistrictData {
  district: string;
  corporation?: string;
  municipalities: string[];
  gramaPanchayaths: string[];
}

export const KERALA_LOCAL_BODIES: DistrictData[] = [
  {
    district: "Thiruvananthapuram",
    corporation: "Thiruvananthapuram Corporation",
    municipalities: ["Attingal", "Nedumangad", "Neyyattinkara", "Varkala"],
    gramaPanchayaths: [
      "Andoorkonam", "Anad", "Aruvikkara", "Aryanad", "Balaramapuram",
      "Chenkal", "Chirayinkeezhu", "Kadinamkulam", "Kallambalam",
      "Kalliyoor", "Kaniyapuram", "Karumkulam", "Kazhakkoottam",
      "Kizhuvilam", "Kottukal", "Kudappanamoodu", "Maranalloor",
      "Marudhoor", "Medayil", "Nagaroor", "Navaikulam", "Nellanad",
      "Ottasekharamangalam", "Pallichal", "Panavoor", "Parassala",
      "Perumkadavila", "Poovachal", "Poovar", "Pothencode",
      "Pullampara", "Sarkara", "Tholicode", "Thirupuram",
      "Uzhamalackal", "Vakkom", "Vamanapuram", "Vellanad",
      "Vilavoorkkal", "Vithura"
    ]
  },
  {
    district: "Kollam",
    corporation: "Kollam Corporation",
    municipalities: ["Karunagappally", "Kottiyam", "Paravur", "Punalur"],
    gramaPanchayaths: [
      "Adichanalloor", "Alappad", "Anchal", "Aryankavu", "Chavara",
      "Chadayamangalam", "Clappana", "Elamadu", "Ithikkara",
      "Kulasekharapuram", "Kulathupuzha", "Kottarakkara",
      "Mukhathala", "Munroe Island", "Mynagappally", "Nilamel",
      "Oachira", "Pavithreswaram", "Perinadu", "Perinad",
      "Pooyappally", "Sasthamkotta", "Thalavoor", "Thodiyoor", "Yeroor"
    ]
  },
  {
    district: "Pathanamthitta",
    municipalities: ["Adoor", "Pathanamthitta", "Thiruvalla"],
    gramaPanchayaths: [
      "Aranmula", "Ayiroor", "Chittar", "Elanthoor", "Enadimangalam",
      "Ezhamkulam", "Kalanjoor", "Koodal", "Kozhencherry", "Kulanada",
      "Mallappuzhassery", "Mylapra", "Naranganam", "Niranam",
      "Omalloor", "Perunadu", "Pramadom", "Ranni",
      "Seethathode", "Thannithodu", "Thumpamon", "Vechoochira"
    ]
  },
  {
    district: "Alappuzha",
    municipalities: ["Alappuzha", "Cherthala", "Kayamkulam", "Mavelikkara"],
    gramaPanchayaths: [
      "Ala", "Ambalappuzha North", "Ambalappuzha South", "Arookutty",
      "Aroor", "Budhanoor", "Chambakulam", "Chenganoor", "Cheriyanad",
      "Chunakkara", "Edathua", "Ezhupunna", "Kandalloor", "Kanjikuzhy",
      "Karuvatta", "Karthikappally", "Mankombu", "Mararikulam North",
      "Mararikulam South", "Muhamma", "Muthukulam", "Pulinkunnu",
      "Punnapra North", "Punnapra South", "Ramankari", "Thakazhy",
      "Thalavady", "Thuravoor", "Vayalar", "Veeyapuram"
    ]
  },
  {
    district: "Kottayam",
    municipalities: ["Changanacherry", "Kanjirappally", "Kottayam", "Pala", "Vaikom"],
    gramaPanchayaths: [
      "Arpookara", "Aymanam", "Chirakkadavu", "Erattupetta", "Ettumanoor",
      "Kadanad", "Kadaplamattom", "Karukachal", "Kidangoor", "Koruthodu",
      "Kumarakom", "Madappally", "Marangattupilly", "Meenachil",
      "Melukavu", "Moolavattom", "Mundakkayam", "Muttambalam",
      "Panachikkad", "Panamattom", "Poovarani", "Punnathura",
      "Thalayolaparambu", "Thidanad", "Uzhavoor", "Vazhoor",
      "Vechoor", "Vijayapuram"
    ]
  },
  {
    district: "Idukki",
    municipalities: ["Thodupuzha"],
    gramaPanchayaths: [
      "Adimali", "Ayyappancoil", "Azhutha", "Bisonvalley", "Chemmannu",
      "Devikulam", "Edavetty", "Erattayar", "Kamakshy", "Karimannoor",
      "Keezhillam", "Konnathady", "Kudayathoor", "Kumaramangalam",
      "Manakkad", "Mannoor", "Marayoor", "Mariyapuram", "Moolamattom",
      "Nedumkandam", "Pampadumpara", "Pambavayal", "Purappuzha",
      "Rajakumari", "Santhanpara", "Senapathy", "Udumbannoor",
      "Upputhara", "Vandiperiyar"
    ]
  },
  {
    district: "Ernakulam",
    corporation: "Kochi Corporation",
    municipalities: [
      "Aluva", "Angamaly", "Kothamangalam", "Muvattupuzha",
      "North Paravur", "Perumbavoor", "Thrippunithura"
    ],
    gramaPanchayaths: [
      "Aikkaranad", "Alengad", "Amballoor", "Asamannoor", "Avoly",
      "Chendamangalam", "Cheranalloor", "Chittattukara", "Choornikara",
      "Elanji", "Eloor", "Kadungalloor", "Kanjoor", "Karukutty",
      "Karumalloor", "Keezhmad", "Koothattukulam", "Koovappady",
      "Kumbalangi", "Kunnukara", "Mazhuvannoor", "Mulavukad",
      "Mulanthuruthy", "Nayarambalam", "Nedumbassery", "Njarakkal",
      "Okkal", "Pambakuda", "Piravom", "Pootrikka", "Pothanicad",
      "Rayamangalam", "Ramamangalam", "Thiruvaniyoor", "Thrikkakara",
      "Thuravoor", "Udayamperoor", "Vadakkekara", "Vazhakkulam",
      "Vengola", "Vengoor"
    ]
  },
  {
    district: "Thrissur",
    corporation: "Thrissur Corporation",
    municipalities: [
      "Chalakudy", "Chavakkad", "Guruvayur", "Irinjalakuda",
      "Kodungallur", "Kunnamkulam"
    ],
    gramaPanchayaths: [
      "Adat", "Alagappanagar", "Ammadam", "Anthikkad", "Cherpu",
      "Chowannur", "Engandiyoor", "Kadavallur", "Kadukutty", "Kallur",
      "Karalam", "Katoor", "Kattakampal", "Kuriachira", "Manalur",
      "Marathakkara", "Meloor", "Mulankunnathukavu", "Muriyad",
      "Nadathara", "Nanminda", "Nattika", "Ollur", "Panjal",
      "Paralam", "Peramangalam", "Porkkulam", "Pottore", "Puthur",
      "Thalikkulam", "Thaloor", "Thiruvilwamala", "Vallachira",
      "Vellangallur", "Velur"
    ]
  },
  {
    district: "Palakkad",
    municipalities: [
      "Chittur-Thathamangalam", "Mannarkkad", "Ottappalam",
      "Palakkad", "Shornur", "Thrithala"
    ],
    gramaPanchayaths: [
      "Agali", "Alathur", "Anangadi", "Ayilur", "Chalavara",
      "Cherpulassery", "Eruthenpathy", "Elavanchery",
      "Kavassery", "Kizhekkencheri", "Koduvayur", "Kollengode",
      "Koonathara", "Kozhinjampara", "Lakkidi-Perur", "Manapullikavu",
      "Mathur", "Mundur", "Muthalamada", "Nattukal", "Nelliampathy",
      "Nemmara", "Parali", "Paruthur", "Pattambi", "Pudussery",
      "Sreekrishnapuram", "Tarur", "Thenkurissi", "Thrikkadeeri",
      "Vadakarapathy", "Vandazhy", "Vellanthur", "Vilayur", "Walayar"
    ]
  },
  {
    district: "Malappuram",
    municipalities: [
      "Kondotty", "Manjeri", "Parappanangadi", "Perinthalmanna",
      "Ponnani", "Tanur", "Tirur", "Tirurrangadi", "Valanchery"
    ],
    gramaPanchayaths: [
      "Areacode", "Chelembra", "Chemmad", "Edappal", "Elamkulam",
      "Kallachi", "Karuvarakkundu", "Kottakkal", "Kottoor", "Kuruva",
      "Makkaraparamb", "Mampad", "Mankada", "Mannarkad", "Maranchery",
      "Melattur", "Moothedam", "Morayur", "Nilambur", "Pallikkal",
      "Puzhakkattiri", "Tavanur", "Thiruvali", "Tiruvambadi",
      "Trikkavu", "Vallikkunnu", "Wandoor"
    ]
  },
  {
    district: "Kozhikode",
    corporation: "Kozhikode Corporation",
    municipalities: ["Koyilandy", "Ramanattukara", "Vadakara"],
    gramaPanchayaths: [
      "Azhiyoor", "Balussery", "Chathamangalam", "Chelannur",
      "Cheruvannur", "Chombala", "Chorode", "Feroke", "Kadalundi",
      "Kakkodi", "Kodiyathur", "Kottur", "Kunnamangalam", "Koodaranji",
      "Kunnummal", "Kuruvattur", "Maruthonkara", "Meladi", "Moodadi",
      "Nadapuram", "Nanminda", "Narippatta", "Olavanna", "Onchiyam",
      "Panniyankara", "Perambra", "Purameri", "Thalakkulathur",
      "Thamarassery", "Thiruvallur", "Ulliyeri", "Unnikulam", "West Eleri"
    ]
  },
  {
    district: "Wayanad",
    municipalities: ["Kalpetta", "Mananthavady", "Sulthan Bathery"],
    gramaPanchayaths: [
      "Ambalavayal", "Chundale", "Edavaka", "Meenangadi", "Meppadi",
      "Mullankolly", "Nenmeni", "Padinharathara", "Poothadi",
      "Pozhuthana", "Pulpally", "Thavinjal", "Thirunelly",
      "Thrissilery", "Vellamunda", "Vythiri"
    ]
  },
  {
    district: "Kannur",
    corporation: "Kannur Corporation",
    municipalities: ["Iritty", "Mattannur", "Payyanur", "Thalassery"],
    gramaPanchayaths: [
      "Azhikode", "Cherukunnu", "Chirakkal", "Dharmadam", "Edakkad",
      "Kadachira", "Kalliasseri", "Kelakam", "Koothuparamba",
      "Kottiyoor", "Kurumathur", "Mangattidam", "Mokeri",
      "Muzhappilangad", "Narath", "Padiyoor", "Panoor", "Payyavoor",
      "Peravoor", "Pinarayi", "Sreekandapuram", "Taliparamba",
      "Thillankeri", "Udayagiri", "Valapattanam", "Vengad"
    ]
  },
  {
    district: "Kasaragod",
    municipalities: ["Kanhangad", "Kasaragod"],
    gramaPanchayaths: [
      "Ajanur", "Badiadka", "Balal", "Bellur", "Cheruvathur",
      "Chittarikkal", "Delampady", "Eleri", "Karadka", "Kottachery",
      "Kodom-Belur", "Kudlu", "Kumbadaje", "Kumbla", "Madhur",
      "Manjeswaram", "Mogral Puthur", "Muliyar", "Naimarmoola",
      "Panathady", "Perdala", "Pilicode", "Pullur-Periya",
      "Rajapuram", "Trikkarippur", "Uppala", "Vorkady"
    ]
  }
];

// Deterministic pseudo-random for consistent mock figures
export const hashNum = (str: string): number => {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
};
export const mockNum = (seed: string, min: number, max: number) =>
  min + (hashNum(seed) % (max - min + 1));

/** Derives all extended sub-fields from the base row fields deterministically */
export const enrichRow = (row: TableRow): TableRow => {
  const { id, totalFiles, disposed, inProcess } = row;
  const delayed = mockNum(id + "del", Math.max(1, Math.floor(totalFiles * 0.04)), Math.max(2, Math.floor(totalFiles * 0.09)));
  const parkedFiles = mockNum(id + "pk", Math.max(1, Math.floor(disposed * 0.08)), Math.max(2, Math.floor(disposed * 0.14)));
  const permanentDisposed = Math.max(0, disposed - parkedFiles);
  const pct_sli = 55 + mockNum(id + "sli", 0, 15);
  const disposedWithinSLI = Math.floor(permanentDisposed * pct_sli / 100);
  const pct_d30 = 18 + mockNum(id + "d30", 0, 8);
  const disposed1to30 = Math.floor(permanentDisposed * pct_d30 / 100);
  const pct_d100 = 12 + mockNum(id + "d100", 0, 6);
  const disposed30to100 = Math.floor(permanentDisposed * pct_d100 / 100);
  const disposedAfter100 = Math.max(0, permanentDisposed - disposedWithinSLI - disposed1to30 - disposed30to100);
  const pct_wsli = 70 + mockNum(id + "wsli", 0, 15);
  const withinSLI = Math.floor(inProcess * pct_wsli / 100);
  const delayedInProcess = Math.max(0, inProcess - withinSLI);
  const pct_db10 = 25 + mockNum(id + "db10", 0, 10);
  const delayedBy10 = Math.floor(delayed * pct_db10 / 100);
  const pct_db1130 = 28 + mockNum(id + "db1130", 0, 8);
  const delayedBy11to30 = Math.floor(delayed * pct_db1130 / 100);
  const pct_db31100 = 20 + mockNum(id + "db31100", 0, 6);
  const delayedBy31to100 = Math.floor(delayed * pct_db31100 / 100);
  const pct_db101365 = 12 + mockNum(id + "db101365", 0, 5);
  const delayedBy101to365 = Math.floor(delayed * pct_db101365 / 100);
  const delayedAfter365 = Math.max(0, delayed - delayedBy10 - delayedBy11to30 - delayedBy31to100 - delayedBy101to365);
  return {
    ...row,
    delayed,
    parkedFiles,
    permanentDisposed,
    disposedWithinSLI,
    disposed1to30,
    disposed30to100,
    disposedAfter100,
    withinSLI,
    delayedInProcess,
    delayedBy10,
    delayedBy11to30,
    delayedBy31to100,
    delayedBy101to365,
    delayedAfter365,
  };
};

export const DESIGNATIONS = [
  "Secretary", "Assistant Engineer", "Junior Superintendent",
  "Senior Clerk", "Assistant Secretary", "Town Planner"
];

// District code abbreviations for file numbers
export const DISTRICT_CODES: Record<string, string> = {
  thiruvananthapuram: "TVM", kollam: "KLM", pathanamthitta: "PTA",
  alappuzha: "ALP", kottayam: "KTM", idukki: "IDK", ernakulam: "EKM",
  thrissur: "TSR", palakkad: "PKD", malappuram: "MLP", kozhikode: "KZD",
  wayanad: "WYD", kannur: "KNR", kasaragod: "KGD"
};

export const generateMockData = (): TableRow[] => {
  const data: TableRow[] = [];

  KERALA_LOCAL_BODIES.forEach((distData) => {
    const distId = distData.district.toLowerCase().replace(/\s+/g, "-");

    const dTotal = mockNum(distId, 5000, 9000);
    data.push({
      id: distId,
      name: distData.district,
      level: 1,
      totalFiles: dTotal,
      disposed: mockNum(distId + "d", 1200, 3000),
      inProcess: mockNum(distId + "i", 900, 2000),
      rejected: mockNum(distId + "r", 300, 800),
      returned: mockNum(distId + "ret", 300, 800),
    });

    // Corporation — directly at Level 2
    if (distData.corporation) {
      const corpId = `${distId}-corp`;
      data.push({
        id: corpId,
        parentId: distId,
        name: distData.corporation,
        level: 2,
        totalFiles: mockNum(corpId, 1500, 3000),
        disposed: mockNum(corpId + "d", 400, 900),
        inProcess: mockNum(corpId + "i", 300, 700),
        rejected: mockNum(corpId + "r", 80, 250),
        returned: mockNum(corpId + "ret", 80, 250),
      });
      for (let j = 1; j <= 8; j++) {
        const sId = `${corpId}-seat${j}`;
        data.push({
          id: sId,
          parentId: corpId,
          name: `JC-${j}`,
          level: 3,
          isSeat: true,
          totalFiles: mockNum(sId, 40, 100),
          disposed: mockNum(sId + "d", 10, 30),
          inProcess: mockNum(sId + "i", 8, 24),
          rejected: mockNum(sId + "r", 2, 10),
          returned: mockNum(sId + "ret", 2, 10),
          designation: DESIGNATIONS[mockNum(sId, 0, DESIGNATIONS.length - 1)],
        });
      }
    }

    // Municipalities category
    if (distData.municipalities.length > 0) {
      const munCatId = `${distId}-mun`;
      data.push({
        id: munCatId,
        parentId: distId,
        name: "Municipalities",
        level: 2,
        totalFiles: mockNum(munCatId, 900, 2200),
        disposed: mockNum(munCatId + "d", 250, 700),
        inProcess: mockNum(munCatId + "i", 180, 550),
        rejected: mockNum(munCatId + "r", 60, 200),
        returned: mockNum(munCatId + "ret", 60, 200),
      });
      distData.municipalities.forEach((munName) => {
        const munId = `${munCatId}-${munName.toLowerCase().replace(/[\s\-]+/g, "-")}`;
        data.push({
          id: munId,
          parentId: munCatId,
          name: munName,
          level: 3,
          totalFiles: mockNum(munId, 200, 600),
          disposed: mockNum(munId + "d", 50, 180),
          inProcess: mockNum(munId + "i", 40, 140),
          rejected: mockNum(munId + "r", 15, 55),
          returned: mockNum(munId + "ret", 15, 55),
        });
        for (let j = 1; j <= 8; j++) {
          const sId = `${munId}-seat${j}`;
          data.push({
            id: sId,
            parentId: munId,
            name: `JC-${j}`,
            level: 4,
            isSeat: true,
            totalFiles: mockNum(sId, 20, 60),
            disposed: mockNum(sId + "d", 5, 20),
            inProcess: mockNum(sId + "i", 4, 16),
            rejected: mockNum(sId + "r", 1, 6),
            returned: mockNum(sId + "ret", 1, 6),
            designation: DESIGNATIONS[mockNum(sId, 0, DESIGNATIONS.length - 1)],
          });
        }
      });
    }

    // Grama Panchayaths category
    const gpCatId = `${distId}-gp`;
    data.push({
      id: gpCatId,
      parentId: distId,
      name: "Grama Panchayaths",
      level: 2,
      totalFiles: mockNum(gpCatId, 2000, 5000),
      disposed: mockNum(gpCatId + "d", 600, 1500),
      inProcess: mockNum(gpCatId + "i", 400, 1100),
      rejected: mockNum(gpCatId + "r", 120, 400),
      returned: mockNum(gpCatId + "ret", 120, 400),
    });
    distData.gramaPanchayaths.forEach((gpName) => {
      const gpId = `${gpCatId}-${gpName.toLowerCase().replace(/[\s\-]+/g, "-")}`;
      data.push({
        id: gpId,
        parentId: gpCatId,
        name: gpName,
        level: 3,
        totalFiles: mockNum(gpId, 80, 280),
        disposed: mockNum(gpId + "d", 20, 80),
        inProcess: mockNum(gpId + "i", 15, 65),
        rejected: mockNum(gpId + "r", 5, 22),
        returned: mockNum(gpId + "ret", 5, 22),
      });
      for (let j = 1; j <= 8; j++) {
        const sId = `${gpId}-seat${j}`;
        data.push({
          id: sId,
          parentId: gpId,
          name: `JC-${j}`,
          level: 4,
          isSeat: true,
          totalFiles: mockNum(sId, 8, 35),
          disposed: mockNum(sId + "d", 2, 12),
          inProcess: mockNum(sId + "i", 2, 10),
          rejected: mockNum(sId + "r", 1, 4),
          returned: mockNum(sId + "ret", 1, 4),
          designation: DESIGNATIONS[mockNum(sId, 0, DESIGNATIONS.length - 1)],
        });
      }
    });
  });

  return data;
};

export const mockData = generateMockData().map(enrichRow);

/** Build ancestor chain from root → seat */
export const getAncestors = (id: string): TableRow[] => {
  const ancestors: TableRow[] = [];
  let currentId: string | undefined = id;
  while (currentId) {
    const row = mockData.find((r) => r.id === currentId);
    if (!row) break;
    ancestors.unshift(row);
    currentId = row.parentId;
  }
  return ancestors;
};

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Generate dummy file records for a seat */
export const generateFiles = (seatId: string, count: number, moduleName: string): FileRecord[] => {
  // root district segment → code
  const distKey = seatId.split("-")[0];
  const code = DISTRICT_CODES[distKey] ?? "KL";
  const prefix = moduleName.split(" ").map(w => w[0]).join("").substring(0, 3).toUpperCase();
  const files: FileRecord[] = [];
  for (let i = 1; i <= count; i++) {
    const seed = `${seatId}-file-${i}`;
    const year = 2023 + (hashNum(seed + "y") % 2);
    const month = 1 + (hashNum(seed + "m") % 12);
    const day = 1 + (hashNum(seed + "d") % 28);
    const serial = String(hashNum(seed + "s") % 90000 + 10000);
    const inwardSerial = String(hashNum(seed + "iw") % 900000 + 100000);
    files.push({
      slNo: i,
      fileNo: `${prefix}/${code}/${year}/${serial}`,
      fileDate: `${String(day).padStart(2, "0")} ${MONTHS[month - 1]} ${year}`,
      inwardNo: `INW/${year}/${code}/${inwardSerial}`,
    });
  }
  return files;
};
