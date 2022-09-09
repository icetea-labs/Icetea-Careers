export const CATEGORY_TYPE = {
  SOFTWARE_DEVELOPMENT: "software-development",
  MARKETING: "marketing",
  DESIGN_ART: "design-art",
  OPERATIONS: "operations",
  ALL: "",
};
export const categories = [
  { value: CATEGORY_TYPE.ALL, label: "-" },
  { value: CATEGORY_TYPE.SOFTWARE_DEVELOPMENT, label: "Software Development" },
  { value: CATEGORY_TYPE.MARKETING, label: "Marketing" },
  { value: CATEGORY_TYPE.DESIGN_ART, label: "Design & Art" },
  { value: CATEGORY_TYPE.OPERATIONS, label: "Operations" },
];
export const MAPPING_CATEGORY_TYPE_TEXT = {
  [CATEGORY_TYPE.SOFTWARE_DEVELOPMENT]: "Software Development",
  [CATEGORY_TYPE.MARKETING]: "Marketing",
  [CATEGORY_TYPE.DESIGN_ART]: "Design & Art",
  [CATEGORY_TYPE.OPERATIONS]: "Operations",
};

export const LEVEL_TYPE = {
  INTERN_FRESHER: "intern",
  JUNIOR: "junior",
  MIDDLE: "middle",
  SENIOR: "senior",
  LEADER: "leader",
  ALL: "",
};

export const levels = [
  { value: LEVEL_TYPE.ALL, label: "-" },
  { value: LEVEL_TYPE.INTERN_FRESHER, label: "Intern/Fresher" },
  { value: LEVEL_TYPE.JUNIOR, label: "Junior" },
  { value: LEVEL_TYPE.MIDDLE, label: "Middle" },
  { value: LEVEL_TYPE.SENIOR, label: "Senior" },
  { value: LEVEL_TYPE.LEADER, label: "Leader" },
];

export const MAPPING_LEVEL_TYPE_TEXT = {
  [LEVEL_TYPE.INTERN_FRESHER]: "Intern/Fresher",
  [LEVEL_TYPE.JUNIOR]: "Junior",
  [LEVEL_TYPE.MIDDLE]: "Middle",
  [LEVEL_TYPE.SENIOR]: "Senior",
  [LEVEL_TYPE.LEADER]: "Leader",
  [LEVEL_TYPE.ALL]: "All Levels",
};

export const LOCATION_TYPE = {
  HA_NOI: "ha-noi",
  HO_CHI_MINH: "ho-chi-minh",
  REMOTE: "remote",
};

export const locations = [
  { value: LOCATION_TYPE.HA_NOI, label: "Ha Noi" },
  { value: LOCATION_TYPE.HO_CHI_MINH, label: "Ho Chi Minh" },
  { value: LOCATION_TYPE.REMOTE, label: "Remote" },
];

export const MAPPING_LOCATION_TYPE_TEXT = {
  [LOCATION_TYPE.HA_NOI]: "Ha Noi",
  [LOCATION_TYPE.HO_CHI_MINH]: "Ho Chi Minh",
  [LOCATION_TYPE.REMOTE]: "Remote",
};
