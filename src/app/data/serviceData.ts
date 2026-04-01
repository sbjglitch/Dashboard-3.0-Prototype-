export interface ServiceData {
  [module: string]: {
    [subModule: string]: string[];
  };
}

export const MODULE_DATA: ServiceData = {
  "All Module": {
    "Overview": ["Summary Dashboard"]
  },
  "Building Permissions": {
    "Permit & Approval": [
      "Building fitness / Building Fitness Certificate",
      "Building Permits Under Govt. Schemes",
      "Land Development",
      "Intimation Temporary Huts ,sheds and SFR buildings upto 100 m2",
      "Intimation-Demolition of a Construction",
      "Movement permit for ordinary earth",
      "Intimation-Telecommunication Tower",
      "Self-certified permit(SCP)",
      "General Permit",
      "Regularisation",
      "Government Schemes",
      "Correction & Resubmit",
      "Building Permit/Regularisation- legacy files",
      "Plot Sub division including land developments",
      "Regularisation of Unauthorised Construction",
      "Intimation of construction- Category II Panchayats",
      "Intimation of construction for Livestock building",
      "Intimation of construction for Mechanical Parking Structures",
      "Intimation of Contruction of Electric Vehicle battery charging stations",
      "Intimation for construction of Govt Building",
      "Reports"
    ],
    "Post Permit": [
      "Revised permit",
      "Construction level Inspection",
      "Renewal/Extension of permit",
      "Completion certificate",
      "Revoke the Permit",
      "Occupancy Certificate",
      "Assign New Licensee",
      "Change Owners in Permit",
      "Licensee withdrawal in Permit",
      "Import Your Permit to K Smart",
      "Intimations by licensee on Violation from permitted plans",
      "Completion certificate residential under 150sqm",
      "Occupancy Partial Completion",
      "Remove the existing licensee by Owners",
      "Refund fee in Building Permit",
      "Telecommunication Tower Occupancy Completion",
      "Intimation of Completion of building construction in Category II Panchayats",
      "Intimation of Completion of construction of Livestock building",
      "Intimation of Completion of construction for Mechanical Parking Structures",
      "Intimation of Completion of construction of Electric Vehicle battery charging stations",
      "Intimation of Completion of construction of Govt Building"
    ],
    "Enforcement": [
      "Mobile towers - Complaint",
      "Septic tank/soak pit condition violations - Complaint",
      "Unauthorised construction - Complaint"
    ]
  },
  "Property Tax": {
    "Assessment services": [
      "Tax Appeal",
      "New Tax Assessment (Form 2)",
      "Tax Re-assessment",
      "Tax Re-Assessment by Split",
      "Unauthorized to Authorized Application",
      "Tax Re-Assessment without Occupancy"
    ],
    "Tax Payments": [
      "Pay Building Tax",
      "Property Tax Related Other Activities",
      "Property tax legacy receipt collection"
    ],
    "Buiding Services": [
      "Manage Buildings",
      "Link My Buildings",
      "Report Data Missing Building",
      "Tax Exemption",
      "Tax Exemption Revoke",
      "Vacancy Remission",
      "Vacancy Remission Revoke",
      "Intimation of Demolition",
      "Ownership Change",
      "Add/Update Building Changes"
    ],
    "Certificates": [
      "Building Certificates",
      "Residence Certificate"
    ],
    "Employee - Operator": [
      "Vacancy Revoke - Employee",
      "Tax Exemption Revocation - Employee",
      "Intimation of Demolition - Employee",
      "Receipt Entry - Employee",
      "Building Search - Employee",
      "New Tax Assessment - Employee",
      "Link My Buildings - Employee",
      "Field Reports - Employee",
      "Ownership Change - Employee",
      "Vacancy Remission - Employee",
      "Tax Exemption - Employee",
      "Tax Recovery - Employee",
      "Data Correction Request - Employee",
      "Settings - Employee",
      "Tax Reassessment",
      "Authorized to Unauthorized Buildings - Employee",
      "Tax Recovery Revoke",
      "Unauthorized Building - New Entry",
      "Receipt Entry Cancellation",
      "Write-Off",
      "Penal Interest Advance Adjustment",
      "Revoke of Blocked Building",
      "Blocked Building",
      "Tax Re-Calculator Service",
      "Ward Delimitation"
    ],
    "Data correction": [
      "Property tax data correction - Grievance"
    ]
  },
  "Finance Management": {
    "Accounts": [
      "Refund of Security deposit",
      "Refund of Performance guarantee",
      "Refund of Receipt",
      "Refund of Auction Deposit",
      "Accounts",
      "Recovery Payments",
      "Bank to Bank Contra Entry",
      "Self Cheque Creation",
      "Journal Entry",
      "Opening Balance Entry",
      "Receipt Reverse Entry",
      "Payment Order Cancellation",
      "Bank Account Creation",
      "Cheque Entry",
      "Paymentorder Generation",
      "Payment Generation",
      "Counter Collection remittance",
      "Direct Receipt",
      "Standing Demand",
      "Requisition",
      "Grant Receipt",
      "Fund Bank Account Mapping",
      "Receipt Cancellation",
      "Bank Reconcillation",
      "Treasury Bill Cancellation",
      "Imprest",
      "Imprest for Cashier",
      "Reciepts / Utilisation Certificate",
      "Refund of Unutilised Grants",
      "Revenue Recovery",
      "Refund of Retention",
      "Other Institutions expences",
      "Adjustment of Deposits",
      "ZERO HOUR PROCESS"
    ],
    "Budget": [
      "Purchase of Land",
      "Budget preparation",
      "Construction of Road",
      "Construction of Building",
      "Construction of Building- Administrative",
      "Construction of Building-Commercial",
      "Construction of Building - Income Generative",
      "Maintenance of Road",
      "Maintenance of Building",
      "Maintenance of other Asset,Goods And Service",
      "Purchase of Vehicle",
      "Purchase of Fixtures, Furnitures and Equipments",
      "Purchase of Machineries",
      "Purchase of Furniture,Electrical and Fixtures",
      "Purchase of Others",
      "Cash Payment of Beneficieries",
      "Cash Payment of Beneficierie Group",
      "Goods& Service Distribution of Beneficieries",
      "Goods& Service Distribution of Beneficierie Group",
      "Administrative Expenses - LB",
      "Administrative Expenses - Allied Institutions",
      "Establishment Expenses - LB",
      "Establishment Expenses - Allied Institutions",
      "Expenses related to Elected Representatives",
      "Financial Contribution",
      "Joint Venture Project",
      "Functional Expenditure",
      "Functional Execution",
      "Social Security Related Activities",
      "Tax Recoveries",
      "Employee Related Recoveries",
      "Recoveries Payable-Audit Recovery",
      "Loans",
      "Advances",
      "Deposits",
      "Other Refunds Payable",
      "Write off, Provision and depreciation",
      "Budget Entry",
      "Budget Presentation Process",
      "Plan - Budget integration"
    ],
    "Finance": [
      "Finance Management",
      "Public fund misuse - Complaint",
      "Cash Disbursement",
      "Cash Counter",
      "CSR fund /Donations/Contributions"
    ],
    "Audit": [
      "Audit",
      "Audit & Inspections(AG BDO)",
      "Certificate showing Non Liability"
    ]
  },
  "Civil Registration": {
    "Birth/Death penalities": [
      "Penality for violating the provisions of Birth and Death act",
      "Penality for not reporting the birth/death (Section 23(1),23(4))",
      "Penality for not reporting the birth/death (Section 23(1)(A),23(4)(A))",
      "Penality for not issuing Certificate under section 12",
      "Penality for not giving MCCD (Section 23 (3))",
      "Violating the provisions of Birth and Death act",
      "Birth-Prosecution process"
    ],
    "Civil Registration Suite": [
      "Birth registration - suits",
      "Death Registration - suits",
      "Common marriage registration - suits",
      "Civil Registration-Correspondence"
    ],
    "Birth registration-abandoned": [
      "New Birth Registration - abandoned Child",
      "New Birth Registration - abandoned Child Hospital with in 21 days",
      "New Birth Registration - abandoned Child (RDO proceedings)"
    ],
    "Birth Registration-adoption": [
      "New Birth Registration - adoption with in 21 days",
      "New Birth Registration - adoption after 21 days to 30 days",
      "New Birth Registration - adoption after 30 days to 1 year",
      "New Birth Registration - adoption after 1 year",
      "New Birth Registration - adoption without legal procedure"
    ],
    "Birth Registration-Born out side india": [
      "New birth registration - Reporting date with in 60 days of arrival",
      "New birth registration - Reporting date after 60 days of arrival"
    ],
    "Birth Search": [
      "Search for a single entry (First year)",
      "For every year for which the search is continued"
    ],
    "Certificate download": [
      "Certificate download"
    ],
    "Common marriage New Registration": [
      "Marriage registration with in 45 days",
      "Marriage registration with in 45 days (SC/ST/BPL)",
      "Marriage registration after 45 days to five year",
      "Marriage registration after five year"
    ],
    "Common marriage Registration (correction)": [
      "Common marriage Registration correction service",
      "Common marriage correction in Date/Age/Name",
      "Marriage (Common )-Action on Order of Appeal/Revision"
    ],
    "Common marriage Registration certificate download": [
      "Marriage Certificate (first certificate)",
      "Marriage Certificate (next onwards)",
      "Marriage Certificate search"
    ],
    "Corrections in Birth Registration": [
      "All other corrections except Name correction",
      "All other birth certificate corrections before 1/04/1970"
    ],
    "Corrections in Death Registration": [
      "Corrections in Death Registration",
      "Death Correction before 1/04/1970"
    ],
    "Death registration - abandoned": [
      "New Death Registration - abandoned body",
      "New death Registration abandoned body Hospital after 21 days"
    ],
    "Death Search": [
      "Search for a single entry (Death)",
      "for every year for which search is continued (Death)"
    ],
    "Death Certificate": [
      "Certificate download (Death)"
    ],
    "Hindu marriage Certificate": [
      "Marriage Certificate download (Hindu)",
      "Hindu marriage Registration Up to 30 days"
    ],
    "Name Correction of Child": [
      "Name correction of child",
      "Name correction - difference in DOB from School certificate"
    ],
    "Name inclusion of Child": [
      "Name inclusion of child before one year",
      "Name inclusion after one year or age after 6 years",
      "Name inclusion - difference in DOB from School certificate",
      "Name inclusion - registrations before 1/04/1970"
    ],
    "New Birth Registration": [
      "New birth Registration with in 21 days",
      "New birth registration after 1 year",
      "New birth Registration Hospital with in 21 days",
      "New birth registration after 1 year with RDO proceedings",
      "Birth-Cancellation of Registration"
    ],
    "New Death registration": [
      "New Death Registration with in 21 days",
      "New death Registration Hospital with in 21 days",
      "New Death registration after 1 year with RDO proceedings",
      "Death-Re creation of Registration"
    ],
    "Non - Availability Certificate": [
      "Granting Non - Availability Certificate of Birth"
    ],
    "Still birth Registration": [
      "Still birth registration with in 21 days",
      "Still birth Registration Hospital with in 21 days",
      "Still birth registration after 1 year with RDO proceedings",
      "Still Birth-Correction of Entries"
    ],
    "Non - Availability CertificateDeath": [
      "Non - Availability Certificate Death"
    ],
    "Birth Past Data Entry": [
      "Birth Past Data Entry"
    ],
    "Death Past Data Entry": [
      "Death Past Data Entry"
    ],
    "Marriage Past Data Entry": [
      "Marriage Past Data Entry"
    ],
    "Birth Bad Record Correction": [
      "Birth Bad Record Correction"
    ],
    "Death Bad Record Correction": [
      "Death Bad Record Correction"
    ],
    "Marriage Bad Record Correction": [
      "Marriage Bad Record Correction"
    ],
    "Vital Statics": [
      "Hospital Kiosk"
    ],
    "Official Birth Correction": [
      "Suomoto Correction Birth",
      "Birth Registration Cancellation"
    ],
    "Official Death Correction": [
      "Suomoto Correction Death",
      "Death Registration Cancellation"
    ],
    "Official Common Marriage Correction": [
      "Suomoto Correction Marriage",
      "Marriage Registration Cancellation"
    ],
    "Official Hindu Marriage Correction": [
      "Suomoto Correction Hindu Marriage",
      "Hindu Marriage Registration Cancellation"
    ],
    "Correction Hindu Marriage": [
      "Hindu marriage correction - Date/Place/Name/DOB"
    ],
    "Hindu Marriage PDE": [
      "Hindu marriage PDE"
    ],
    "Bad Record Correction Hindu Marriage": [
      "Hindu marriage Bad Record Correction"
    ],
    "Non - Availability Certificate Birth Born outside India": [
      "Non - Availability Certificate Birth Born outside India"
    ],
    "Hindu Marriage": [
      "Hindu Marriage - Digitization of bad data"
    ],
    "Anand Marriage": [
      "Anand Marriage-Report within 30 Days",
      "Anand Marriage - Correction of entries"
    ]
  },
  "Business Facilitation": {
    "Livestock Permit": [
      "Application for licence of Pigs/Dogs",
      "License for Animal Keeping & Livestock Farms",
      "License for Pet Animal Breeding & Selling Shops",
      "License for Keeping Pet Animals in Home",
      "Pet Animals License - Cancellation"
    ],
    "Slaughter house": [
      "Private slaughering - Complaint",
      "Public slaughter house/tanneries - Grievance",
      "Butcher's, Fishmonger's and Poulterer's License",
      "Slaughter Related Service",
      "Private slaughering",
      "Public slaughter house/tanneries"
    ],
    "Industry, Factory, Workshop Establishment/Machinery Installation Permit": [
      "Application for Industry Establishment Permit",
      "Trade & Industry-Certificate"
    ],
    "Hospitals and Paramedicals": [
      "New Registration of private hospitals",
      "Registration renewal of private hospitals",
      "Registration of private hospitals Cancellation",
      "Hospital and paramedical institution - Complaint"
    ],
    "Registrations of Institutions": [
      "New Registration of tutorial institutions"
    ],
    "IFTE & OS License": [
      "Application for New IFTE & OS License",
      "IFTE & OS License Renewal",
      "IFTE & OS License - Suspension",
      "Sanitation Certificate",
      "Transfer of License",
      "Temporary License",
      "Application for Enterprises Registration"
    ],
    "Animals": [
      "Cruelty to animals - Complaint"
    ],
    "Enforcement": [
      "Fest and fairs - Complaint"
    ],
    "Parking spaces": [
      "Unauthorised Parking - Complaint"
    ],
    "Pet animals": [
      "Pet animals - Complaint",
      "Application for Pet License",
      "Application for Cancellation of Pet License"
    ],
    "Street vendors": [
      "Street vendors - Complaint"
    ],
    "Management of Markets": [
      "New License for Private market",
      "Renewal of Private market license"
    ]
  },
  "Public Grievance and complaints": {
    "Complaints": [
      "Drinking water - Complaint",
      "Street - Complaint",
      "Trees on private land - Complaint",
      "Trees on public property - Complaint",
      "Complaints before various commissions",
      "Dangerous structures - Complaint",
      "Dangerous tanks,wells and holes - Complaint",
      "Precautions against fire - Complaint",
      "Nuisance from certain cultivations - Complaint",
      "Insanitary private tank or well - Complaint",
      "Public well/tanks - Complaint",
      "Washing of animals in public water courses - Complaint",
      "Cloth washing at unauthorised places - Complaint",
      "Untenanted buildings or lands - Complaint",
      "Overcrowding in dwelling house - Complaint",
      "Rain water - Complaint",
      "Parking places controlled by localbody - Complaint",
      "Nuisance due to sound - Complaint",
      "Smoke and air pollution - Complaint"
    ],
    "Grievances": [
      "Water supply - Grievance",
      "Wandering Animals - Grievance",
      "Insanitary public tank or well - Grievance",
      "Filth or noxious vegetation on public land - Grievance",
      "Grievance regarding beneficiary lists",
      "Soil erosion issues - Grievance",
      "Natural calamities - Grievance",
      "Wild animal issues - Grievance"
    ],
    "Conducting of Adalath": [
      "Conducting of Adalats and allied activities",
      "Reports (Adalath)"
    ]
  }
};
