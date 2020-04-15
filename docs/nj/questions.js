var language_defaults = {
  en: {
    yes_text: "Yes",
    no_text: "No",
    skip: "Skip",
    not_sure: "Not Sure",
    examples: "Examples",
    enter: "Enter"
  },
  es: {
    yes_text: "Sí",
    no_text: "No",
    skip: "Pasar",
    not_sure: "Pasar",
    examples: "Ejemplos",
    enter: "Ingresar su respuesta"
  }
};

var questions = {
  "q0_accept_disclaimer": {
    html: "<strong>NJEDA Disclaimer for Organization Support Eligibility Wizard</strong> \
    <p> \
      As a courtesy, the NJEDA is offering this screening tool (the “Eligibility Wizard”) \
      that lists emergency assistance programs that you may decide to consider based \
      upon information you provide about your organization. \
    </p>",
    hard_pass: false, // if saying no to agreement
    yes_text: "Agree",
    no_text: "Cancel",
    es: {
      html: "Ejemplo en español",
      yes_text: "Acordar",
      no_text: "Cancelar"
    }
  },

  "Basic Information": {
    header: true,
    es: "Información básica"
  },
  "q1_is_non_profit_reg_in_nj": {
    hard_pass: false, // if saying no to NJ
    html: "<p> \
      Is your business/non-profit registered to do business in New Jersey? \
    </p>"
  },
  "q110_is_non_profit": {
    html: "<p> \
      Is your organization for-profit or not-for-profit? \
    </p>",
    yes_text: "For-profit",
    no_text: "Not-for-profit",
    yes_hides: ["non-profit"],
    es: {
      yes_text: "Con fines de lucro",
      no_text: "Sin ánimo de lucro"
    }
  },
  "q11_has_501_designation": {
    classes: "non-profit",
    html: "<p> \
      Does your not-for-profit have one of the following designations: 501(c)(3), 501(c)(4), 501(c)(7)? \
    </p>",
    yes_hides: ["for-profit"]
  },
  "q0_relationship_with_njeda": {
    html: "<p> \
      Does your organization already have a financial relationship with NJEDA, like a loan or incentive agreement? \
    </p>"
  },
  "q7_in_operation_more_than_year": {
    html: "<p> \
      Has your business operated for at least a year? \
    </p>"
  },

  "Physical Location": {
    header: true,
    es: "Ubicación fisica"
  },
  "q2_physical_location_in_nj": {
    html: "<p> \
      Does your organization have a physical commercial location in the State of New Jersey (e.g., a \
      non-homebased office, \
      a physical-retail store, a production facility, a \
      warehouse, etc.)? \
    </p>",
    yes_hides: ["not_in_nj"],
    no_hides: ["physical_nj"]
  },
  "q3_is_home_based": {
    html: "<p> \
      Is your organization based inside a home? \
    </p>",
    yes_hides: ["detail_qs"]
  },

  "Industry": {
    header: true,
    es: "Industria"
  },
  "q12_is_specific_industry": {
    html: "<p> \
      Is your organization classified in one of the following industries? \
    </p> \
    <ul> \
      <li>Retail</li> \
      <li>Accommodation & food services</li> \
      <li>Arts, entertainment & recreation </li> \
      <li>Other services, such as repair and maintenance of vehicles, machinery, equipment, or products </li> \
      <li>Other services, such as personal services (barbers, cleaners, nail salons, etc.) or laundry</li> \
    </ul> \
    <p>If you are unsure about if you fall into one of the “Other services” categories, please confirm you are \
      in an industry with an industry code that starts with 811 or 812 on this list: \
        <a href=\"https://www.naics.com/six-digit-naics/?code=81\" target=\"_blank\"> \
        https://www.naics.com/six-digit-naics/?code=81</a> \
    </p>",
    no_text: "None of the above",
    es: {
      no_text: "Ninguna de las anteriores"
    }
  },
  "q13_is_specific_industry": {
    classes: "for-profit",
    html: "<p> \
      Is your organization classified in one of the following industries? \
      <ul> \
        <li>Technology</li> \
        <li>Life sciences</li> \
        <li>Clean energy</li> \
        <li>Offshore wind</li> \
        <li>Advanced transportation and logistics (does not include traditional logistics such as trucking, \
          wholesale, or warehousing)</li> \
        <li>Advanced manufacturing</li> \
        <li>Finance and professional services</li> \
        <li>Non-retail food and beverage (does not include restaurants, grocery stores, catering companies \
          or \
          other prepared or unprepared retail food outlets)</li> \
        <li>Film and digital media</li> \
      </ul> \
    </p>",
    no_text: "None of the above",
    no_hides: ["entrepreneur"],
    es: {
      no_text: "Ninguna de las anteriores"
    }
  },

  "Business Size": {
    header: true,
    es: "Tamaño del negocio"
  },

  "q8_number_of_fte": {
    html: "<p> \
      Next, we'll ask you how many W-2 full-time equivalent (FTE) employees your organization has. Here's how to calculate that number: \
    </p> \
    <ul> \
      <li>Each full-time W-2 employee is 1 FTE. Only include yourself in this number if you are a W-2 employee of the company.</li> \
      <li>For each part-time W-2 employee, estimate the number of hours they work per week. Then, divide that number by 35 and add it to the total.</li> \
      <li>You should leave out 1099 employees.</li> \
    </ul> \
    <p>If you have part-time employees, this number might be a decimal like 10.5 or 4.32.</p>",
    input: {
      name: "fte",
      label: "How many W-2 FTE employees does your organization have?"
    },
    skippable: true,
    es: {
      input: {
        label: "El numero total"
      }
    }
  },
  "q4_more_than_50pct_empl_in_nj": {
    classes: "physical_nj entrepreneur",
    html: "<p> \
      Are at least half of the employees on your organization's NJ WR-30 located in New Jersey? \
    </p>"
  },
  "q5_primary_location_in_nj": {
    classes: "physical_nj entrepreneur",
    html: "<p> \
      Is your organization based in New Jersey? \
    </p>",
    helptext: "At least one C-suite member should have a main office in the state."
  },

  "Revenue": {
    header: true,
    es: "Ingresos"
  },
  "q9_annual_revenue_2019": {
    html: "<p> \
      Estimate your organization's annual revenue in 2019. \
    </p>",
    input: {
      name: "2019_revenue",
      // label: "Total number of FTEs",
      examples: "$50000; 3,000,000"
    },
    skippable: true
  },
  "q10_annual_revenue_12mo_trailing": {
    classes: "entrepreneur",
    html: "<p> \
      Estimate your organization's revenue from March 9, 2019 to March 9, 2020. \
    </p>",
    input: {
      name: "12mo_revenue",
      examples: "$50000; 3,000,000"
    },
    skippable: true
  },

  "Loans and Guarantees": {
    header: true,
    es: "Préstamos y garantías"
  },
  "q16_has_tax_returns": {
    classes: "detail_qs physical_nj",
    html: "<p> \
      Do you have financial statements prepared by CPAs or management, or filed copies of business tax returns? \
    </p>"
  },
  "q18_has_acceptable_fico": {
    html: "<p> \
      Does your organization or one of its owners have a FICO score of at least 600? \
    </p>",
    skippable: "Not Sure",
    es: {
      skippable: "Pasar"
    }
  },
  "q19_personal_guaruntee": {
    classes: "for-profit",
    html: "<p> \
      Would everyone with more than a 10% ownership stake in your business be willing to provide personal guarantees for any loans? \
    </p>"
  },

  "Other": {
    header: true,
    es: "Otras"
  },
  "q17_in_good_standing_with_nj_taxes": {
    html: "<p> \
      Can you certify that you are in good standing with the New Jersey Department of Taxation? \
    </p>",
    skippable: "Not Sure",
    helptext: "You may be required to provide a \
      <a href='https://www.state.nj.us/treasury/taxation/busasst.shtml'>Tax Clearance Certificate</a> \
       for certain emergency assistance programs.",
    es: {
      skippable: "Pasar"
    }
  },
  "q23_in_good_standing_with_nj_dept_labor": {
    html: "<p> \
      Are you in good standing with the New Jersey Department of Labor? \
    </p>",
    skippable: "Not Sure",
    helptext: "To be in good standing, you should have no unpaid unemployment holdings, unpaid fees, or outstanding employee wage and hour violations.",
    es: {
      skippable: "Pasar"
    }
  },

  "q20_will_not_layoff": {
    classes: "detail_qs physical_nj",
    html: "<p> \
      To receive support, your organization: \
      <ul> \
        <li>Will make its best effort not to furlough or lay off anyone from the time you apply for the loan through the end of the COVID-19 outbreak period.</li> \
        <li>Will make its best effort to re-hire any workers it has already furloughed or laid off as soon as possible.</li> \
        </ul>"
  },
  "q22_has_material_need": {
    classes: "detail_qs physical_nj",
    html: "<p> \
      To receive support, your organization must have no other way to overcome this impact other than these emergency relief funds. In other words, you must lack the cash reserves to support your operations. \
      </p> \
      <p>Can you, your CEO, or their equal certify this is correct?</p>"
  },
  "q21_has_covid_impact": {
    classes: "detail_qs physical_nj",
    html: "<p>To receive support, the COVID-19 outbreak must negatively impact your organization. A negative impact might look like a:</p> \
      <ul> \
        <li>Temporary shut-down</li> \
        <li>Need to reduce hours</li> \
        <li>Drop in revenue over 20%</li> \
        <li>Material impact from employees who can't work</li> \
        <li>Disrupted supply chain that slowed down production</li> \
      </ul> \
      <p>Can you, your CEO, or their equal certify this is correct?</p>"
  },

  "q14_is_prohibited_type": {
    hard_pass: true, // if saying yes to illegal business
    html: "<p> \
      Please confirm your organization is not: \
      <span class=\"badge badge-success\">NJ State Programs</span> \
    </p> \
    <ul> \
      <li>Related to gambling or gaming activities.</li> \
      <li>Related to the sale of pornographic or obscene activities, services, products or materials. (This includes nude or semi-nude performances, or sexual aids or devices.)</li> \
      <li>An auction, bankruptcy, fire sale, “lost-our-lease” sale, “going-out-of-business”  sale, or anything similar.</li> \
      <li>A traveling merchant.</li> \
      <li>Selling Christmas trees or any other type of outdoor storage.</li> \
      <li>Any other activity constituting a nuisance.</li> \
      <li>Illegal under New Jersey law.</li> \
    </ul>"
  },
  "q15_is_prohibited_type_2": {
    // hard_pass: true, // if saying yes to illegal business
    html: "<p> \
      Please confirm your organization is not: \
      <span class=\"badge badge-success\">Federal SBA Programs</span> \
    </p> \
    <ul> \
      <li>Related to gambling or gaming activities.</li> \
      <li>Involved in any farming or agricultural industry. (This includes producing food and fiber, or ranching and raising livestock or fish.)</li> \
      <li>A religious organization.</li> \
      <li>A charitable organization.</li> \
      <li>A hobby.</li> \
      <li>A government-owned concern.</li> \
      <li>A real estate developer that divides property into lots and develops it for resale on its own account.</li> \
    </ul>"
  }
};




if (typeof module !== "undefined") {
  module.exports = {
    language_defaults: language_defaults,
    questions: questions
  };
}
